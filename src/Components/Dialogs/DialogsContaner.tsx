import React from 'react';
import { sendMessageAC, updateNewMessageBodyAC} from "../../Redax/dialogs-reduser";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../Redax/redux-store";
import {connect} from "react-redux";
import {Dispatch} from 'redux';



let mapStateToProps = (state: AppStateType) => {

    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}


const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        sendMessage: () => {dispatch(sendMessageAC( ))},
        updateNewPostText: (body: string) => {dispatch(updateNewMessageBodyAC(body))}
    }
}
export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs)



