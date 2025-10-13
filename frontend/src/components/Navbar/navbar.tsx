import "./navbar.scss";
function Navbar() {
  return (
    <div className="all_navbar">
      <img className="logo" src="images/logo.png" alt="" />

      <ul className="list_button">
        <li>Categorie</li>
        <li>Nos produits</li>
        <li>Accueil</li>
      </ul>

      <img className="img_navbar" src="images/cart.png" alt="" />
      <img className="img_navbar" src="images/user.png" alt="" />
    </div>
  );
}

export default Navbar;
