import React from 'react';
import classes from './Post.module.css'




export type PostTypeProps = {
    message: string
    likesCount: number
}



export function Post(props:PostTypeProps) {
    return (
        <div className={classes.item}>
            <img src='https://ireland.apollo.olxcdn.com/v1/files/w58mki99d2bo-UA/image;s=1000x700'/>
                 {props.message}
            <div>
                <span>Like</span>
                {props.likesCount}
            </div>
        </div>
    );

}


