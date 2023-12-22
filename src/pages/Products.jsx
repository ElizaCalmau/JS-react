import { useDispatch } from "react-redux"
import { useProductSelector } from "../store/products/selector"
import { fetchProducts } from './../store/products/actions'

export const Products = () => {
    const dispatch = useDispatch()
    const products = useProductSelector()
    console.log(products)
    return <button onClick={() => {
        dispatch(fetchProducts())
    }}>load prods</button>
}