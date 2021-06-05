import {PostType} from "../Components/Profile/MyPosts/MyPosts";


export let initialState = {
    newPostText: "",
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'It,s my first post', likesCount: 26},
    ],
}
export type addPostActionType = {
    type: 'ADD-POST',
}

export type updateNewPostTextActionType = {

    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

export type ProfileReducerActionsType =
    addPostActionType | updateNewPostTextActionType


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

        default:
            return state
    }

}
export const addPost = (): addPostActionType => {
    return {
        type: 'ADD-POST',

    } as const
}
export const updateNewPostText = (newText: string): updateNewPostTextActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
