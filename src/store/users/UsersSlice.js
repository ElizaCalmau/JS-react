import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


export const fetchUsers = createAsyncThunk('fetch-users', async () => {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    console.log(data)
    return data;
})

export const productsSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
            return [...state, action.payload]
        })
    }
})

export const usersReducer = productsSlice.reducer;

export const useUsersSelector = () => useSelector((state)=> state.user)