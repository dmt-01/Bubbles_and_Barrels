import { Link } from "react-router";
import type { Product } from "../../core/types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.product_id}`}>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>Prix : {product.price} €</p>
    </Link>
  );
}
