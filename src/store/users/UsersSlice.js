import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


export const fetchUsers = createAsyncThunk('fetch-users', async () => {
    const response = await fetch('https://dummyjson.com/users');
    if(response.ok){
        const data = await response.json();
        return data.users;
    }
    else {
        console.error('error')
    }
})

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
           state.users = action.payload;
        })
    }
})

export const usersReducer = usersSlice.reducer;

export const useUsersSelector = () => {
    return useSelector((state) => state.users);
  };