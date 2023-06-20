import {combineReducers} from "redux";
import {carReducer} from "./slices/carSlices";
import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/userSlices";
import {authReducer} from "./slices/authSlices";

const rootReducer = combineReducers({
    cars: carReducer,
    users: userReducer,
    auth: authReducer
})

const setUpStore = () => configureStore({
    reducer: rootReducer
})

export {
    setUpStore
}