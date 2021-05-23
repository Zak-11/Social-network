import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "../Dialogitem.tsx/Dialogitem";
import {Messages} from "../Messages/Messages";
import {ActionsTypes, DialogType,MessageType,} from "../../Redax/state";
import {sendMessageAC, updateNewMessageBodyAC} from "../../Redax/dialogs-reduser";



export type DialogTypeProps = {
    newMessageBody: string;
    dialogs: DialogType[]
    messages: MessageType[]
    dispatch: (action: ActionsTypes) => void

}


export function Dialogs(props: DialogTypeProps) {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Messages key = {m.id} messages={m.message}/>)



    let onSndMessageClick = () => {
        props.dispatch(sendMessageAC (props.newMessageBody))
    }



    let onNewMessageChange = ((e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    })



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={props.newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'> </textarea></div>
                    <div><button   onClick={onSndMessageClick}>SEND</button></div>

                </div>
            </div>

        </div>


    )

}

