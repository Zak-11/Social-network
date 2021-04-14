import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {NavLink} from "react-router-dom";


type MyPostsItemProps = {
    messages: string
    likesCount: number
    id: number
}
const MyPostsItem = (props:  MyPostsItemProps) => {
    return<div className={classes.posts}>
   <Post message={props.messages} likesCount={props.likesCount} ></Post>
    </div>
}

export function MyPosts() {
    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount:2},
        {id: 2, message: 'It,s my first post',  likesCount:26 },


    ]

    return (
        <div className={classes.postsBlock}>
         <h3>My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={postData[0].message} likesCount={postData [0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData [1].likesCount}/>

            </div>

        </div>
    );

}


