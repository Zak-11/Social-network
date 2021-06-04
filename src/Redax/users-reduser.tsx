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
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number


}
const initialState: InitialStateUsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,


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
export type UsersReducerActionsType =
    followActionType | unfollowActionType | setActionType | setCurrentType | setTotalCountType | onPageChangedType


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
            debugger
            return {...state, currentPage: action.p}
        }
        default:
            return state
    }

}
export const followAC = (userID: number): followActionType => {
    return {
        type: 'FOLLOW',
        userID: userID
    } as const
}
export const unfollowAC = (userID: number): unfollowActionType => {
    return {
        type: 'UNFOLLOW',
        userID: userID
    } as const
}
export const setUsersAC = (users: Array<UserType>): setActionType => {
    return {
        type: 'SET_USERS',
        users: users
    } as const

}
export const setCurrentPageAC = (currentPage: number): setCurrentType => {
    return {
        type: 'SET_CURRENT',
        currentPage: currentPage
    }

}
export const setTotalUsersCountAC = (totalUsersCount: number): setTotalCountType => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalUsersCount: totalUsersCount
    }
}
export const onPageChangedAC = (p: number): onPageChangedType => {
    return {
        type: 'ON_PAGE_CHANGED',
        p: p
    }
}
