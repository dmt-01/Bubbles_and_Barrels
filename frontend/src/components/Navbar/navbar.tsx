import { Link } from "react-router";
import "./navbar.scss";


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
        <button>
          <Link to="/register">Inscription</Link>
        </button>
      </ul>

      <Link to="/cart">
        <img className="img_navbar" src="/images/cart.png" alt="" />
      </Link>
      <Link to="/login">
        <img className="img_navbar" src="/images/user.png" alt="" />
      </Link>
    </div>
  );
}

export default Navbar;
