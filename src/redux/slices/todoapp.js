import { createSlice } from "@reduxjs/toolkit";

export const todoapp = createSlice({
    name: 'todoapp',
    initialState: [],
    reducers: {
        add: (state,action) => {

        },
        remove: (state,action) => {

        }
    }
})

export const { add , remove } = todoapp.actions;
export default todoapp;