import {userAPI} from "../api/Api";
import {Dispatch} from "redux";




export const followSuccess = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowSuccess = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USER', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setUsersTotalCount = (totalUsersCount: number) => ({
    type: 'SET-USERS-TOTAL-COUNT',
    totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleFollowingInProgress = (isFollowingInProgress: boolean, userId: number) => ({
    type: 'TOGGLE-FOLLOWING-PROGRESS',
    isFollowingInProgress, userId
} as const)

export  type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    /* location: {
         city: string
         country: string
     }
 */    photos: {
        small: string
        large: string
    }
}

export type initialUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[] | []
}

let initialState: initialUsersType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
export type UsersReducerActionsType =
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setUsersTotalCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleFollowingInProgress>



export const usersReducer = (state: initialUsersType = initialState, action: UsersReducerActionsType): initialUsersType => {
    switch (action.type) {

        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case "SET-USER": {
            return {...state, users: [...action.users]}
        }

        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}

        case 'SET-USERS-TOTAL-COUNT':
            return {...state, totalUserCount: action.totalUsersCount}

        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}

        case 'TOGGLE-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFollowingInProgress ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)

            }

        default:
            return {...state}
    }
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount))
        });
    }
}
export const follow = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, id))
        userAPI.follow(id).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(toggleFollowingInProgress(false, id))
                dispatch(followSuccess(id))
            }
        });
    }
}
export const unfollow = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, id))
        userAPI.unFollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(id))
                    dispatch(toggleFollowingInProgress(false, id))
                }
            })
    }
}









/*

export type UserType = {
    photos: string;
    id: number
    followed: boolean
    fullName: string
    status: string
    location: UserLocation
}

export type UserLocation = {
    city: string,
    country: string
}
export type InitialStateUsersType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

}
const initialState: InitialStateUsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],

}


export type followActionType = {
    type: 'FOLLOW',
    userID: number

}

export type unfollowActionType = {
    type: 'UNFOLLOW',
    userID: number
}
export type setActionType = {
    type: 'SET_USERS',
    users: Array<UserType>

}

export type setCurrentType = {
    type: 'SET_CURRENT',
    currentPage: number

}

export type setTotalCountType = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalUsersCount: number
}


export type onPageChangedType = {
    type: 'ON_PAGE_CHANGED',
    p: number

}

export type isFetchingType = {
    type: 'TOGGLE_IS_FETCHING',
    isFetching: boolean
}

export type followingInProgressType = {
    type: 'TOGGLE_IS_PROGRESS'
    isFetching: boolean,
    userID: number,


}
export type UsersReducerActionsType =
    followActionType
    | unfollowActionType
    | setActionType
    | setCurrentType
    | setTotalCountType
    | onPageChangedType
    | isFetchingType
    | followingInProgressType


export const usersReducer = (state: InitialStateUsersType = initialState, action: UsersReducerActionsType): InitialStateUsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            }
        case "SET_USERS": {

            return {...state, users: action.users}
        }
        case 'SET_CURRENT': {

            return {...state, currentPage: action.currentPage}
        }

        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        case 'ON_PAGE_CHANGED' : {

            return {...state, currentPage: action.p}
        }

        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}

        }
        case "TOGGLE_IS_PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        }
        default:
            return state
    }

}
export const followSuccess = (userID: number): followActionType => {
    return {
        type: 'FOLLOW',
        userID: userID
    } as const
}
export const unfollowSuccess = (userID: number): unfollowActionType => {
    return {
        type: 'UNFOLLOW',
        userID: userID
    } as const
}
export const setUsers = (users: Array<UserType>): setActionType => ({type: 'SET_USERS', users: users} as const)
export const setCurrentPage = (currentPage: number): setCurrentType => {
    return {
        type: 'SET_CURRENT',
        currentPage: currentPage
    }

}
export const setTotalUsersCount = (totalUsersCount: number): setTotalCountType => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalUsersCount: totalUsersCount
    }
}
export const onPageChange = (p: number): onPageChangedType => {
    return {
        type: 'ON_PAGE_CHANGED',
        p: p
    }
}
export const isFetchingAC = (isFetching: boolean): isFetchingType => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching: isFetching
    }

}

export const followingInProgressAC = (isFetching: boolean, userID: number): followingInProgressType => {
    return {
        type: 'TOGGLE_IS_PROGRESS',
        isFetching: isFetching,
        userID: userID
    }
}


export const getUsers = (page: number, pageSize: number) => {

    return (dispatch: Dispatch) => {

         dispatch(isFetchingAC(true))
         dispatch(setCurrentPage(page))
        userAPI.getUsers(page, pageSize).then(data => {
            dispatch(isFetchingAC(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        });
    }
}

export const follow = (userId: number) => {

    return (dispatch: Dispatch) => {
        dispatch(followingInProgressAC(true, userId))
        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                    dispatch(followingInProgressAC(false, userId))
                }

            })
    }
}

export const unfollow = (userId: number) => {

    return (dispatch: Dispatch) => {
        dispatch(followingInProgressAC(true, userId))
        userAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId));
                    dispatch(followingInProgressAC(false, userId))
                }

            })
    }
}
*/
