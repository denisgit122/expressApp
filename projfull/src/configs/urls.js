import axios from "axios";
import {authService} from "../services";
import {createBrowserHistory} from "history"

const history = createBrowserHistory();

axios.interceptors.request.use((config) =>{
    if (authService.isAutnenticated()) {
        const accessToken = authService.getAccessToken();
        config.headers.Authorization = `${accessToken}`
    }
    return config
})

let isRefresh = false;
axios.interceptors.response.use((config)=>{
        return config
    },
    async (error) => {

        const refreshToken = authService.getRefreshToken();
        if (error.response?.status === 401 && refreshToken && !isRefresh){
            isRefresh = true
            try {
                await authService.refresh(refreshToken);

            } catch (e) {
                authService.DeleteTokens()
                history.replace("/login?expSession=true")
            }
            isRefresh = false;
            return axios(error.config)
        }
        return Promise.reject(error)
    }
)


const cars= "/cars";
const auth = "/auth";
const user = "/user";

const urlsCar = {
    cars: {
        cars,
        byId: (id) => `${cars}/car/${id}`,
        putViews: (id) =>`${cars}/viewsDay/${id}`,
        createCar: "/cars",
        getMyCars: "/cars/getMyCars/car",
        deleteCar: (id) =>`/cars/${id}`,
        updateCar: (id) =>`/cars/${id}`,

    }
}

const urlsUser = {
    user,
    byId: (id) => `${user}/${id}`,
    byEmail: (email) =>`${user}/byEmail/${email}`,
    updateFavor: '/user/favorite/one',
    getUserAccess: '/user/getUserAccess/one',
    update:(id)=> `${user}/${id}`
}
const urlsAuth = {
    auth: {
        register: `${auth}/register`,
        login: `${auth}/login`,
        refresh:() =>`/auth/refresh`,

    }
}
const urlsAdmin = {
    admin: {
        getAllManagers: '/manager',
        createAdmin: '/admin/manager',
        deleteAdmin:(id)=> `/manager/${id}`,

    }
}
const urlsManager = {
}
export {
    urlsAdmin,
    urlsManager,
    urlsCar,
    urlsAuth,
    history,
    urlsUser
}