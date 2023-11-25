import { useContext } from "react"
import { UserContext } from "../provider/UserProvider"
import { InputLog } from "../components/InputLog";
import {InputPass} from '../components/InputPass';
import { LogButton } from "../components/LogButton";
import './Header.css';
import { InputProvider } from "../provider/InputProvider";

export const Header = () => {
    const {log} = useContext(UserContext)
    return <div className={log}>
    <InputProvider>
    <InputLog/>
    <InputPass/>
    <LogButton/>
    </InputProvider>
    </div>
}