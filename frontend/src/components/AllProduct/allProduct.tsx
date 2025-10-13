import "./allProduct.scss"
import { useEffect, useState } from "react";
interface ProductProps{
  id:number;
  price:number;
    stock:number;
    image:string,
  name:string;
  volume:number;
  brand:string;
}
function AllProduct (){
 const [products,setProducts]=useState<ProductProps[]>([]);
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/product/allproduct");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

    return (

    <div >
      <h2>Tout les produits</h2>
      <ul>
        
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <p>Marque : {product.brand}</p>
            <p>Volume : {product.volume} ml</p>
            <p>Stock : {product.stock}</p>
            <p>Prix : {product.price} €</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllProduct;