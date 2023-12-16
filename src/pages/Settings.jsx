import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { changeTheme } from "../../store/theme/actions";
export const Settings = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state)=> state.theme)
    const onClick = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        dispatch(changeTheme(newTheme))
    }
    return(
        <section>
            <Link to='/'>Home</Link>
            <p>current theme: {theme}</p>
            <button onClick={onClick}>change theme</button>
        </section>
    )
}