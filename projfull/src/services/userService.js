import {urlsUser} from "../configs";
import axios from "axios";

const userService = {

     getAll: () => axios.get(urlsUser.user),

     getById : (id) => axios.get(urlsUser.byId(id)),
     getByEmail:(email) => axios.get(urlsUser.byEmail(email)),

    updateFavor: (data) => axios.put(urlsUser.updateFavor, data),
    getUserAccess: ()=> axios.get(urlsUser.getUserAccess),

    delete : (id) => axios.delete(urlsUser.byId(id)),
    update : (user, id) => axios.put(urlsUser.update(id),user),

}

export {
    userService
}