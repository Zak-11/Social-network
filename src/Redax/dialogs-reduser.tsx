import {ActionsTypes} from "./store";


export let initialState = {
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


}
export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}
export type UpdateNewPostTextActionType = {

    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export type DialogsReducerActionsType =
    SendMessageActionType | UpdateNewPostTextActionType



export const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state
        case "SEND-MESSAGE":
            state.messages.push({id: 5, message: state.newMessageBody})
            state.newMessageBody = ''
            return state
        default:
            return state

    }
}

export const sendMessageAC = ():SendMessageActionType => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}
export const updateNewMessageBodyAC = (body: string):UpdateNewPostTextActionType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}


