import { useGetFetcher } from "../../core/useGetFetcher";
import { useCartContext } from "../../core/cartContext";
import type { Product } from "../../core/types";

interface ListProduct {
  success: boolean;
  data: Product[];
}

function Cart() {
  const { cart } = useCartContext();
  const { data } = useGetFetcher<ListProduct>("product");

  console.log(cart);

  return (
    <section>
      <h2>Panier</h2>
      <ul>
        {cart &&
          data &&
          cart.products.map((cartItem) => {
            const product = data.data.find((product) => {
              return product.product_id === cartItem.product_id;
            });
            if (product) {
              return (
                <li key={cartItem.product_id}>
                  <img
                    src={`http://localhost:5000/image/${product.image}`}
                    alt={product.name}
                  />
                  <h3>{product.name}</h3>
                  <p>Prix unitaire: {product.price}€</p>
                  <p>Quantité: {cartItem.quantity}</p>
                  <p>Prix total: {product.price * cartItem.quantity}€</p>
                </li>
              );
            } else {
              return (
                <li key={cartItem.product_id}>
                  <p>Produit inconnu</p>
                </li>
              );
            }
          })}
      </ul>
      <button>Passer au paiement</button>
    </section>
  );
}

export default Cart;