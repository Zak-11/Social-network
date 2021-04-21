import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../Redax/state";




 export type ProfilePageProps= {
    posts: PostType[]

}


export function MyPosts (props:ProfilePageProps) {


    let postsElements = props.posts.map (p => <Post message={p.message} likesCount={p.likesCount}/>)


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
                {postsElements}
            </div>

        </div>
    );

}


