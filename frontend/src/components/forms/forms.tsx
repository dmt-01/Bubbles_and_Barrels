import "./forms.scss";
function Form() {
  return (
    <div className="all_forms">
      <h1>Inscription</h1>
      {/* <form onSubmit="" */}
       {/* className=""> */}
        <label>
          Name
          <input type="text" name="" 
        //   value={}
        //    onChange={} 
           required />
        </label>

        <label>
          Firstname
          <input type="text" name="" 
        //   value={} 
        //   onChange={} 
          required />
        </label>
        <label>
          Téléphone
          <input type="tel" name="telephone" 
        //   value={}
        //  onChange={} 
          required />
        </label>

        <label>
          Email
          <input type="email" name="email" 
        //   value={} 
        //   onChange={} 
          required />
        </label>

        <label>
          Pays
          <input type="text" name="Pays" 
        //   value={} 
        //   onChange={} 
          required />
        </label>

        
          <label>
            Adresse
            <input type="text" name="adresse" 
            // value={} onChange={} 
            required />
          </label>

          <label>
            Complément Adresse
            <input type="text" name="adresse" 
            // value={} onChange={} 
            required />
          </label>

          <label>
            Code postal
            <input type="text" name="adresse" 
            // value={} onChange={} 
            required />
          </label>

          <label>
            Ville
            <input type="text" name="adresse" 
            // value={} onChange={} 
            required />
          </label>

          <label>
            Mot de passe :
            <input
              type="password"
              name="adresse"
            //   value={}
            //   onChange={}
              required
            />
          </label>

          <label>
            Confirmation du mot de passe:
            <input
              type="password"
              name="adresse"
            //   value={}
            //   onChange={}
              required
            />
          </label>

      

        <button type="submit">Soumettre le formulaire</button>
      {/* </form> */}
    </div>
  );
}

export default Form;
