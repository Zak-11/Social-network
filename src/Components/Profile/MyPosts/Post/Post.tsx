import React from 'react';
import classes from './Post.module.css'

type PostPropsMes = {
    message: string
    likesCount: number
}


export function Post(props: PostPropsMes) {
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


