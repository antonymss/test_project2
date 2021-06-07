import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginDataType } from "../api/api";
import { AppRootStateType } from "../api/store";
import { InitialAuthStateType, loginTC, logoutTC } from "../Login/auth-reducer";
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

    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }

    return <div className={style.login}>
        <label>Name:</label>
        {name}
        <label>Email:</label>
        {email}
        <button onClick={onLogoutClick} >Log out</button>
    </div>
}