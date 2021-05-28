import React from 'react';
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType} from "../../Redax/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppStoreType} from "../../Redax/redux-store";


export type ProfilePageProps = {
    posts: Array<PostType>,
    newPostText: string,
    dispatch: (action: ActionsTypes) => void
    store: AppStoreType
}

export function Profile(props: ProfilePageProps) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store = {props.store}
                              posts={props.posts}
                              newPostText={props.newPostText}
                              dispatch={props.dispatch}
            />

        </div>


    );

}


