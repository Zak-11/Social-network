import {Dispatch} from "redux";
import {authAPI} from "../api/Api";
import {stopSubmit} from "redux-form";





export const SET_USER_DATE = "SOCIAL-NETWORK/AUTH-REDUCER/SET-USER-DATA"




const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}


export type setUserDataType = {
    type: 'SET_USER_DATE',
    payload: [
        id: number,
        email:string,
        login: string,
    ]
}


export type UserDataReducerActionsType = setUserDataType

export const authReducer = (state = initialState, action: UserDataReducerActionsType) => {
    switch (action.type) {
        case "SET_USER_DATE":
            return {
                ...state,
                ...action.payload,

            }
        default:
            return state
    }

}
export type SetAuthUserDataActionType = ReturnType<typeof setAuthUserData>


export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: "SET_USER_DATE",
    payload: {id, email, login, isAuth}
} as const)

export const getAuthUserData = () => (dispatch:Dispatch) => {
    authAPI.me().then(response => {
        if(response.data.resultCode === 0) {
            let{id,email,login} = response.data.data
            dispatch(setAuthUserData(id,email,login,true))
        }

    });}

export const login = (email: string, password: string, rememberMe = false) => (dispatch:Dispatch) => {


    authAPI.login(email, password, rememberMe)
        .then(response => {
        if(response.data.resultCode === 0) {
           dispatch(setAuthUserData(null, null, null, false))
        } else {
       let message = response.data.messages.length >0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}))
        }

    });}
export const logout = () => (dispatch:Dispatch) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null,false))
            }

        });}
