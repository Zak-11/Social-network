import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Components/common/FormContols/FormConttols";
import {required} from "../../urils/validator/validator";
import {login} from "../../Redax/auth-reduser";
import {connect} from "react-redux";


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

type LoginPropsType =  MapDispatchPropsType;
const LoginReduxForm = reduxForm<FormLoginData>({form: 'login'})(LoginForm)


 const Login = (props: LoginPropsType) => {
    const onSubmit = (formData:FormLoginData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}





export default connect(null, {login})(Login);

