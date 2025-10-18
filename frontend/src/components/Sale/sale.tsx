import type { SaleProduct } from "../../core/types";
import { useEffect, useState, useRef } from "react";
import "./sale.scss";

function Sale() {
  const [sales, setSales] = useState<SaleProduct[]>([]);
  const carouselRef = useRef<HTMLUListElement>(null);

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

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="all_sale">
      <h2>Liste des promotions</h2>

      <div className="carousel-container">
        <button className="nav-btn left" onClick={scrollLeft}>
          &#8249;
        </button>

        <ul ref={carouselRef} className="carousel-track">
          {sales.map(({ product, sale, discountedPrice }) => (
            <li key={sale.sale_id} className="sale-card">
              <img
                src={`http://localhost:5000/image/${product.image}`}
                alt={product.name}
              />
              <p>Produit : {product.name}</p>
              <p>Prix original : {product.price} €</p>
              <p>Réduction : {sale.discount}%</p>
              <p>Prix après remise : {discountedPrice} €</p>
            </li>
          ))}
        </ul>

        <button className="nav-btn right" onClick={scrollRight}>
        </button>
      </div>
    </div>
  );
}

export default Sale;
