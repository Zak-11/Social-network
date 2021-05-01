import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostType} from "../../Redax/state";


export type ProfilePageProps = {
    posts: Array<PostType>,
    addPost: (postMessage: string) => void,
    newPostText: string,
    updateNewPostText: (newText: string) => void
}

export function Profile(props: ProfilePageProps) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>

        </div>


    );

}


