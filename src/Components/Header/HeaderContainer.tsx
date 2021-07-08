import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import {logout} from "../../Redax/auth-reduser";





export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    render() {

        return <Header {...this.props}/>


    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
type MapStatePropsType = {
    isAuth: boolean
    login: string | null

}
type MapDispatchPropsType = {
    logout: () => void
}


export default connect(mapStateToProps, {logout})(HeaderContainer)
