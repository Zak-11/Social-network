import React from "react";
import styles from './users.module.css';
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import userPhoto from "../../ass/images/Clip.png"


export class Users extends React.Component<UsersPropsType> {

   constructor(props: UsersPropsType | Readonly<UsersPropsType>) {
       super(props);

            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                });

}

  render() {

      return <div>


          {this.props.usersPage.users.map(u => <div key={u.id}>

            <span>
           <div>
        {/* <img  src = {u.photos. small != null ? u.photos.small : userPhoto} className={u.photos}/>*/}
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
              </div>)

          }

      </div>

  }

}
