import React from 'react';

import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import {setUserDataAC} from "../../Redax/auth-reduser";


type HeaderPropsType = {
    setUserDataAC: (data: [id: null, email: null, login: null], email: null, login: null) => void

}


class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {


        axios
            .get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data.login
                    this.props.setUserDataAC(id, email, login)
                }


            });

    }

    render() {

        return <Header {...this.props}/>


    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer)
