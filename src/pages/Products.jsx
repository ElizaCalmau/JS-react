import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchProducts, useProductsSelector} from '../store/products/ProductsSlice'

export const Products = () => {
    const dispatch = useDispatch();
    const products = useProductsSelector();
    useEffect(()=>{
        dispatch(fetchProducts())
    }, [dispatch])
    return(<div>
        <ul>
            {products.map((prod) => {
                return <li key={prod.id}>{prod.title}</li>
            })}
        </ul>
    </div>)
}