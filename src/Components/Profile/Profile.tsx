import React from 'react';
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export type ProfilePageProps = {}

export function Profile(props: ProfilePageProps) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />

        </div>


    );

}


