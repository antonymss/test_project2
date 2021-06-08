import {Button, List, ListItem, ListItemText, TextField} from "@material-ui/core";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {LoginDataType} from "../api/api";
import {AppRootStateType} from "../api/store";
import {getProfileTC, InitialAuthStateType, loginTC, logoutTC} from "../Login/auth-reducer";
import style from "./Profile.module.css"

export const Profile = () => {

    const {email, name} = useSelector<AppRootStateType, InitialAuthStateType>(state => {
        return state.auth
    })
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    const dispatch = useDispatch()

    const onLogoutClick = () => {
        dispatch(logoutTC())
    }

    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }

    return <div className={style.profile}>
        <List component="nav" style={{width: '30%', margin: '0 auto'}} aria-label="mailbox folders">
            <ListItem button>
                <ListItemText primary={'Name: ' + name} style={{textAlign: 'center'}}/>
            </ListItem>
            <ListItem button divider>
                <ListItemText primary={'E-mail: ' + email} style={{textAlign: 'center'}}/>
            </ListItem>
        </List>
        <Button onClick={onLogoutClick} variant="contained" color="primary">
            Log out
        </Button>
    </div>
}

