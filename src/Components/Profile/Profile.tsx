import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType} from "../../Redax/state";


export type ProfilePageProps = {
    posts: Array<PostType>,
    newPostText: string,
    dispatch: (action: ActionsTypes) => void

}

export function Profile(props: ProfilePageProps) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}

             />

        </div>


    );

}


