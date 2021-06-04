import React from 'react';
import classes from './Post.module.css'




export type PostTypeProps = {
    message: string
    likesCount: number

}



export function Post(props:PostTypeProps) {
    return (
        <div className={classes.item}>
            <img src={`https://cdn.pixabay.com/photo/2017/07/10/13/49/wooden-wheel-2490210_960_720.png`} />
                 {props.message}
            <div>
                <span>Like</span>
                {props.likesCount}
            </div>
        </div>
    );

}


