import { forwardRef } from "react";

export const Block = forwardRef(function Block(props, ref){
    return <div ref={ref} style={{border:'1px solid black', width:'80vw', height: '100vh', fontSize: '50px'}}>{props.value}</div>
})