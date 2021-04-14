import React from 'react';
import classes from './ProfileInfo.module.css'


export function ProfileInfo () {
    return (
        <div>
            <div>
                <img
                    src='https://n1s1.elle.ru/97/ab/15/97ab159770fd2cc604ce0e7ff633e6f3/620x413_1_3ffa98bae3baacb796b067a07de10320@1880x1253_0xac120002_9403568041538321893.jpeg '/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>


    );

}


