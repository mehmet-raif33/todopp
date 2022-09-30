import { createSlice } from "@reduxjs/toolkit";

export const todoapp = createSlice({
    name: 'todoapp',
    initialState: [
        {
            id: 1,
            data:'Play Football',
            do: false
        },
        {
            id: 2,
            data:'Go To The Gym',
            do: true
        },
        {
            id: 3,
            data:'Do Your Homework',
            do: false
        },
    ],
    reducers: {
        reload: (state,action) => {
            let data = state.find(findVeri => findVeri.id === action.payload);
            data.do = false
        },
        close: (state,action) => {
            let data = state.find(findVeri => findVeri.id === action.payload);
            data.do = true;
        },
        add: (state,action) => {
            let object = {
                id: (state[state.length - 1].id) + 1,
                data: action.payload,
                do: false
            }
            state.push(object);
        }
    }
})

export const { reload , close , add } = todoapp.actions;
export default todoapp.reducer;