import { useState, type ChangeEvent, type FormEvent } from "react";
import usePostFetch from "../../core/usePostUsers";
import "./forms.scss";
import type { UserFormData } from "../../core/types";

export default function Form() {
  const { postData, loading, error, data } = usePostFetch("http://localhost:5000/api/insertusers");

  const [formData, setFormData] = useState<UserFormData>({
    email: "",
    last_name: "",
    first_name: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: {
      street: "",
      complement: "",
      zipcode: "",
      city: "",
      country: "",
    },
  });

  // 🔄 Gestion des changements dans les champs
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (["street", "complement", "zipcode", "city", "country"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // 🚀 Soumission du formulaire
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    await postData(formData);
  };

  return (
    <div className="all_forms">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom
          <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
        </label>

        <label>
          Prénom
          <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
        </label>

        <label>
          Téléphone
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Pays
          <input type="text" name="country" value={formData.address.country} onChange={handleChange} required />
        </label>

        <label>
          Adresse
          <input type="text" name="street" value={formData.address.street} onChange={handleChange} required />
        </label>

        <label>
          Complément d’adresse
          <input type="text" name="complement" value={formData.address.complement} onChange={handleChange} />
        </label>

        <label>
          Code postal
          <input type="text" name="zipcode" value={formData.address.zipcode} onChange={handleChange} required />
        </label>

        <label>
          Ville
          <input type="text" name="city" value={formData.address.city} onChange={handleChange} required />
        </label>

        <label>
          Mot de passe
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>

        <label>
          Confirmation du mot de passe
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Envoi en cours..." : "Soumettre le formulaire"}
        </button>

        {error && <p className="error-message">❌ {error}</p>}
        {data && <p className="success-message">✅ Utilisateur créé avec succès !</p>}
      </form>
    </div>
  );
}