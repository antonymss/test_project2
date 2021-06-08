import React, {Dispatch} from "react";
import {ThunkAction} from "redux-thunk";
import {authAPI, LoginDataType} from "../api/api";
import {storage} from "../api/storage";
import {AppRootStateType} from "../api/store";

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
        case "AUTH/LOG-OUT ": {
            return {
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

export const logoutAC = (isLoggedIn: boolean) => ({
    type: 'AUTH/LOG-OUT ', isLoggedIn
} as const)

export type ActionsType = ReturnType<typeof logoutAC>
    | ReturnType<typeof getUserInfoAC>
    | ReturnType<typeof setAuthTokeAC>
type ThunkCustomDispatch = Dispatch<ActionsType>


export const loginTC = (loginData: LoginDataType) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await authAPI.login(loginData)
        const data = await res.json()
        await storage.saveToken(data.data.accessToken)
        dispatch(setAuthTokeAC(data.data.accessToken))
        dispatch(getProfileTC())
    } catch (error) {
        debugger
    }
}
export const getProfileTC = () => async (dispatch: ThunkCustomDispatch) => {
    try {
        const response = await authAPI.getUserInfo()
        const data = await response.json()
        dispatch(getUserInfoAC(data.data.email, data.data.name, true))
    } catch (error) {
        alert('cant get profile')
    }
}
export const logoutTC = (): ThunkAction<void, AppRootStateType, unknown, ActionsType> => async (dispatch: ThunkCustomDispatch, getState) => {
    let token = getState().auth.accessToken;

    if (token) {
        // endpoint from documentation is not available  404
        try {

            await authAPI.logout(token)
            dispatch(logoutAC(false))
        } catch (error) {
            storage.clearToken()
            dispatch(logoutAC(false))

        }
    }
}



