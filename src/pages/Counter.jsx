import { useDispatch, useSelector } from "react-redux"
import { incrementCounter } from "../store/words/action";

export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((store) => store.count)
    const onClick = () => {
        return dispatch(incrementCounter())
    }
    return(
        <div>
            <p>Count : {count.count}</p>
            <button onClick={onClick}>increase</button>
        </div>
    )
}