import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


export const themeSlice = createSlice({
    name: "theme",
    initialState: "light",
    reducers: {
        changeTheme: (state, action) => {
            return state = action.payload;
        }
    }
})

export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

export const useChangeThemeSelector = () => useSelector((state) => state.theme)