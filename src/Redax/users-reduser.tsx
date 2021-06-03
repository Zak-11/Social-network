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

}
const initialState: InitialStateUsersType = {

    users: [],
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
export type UsersReducerActionsType =
    followActionType | unfollowActionType | setActionType


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

            return {...state, users: [...state.users, ...action.users]}
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

