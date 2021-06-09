export type DialogType = {
    id: number
    name: string

}


export type MessageType = {
    id: number
    message: string

}





export let initialState = {
    dialogs: [
        {id: 1, name: "Diana"},
        {id: 2, name: "Kristina"},
        {id: 3, name: "Mikal"},
        {id: 4, name: "Ilia"},

    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is your it?"},
        {id: 3, message: "Yo."},
        {id: 4, message: "Yo."},

    ] as Array<MessageType>,
    newMessageBody: ""
}


export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}
export type UpdateNewPostTextActionType = {

    type: 'UPDATE-NEW-MESSAGE-BODY'
    newMessageBody: string
}

export type DialogsReducerActionsType =
    SendMessageActionType | UpdateNewPostTextActionType


export type InitialStateType = typeof initialState



export const dialogsReducer = (state: InitialStateType =  initialState, action: DialogsReducerActionsType) : InitialStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {
                ...state,
                newMessageBody: action.newMessageBody
            }


        case "SEND-MESSAGE":
            return {
                ...state,
                newMessageBody: " ",
                messages: [...state.messages, {id: 5, message: state.newMessageBody}]
            }


        default:
            return state

    }
}

export const sendMessage = (): SendMessageActionType => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}
export const updateNewMessageBody = (body: string): UpdateNewPostTextActionType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessageBody: body
    } as const
}



