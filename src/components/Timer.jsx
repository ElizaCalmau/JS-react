import { useEffect, useState } from "react";

export const Timer = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
       const timerId = setTimeout(()=>{
        setCount((prevState)=> {
            return prevState + 1;
        })
       }, 1000) 
       return(()=> {
        clearTimeout(timerId)
       })
    }, [count])
        


    return <div style={{backgroundColor: "pink", padding: 20, borderRadius: 10}}>It is {count} seconds since you have opened this page</div>
    
}