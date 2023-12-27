import { useDispatch } from "react-redux"
import { useCartsSelector, fetchCarts } from '../store/carts/CartsSlice'
export const Carts = () => {
    const dispatch = useDispatch();
    const carts = useCartsSelector();
    const onFetch = () => {
        dispatch(fetchCarts())
    }
    return(
        <>
        <div>
            {carts.map((cart) => {
                return <p key={cart.id}> {cart.title} </p>
            })}
            <button onClick={onFetch}>fetch</button>
        </div>
        </>
    )
}