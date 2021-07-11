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
