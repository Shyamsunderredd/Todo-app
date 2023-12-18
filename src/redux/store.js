import { configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "./reducer";
import { notificationReducer } from "./notificationreducer";

export const Store=configureStore({
    reducer:{
        TodoReducer,
        notificationReducer,
    }
})