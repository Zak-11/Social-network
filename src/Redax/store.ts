import {profileReducer} from "./profile-reduser";
import {sidebarReducer} from "./sidebar-reduser";
import {dialogsReducer} from "./dialogs-reduser";

export type MessageType = {
    id: number
    message: string

}

export type DialogType = {
    id: number
    name: string

}

export type PostType = {
    id: number
    message: string
    likesCount: number


}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>


}
export type DialogPageType = {
    newMessageBody: string;
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type  SidebarType = {}

export type RootStateType = {


    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType

}


export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof newMessageBodyAC>
    | ReturnType<typeof newMessageSendAC>


export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
export const newMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}

export const newMessageSendAC = (body: string) => {
    return {
        type: 'SEND-MESSAGE',
        body: body
    } as const
}

export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: "",
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 2},
                {id: 2, message: 'It,s my first post', likesCount: 26},
            ],
        },
        dialogsPage: {
            newMessageText: "",
            dialogs: [
                {id: 1, name: "Diana"},
                {id: 2, name: "Kristina"},
                {id: 3, name: "Mikal"},
                {id: 4, name: "Ilia"},

            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How is your it?"},
                {id: 3, message: "Yo."},
                {id: 4, message: "Yo."},

            ],
            newMessageBody: ""
        },
        sidebar: {

        }
    },
    _callSubscriber() {
        console.log("Hello")
    },
    subscribe(callback) {

        this._callSubscriber = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profilePage =  profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar =  sidebarReducer (this._state.sidebar, action)
        this._callSubscriber()
    }


}

