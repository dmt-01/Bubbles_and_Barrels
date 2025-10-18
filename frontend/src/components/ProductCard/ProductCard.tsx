import type { Product } from "../../core/types";
import { Link } from "react-router";
import "./ProductCard.scss"

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.product_id}`} className="product-card">
      <img
        src={`http://localhost:5000/image/${product.image}`}
        alt={product.name}
      />
      <div className="card-body">
        <h3>{product.name}</h3>
        <p>Prix : {product.price} €</p>
      </div>
    </Link>
  );
}

export default ProductCard;