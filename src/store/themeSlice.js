import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


const themeSlice = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        chamgeTheme: (state, action) => {
            return action.payload;
        }
    }
})

export const { chamgeTheme } = themeSlice.actions; 
export const themeReducer = themeSlice.reducer;

export const useThemeSelector = () => useSelector((state) => state.theme)