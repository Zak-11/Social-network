import React from "react";
import {WrappedFieldProps} from "redux-form";
import styles from  "./FormsControls.module.css";




export const FormControl: React.FC<WrappedFieldProps> = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl{...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
















