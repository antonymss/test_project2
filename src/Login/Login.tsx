import React from "react";
import {useFormik} from "formik";
import style from "./Login.module.css"
export const Login = ()=>{


    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {
                    email: "Email is required"
                }
            }
            if (!values.password) {
                return {
                    password: "Password is required"
                }
            }
        },
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            // dispatch(loginTC(values))
        },
    })

    return <div>
        <form onSubmit={formik.handleSubmit}>

            <label>Email</label>
            <input type="email" {...formik.getFieldProps("email")}/>
            {formik.errors.email ? <div className={style.error}>{formik.errors.email}</div> : null}

            <label>Password</label>
            <input type="password" {...formik.getFieldProps("password")}/>
            {formik.errors.password ? <div className={style.error}>{formik.errors.password}</div> : null}

            <label>Remember Me<input type="checkbox" {...formik.getFieldProps("rememberMe")}
                                     checked={formik.values.rememberMe}/></label>

            <button type={'submit'} color={'primary'}>Login</button>
        </form>
    </div>
}