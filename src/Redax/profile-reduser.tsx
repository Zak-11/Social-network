import {ActionsTypes, PostType} from "./store";

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


export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0,
            }

            let statCopy = {...state}
            statCopy.posts = [...state.posts]
            statCopy.posts.push(newPost)
            statCopy.newPostText = " "
            return statCopy
        }

        case "UPDATE-NEW-POST-TEXT": {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }

        default:
            return state
    }

}
export const addPostAC = (): addPostActionType => {
    return {
        type: 'ADD-POST',

    } as const
}
export const updateNewPostTextAC = (newText: string): updateNewPostTextActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
