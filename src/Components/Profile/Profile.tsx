import React from 'react';
import {ProfileInfo, ProfileInfoType} from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: ProfileInfoType | null
    status: string
    updateStatus: (status: string ) => void
}


export function Profile(props:ProfilePropsType ) {
    return (
        <div>
            <ProfileInfo profile={props.profile} updateStatus={props.updateStatus} status={props.status}  />
            <MyPostsContainer/>

        </div>


    );

}


