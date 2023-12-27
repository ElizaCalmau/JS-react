import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


export const fetchProducts = createAsyncThunk('fetch-products', async ()=>{
    const response= await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
})

export const fetchUsers = createAsyncThunk('fetch-users', async () => {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    console.log(data)
    return data;
})

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return [...state, ...action.payload]
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            return [...state, action.payload]
        })
    }
})

export const productsReducer = productsSlice.reducer;

export const useProductsSelector = () => useSelector((state)=> state.prod)