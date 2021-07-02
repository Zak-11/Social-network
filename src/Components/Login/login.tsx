import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Components/common/FormContols/FormConttols";
import {required} from "../../urils/validator/validator";

type FormLoginData = {
    login: string,
    password:number,
    rememberMe: boolean,
}



export const LoginForm: React.FC<InjectedFormProps<FormLoginData>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       validate={[required]}
                       name={'login'} component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       validate={[required]}
                       name={'password'} component={Input}/>
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


const LoginReduxForm = reduxForm<FormLoginData>({form: 'login'})(LoginForm)


export const Login = () => {
    const onSubmit = (formData:FormLoginData) =>{
  console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
