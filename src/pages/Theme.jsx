import { useDispatch } from "react-redux"
import { useChangeThemeSelector } from './../store/theme/ThemeSlice'
import { changeTheme } from './../store/theme/ThemeSlice'

export const Theme = () => {
    const dispatch = useDispatch();
    const currentTheme = useChangeThemeSelector();
    const onClick = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        dispatch(changeTheme(newTheme))
    }

    return(
        <>
        <p>
            {currentTheme}
        </p>
        <button onClick={onClick}> 
            theme
        </button>
        </>
    )
}