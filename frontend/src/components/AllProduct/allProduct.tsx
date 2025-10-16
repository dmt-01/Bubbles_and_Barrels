import  ProductCard  from "../ProductCard/ProductCard";
import { useGetFetcher } from "../../core/useGetFetcher";
import type { Product } from "../../core/types";
import { useSearchParams } from "react-router";
import "./allProduct.scss";

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
              <ProductCard product={product} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AllProduct;
