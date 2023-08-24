import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {adminService} from "../../services";

let initialState = {
    managerFotUpdate: null,
    managers:[],
    errorCreateMan: null,
    loading: null
};
const getAll = createAsyncThunk (
    "adminSlice/getAll",
    async (_, thunkAPI)=>{
        try {
            const {data} = await adminService.getAll();
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const createAdmin = createAsyncThunk (
    "adminSlice/createAdmin",
    async (admin, thunkAPI)=>{
        try {
            const {data} = await adminService.createAdmin(admin);
            thunkAPI.dispatch(getAll());
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const deleteAdmin = createAsyncThunk (
    "adminSlice/deleteAdmin",
    async (id, thunkAPI)=>{
        try {
            const {data} = await adminService.deleteAdmin(id);
            thunkAPI.dispatch(getAll());
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const adminSlice = createSlice({
    name: "adminSlice",
    initialState,
    reducers: {
        setManagerForUpdate:(state, action) => {
            state.managerFotUpdate = action.payload
        },
    },
    extraReducers: {
        [getAll.fulfilled]:(state, action)=>{
            state.managers = action.payload
        },
        [createAdmin.rejected]:(state, action)=>{
            state.errorCreateMan = action.payload
        },
    }
})
const {reducer: adminReducer,  actions:{setManagerForUpdate}} = adminSlice;

const adminAction = {
    getAll,
    createAdmin,
    deleteAdmin,
    setManagerForUpdate
}
export {
    adminReducer,
    adminAction
}