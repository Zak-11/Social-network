import {ActionsTypes} from "./store";


let initialState = {
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


}


export const dialogsReducer = (state = initialState,action: ActionsTypes)=> {
 switch  (action.type) {
     case "UPDATE-NEW-MESSAGE-BODY":
         state.newMessageBody = action.body
         return state
     case "SEND-MESSAGE":
         let body = state.newMessageBody;
         state.newMessageBody = ''
         state.messages.push({id: 5, message: body})
         return state
     default:
         return state

 }
}

export const sendMessageAC = (body: string) => {
    return {
        type: 'SEND-MESSAGE',
        body: body
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}


