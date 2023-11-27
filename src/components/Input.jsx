import { useContext } from "react"
import { UserContext } from "../provider/UserProvider"

export const Input = ({type, value}) => {
    const {userState, setUserState} = useContext(UserContext);
    const handleBlur = (e) => {
        setUserState((prevUserState) => ({...prevUserState, [value]: e.target.value,}));
          console.log(userState)
    }
    return <input type={type} onBlur={handleBlur}/>
}