import React from "react";
import styles from './users.module.css';
import userPhoto from "../../ass/images/Clip.png"
import {NavLink} from "react-router-dom";
import {UserType} from "../../Redax/users-reduser";


type UsersType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[] | []
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}

export let Users = (props: UsersType) => {

    let pagesCount = Math.ceil(500 / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p, i) => {
                return <span key={i} className={`${props.currentPage === p && styles.selectedPage}`}
                             onClick={() => (props.onPageChanged(p))}
                >{p}</span>
            })}
            {
                props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                          <img alt={'There should be a photo here'}
                               src={`${u.photos.small != null ? u.photos.small : userPhoto}`}
                               className={styles.userPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>
                                UnFollow
                            </button>
                            :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>
                                Follow
                            </button>
                        }
                                </div>
                                </span>
                    <span>
                        <span>
                            <div>
                             {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {'u.location.country'}
                            </div>
                            <div>
                                {'u.location.city'}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}















