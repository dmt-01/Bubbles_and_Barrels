import "./navbar.scss";
import { Link } from "react-router";
function Navbar() {
  return (
    <div className="all_navbar">
      <img className="logo" src="/images/logo.png" alt="" />
<ul className="list_button">
  <button>
    <Link to="/categories">Categorie</Link>
  </button>
  <button>
    <Link to="/products">Nos produits</Link>
  </button>
  <button>
    <Link to="/">Accueil</Link>
  </button>
</ul>


      <img className="img_navbar" src="/images/cart.png" alt="" />
      <img className="img_navbar" src="/images/user.png" alt="" />
    </div>
  );
}

export default Navbar;
