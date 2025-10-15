import { Link, useParams } from "react-router";
import { useGetFetcher } from "../../core/useGetFetcher";
import { type Product } from "../../core/types";

type ProductResult = {
  success: boolean;
  data: Product;
  message: string;
};

function SingleProduct() {
  const params = useParams();
  const { data } = useGetFetcher<ProductResult>(`product/${params.id}`);

  return (
    <>
      <Link to="/products">Retour</Link>
      {data && (
        <section>
          <h2>{data.data.name}</h2>
          <img
            src={`http://localhost:5000/${data.data.image}`}
            alt={data.data.name}
          />
          <p>Prix: {data.data.price}€</p>
          <p>Marque: {data.data.brand}</p>
          <p>Contenance: {data.data.volume}cl</p>
          <p>Stock: {data.data.stock} unités</p>
          <form onSubmit={() => {}}>
            <label htmlFor="orderQuantity">Quantité: </label>
            <input type="number" id="orderQuantity" />
            <button type="submit">Ajouter au panier</button>
          </form>
        </section>
      )}
    </>
  );
}

export default SingleProduct;
