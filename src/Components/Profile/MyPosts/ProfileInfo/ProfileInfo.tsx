import React from 'react';
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../../Components/common/Preloader";
import {ProfileStatus} from "./ProfileStatus";


export type ProfileInfoType = {
    aboutMe: string
    contacts: {
        facebook: string
        github: string
        instagram: string
        vk: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        large: string
        small: string
    }
    userId: number
}

export type ProfileType = {
    profile:  ProfileInfoType | null
    status: string
    updateStatus: (status: string) => void
}

export function ProfileInfo(props: ProfileType) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <img src={`https://74foto.ru/wp-content/uploads/kak-krasivo-sfotografirovatsya-parnyu-na-avu_1.jpg`}/>

            <div className={classes.descriptionBlock}>
                <img src={props.profile?.photos?.large} alt={'Logo'}/>


                <ProfileStatus updateStatus={props.updateStatus}
                               status={props.status}/>

            </div>
        </div>

    );

}


