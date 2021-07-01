import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reduser";
import {sidebarReducer} from "./sidebar-reduser";
import {usersReducer} from "./users-reduser";
import {authReducer} from "./auth-reduser";
import thunk from "redux-thunk"
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,


})


let store = createStore(reducers, applyMiddleware(thunk))
export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof reducers>



export default store

// @ts-ignore
window.store = store


