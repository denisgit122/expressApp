import {urlsCar} from "../configs";
import axios from "axios";

const carService = {

    getAll: () => axios.get(urlsCar.cars.cars),
    // getAllPriv: () => axios.get("/cars/car/filter"),

    getById : (id) => axios.get(urlsCar.cars.byId(id)),
    // putViews:(id, view) => axios.put(urlsCar.cars.putViews(id), view)
    createCar:(car) => axios.post(urlsCar.cars.createCar, car),
    uploadPhoto:(photo) => axios.put('/cars/6480fd9e5c55abe6031196f9/photo',photo),
    getMyCars: ()=> axios.get(urlsCar.cars.getMyCars),
    deleteCar: (id)=> axios.delete(urlsCar.cars.deleteCar(id)),
    updateCar:(id, data) => axios.put(urlsCar.cars.updateCar(id), data),

}

export {
    carService
}