import React, { useMemo } from "react";

const Input = React.memo((props) => {//prvents re-render when parent component App.jsx re-renders due to state changes
    const defaultValue = props.defaultValue;
    const onChange = props.onChange;
    console.log('input rerender');
    const handleChange = useMemo(()=> {//useMemo prevents re-creation of function reference, this approach is relevant for cases when function is passed by props
        return (e) => {
            onChange(e.target.value);
        }   
        }, [onChange])
    
    return <input value={defaultValue} onChange={handleChange}/>
})

Input.displayName = 'Input';
export {Input};