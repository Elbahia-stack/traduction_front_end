"use client";

import { useState } from "react";
import "./traduction.css";
import { FaExchangeAlt } from 'react-icons/fa';




export default function Traduction() {
  const [text, setText] = useState("");
  const [sens, setSens] = useState("fr-en");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const switchLang = () => {
    setSens(prev => (prev === "fr-en" ? "en-fr" : "fr-en"));
    setResult(""); // vider le résultat quand on switch
  };

  const traduire = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Vous devez vous connecter d'abord !");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/traduire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ text, sens })
      });

      const data = await res.json();

      if (!res.ok) throw data;

      setResult(data.translated);
      setError("");
    } catch (err) {
      setError(err.detail || "Erreur lors de la traduction");
    }
  };

  const langLeft = sens === "fr-en" ? "Français" : "Anglais";
  const langRight = sens === "fr-en" ? "Anglais" : "Français";

  return (
    <div className="tr_container">
      <div className="content">
      <h2 className="tr_title">Utilisez Eloquent translate ci-dessous pour traduire votre texte</h2>

     
      <div className="tr_split">
        {/* Zone de saisie */}
        <div className="tr_area">
          <label className="tr_label">{langLeft}</label>
          <textarea
            className="tr_textarea"
            placeholder="Écrire ici..."
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>

        {/* Zone de résultat */}
        <div className="tr_area">
          <label className="tr_label">{langRight}</label>
          <textarea
            className="tr_textarea"
            value={result}
            readOnly
          />
        </div>
      </div>
      <div className="tr_buttons">
      
<button className="switch_btn" onClick={switchLang}>
  <FaExchangeAlt size={24} />
</button>
      <button className="translate_btn" onClick={traduire}>
        Traduire
      </button>
</div>
      {error && <p className="tr_error">{error}</p>}
    </div>
    </div>
  );
}
