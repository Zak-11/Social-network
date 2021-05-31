import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News"
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settinds/Settings";
import {DialogsContainer} from "./Components/Dialogs/DialogsContaner";
import {Users} from "./Components/Users/Users";



type PropsType = {}

const App: React.FC<PropsType> =(props)=> {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                    <Route path={'/profile'} render={() => <Profile />}/>
                    <Route path={'/users'} render={() => <Users/>}/>


                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>


                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;

