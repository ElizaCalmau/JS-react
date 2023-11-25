import { useContext } from "react"
import { InputContext } from "../provider/InputProvider"
export const InputLog = () => {
    const {setValues} = useContext(InputContext);
    const handleBlur = (e) => {
        setValues({ login: e.target.value });
      };

    return <input type="text" onBlur={handleBlur}/> 

}