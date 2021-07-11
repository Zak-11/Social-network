import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../Redax/redux-store";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../Redax/profile-reducer";
import {RouteComponentProps} from "react-router-dom";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router";
import {ProfileInfoType} from "./MyPosts/ProfileInfo/ProfileInfo";

type mapDispatchToPropsType = {
    getUserProfile: (userId: string | undefined) => void
    getStatus: (userId: string | undefined) => void
    updateStatus: (status: string) => void
}
type mapStateToPropsType = {
    profile: ProfileInfoType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type PathParamsType = {
    userId: string | undefined
}

type MapProfileContainerType = mapDispatchToPropsType & mapStateToPropsType

type  PropsRouterType = RouteComponentProps<PathParamsType> & MapProfileContainerType


class ProfileContainer extends React.Component<PropsRouterType> {


    componentDidMount() {

            let userId = this.props.match.params.userId
            if (!userId) {
                userId = this.props.authorizedUserId?.toString()
                if (!userId) {
                    this.props.history.push('/login')
                }
            }
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }

    render() {
        return <Profile  {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
        />
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    AuthRedirect
)(ProfileContainer);
