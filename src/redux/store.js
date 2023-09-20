import { configureStore } from "@reduxjs/toolkit";
import todoapp from "./slices/todoapp";
import getMyData from "./slices/getMyData";

export const mainStore = configureStore({
    reducer: {
        todoappStore : todoapp,
        getMyDataForApi : getMyData
    }
})