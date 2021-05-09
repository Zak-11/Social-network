import React from 'react';
import classes from './../Dialogs/Dialogs.module.css'







export type DialogPagProps = {

    messages: string


}


export function Messages(props: DialogPagProps) {

    return <div className={classes.dialog}>{props.messages}



    </div>

}


