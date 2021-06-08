export const storage = {
    async saveToken(token: string) {
        localStorage.setItem('auth-token', token)
    },
    async clearToken() {
        localStorage.removeItem('auth-token')
    },
    async getToken() {
        return localStorage.getItem('auth-token')
    }
}