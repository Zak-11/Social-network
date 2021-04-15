import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "../Dialogitem.tsx/Dialogitem";
import {MessageItem} from "../Messages/Messages";


export function Dialogs() {
    let dialogs = [
        {id: 1, name: "Diana"},
        {id: 2, name: "Kristina"},
        {id: 3, name: "Mikal"},
        {id: 4, name: "Ilia"},

    ]

    let messages = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is your it?"},
        {id: 3, message: "Yo."},
        {id: 4, message: "Yo."},

    ]
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <MessageItem message={m.message}/>)

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

