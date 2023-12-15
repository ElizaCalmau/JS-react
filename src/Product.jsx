import { useParams, Link } from "react-router-dom";
import './Product.css'

export const Product = ({products}) => {
    const { id } = useParams();
    console.log({id})
    const foundProd = products.find((prod) => prod.id == parseInt(id));
    return(
        <div className="found-product">
            <img src={foundProd.images[0]} alt={foundProd.title}/>
            <div>
                <p>{foundProd.title}</p>
                <p>{foundProd.price}</p>
                <p>{foundProd.description}</p>
            </div> 
            <Link to='/'>Go to Home</Link>
        </div>
    )

}