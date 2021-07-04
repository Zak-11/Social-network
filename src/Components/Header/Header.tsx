import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout:()=>void
}



export function Header(props: HeaderPropsType) {
    return (
        <header className={classes.header}>

            <img className={classes.headerImg} alt={'There should be an image of Jupiter, if you don\'t see it, ' +
            'then something with the speed of the Internet'} src={'https://encrypted-tbn0.gstatic.com/' +
            'images?q=tbn:ANd9GcSO8XRub1g4MBLzTbEbPovDZxIRE3cjc1GUK7NUnU30RYH6R2nUiaoex00Pn-x6NnyMoj4&usqp=CAU'}/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}-<button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>

    )

}
