

export const authAPI = {
    me() { // проверка на залогиненность
        return instance.post<AuthUserData>(`auth/me`)
    },
    login(loginData: LoginDataType) {
        return instance.post<AuthUserData>(`auth/login`, loginData)
    },
    logout() {
        return instance.delete<ResponseType>(`auth/me`)
    }}

let response = await fetch ('https://tager.dev.ozitag.com//api/auth/user HTTP/1.1', {
    method: 'POST',
  headers:{ 'Content-Type': 'application/json'
  },
    body: FormData
})
let result = await response.json()

export async function AuthApi () {
    let response = await fetch ('https://tager.dev.ozitag.com//api/auth/user HTTP/1.1', {
        method: 'POST',
        headers:{ 'Content-Type': 'application/json'
        },
        body: FormData
    })
    let result = await response.json()
}

export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}