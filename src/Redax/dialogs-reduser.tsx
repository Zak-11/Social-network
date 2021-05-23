import {ActionsTypes, DialogPageType} from "./store";

export const dialogsReducer = (state: DialogPageType, action: ActionsTypes)=> {
 switch  (action.type) {
     case "UPDATE-NEW-MESSAGE-BODY":
         state.newMessageBody = action.body
         return state
     case "SEND-MESSAGE":
         state.newMessageBody = ''
         let body = state.newMessageBody;
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


