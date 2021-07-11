import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Components/common/FormContols/FormConttols";
import {required} from "../../urils/validator/validator";
import {login} from "../../Redax/auth-reduser";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redax/redux-store";
import style from "./../Components/common/FormContols/FormsControls.module.css"



type FormLoginData = {
    email: string,
    password: string,
    rememberMe: boolean,
}


export const LoginForm: React.FC<InjectedFormProps<FormLoginData>> = (props) => {
    return (
        <div className={style.loginContainer}>
            <div className={style.leftCombo}/>
            <div className={style.logoLeftCombo}/>

            <div className={style.logo_carousel}>
                <div className={style.logo_carousel_inner}>

         <div className={style.item_background}>

                </div>

                </div>

            </div>


            <div className={style.login_coll}>
                <form className={style.login} onSubmit={props.handleSubmit}>
                    <h1 className={style.logintatle}>LOGIN</h1>

                    <div className={style.form}>
                        <label className={style.label} htmlFor="Email">Email</label>
                        <Field className={style.impute}
                               validate={[required]}
                               name={"email"}
                               component={Input}/>
                    </div>

                    <div className={style.form}>
                        <label className={style.label} htmlFor="Password">Password</label>
                        <Field className={style.impute} validate={[required]}
                               name={'password'}
                               component={Input}
                               type="password"/>
                    </div>
                    <div className={style.forgot_password}>
                        <Field component={Input}
                               name={'Forgot password?'}
                               type={'checkbox'}/> Forgot password?
                    </div>
                    {props.error &&
                    <div className={style.formSummaryError}>
                        Error
                    </div>
                    }
                    <div className={style.login_batten}>
                        <button className={style.login_caller}>Login</button>
                    </div>

                </form>
            </div>
        </div>
    )

}

type LoginPropsType = MapStatePropsType & MapDispatchPropsType;

const LoginReduxForm = reduxForm<FormLoginData>({form: 'login'})(LoginForm)


const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormLoginData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }


    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>

        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

type MapDispatchPropsType = {

    login: (email: string, password: string, rememberMe: boolean) => void
}

type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {login})(Login);

