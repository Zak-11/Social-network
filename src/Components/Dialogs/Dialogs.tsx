import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "../Dialogitem.tsx/Dialogitem";
import {Messages} from "../Messages/Messages";
import {DialogType, MessageType} from "../../Redax/state";






export type DialogTypeProps = {
    dialogs: DialogType[]
    messages: MessageType[]

}



export function Dialogs (props:DialogTypeProps) {

    let dialogsElements = props.dialogs.map (d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements =props.messages.map (m => <Messages messages={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>

        </div>


    )

}

