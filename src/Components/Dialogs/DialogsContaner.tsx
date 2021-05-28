import React from 'react';
import { DialogType, MessageType} from "../../Redax/store";
import {DialogsReducerActionsType, sendMessageAC, updateNewMessageBodyAC} from "../../Redax/dialogs-reduser";
import {Dialogs} from "./Dialogs";

import {AppStoreType} from "../../Redax/redux-store";


export type DialogTypeProps = {
    store: AppStoreType
    dialogs: DialogType[]
    messages: MessageType[]
    dispatch: (action: DialogsReducerActionsType) => void
    newMessageBody: string
}


export function DialogsContainer(props: DialogTypeProps) {


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }


    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))

    }


    return (
        <Dialogs sendMessage={onSendMessageClick}
                 updateNewPostText={onNewMessageChange}
                 newMessageBody={props.newMessageBody}
                 dialogs={props.dialogs}
                 messages={props.messages}
                 dispatch={props.dispatch}
        />

    )


}

