import React from 'react';
import classes from './Post.module.css'




export type PostTypeProps = {
    message: string
    likesCount: number

}



export function Post(props:PostTypeProps) {
    return (
        <div className={classes.item}>
            <img />
                 {props.message}
            <div>
                <span>Like</span>
                {props.likesCount}
            </div>
        </div>
    );

}


