import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, PostType,} from "../../../Redax/store";


export type ProfilePageProps = {
    posts: PostType[]
    newPostText: string,
    dispatch: (action: ActionsTypes) => void
    updateNewPostText: (value: string) => void;
    addPost: () => void

}


export function MyPosts(props: ProfilePageProps) {
    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


    let addPost = (() => {
        props.addPost()
    })
    const newTextChangeHandler = ((e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    })

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={newTextChangeHandler}
                          value={props.newPostText}/>
            </div>

            <div>
                <button onClick={addPost}>Add post</button>
            </div>


            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>
    );

}


