import { useSearchParams } from "react-router";
import "./allProduct.scss";
import { useGetFetcher } from "../../core/useGetFetcher";
import type { Product } from "../../core/types";

interface ListProduct {
  success: boolean;
  data: Product[];
}
function AllProduct() {
  const [queries] = useSearchParams();
  const { data } = useGetFetcher<ListProduct>(
    `product?is_alcoholised=${queries.get(
      "is_alcoholised"
    )}&promos=${queries.get("promos")}&categories=${queries.get("categories")}`
  );

  return (
    <div>
      <h2>Tout les produits</h2>
      <ul>
        {data &&
          data.data.map((product) => (
            <li key={product.product_id}>
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
