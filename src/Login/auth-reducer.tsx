import React, {Dispatch} from "react";
import { ThunkAction } from "redux-thunk";
import {authAPI, LoginDataType} from "../api/api";
import { AppRootStateType } from "../api/store";

const initialState = {
    isLoggedIn: false,
    email: "",
    name: "",
    accessToken: null as null | string
}

export type InitialAuthStateType = typeof initialState


export const authReducer = (state: InitialAuthStateType = initialState, action: ActionsType): InitialAuthStateType => {

    switch (action.type) {
        case "AUTH/GET-USER-INFO": {
            return {
                ...state,
                ...action.payload

            }
        }
        case "AUTH/SET-AUTH-TOKEN": {
            return {
                ...state,
                accessToken: action.token

            }
        }
        case "AUTH/LOG-OUT ":{
            return{
                ...state, isLoggedIn: action.isLoggedIn,
            }
        }
        default:
            return state
    }
}

export const setAuthTokeAC = (token: string) => ({
    type: 'AUTH/SET-AUTH-TOKEN',
    token
} as const)

export const getUserInfoAC = (email: string, name: string, isLoggedIn: boolean) => ({
    type: 'AUTH/GET-USER-INFO',
    payload: {email, name, isLoggedIn}
} as const)

export const logoutAC = ( isLoggedIn: boolean)=>({
    type: 'AUTH/LOG-OUT ', isLoggedIn
}as const)

export type ActionsType = ReturnType<typeof logoutAC>
    | ReturnType<typeof getUserInfoAC>
    | ReturnType<typeof setAuthTokeAC>
type ThunkCustomDispatch = Dispatch<ActionsType>


export const loginTC = (loginData: LoginDataType) => (dispatch: ThunkCustomDispatch) => {
    authAPI.login(loginData)
        .then((res) => {

            dispatch(setAuthTokeAC(res.data.data.accessToken))
            authAPI.getUserInfo(res.data.data.accessToken)
                .then(response => {
                    dispatch(getUserInfoAC(response.data.data.email, response.data.data.name, true))
                })
        })
        .catch(error => {
            debugger
        })
}
export const logoutTC = (): ThunkAction<void, AppRootStateType, unknown, ActionsType> => (dispatch: ThunkCustomDispatch, getState ) => {
    let token = getState().auth.accessToken;
    // let data = {
    //     email: getState().auth.email,
    //     clientId: '1',
    //     password: getState().auth.password
    // }
    if(token){
        authAPI.logout(token)
            .then((res)=>{
                debugger
                dispatch(logoutAC( false))
            }).catch(error=>{
                debugger
        })
    }
}



