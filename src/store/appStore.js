import { configureStore } from "@reduxjs/toolkit";
import { appReducers } from "@/reducers/appReducers";
import logger from "redux-logger";

export const appStore=configureStore({
    reducer:{
        appReducers
    },
    middleware: ()=>{
        return []
    }
})