import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from './products/ProductsSlice'
import { usersReducer } from './users/UsersSlice'

export const store = configureStore({
    reducer: {
        prod: productsReducer,
        users: usersReducer
    }
})