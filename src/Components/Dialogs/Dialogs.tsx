import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "../Dialogitem.tsx/Dialogitem";
import {Messages} from "../Messages/Messages";
import {ActionsTypes, DialogType, MessageType, newMessageBodyAC, newMessageSendAC,} from "../../Redax/state";


export type DialogTypeProps = {
    dialogs: DialogType[]
    messages: MessageType[]
    dispatch: (action: ActionsTypes) => void
    newMessageText: string
}


export function Dialogs(props: DialogTypeProps) {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Messages messages={m.message}/>)


    let onSndMessageClick = () => {
    // props.dispatch(newMessageSendAC(props.messages))
        props.dispatch(newMessageSendAC(props.newMessageText))
    }
    let onNewMessageChange = ((e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newMessageBodyAC(e.currentTarget.value))
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={props.newMessageText}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'/></div>
                    <div><button onClick={onSndMessageClick}>SEND </button></div>

                </div>
            </div>

        </div>


    )

}

