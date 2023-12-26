import { useDispatch } from "react-redux"
import { useTodoSelector, addTodo, deleteTodo, markTodo } from "../store/todoSlice";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";


export const Todo = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();
    const todoList = useTodoSelector();
    
    const onCreateTodo = () =>  {
        const id = uuidv4();
        dispatch(addTodo({id, value, completed: false}));
        setValue('')
    }

    const onDeleteTodo = (id) => () => {
        dispatch(deleteTodo(id))
    }

    const onMarkTodo = (id) => (e) => {
        dispatch(markTodo({id: id, completed: e.target.checked}))
    }
    return (
        <div>
            <input value={value} onChange={(e)=> {
                setValue(e.target.value)
            }}/>
            <button onClick={onCreateTodo}>Add todo</button>
            <ul>
            {todoList.map((todo) => {
                return <li key={todo.id}>
                    {todo.value}
                    <input type='checkbox' checked={todo.completed} onChange={onMarkTodo(todo)}/>
                    <button onClick={onDeleteTodo(todo.id)}>delete</button>
                </li>
            })}
            </ul>
        </div>
    )
}