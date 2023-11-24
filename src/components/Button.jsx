import { useContext } from "react"
import { ThemeContext } from "../provider/ThemeProvider";
import './Button.css'

export const Button = () => {
const {theme, setTheme} = useContext(ThemeContext);
return <button className={theme} onClick={()=>{
    setTheme(theme === 'light' ? 'dark' : 'light')
}}>{theme}</button>
}