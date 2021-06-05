import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import {
    follow,
    InitialStateUsersType, isFetching, onPageChange,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UserType
} from "../../Redax/users-reduser";
import {UsersContainer} from "./UsersARIComponent";


type MapStateType = {
    usersPage: InitialStateUsersType

}
export type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChange: (p: number) => void
    isFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapDispatchPropsType & MapStateType

const mapStateToProps = (state: AppStateType) => {
    return {

        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
/*
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
            dispatch(setTotalUsersCountAC(totalCount) )
        },

        onPageChanged: (p: number) => {
          dispatch(onPageChangedAC(p))
        },
        isFetching:(isFetching: boolean) => {
            dispatch(isFetchingAC(isFetching))
        }

    }
}

*/

/*export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)*/

export default connect(mapStateToProps, {

    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, onPageChange, isFetching
})(UsersContainer)
