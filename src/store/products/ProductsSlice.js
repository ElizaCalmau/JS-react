import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


export const fetchProducts = createAsyncThunk('fetch-products', async ()=>{
    const response= await fetch('https://dummyjson.com/products');
    if(response.ok){
        const data = await response.json();
        return data.products;
    }
    else {
        console.error(response)
    }
})


export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        })
        
    }
})

export const productsReducer = productsSlice.reducer;

export const useProductsSelector = () => useSelector((state)=> state.prod)