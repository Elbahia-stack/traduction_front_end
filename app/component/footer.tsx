"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Logo et Nom du site */}
        <div style={logoStyle}>
          <h2>Eloquent</h2>
          <p>Votre assistant de traduction en ligne</p>
        </div>

        {/* Liens rapides */}
        <div style={linksStyle}>
          <h3>Liens rapides</h3>
          <ul style={ulStyle}>
            <li><a href="/" style={linkStyle}>Accueil</a></li>
            <li><a href="/about" style={linkStyle}>À propos</a></li>
            <li><a href="/contact" style={linkStyle}>Contact</a></li>
           
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div style={socialStyle}>
          <h3>Suivez-nous</h3>
          <div style={iconsStyle}>
            <a href="https://facebook.com" target="_blank"><FaFacebookF size={24} /></a>
      <a href="https://twitter.com" target="_blank"><FaTwitter size={24} /></a>
      <a href="https://instagram.com" target="_blank"><FaInstagram size={24} /></a>
      <a href="https://linkedin.com" target="_blank"><FaLinkedinIn size={24} /></a>
    </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={copyStyle}>
        &copy; {new Date().getFullYear()} Eloquent. Tous droits réservés.
      </div>
    </footer>
  );
}

// Styles inline
const footerStyle = {
  backgroundColor: "#060505f6", // Bordeaux
  color: "#fff",
  padding: "2rem 1rem",
  fontFamily: "Arial, sans-serif",
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',      // OK pour React.CSSProperties
  maxWidth: '1200px',
  margin: '0 auto',
};

const logoStyle = {
  flex: "1",
  minWidth: "200px",
  marginBottom: "1rem",
};

const linksStyle = {
  flex: "1",
  minWidth: "200px",
  marginBottom: "1rem",
};

const ulStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  display: "block",
  marginBottom: "0.5rem",
};

const socialStyle = {
  flex: "1",
  minWidth: "200px",
  marginBottom: "1rem",
};

const iconsStyle = {
  display: "flex",
  gap: "0.5rem",
  marginTop: "0.5rem",
};

const iconStyle = {
  width: "24px",
  height: "24px",
};

const copyStyle = {
  textAlign: "center",
  marginTop: "1rem",
  fontSize: "0.85rem",
  borderTop: "1px solid rgba(255,255,255,0.3)",
  paddingTop: "1rem",
};
