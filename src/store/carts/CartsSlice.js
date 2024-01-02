import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const fetchCarts = createAsyncThunk( 'fetch-books', async() => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json();
    return data.products;
})

export const booksSlice = createSlice({
    name: 'books', 
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCarts.fulfilled, (state, action) => {
            return [...state, ...action.payload]
        })
    }
})

export const booksReducer = booksSlice.reducer;
export const useCartsSelector = () => useSelector((state) => state.books)