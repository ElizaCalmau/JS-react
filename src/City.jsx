import { forwardRef } from "react";

export const City = forwardRef(function City(props, ref){
    return <input ref={ref}/>
})