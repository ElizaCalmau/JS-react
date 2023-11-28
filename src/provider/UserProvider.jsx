import { useState, createContext } from "react";

export const UserContext = createContext('');

export const UsetProvider = ({children}) => {
    const [userState, setUserState] = useState({});
    return <UserContext.Provider value = {{userState, setUserState}}>
        {children}
    </UserContext.Provider>
}