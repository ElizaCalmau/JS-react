import { forwardRef } from "react"

export const ColorPicker = forwardRef(function Input(props, ref){
    function handleChangle (e) {
        ref.current = e.target.value;
    }
    return <input type='color' ref={ref} onChange={handleChangle}/>
})