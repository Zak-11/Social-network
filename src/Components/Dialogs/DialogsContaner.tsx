import React from 'react';
import {sendMessage, updateNewMessageBody} from "../../Redax/dialogs-reduser";
import { DialogsContainer} from "./Dialogs";
import {AppStateType} from "../../Redax/redux-store";
import {connect} from "react-redux";




let mapStateToProps = (state: AppStateType) => {

    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}



export default connect(mapStateToProps,{
    sendMessage:sendMessage,
    updateNewPostText:updateNewMessageBody
}) (DialogsContainer)
