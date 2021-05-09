import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, addPostAC, PostType, updateNewPostTextAC} from "../../../Redax/state";


export type ProfilePageProps = {
    posts: PostType[]
    newPostText: string,
    dispatch: (action: ActionsTypes) => void
    //updateNewPostText: (newText: string) => void
    //addPost: (postMessage: string) => void,

}


export function MyPosts(props: ProfilePageProps) {
    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText))

    }


  const newTextChangeHandler= ((e:ChangeEvent<HTMLTextAreaElement>) => {
      props.dispatch(updateNewPostTextAC(e.currentTarget.value))
  })

  return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={ newTextChangeHandler }
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>
    );

}


