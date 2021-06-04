import React from 'react';
import classes from './../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";


export type DialogTypeProps = {
    id: number
    name: string

}

export function DialogItem(props: DialogTypeProps) {

    let path = "/dialogs/" + props.id
    return <div className={classes.dialogs + ' ' + classes.active}>

        <NavLink to={path}> {props.name}</NavLink>

    </div>
}










