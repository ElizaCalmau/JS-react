import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const todoSlice = createSlice({
    name: 'todo',
    initialState : [],
    reducers: {
        addTodo: (state, action) => {
            return [...state, action.payload]
        },
        markTodo: (state, action) => {
            const {id, completed} = action.payload
            return state.map((todo)=>{
                return todo.id === id ? {...todo, completed} : todo;
            })
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => {
                return todo.id !== action.payload;
            })
        }
    }
})

export const todoReduser = todoSlice.reducer;
export const { addTodo, markTodo, deleteTodo} = todoSlice.actions;
export const useTodoSelector = () =>  useSelector((state) => state.todo) //store.js todo: todoReduser,