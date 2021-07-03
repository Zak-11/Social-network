import {Dispatch} from "redux";
import {authAPI} from "../api/Api";

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
                isAuth: true
            }
        default:
            return state
    }

}

export const setAuthUserData = (id:string | null, email:string |null, login:string | null, isAuth: boolean) => ({type: 'SET_USER_DATE', payload: {id, email, login, isAuth}})


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
        }

    });}
export const logout = () => (dispatch:Dispatch) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null,false))
            }

        });}
