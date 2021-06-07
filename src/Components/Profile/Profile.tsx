import React from 'react';
import {ProfileInfo, ProfileType} from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



export function Profile(props:ProfileType ) {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>

        </div>


    );

}


