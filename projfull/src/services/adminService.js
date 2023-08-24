import axios from "axios";
import {urlsAdmin} from "../configs";

const adminService = {
   getAll: () => axios.get(urlsAdmin.admin.getAllManagers),
   createAdmin: (admin) => axios.post(urlsAdmin.admin.createAdmin, admin),
   deleteAdmin: (id) => axios.delete(urlsAdmin.admin.deleteAdmin(id)),

}

export {
   adminService
}