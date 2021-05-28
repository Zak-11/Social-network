import React from 'react';

import {ActionsTypes, PostType} from "../../../Redax/store";
import {addPostAC, updateNewPostTextAC} from "../../../Redax/profile-reduser";
import {MyPosts} from "./MyPosts";

import {AppStoreType} from "../../../Redax/redux-store";


export type ProfilePageProps = {
    posts: PostType[]
    newPostText: string,
    dispatch: (action: ActionsTypes) => void
    store: AppStoreType

}


export function MyPostsContainer(props: ProfilePageProps) {


    let addPost = () => {
        props.store.dispatch(addPostAC())

    }

    const newTextChangeHandler = (newText: string) => {

        props.store.dispatch(updateNewPostTextAC(newText))
    }



    return (
        <MyPosts updateNewPostText={newTextChangeHandler}
                 addPost={addPost}
                 dispatch={props.dispatch}
                 newPostText={props.newPostText}
                 posts={props.posts}
        />
    );

}


