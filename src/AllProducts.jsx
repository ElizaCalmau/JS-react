import { Link } from 'react-router-dom'
import "./AllProducts.css";


export const AllProducts = ({ products }) => {
    return (
      <>
        <h2>Products</h2>
        <div className="cards-wrapper">
          {products &&
            products.map((prod) => {
              return (
                <div key={prod.id} className="card">
                  <img src={prod.images[0]} alt="img" />
                  <div className="prod-info">
                    <p>Name: {prod.title}</p>
                    <p>Price: ${prod.price}</p>
                    <Link to={`/${prod.id}`}>see details</Link>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
    
  };