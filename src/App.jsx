import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { AllProducts } from "./AllProducts";
import { Product } from "./Product";
import "./App.css";




function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <AllProducts products={products} />
        </Route>
        <Route path="/:id">
          <Product products={products}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
