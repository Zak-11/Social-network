import {profileAPI} from "../api/Api";
import {Dispatch} from "redux";


export type PostType = {
    id: number
    message: string
    likesCount: number


}
export type ProfilePageProps = {
    posts: PostType[]
    addPost: (newPostText: string) => void
    profile: any

}

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'It,s my first post', likesCount: 26},
    ],
    profile: null,
    status: ""

}

export type addPostActionType = {
    newPostText: string;
    type: 'ADD-POST',
}

export  type setUserProfileType = {
    type: ' SET_USER_PROFILE'
    profile: any

}
export  type setStatusType = {
    type: ' SET_STATUS'
    status: string

}


export type ProfileReducerActionsType =
    addPostActionType  | setUserProfileType | setStatusType


export const profileReducer = (state = initialState, action: ProfileReducerActionsType) => {
    switch (action.type) {

        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }


            case " SET_STATUS":
            return {
                ...state,
                status: action.status
            }

        case " SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }


        default:
            return state
    }

}
export const addPost = (newPostText: string) => ({type:"ADD-POST", newPostText}) as const
export const setUsersProfile = (profile: any): setUserProfileType => {
    return {
        type: ' SET_USER_PROFILE',
        profile: profile
    } as const
}
export const setStatusAC = (status: string): setStatusType => {
    return {
        type: ' SET_STATUS',
        status: status
    } as const
}



export const getUserProfile = (userId: string | undefined) => {
    return (dispatch: Dispatch) => {
        if (!userId) {
            userId = '2'
        }
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data))
            });
    }
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    if (!userId) {
        userId = '2'
    }
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response=> {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}








/*
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data))
    })
}



export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
        dispatch(setStatusAC(response.data))
    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
        if (response.data.resultCode === 0){
            dispatch(setStatusAC(status))
        }

    })
}
*/



