import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "../Dialogitem/Dialogitem";
import {Messages} from "../Messages/Messages";
import {DialogType, MessageType} from "../../Redax/dialogs-reduser";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../Components/common/FormContols/FormConttols";
import {maxLengthCreator, required} from "../../urils/validator/validator";


export type DialogsContainerPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string;
    updateNewMessageBody: (body: string) => void;
    sendMessage: (newMessageBody: string) => void

}
type MessageFormData = {
    newMessageBody: string,
}


export function DialogsContainer(props: DialogsContainerPropsType) {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Messages key={m.id} messages={m.message}/>)


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
            < MessageReduxForm onSubmit={addNewMessage}/>
        </div>


    )

}

type AddMessageFormType = {
    newMessageBody: string
}
const maxLengthNumber= maxLengthCreator(200)


const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <Field
            placeholder="Enter your message"
            name={"newMessageBody"}
            component={Textarea}
            validate={[required,maxLengthNumber]}
        />
        <div>
            <button>Send</button>
        </div>
    </form>
}
const MessageReduxForm = reduxForm<MessageFormData>({form: 'addMessageForm'})(AddMessageForm)
