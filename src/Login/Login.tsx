import React from "react";
import {useFormik} from "formik";
import style from "./Login.module.css"
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "./auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../api/store";
import {Button, TextField} from "@material-ui/core";


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
            email: '',
            password: ''
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
                <TextField
                    type="email"
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    {...formik.getFieldProps("email")}
                />
                {formik.errors.email ? <div className={style.error}>{formik.errors.email}</div> : null}
                <TextField
                    type="password"
                    label="Password"
                    margin="normal"
                    variant="outlined"
                    {...formik.getFieldProps("password")}
                />
                {formik.errors.password ? <div className={style.error}>{formik.errors.password}</div> : null}
                <Button type={'submit'} variant="contained" color="primary">
                    Login
                </Button>
            </div>
        </form>
    </div>
}