import React from "react";
import styles from './users.module.css';
// import {UsersPropsType} from "./UsersContainer";
import userPhoto from "../../ass/images/Clip.png"
import {NavLink} from "react-router-dom";
import {InitialStateUsersType, UserType} from "../../Redax/users-reduser";
import axios from "axios";


type UsersPropsType = {
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
         <NavLink to={'/profile/'+u.id} key={u.id}>
               <img alt={'There should be a photo here'} src={`${u.photos.small != null ? u.photos.small : userPhoto}`}
                    className={styles.userPhoto}/>
         </NavLink>

           </div>
               <div>
                   {u.followed
                       ? <button onClick={() => {
                           axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                               withCredentials: true,
                                  headers: {
                                   "API-KEY": "ca7868e1-6346-4bce-8094-16176a8ce55a"
                                  }
                           } )
                               .then(response => {
                                   if(response.data.resultCode == 0) {
                                       props.follow(u.id)
                                   }
                               });

                           props.unfollow(u.id)


                       }}>Unfollow</button>
                       : <button onClick={() => {

                           axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                               withCredentials: true,
                               headers: {
                                   "API-KEY": "ca7868e1-6346-4bce-8094-16176a8ce55a"
                               }
                           } )
                               .then(response => {
                                   if(response.data.resultCode == 0) {
                                       props.follow(u.id)
                                   }
                               });


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

