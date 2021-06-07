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


