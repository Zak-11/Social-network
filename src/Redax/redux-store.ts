import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reduser";
import {dialogsReducer} from "./dialogs-reduser";
import {sidebarReducer} from "./sidebar-reduser";

let reducers = combineReducers({
    profilePage:  profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer

})



export let store = createStore(reducers)


export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof reducers>

export default store


