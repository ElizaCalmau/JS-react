import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";



export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            return [...state, action.payload]
        },
        markTodo: (state, action) => {
            const { id, completed } = action.payload;
            return state.map((item) => {
                return item.id === id ? {...item, completed} : item;
            })
        },
        deleteTodo: (state, action) => {
            const { id } = action.payload;
            return state.filter((item) => item.id !== id)
        }
    }
    
})

export const { addTodo, markTodo, deleteTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;

export const useTodoSelector = () => useSelector((state) => state.todo)