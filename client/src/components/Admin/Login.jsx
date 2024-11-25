import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../CSS/login.module.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://jdm-back-end-kvxh.onrender.com/api/v1/auth/login",
        formData
      );

      const { token } = res.data;

      localStorage.setItem("token", token);

      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login error", error.response.data);
    }
  };

  return (
    <main id={styles.loginMain}>
      <div className={styles.adminTitle}>
        <h1>Espace admin</h1>
      </div>
      <form onSubmit={onSubmit} className={styles.loginForm}>
        <h2>Connexion</h2>

        <div className={styles.formRow}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            required
          />
          <i className="fa-regular fa-envelope"></i>
        </div>
        <div className={styles.formRow}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Mot de passe"
            required
          />
          <i className="fa-solid fa-lock"></i>
        </div>
        <div className={styles.submitBtn}>
          <button type="submit">connexion</button>
        </div>
      </form>
      <div className={styles.backHome}>
        <a href="/">Retour vers l&apos;acceuil</a>
      </div>
    </main>
  );
}

export default Login;
