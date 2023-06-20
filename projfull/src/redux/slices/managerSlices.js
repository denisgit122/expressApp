import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    manager: null,
    managerByEmail:[],
    error: null,
    loading: null
};


const managerSlice = createSlice({
    name: "managerSlice",
    initialState,
    reducers: {},
    extraReducers: {}
})
const {reducer: managerReducer} = managerSlice;

const managerAction = {}
export {
    managerReducer,
    managerAction
}