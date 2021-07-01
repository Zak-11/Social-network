import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "../Dialogitem/Dialogitem";
import {Messages} from "../Messages/Messages";
import {DialogType, MessageType} from "../../Redax/dialogs-reduser";
import {Field, InjectedFormProps, reduxForm} from "redux-form";



export type DialogsContainerPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string;
    updateNewMessageBody: (body: string) => void;
    sendMessage: (newMessageBody: string) => void

}
type MessageFormData = {
    newMessageBody: string,
    textarea: string,
    message: string
}


export function DialogsContainer(props: DialogsContainerPropsType) {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Messages key={m.id} messages={m.message}/>)

   /* let onSndMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = ((e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    })*/
    const addNewMessage = (values: AddMessageFormType) => {
        props.sendMessage(values.newMessageBody);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>

            </div>
            < MessageReduxForm  onSubmit={addNewMessage}/>
        </div>


    )

}

type AddMessageFormType={
    newMessageBody: string
}
const AddMessageForm: React.FC<InjectedFormProps<MessageFormData>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
}
const MessageReduxForm = reduxForm<MessageFormData>({form: 'addMessageForm'})(AddMessageForm)
