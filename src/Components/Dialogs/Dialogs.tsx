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
    let dialogsData = [
        {id: 1, name: "Diana"},
        {id: 2, name: "Kristina"},
        {id: 3, name: "Mikal"},
        {id: 4, name: "Ilia"},

    ]

    let messageData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is your it?"},
        {id: 3, message: "Yo."},
        {id: 4, message: "Yo."},

    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={ dialogsData[0].name } id={dialogsData[0].id}/>
                <DialogItem name="Kristina" id={2}/>
                <DialogItem name="Mikal" id={3}/>
                <DialogItem name="Ilia" id={4}/>
            </div>

            <div className={classes.messages}>
                <MessageItem message={messageData[0].message}/>
                <MessageItem message="How is your it?"/>
                <MessageItem message="Yo."/>
                <MessageItem message="Yo."/>
            </div>

        </div>


    )

}

