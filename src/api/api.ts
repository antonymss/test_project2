import axios from "axios";
import {storage} from "./storage";

export const authAPI = {
    async login(loginData: LoginDataType): Promise<any> {
        return fetch('https://tager.dev.ozitag.com/api/auth/user',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(loginData)
            }
        )
    },
    async getUserInfo(): Promise<any> {
        let token = await storage.getToken()
        return fetch('https://tager.dev.ozitag.com/api/tager/user/profile',
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json',
                },
            }
        )
    }, async logout(Token: string): Promise<any> {
        let token = await storage.getToken()
        return fetch('https://tager.dev.ozitag.com/api/tager/user/profile/logout',
            {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json',
                },
            }
        )
    }
}

export type LoginDataType = {
    email: string
    password: string
}