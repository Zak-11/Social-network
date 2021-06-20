import React from "react";
import styles from './users.module.css';
import userPhoto from "../../ass/images/Clip.png"
import {NavLink} from "react-router-dom";
import {InitialStateUsersType, UserType} from "../../Redax/users-reduser";



type UsersPropsType = {
    followingInProgress: any
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setUsers: (users: Array<UserType>) => void
    usersPage: InitialStateUsersType
    onPageChange: (p: number) => void

}

export let Users = (props: UsersPropsType) => {


    let pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>

        <div>
            {pages.map(p => {

                return <span key={p} className={`${props.usersPage.currentPage === p && styles.selectedPage}`}
                             onClick={() => {
                                 props.onPageChange(p)
                             }}>{p}</span>
            })}

        </div>

        {props.usersPage.users.map(u => {
            return <div key={u.id}>

            <span>
           <div>
         <NavLink to={'/profile/' + u.id} key={u.id}>
               <img alt={'There should be a photo here'} src={`${u.photos.small != null ? u.photos.small : userPhoto}`}
                    className={styles.userPhoto}/>
         </NavLink>

           </div>
               <div>
                   {u.followed
                       ? <button disabled={props.followingInProgress
                           .some((id: number) => id === u.id)}
                                 onClick={() => {
                                     props.unfollow(u.id)
                                 }}>Unfollow</button>


                       : <button disabled={props.followingInProgress
                           .some((id: number) => id === u.id)}
                                 onClick={() => {
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

