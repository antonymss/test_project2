import axios from "axios";

export const authAPI = {
    // async login(loginData: LoginDataType) {
    //     // let response = await fetch('api/auth/user',
    //      
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json;charset=utf-8',
    //                 'Accept': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 "clientId": 1,
    //                 "email": "user@ozitag.com",
    //                 "password": "user"
    //             })
    //         }
    //     )
    //         .then( (response)=> {
    //             console.log('res api',response)
    //         })
    //         .catch(error => {
    //
    //
    //         })
    // },
    async login(loginData: LoginDataType) {
        // let response = await axios.post('api/auth/user',
        return axios.post('api/auth/user',
            {
                "clientId": 1,
                "email": "user@ozitag.com",
                "password": "user"
            }
        )
    },
    async getUserInfo(token: string) {
        return axios.get('/api/tager/user/profile',
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
        )
    },
    async logout(token: string) {
        return axios.post('/api/tager/user/profile/logout',
            {},
            {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
        )
    },
    // .then(function (response) {
    //         console.log(response.data)
    //         // debugger
    //
    //
    //     })
    //         .catch(error => {
    //             // debugger
    //         })
    // },
    // async login2(loginData: LoginDataType) {
    //     let response = await fetch('https://tager.dev.ozitag.com/api/auth/user', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8',
    //             'Accept': 'application/json'
    //         },
    //         mode: 'no-cors',
    //         body: JSON.stringify({
    //                 "clientId": 1,
    //                 "email": "user@ozitag.com",
    //                 "password": "user"
    //             }
    //         )
    //     }).then(function (response) {
    //
    //         debugger
    //         if (!response.ok) {
    //             return Promise.reject('some reason');
    //         }
    //
    //         return response.json();
    //
    //     })
    // },
    // logout() {
    //     // return instance.delete<ResponseType>(`auth/me`)
    // }
}

export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}