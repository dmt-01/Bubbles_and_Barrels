import { useGetFetcher } from "../../core/useGetFetcher";
import { useCartContext } from "../../core/cartContext";
import type { ProductResult } from "../../core/types";
import { useState, type FormEvent } from "react";
import { Link, useParams } from "react-router";


function SingleProduct() {
  const params = useParams();
  const [message, setMessage] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const { data } = useGetFetcher<ProductResult>(`product/${params.id}`);
  const { setCart } = useCartContext();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value));
  };

  const addToCart = (event: FormEvent) => {
    event.preventDefault();
    const id = params.id;
    if (id) {
      setMessage("Produit ajouté avec succès.");
      setCart((prev) => {
        const newCart = prev ? [...prev.products] : [];
        const existingProduct = newCart.find((product) => {
          return product.product_id === parseInt(id);
        });

        if (existingProduct) {
          existingProduct.quantity += quantity;
        } else {
          newCart.push({ product_id: parseInt(id), quantity: quantity });
        }

        return { products: newCart };
      });
    } else {
      setMessage("Erreur lors de l'ajout du produit");
    }
  };

  return (
    <>
      <Link to="/products">Retour</Link>
      {data && data.data && (
        <section>
          <h2>{data.data.name}</h2>
          <img
            src={`http://localhost:5000/image/${data.data.image}`}
            alt={data.data.name}
          />
          <p>Prix: {data.data.price}€</p>
          <p>Marque: {data.data.brand}</p>
          <p>Contenance: {data.data.volume}cl</p>
          <p>Stock: {data.data.stock} unités</p>
          <form onSubmit={addToCart}>
            <label htmlFor="orderQuantity">Quantité: </label>
            <input type="number" id="orderQuantity" onChange={handleInput} />
            <small>{message}</small>
            <button type="submit">Ajouter au panier</button>
          </form>
        </section>
      )}
    </>
  );
}

export default SingleProduct;
