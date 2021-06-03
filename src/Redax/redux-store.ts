import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reduser";
import {sidebarReducer} from "./sidebar-reduser";
import {usersReducer} from "./users-reduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})


export let store = createStore(reducers)
export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof reducers>

export default store


