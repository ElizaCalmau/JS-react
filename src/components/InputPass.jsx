import { useContext} from "react"
import { InputContext } from "../provider/InputProvider"

export const InputPass = () => {
    const {values, setValues} = useContext(InputContext);

    const handleBlur = (e) => {
        setValues({login: values.login, password: e.target.value });
      };

    return <input type="password" onBlur={handleBlur} />
}