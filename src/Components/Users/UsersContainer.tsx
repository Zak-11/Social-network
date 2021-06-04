import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import {
    followAC,
    InitialStateUsersType,
    setCurrentPageAC,
    setTotalUsersCount,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../Redax/users-reduser";
import {UsersAPIComponent} from "./Users";
import {Dispatch} from "redux";


type MapStateType = {
    usersPage: InitialStateUsersType

}
export type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:(pageNumber: number) => void
    setTotalUsersCount:(totalCount: number) => void
}

export type UsersPropsType =  MapDispatchPropsType & MapStateType

const mapStateToProps = (state: AppStateType) => {
    return {

        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
        },
        setCurrentPage:(pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber) )
        },
        setTotalUsersCount:(totalCount: number) => {
            dispatch(setTotalUsersCount(totalCount) )
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
