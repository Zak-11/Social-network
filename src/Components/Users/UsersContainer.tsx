import React from "react";
import {Users} from "./Users";
import {Preloader} from "../Components/common/Preloader";
import {
    follow, followingInProgressAC, getUsers,
    InitialStateUsersType,
    setCurrentPage, unfollow,
    UserType
} from "../../Redax/users-reduser";
import {AppStateType} from "../../Redax/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";



type MapStateType = {
    usersPage: InitialStateUsersType
    isFetching: boolean
    followingInProgress: Array<number>


}

export type UsersPropsType = MapDispatchPropsType & MapStateType

export type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChange: (p: number) => void
    isFetchingAC: (isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void


}


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }


    onPageChange = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.usersPage.pageSize)
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   setCurrentPage={this.props.setCurrentPage}
                   setTotalUsersCount={this.props.setTotalUsersCount}
                   setUsers={this.props.setUsers}
                   usersPage={this.props.usersPage}
                   onPageChange={this.onPageChange}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }

}


const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, followingInProgressAC, getUsers}),
    //AuthRedirect
)(UsersContainer)


