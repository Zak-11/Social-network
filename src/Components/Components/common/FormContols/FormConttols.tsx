import React from "react";
import {WrappedFieldProps} from "redux-form";
import styles from  "./FormsControls.module.css";





export const Textarea: React.FC<WrappedFieldProps>  = (props) => {
    const {input, meta, ...restProps} = props;

    const hesError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hesError ? styles.error : "")}>
            <div>
            <textarea {...input}{...restProps}/>
        </div>
            { hesError && <span>{meta.error}</span>}
        </div>
    )
}
