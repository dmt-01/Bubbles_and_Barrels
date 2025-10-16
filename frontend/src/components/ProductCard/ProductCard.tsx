import type { Product } from "../../core/types";
import { Link } from "react-router";

type ProductCardProps = {
  product: Product;
};


function ProductCard({ product }: ProductCardProps) {

  return (
    <Link to={`/products/${product.product_id}`}>
      <h3>{product.name}</h3>
      <img
        src={`http://localhost:5000/image/${product.image}`}
        alt={product.name}
      />
      <p>Prix : {product.price} €</p>
    </Link>
  );
}

export default ProductCard;