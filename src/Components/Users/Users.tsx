import React from "react";
import styles from './users.module.css';
import {UsersPropsType} from "./UsersContainer";
import userPhoto from "../../ass/images/Clip.png"


export let Users = (props: UsersPropsType) => {


    let pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>

        <div>
            {pages.map(p => {

                return <span className={`${props.usersPage.currentPage === p && styles.selectedPage}`}
                             onClick={() => {
                                 props.onPageChange(p)
                             }}>{p}</span>
            })}

        </div>

        {props.usersPage.users.map(u => {
            return <div key={u.id}>

            <span>
           <div>

               <img src={`${u.photos.small != null ? u.photos.small : userPhoto}`}
                    className={styles.userPhoto}/>


           </div>
               <div>
                   {u.followed
                       ? <button onClick={() => {
                           props.unfollow(u.id)
                       }}>Unfollow</button>
                       : <button onClick={() => {
                           props.follow(u.id)
                       }}>Follow</button>},

               </div>
           </span>
                <span>
           <span>
               <div>{u.fullName}</div>
               <div>{u.status}</div>
           </span>
                <div>{'u.location.country'}</div>
               <div>{'u.location.city'}</div>
           </span>
            </div>
        })

        }

    </div>


}

