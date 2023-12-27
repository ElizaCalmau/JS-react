import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./theme/ThemeSlice";
import { todoReducer } from "./todo/TodoSlice";
import { booksReducer } from "./carts/CartsSlice";
import { productsReducer } from './products/ProductsSlice'
import { useUsersSelector } from './users/UsersSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        todo: todoReducer,
        books: booksReducer,
        prod: productsReducer,
        user: useUsersSelector
    }
})