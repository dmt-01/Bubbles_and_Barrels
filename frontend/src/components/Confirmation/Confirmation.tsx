import { Link } from "react-router";

function Confirmation() {
  return (
    <section>
      <h2>Confirmation de paiement</h2>
      <p>Nous vous remercions de votre confiance.</p>
      <p>
        Nous avons bien reçu votre paiement. Cependant vous ne recevrez pas vos
        produits.
      </p>
      <p>Vous vous êtes fait scam.</p>
      <Link to="/">Retour à l'accueil</Link>
    </section>
  );
}

export default Confirmation;
