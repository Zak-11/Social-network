import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Components/common/FormContols/FormConttols";
import {required} from "../../urils/validator/validator";
import {login} from "../../Redax/auth-reduser";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redax/redux-store";


type FormLoginData = {
    email: string,
    password:string,
    rememberMe: boolean,
}



export const LoginForm: React.FC<InjectedFormProps<FormLoginData>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email"
                       validate={[required]}
                       name={"email"}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder='Password'
                       validate={[required]}
                       name={'password'}
                       component={Input}
                       type="password"/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}

type LoginPropsType = MapStatePropsType & MapDispatchPropsType;

const LoginReduxForm = reduxForm<FormLoginData>({form: 'login'})(LoginForm)


 const Login = (props: LoginPropsType) => {
    const onSubmit = (formData:FormLoginData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }


    if (props.isAuth) {
        return  <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

type MapDispatchPropsType = {

    login: (email: string, password: string, rememberMe: boolean) => void
}

type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToProps = (state:AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {login})(Login);

