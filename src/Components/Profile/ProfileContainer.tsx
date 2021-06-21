import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../Redax/redux-store";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redax/profile-reducer";
import {withRouter} from "react-router";
import {RouteComponentProps} from "react-router-dom";
import {compose} from "redux";
import { Redirect } from 'react-router'

type PathParamsType = {
    userId: string
}


type MapStateToPropsType = {
    profile: any
    isAuth: false
}

type MapDispatchToPropsType = {
    setUsersProfile: (profile: any) => void
    getUserProfile: (userId: string) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {


    componentDidMount() {

        let userId = this.props.match.params.userId

        if (!userId) {
            userId = '2'
        }

        this.props.getUserProfile(userId)

    }

    render() {
        if (!this.props.isAuth ) return <Redirect to = "/login"/>
        return (

            <div>
                <Profile profile={this.props.profile}/>

            </div>
        );
    }
}


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


let withUrlDataContainerComponent = withRouter(ProfileContainer)


export default compose<React.ComponentType>(
    connect(
        mapStateToProps, {getUserProfile}))(withUrlDataContainerComponent)

