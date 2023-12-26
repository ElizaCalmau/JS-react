import { useDispatch } from "react-redux"
import { useThemeSelector, chamgeTheme } from "../store/themeSlice"

export const Home = () => {
    const dispatch = useDispatch();
    const theme = useThemeSelector();
    const onClick = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        dispatch(chamgeTheme(newTheme))
    }
    return <div>
        <p>{theme}</p>
        <button onClick={onClick}>Change theme</button>
    </div>
}