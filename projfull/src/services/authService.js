import axios from "axios";
import {urlsAuth} from "../configs";

const accessTokenKey = "access"
const refreshTokenKey = "refreshToken"


const authService = {
    login: async function (cred) {
        const response = await axios.post(urlsAuth.auth.login, cred);
        if (response.status === 200){
            this.setTokens(response.data)
        }

        return response
    },

    register: (user) => axios.post(urlsAuth.auth.register, user),

    refresh: async function(refreshToken) {
        const response = await axios.post(urlsAuth.auth.refresh, {refreshToken});
        console.log(refreshToken);
        if (response.status === 200){
            this.setTokens(response.data)
        }
        return response
    } ,

    setTokens: ({accessToken, refreshToken})=> {
        localStorage.setItem(accessTokenKey, accessToken)
        localStorage.setItem(refreshTokenKey, refreshToken)
    },

    getAccessToken:() => localStorage.getItem(accessTokenKey),
    getRefreshToken:() => localStorage.getItem(refreshTokenKey),

    DeleteTokens:() => {
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    },
    isAutnenticated: () => !!localStorage.getItem(accessTokenKey)
}
export {
    authService
}