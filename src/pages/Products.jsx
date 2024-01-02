import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchProducts, useProductsSelector} from '../store/products/ProductsSlice'

export const Products = () => {
    const dispatch = useDispatch();
    const productsState = useProductsSelector();
    useEffect(()=>{
        dispatch(fetchProducts())
    }, [dispatch])
    return(<div>
        <ul>
            {productsState.products.length > 0 && productsState.products.map((prod) => {
                return <li key={prod.id}>{prod.title}</li>
            })}
        </ul>
    </div>)
}