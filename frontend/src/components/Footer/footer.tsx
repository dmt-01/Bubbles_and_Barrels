import "./footer.scss";
function Footer() {
  return (
    <>
      <div className="all_footer">
        <div className="column_left">
          <h4 className="title_footer">NectarVert</h4>
          <p>Des boissons naturelles pour une vie plus saine et savoureuse</p>
        </div>
        <div className="column_middle">
          <h4 className="title_footer">Service Client</h4>
          <ul className="list_footer">
            <li>FAQ</li>
            <li>Livraison</li>
            <li>Retours</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="column_right">
          <h4 className="title_footer">Liens Rapides</h4>
          <ul className="list_footer">
            <li>Notre Histoire</li>
            <li>Nos Valeurs</li>
            <li>Recettes</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
