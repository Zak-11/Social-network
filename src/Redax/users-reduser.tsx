import {ActionsTypes} from "./store";


export let initialState = {

    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Diana',
            status: 'I am a boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Kristina',
            status: 'I am a boss',
            location: {city: 'Moscow', country: 'Peru'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Mile',
            status: 'I am a boss',
            location: {city: 'Moscow', country: 'Canada'}
        },
        {id: 4, followed: true, fullName: 'Chili', status: 'I am a boss', location: {city: 'Moscow', country: 'USA'}},

    ],
}
export type followActionType = {
    type: 'FOLLOW',
    userID: number
}

export type unfollowActionType = {
    type: 'UNFOLLOW',
    userID: number
}

export type UsersReducerActionsType =
    followActionType | unfollowActionType


export const usersReducer = (state = initialState, action: ActionsTypes) => {
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
