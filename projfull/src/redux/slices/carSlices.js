import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

let initialState = {
    cars: [],
    car:[],
    CarInf:[],
    myCars: [],
    carFotUpdate: null,
    errorCreateCar:null,
    errors: null,
    loading: null
};
const getAll = createAsyncThunk (
    "carSlice/getAll",
    async (_, thunkAPI)=>{
        try {
            const {data} = await carService.getAll();
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const getById = createAsyncThunk (
    "carSlice/getById",
    async (carId, thunkAPI)=>{
        try {
            const {data} = await carService.getById(carId);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const deleteCar = createAsyncThunk (
    "carSlice/deleteCar",
    async (carId, thunkAPI)=>{
        try {
            const {data} = await carService.deleteCar(carId);
            thunkAPI.dispatch(getMyCars());
            thunkAPI.dispatch(getAll());

            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const getMyCars = createAsyncThunk (
    "carSlice/getMyCars",
    async (_, thunkAPI)=>{
        try {
            const {data} = await carService.getMyCars();
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const createCar = createAsyncThunk(
    "carSlice/createCar",
        async ({...car}, thunkAPI)=>{
        try {
            const {data} = await carService.createCar(car);

            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);

        }
        }
);
const updateCar = createAsyncThunk(
    "carSlice/updateCar",
    async ({id, car}, thunkAPI)=>{
        try {

            const {data} = await carService.updateCar(id, car);

            thunkAPI.dispatch(getAll());

            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);

        }
    }
);
const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        setCarForUpdate:(state, action) => {
            state.carFotUpdate = action.payload
        },


    },

    extraReducers: {
        [getAll.fulfilled]: (state, action)=>{
            state.cars = action.payload
        },
        [getById.fulfilled]: (state, action)=>{
            state.car = action.payload
        },
        [createCar.rejected]: (state, action)=>{
            state.errorCreateCar = action.payload
        },
        [createCar.fulfilled]: (state, action)=>{
            state.CarInf = action.payload
        },
        [getMyCars.fulfilled]:(state, action)=>{
            state.myCars = action.payload
        }
    }
})
const {reducer: carReducer, actions:{setCarForUpdate}} = carSlice;

const carAction = {
    getAll,
    getMyCars,
    getById,
    createCar,
    deleteCar,
    updateCar,
    setCarForUpdate,
}
export {
    carReducer,
    carAction
}