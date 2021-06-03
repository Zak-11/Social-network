import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import {followAC, InitialStateUsersType, setUsersAC, unfollowAC, UserType} from "../../Redax/users-reduser";
import {Users} from "./Users";
import {Dispatch} from "redux";


type MapStateType = {
    usersPage: InitialStateUsersType

}
export type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType =  MapDispatchPropsType & MapStateType

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {

        usersPage: state.usersPage

    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
