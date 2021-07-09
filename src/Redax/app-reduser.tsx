import {getAuthUserData} from "./auth-reduser";


export const INITIALIZED_SUCCESS = "SOCIAL-NETWORK/APP-REDUCER/INITIALIZED-SUCCESS"


export type AuthStateType = {
    initialized: boolean
}


let initialState = {
    initialized: false
}


export const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export type SetInitializedActionType = ReturnType<typeof initializedSuccess>

//AC
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())


        })
}
