import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "../Dialogitem/Dialogitem";
import {Messages} from "../Messages/Messages";
import {DialogType, MessageType} from "../../Redax/dialogs-reduser";

export type DialogsContainerPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string;
    updateNewMessageBody: (body: string) => void;
    sendMessage: () => void
}


export function DialogsContainer(props: DialogsContainerPropsType) {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Messages key={m.id} messages={m.message}/>)

    let onSndMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = ((e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
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
                    <div>
                        <button onClick={onSndMessageClick}>SEND</button>
                    </div>

                </div>
            </div>

        </div>


    )

}

