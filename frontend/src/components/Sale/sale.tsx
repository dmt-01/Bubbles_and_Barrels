import type { SaleProduct } from "../../core/types";
import { useEffect, useState } from "react";
import "./sale.scss";



function Sale() {
  const [sales, setSales] = useState<SaleProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/sale");
        const data = await response.json();
        setSales(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Liste des promotions</h2>
      <ul>
        {sales.map(({ product, sale, discountedPrice }) => (
          <li key={sale.sale_id}>
            <img src={product.image} alt={product.name} />
            <p>Produit : {product.name}</p>
            <p>Prix original : {product.price} €</p>
            <p>Réduction : {sale.discount}%</p>
            <p>Prix après remise : {discountedPrice} €</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sale;
