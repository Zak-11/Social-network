import React from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News"
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settinds/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContaner";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/login";
import {connect} from "react-redux";
import {getAuthUserData} from "./Redax/auth-reduser";
import {AppStateType} from "./Redax/redux-store";




class App extends React.Component<AppPropsType, {}> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

render() {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <HeaderContainer />
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer   />}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>

                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>


                </div>
            </div>
        </BrowserRouter>
    );

}


}

type AppPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})
type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    getAuthUserData: () => void
}


export default connect(mapStateToProps, {getAuthUserData})(App);
