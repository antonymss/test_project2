import {Button, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginDataType } from "../api/api";
import { AppRootStateType } from "../api/store";
import {getProfileTC, InitialAuthStateType, loginTC, logoutTC } from "../Login/auth-reducer";
import style from "./Profile.module.css"

export const Profile = ()=>{

    const {email,name} = useSelector<AppRootStateType, InitialAuthStateType>(state=>{
        return state.auth
    } )
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
   
    const dispatch = useDispatch()

    const onLogoutClick = () => {
        dispatch(logoutTC())
    }

    // const getProfile = () => dispatch(getProfileTC())

    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }

    return <div className={style.profile}>
        {/*<button onClick={getProfile}>refresh</button>*/}

        <TextField
            label="Name"
            defaultValue={name}
            variant="outlined"
            disabled
        />
        <TextField
            label="Email"
            defaultValue={email}
            variant="outlined"
            disabled
        />
        <Button  onClick={onLogoutClick}  variant="contained" color="primary">
            Log out
        </Button>
    </div>
}