import React from "react";
import styles from './users.module.css';
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import userPhoto from "../../ass/images/Clip.png"


export class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });

    }


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }


    render() {
        let pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize)
        // debugger
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return   <div>

            <div>
                {pages.map(p => {

                    return <span className={`${this.props.usersPage.currentPage === p && styles.selectedPage}`}
                                 onClick={() => {
                                     this.onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>

            {this.props.usersPage.users.map(u => {
                return <div key={u.id}>

            <span>
           <div>
               <img src={`${u.photos.small != null ? u.photos.small : userPhoto}`} className={styles.userPhoto}/>


           </div>
               <div>
                   {u.followed
                       ? <button onClick={() => {
                           this.props.unfollow(u.id)
                       }}>Unfollow</button>
                       : <button onClick={() => {
                           this.props.follow(u.id)
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

}
