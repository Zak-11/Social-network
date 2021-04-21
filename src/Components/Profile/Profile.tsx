import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostType} from "../../Redax/state";


export type ProfilePageProps = {
    posts: Array<PostType>


}

export function Profile(props: ProfilePageProps) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>

        </div>


    );

}


