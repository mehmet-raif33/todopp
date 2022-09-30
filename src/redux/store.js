import { configureStore } from "@reduxjs/toolkit";
import todoapp from "./slices/todoapp";

export const mainStore = configureStore({
    reducer: {
        todoappp : todoapp
    }
})