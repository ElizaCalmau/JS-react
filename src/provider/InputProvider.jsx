import { createContext, useState } from "react";

export const InputContext = createContext('');

export const InputProvider = ({children}) => {
    const [values, setValues] = useState({login: null, password: null});
    return(
        <InputContext.Provider value={{values, setValues}}>
            {children}
        </InputContext.Provider>
    )
}
