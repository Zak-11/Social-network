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

export const setUserDataAC = (data: [id: null, email: null, login: null]): setUserDataType => {
    return {
        type: 'SET_USER_DATE',
        data: data
    }

}
