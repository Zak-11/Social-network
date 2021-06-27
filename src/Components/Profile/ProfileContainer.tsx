import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../Redax/redux-store";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../Redax/profile-reducer";
import {RouteComponentProps} from "react-router-dom";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router";


type PathParamsType = {
    userId: string
}


type MapStateToPropsType = {
    profile: any
    status:string

}

type MapDispatchToPropsType = {
   // setUsersProfile: (profile: any) => void
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void

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
       this.props.getStatus(userId)

    }

    render() {

        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status}  updateStatus={this.props.updateStatus}/>

            </div>
        );
    }
}


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status

})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus }),
    withRouter,
    AuthRedirect
)(ProfileContainer)



