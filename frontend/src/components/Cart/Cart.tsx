import { useGetFetcher } from "../../core/useGetFetcher";
import { useCartContext } from "../../core/cartContext";
import type { Product } from "../../core/types";
import { Link } from "react-router";

interface ListProduct {
  success: boolean;
  data: Product[];
}

function Cart() {
  const { cart, setCart } = useCartContext();
  const { data } = useGetFetcher<ListProduct>("product");

  const deleteFromCart = (product_id: number) => {
    if (cart) {
      const newProducts = cart.products.filter((product) => {
        return product.product_id !== product_id;
      });
      setCart({ products: newProducts });
    }
  };

  return (
    <section>
      <h2>Panier</h2>
      <ul>
        {cart &&
          cart.products.length > 0 &&
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
                  <button onClick={() => deleteFromCart(cartItem.product_id)}>
                    Supprimer du panier
                  </button>
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
      {cart && cart.products.length === 0 && (
        <p>Aucun produit dans le panier</p>
      )}
      {cart && cart.products.length > 0 && (
        <Link to="/payment">Passer au paiement</Link>
      )}
    </section>
  );
}

export default Cart;
