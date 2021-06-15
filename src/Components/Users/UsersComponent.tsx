import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import {
    follow, followingInProgressAC, getUsersThunkCreator,
    InitialStateUsersType, isFetchingAC, onPageChange,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UserType
} from "../../Redax/users-reduser";
import {UsersContainer} from "./UsersContainer";


type MapStateType = {
    usersPage: InitialStateUsersType
    isFetching: boolean
    followingInProgress:Array<number>


}
export type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChange: (p: number) => void
    isFetchingAC: (isFetching: boolean) => void
    getUsers:(currentPage: number, pageSize: number) => void


}

export type UsersPropsType = MapDispatchPropsType & MapStateType

const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

export default connect(mapStateToProps, {

    follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, onPageChange,isFetchingAC,
    followingInProgressAC,getUsers: getUsersThunkCreator
})(UsersContainer)
