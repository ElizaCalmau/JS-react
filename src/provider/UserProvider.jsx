import { createContext, useState } from "react";

export const UserContext = createContext('unlogged');

export const UserProvider = ({children}) => {
    const [log, setLog] = useState('unlogged');
    return (<UserContext.Provider value = {{log, setLog}}>
        {children}
    </UserContext.Provider>
    )
}