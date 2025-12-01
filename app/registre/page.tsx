"use client";

import { useState } from "react";
import "./registre.css";  // <-- importe le CSS

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Account created");
      window.location.href = "/login";
    } else {
      alert(data.detail || "Error");
    }
  };

  return (
    <div className="center-screen">
      <form onSubmit={handleRegister} className="card">
        <h1 className="title">S’inscrire </h1>

        <input
          placeholder="Nom d'utilisateur"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">S’inscrire</button>
      </form>
    </div>
  );
}
