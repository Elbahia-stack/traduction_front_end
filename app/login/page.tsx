"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const loginUser = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append("username", username);
      formData.append("password", password);

      const res = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData
      });

      const data = await res.json();

      if (!res.ok) throw data;

      // Stocker token
      localStorage.setItem("token", data.access_token);

      // 🚀 Redirection après login réussi
      router.push("/traduction");

} catch (err) {
  // Safely handle unknown error shape
  if (err && typeof err === "object" && "detail" in err) {
    setMessage((err as { detail?: string }).detail || "Erreur lors du login");
  } else if (err instanceof Error) {
    setMessage(err.message);
  } else {
    setMessage("Erreur lors du login");
  }
}
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <h2>Se connecter</h2>

        {message && <p style={{ color: "red" }}>{message}</p>}

        <input
          placeholder="Nom d'utilisateur"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={loginUser}>Se connecter</button>

        <p className="create-link">
          Vous n avez pas de compte ?
          <a href="/registre"> Créer un compte</a>
        </p>

      </div>
    </div>
  );
}
