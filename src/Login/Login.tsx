import React from "react";
import {useFormik} from "formik";
import style from "./Login.module.css"
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "./auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../api/store";


export const Login = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

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
            email: 'user@ozitag.com',
            password: 'user',
            rememberMe: false
        },

        onSubmit: values => {

            dispatch(loginTC(values));

        },
    })
    if (isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return <div>

        <form onSubmit={formik.handleSubmit}>
            <div className={style.login}>
            <label>Email</label>
            <input type="email" {...formik.getFieldProps("email")}/>
            {formik.errors.email ? <div className={style.error}>{formik.errors.email}</div> : null}

            <label>Password</label>
            <input type="password" {...formik.getFieldProps("password")}/>
            {formik.errors.password ? <div className={style.error}>{formik.errors.password}</div> : null}

            {/*<label>Remember Me<input type="checkbox" {...formik.getFieldProps("rememberMe")}*/}
            {/*                         checked={formik.values.rememberMe}/></label>*/}

            <button type={'submit'} color={'primary'}>Login</button>
            </div>
        </form>
    </div>
}