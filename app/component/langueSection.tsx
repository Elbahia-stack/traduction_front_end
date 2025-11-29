"use client";
import React from "react";

// Liste des langues avec drapeaux CDN
const languages = [
  { name: "Français", flag: "https://flagcdn.com/w80/fr.png" },
  { name: "Anglais", flag: "https://flagcdn.com/w80/gb.png" },
  { name: "Espagnol", flag: "https://flagcdn.com/w80/es.png" },
  { name: "Allemand", flag: "https://flagcdn.com/w80/de.png" },
  { name: "Italien", flag: "https://flagcdn.com/w80/it.png" },
  { name: "Japonais", flag: "https://flagcdn.com/w80/jp.png" },
  { name: "Chinois", flag: "https://flagcdn.com/w80/cn.png" },
  { name: "Arabe", flag: "https://flagcdn.com/w80/sa.png" },
  { name: "Portugais", flag: "https://flagcdn.com/w80/pt.png" },
  { name: "Russe", flag: "https://flagcdn.com/w80/ru.png" },
  { name: "Coréen", flag: "https://flagcdn.com/w80/kr.png" },
  { name: "Turc", flag: "https://flagcdn.com/w80/tr.png" },
  { name: "Hindi", flag: "https://flagcdn.com/w80/in.png" },
  { name: "Néerlandais", flag: "https://flagcdn.com/w80/nl.png" },
  { name: "Grec", flag: "https://flagcdn.com/w80/gr.png" },
  { name: "Suédois", flag: "https://flagcdn.com/w80/se.png" },
  { name: "Norvégien", flag: "https://flagcdn.com/w80/no.png" },
  { name: "Polonais", flag: "https://flagcdn.com/w80/pl.png" },
  { name: "Finnois", flag: "https://flagcdn.com/w80/fi.png" },
  { name: "Danois", flag: "https://flagcdn.com/w80/dk.png" },
  { name: "Tchèque", flag: "https://flagcdn.com/w80/cz.png" },
];

// Regrouper par lignes (7 boules par ligne)
const rows = [];
for (let i = 0; i < languages.length; i += 7) {
  rows.push(languages.slice(i, i + 7));
}

export default function LanguagesSection() {
  return (
    <div style={{ padding: "2rem", overflow: "hidden" }}>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="language-row"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "5rem",
            marginBottom: "2rem",
            animation: `subtleMove${rowIndex} ${3 + rowIndex}s ease-in-out infinite alternate`,
          }}
        >
          {row.map((lang, index) => (
            <div
              key={index}
              className="language-item"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Drapeau comme boule */}
              <img
                src={lang.flag}
                alt={lang.name}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%", // cercle
                  objectFit: "cover",
                  marginBottom: "0.5rem",
                }}
              />
              {/* Nom sous le drapeau */}
              <span style={{ fontSize: "0.9rem", color: "#333", textAlign: "center" }}>
                {lang.name}
              </span>
            </div>
          ))}
        </div>
      ))}

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes subtleMove0 {
          0% { transform: translateX(0); }
          50% { transform: translateX(14px); }
          100% { transform: translateX(0); }
        }
        @keyframes subtleMove1 {
          0% { transform: translateX(0); }
          50% { transform: translateX(14px); }
          100% { transform: translateX(0); }
        }
        @keyframes subtleMove2 {
          0% { transform: translateX(0); }
          50% { transform: translateX(14px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
