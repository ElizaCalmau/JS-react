import { useState, useMemo } from "react"
import { Button } from "./Button";
import { ListDisplay } from "./ListDisplay";

export const ListManager = () => {
    const [ list, setList ] = useState(['banana', 'apple', 'strawberry', 'onion', 'kiwi']);
    const [ newItem, setNewItem] = useState('');
    const [length, setLength] = useState(0)
    const onClick = () => {
        setList([...list, newItem]);
        setNewItem('')
    } 
    const filteredList = useMemo(()=>{
        return list.filter((el) => el.length > length)
    }, [list, length]) 

    return <div>
        <ListDisplay list={list.join(', ')}/>
        <input value={newItem} onChange={(e)=>{
            setNewItem(e.target.value)
        }}/>
        <Button onClick={onClick}/>
        <p>filtered list : {filteredList.join(',')}</p>
        <input type='number' value={length} onChange={(e) => {
            setLength(parseInt(e.target.value))
        }}/>
    </div>
    
}