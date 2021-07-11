import React from "react";
import {Users} from "./Users";
import {Preloader} from "../Components/common/Preloader";
import {
    follow, getUsers, initialUsersType,
    setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow,
    UserType
} from "../../Redax/users-reduser";
import {AppStateType} from "../../Redax/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getTotalUserCount, getUsersRes,
} from "../../Redax/users-selectors";
import {AuthRedirect} from "../../hoc/AuthRedirect";
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (user: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setUsersTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type mapStateToPropsType = initialUsersType

export type UserPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPIComponent extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>
                :
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUserCount={this.props.totalUserCount}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                />}

        </>
    }
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: getUsersRes(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        toggleIsFetching,
        getUsers
    }),
    AuthRedirect
)(UsersAPIComponent);

/*

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
        this.props.setCurrentPage(pageNumber)
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

/!*
const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
}*!/
const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }



}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {follow,
         setUsers,
        unfollow,
        setCurrentPage,
        followingInProgressAC,
         getUsers}),
    //AuthRedirect
)(UsersContainer)


*/
