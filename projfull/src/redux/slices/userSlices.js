import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../services";

let initialState = {
    users: [],
    userByEmail:[],
    user:[],
    error: null,
    loading: null
};
const getAll = createAsyncThunk (
    "userSlice/getAll",
    async (_, thunkAPI)=>{
        try {
            const {data} = await userService.getAll();
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const getById = createAsyncThunk (
    "userSlice/getById",
    async (userId, thunkAPI)=>{
        try {
            const {data} = await userService.getById(userId);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const getByEmail = createAsyncThunk (
    "userSlice/getByEmail",
    async (email, thunkAPI)=>{
        try {
            const {data} = await userService.getByEmail(email);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const updateFavor = createAsyncThunk (
    "userSlice/updateFavor",
    async ({data}, thunkAPI)=>{
        try {
            const {data} = await userService.getByEmail(data);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [getAll.fulfilled]: (state, action)=>{
            state.users = action.payload
        },
        [getById.fulfilled]: (state, action)=>{
            state.user = action.payload
        },
        [getByEmail.fulfilled]: (state, action)=>{
            state.userByEmail = action.payload
        },
        [getByEmail.rejected]: (state)=>{
            state.error = ''
        },
    }
})
const {reducer: userReducer} = userSlice;

const userAction = {
    getAll,
    getById,
    getByEmail,
}
export {
    userReducer,
    userAction
}