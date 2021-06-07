import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../Redax/redux-store";
import {connect} from "react-redux";
import {setUsersProfile} from "../../Redax/profile-reducer";


type MapStateToPropsType = {
    profile: any
}

type MapDispatchToPropsType = {
    setUsersProfile: (profile: any) => void
}
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<ProfilePropsType> {


    componentDidMount() {

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUsersProfile(response.data)

            });

    }

    render() {


        return (
            <div>
                <Profile profile={this.props.profile}/>

            </div>


        );
    }

}


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer)

