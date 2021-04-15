import React from 'react';
import classes from './../Dialogs/Dialogs.module.css'




type MessageItemProps = {
    message: string

}



export const MessageItem = (props: MessageItemProps) => {
    return <div className={classes.message}>{props.message}</div>

}


