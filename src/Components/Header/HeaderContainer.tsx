import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import {getAuthUserData} from "../../Redax/auth-reduser";




type HeaderPropsType = {
    getAuthUserData: () => void

}


class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {

       this.props.getAuthUserData()
    }

    render() {

        return <Header {...this.props}/>


    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)
