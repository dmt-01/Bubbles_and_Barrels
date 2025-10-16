import { useState, type ChangeEvent, type FormEvent } from "react";
import useLogIn from "../../core/useLogIn";
import { Navigate } from "react-router";
import "./forms.scss";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { postData, loading, error, success } = useLogIn(
    "http://localhost:5000/api/login"
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await postData({ email, password });
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="all_forms">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email :
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>

        <label>
          Mot de passe :
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Connexion..." : "Se connecter"}
        </button>

        {error && <p className="error-message">❌ {error}</p>}
        {success && <p className="success-message">✅ Connexion réussie 🎉</p>}
        {success && <Navigate to="/" />}

      </form>
    </div>
  );
}

export default LoginForm;