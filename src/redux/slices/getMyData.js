import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const reduxThunk = createAsyncThunk('getMyData',async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    return data;
})

export const todoapp = createSlice({
    name: 'getMyData',
    initialState: {
        data: '',
        loading: false,
        error: ''
    },
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(reduxThunk.pending, (state, action) => {
            state.loading = true
            state.error = ''
        })
        builder.addCase(reduxThunk.fulfilled, (state, action) => {
            state.loading = false
            state.error = ''
            state.data = action.payload
        })
        builder.addCase(reduxThunk.rejected, (state, action) => {
            state.loading = false
            state.error = 'Olmadı be BÖYLE olmadı! seveni nahı yerlerde kalmdı!!'
        })
    }
})

export const { reload } = todoapp.actions;
export default todoapp.reducer;