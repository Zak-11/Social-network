import React from 'react';
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../../Components/common/Preloader";


export type ProfileType = {
    profile: any
}

export function ProfileInfo(props: ProfileType) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <img src={`https://74foto.ru/wp-content/uploads/kak-krasivo-sfotografirovatsya-parnyu-na-avu_1.jpg`}/>

            <div>
                <img src={props.profile.photos.large}/>

            </div>
            <div
                className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>


    );

}


