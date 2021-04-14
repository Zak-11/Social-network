import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemProps = {
    name: string
    id: number
}
type MessageItemProps = {
    message: string

}

const DialogItem = (props: DialogItemProps) => {
    let path = "/dialogs/" + props.id

    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const MessageItem = (props: MessageItemProps) => {
    return <div className={classes.message}>{props.message}</div>

}

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

