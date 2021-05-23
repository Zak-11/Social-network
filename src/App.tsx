import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News"
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settinds/Settings";
import {StoreType} from "./Redax/state";


type PropsType = {
    store: StoreType

}

const App: React.FC<PropsType> =(props)=> {
    const state = props.store.getState()
    let dialogs = state.dialogsPage.dialogs
    let messages = state.dialogsPage.messages
    let posts = state.profilePage.posts
    let newPostTexts = state.profilePage.newPostText
    let newMessageBody = state.dialogsPage.newMessageBody


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={dialogs} messages={messages}
                                                                    newMessageBody={ newMessageBody}
                                                                    dispatch ={props.store.dispatch.bind(props.store)} />}/>


                    <Route path={'/profile'} render={() => <Profile posts={posts}
                                                                    newPostText={newPostTexts}
                                                                    dispatch ={props.store.dispatch.bind(props.store)}/>}/>
                   <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music />}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>


                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;

