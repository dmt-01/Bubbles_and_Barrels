import type { Product } from "../../core/types";
import { useEffect, useState } from "react";
import "./Product.scss"


function ProductList (){

  const [products,setProducts]=useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/product/suggestion");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

    return (

   <div className="all_product">
      <h2>Suggestion</h2>
      <ul >
          {products.map((product) => (
            <div>
          <li key={product.product_id}>
            <h3>{product.name}</h3>
            <img src={`http://localhost:5000/image/${product.image}`} alt={product.name} />
            <p>Marque : {product.brand}</p>
            <p>Volume : {product.volume} ml</p>
            <p>Stock : {product.stock}</p>
            <p>Prix : {product.price} €</p>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;