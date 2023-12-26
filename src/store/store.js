import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice";
import { todoReduser } from "./todoSlice";

export const store = configureStore({
    reducer : {
        theme: themeReducer,
        todo: todoReduser,
    },
})