import {profileAPI, userAPI} from "../api/Api";
import {Dispatch} from "redux";


export type PostType = {
    id: number
    message: string
    likesCount: number


}
export type ProfilePageProps = {
    posts: PostType[]
    newPostText: string,
    updateNewPostText: (value: string) => void;
    addPost: () => void
    profile: any

}

const initialState = {
    newPostText: "",
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'It,s my first post', likesCount: 26},
    ],
    profile: null,
    status: ""

}

export type addPostActionType = {
    type: 'ADD-POST',
}

export type updateNewPostTextActionType = {

    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
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
    addPostActionType | updateNewPostTextActionType | setUserProfileType | setStatusType


export const profileReducer = (state = initialState, action: ProfileReducerActionsType) => {
    switch (action.type) {

        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                newPostText: " ",
                posts: [...state.posts, newPost]
            }


        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
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
export const addPost = (): addPostActionType => {
    return {
        type: 'ADD-POST',

    } as const
}
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
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data))
    })
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
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

export const updateNewPostText = (newText: string): updateNewPostTextActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}



