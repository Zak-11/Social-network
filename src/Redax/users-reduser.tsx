import {userAPI} from "../api/Api.jsx";
import {Dispatch} from "redux";


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
    followingInProgress: [] ,

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
    followActionType | unfollowActionType | setActionType | setCurrentType | setTotalCountType | onPageChangedType | isFetchingType | followingInProgressType


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
            return {...state, isFetching:action.isFetching}

        }
        case "TOGGLE_IS_PROGRESS":{
            return  {
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
export const follow = (userID: number): followActionType => {
    return {
        type: 'FOLLOW',
        userID: userID
    } as const
}
export const unfollow = (userID: number): unfollowActionType => {
    return {
        type: 'UNFOLLOW',
        userID: userID
    } as const
}
export const setUsers = (users: Array<UserType>): setActionType => {
    return {
        type: 'SET_USERS',
        users: users
    } as const

}
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
 export const isFetchingAC = (isFetching:  boolean): isFetchingType => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching:  isFetching
    }

 }

 export const  followingInProgressAC = (isFetching: boolean, userID: number) : followingInProgressType => {
    return {
        type: 'TOGGLE_IS_PROGRESS',
        isFetching: isFetching,
        userID:userID
    }
 }


export const getUsersThunkCreator = (currentPage: number,pageSize: number)  => {

    return ( dispatch:Dispatch)=> {

    dispatch(isFetchingAC(true))

        userAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch( isFetchingAC(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    });
}
}
