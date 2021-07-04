import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import {getAuthUserData, logout} from "../../Redax/auth-reduser";





export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

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
type MapStatePropsType = {
    getAuthUserData: () => void
    isAuth: boolean
    login: string | null

}
type MapDispatchPropsType = {
    logout: () => void
}


export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)
