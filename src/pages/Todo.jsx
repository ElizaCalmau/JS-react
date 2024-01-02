import { useDispatch } from "react-redux"
import { useTodoSelector } from "../store/todo/TodoSlice";
import { useState } from "react";
import { addTodo, markTodo, deleteTodo } from '../store/todo/TodoSlice' 
import { v4 as uuid } from 'uuid'

export const Todo = () => {
    const [value, setValue] = useState([])
    const dispatch = useDispatch();
    const currentTodoItems = useTodoSelector();
    const onAdd = () => {
        const id = uuid()
        dispatch(addTodo({value, id, completed: false}))
    }
    const onChecked = (id, e) => {
        console.log('Clicked on checkbox. ID:', id, 'Checked:', e.target.checked);
    dispatch(markTodo({ id, completed: e.target.checked }));
    }

    const onDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    return(
        <>
        <input value={value} onChange={(e) => {
            setValue(e.target.value)
        }}/>
        <button onClick={onAdd}>Add</button>
        <ul>
            {currentTodoItems.map((item) => {
                console.log('Item:', item);
                return <li key={item.id}>
                    <input type='checkbox' onChange={(e) => onChecked(item.id, e)} checked={item.completed}/>
                    {item.value} 
                        <button onClick={() => onDelete(item.id)}>delete</button>
                    </li>
                    
            })}
        </ul>
        </>
    )
}