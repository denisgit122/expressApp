import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {authService} from "../../services";


let initialState = {
    error: null,
    errorRegist:null,
    errors: null,
    loading: null
};

const login = createAsyncThunk (
    "authSlice/login",
    async ({...cred}, thunkAPI)=>{
        try {
            const {data} = await authService.login(cred);

            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const register = createAsyncThunk (
    "authSlice/register",
    async ({...cred}, thunkAPI)=>{
        try {
            const {data} = await authService.register(cred);

            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const authSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [login.rejected]: (state, action)=>{
            state.error = action.payload
        }, [login.fulfilled]: (state)=>{
            state.error = ''
        },
        [register.rejected]: (state, action)=>{
            state.errorRegist = action.payload
        }, [register.fulfilled]: (state)=>{
            state.errorRegist = ''
        },
    }
})
const {reducer: authReducer} = authSlice;

const authAction = {
    login,
    register
}
export {
    authReducer,
    authAction
}