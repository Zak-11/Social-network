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
    data: [
        id: null,
        email: null,
        login: null
    ]


}
export type UserDataReducerActionsType = setUserDataType

export const authReducer = (state = initialState, action: UserDataReducerActionsType) => {
    switch (action.type) {
        case "SET_USER_DATE":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }

}

export const setAuthUserData = (id:string, email:string, login:string) => ({type: 'SET_USER_DATE',data:{id: id,email,login}})


export const getAuthUserData = () => (dispatch:Dispatch) => {
    authAPI.me().then(response => {
        if(response.data.resultCode === 0) {
            let{id,email,login} = response.data.data
            dispatch(setAuthUserData(id,email,login))
        }

    });}
