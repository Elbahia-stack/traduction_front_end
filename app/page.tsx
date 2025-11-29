import Link from "next/link";
import Image from "next/image";
import LanguagesSection from "./component/langueSection";
import AnimatedMap from "./component/animationPage"
import Footer from "./component/footer";
export default function HomePage() {
 
  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="site-title">Eloquent</h1>
        <ul className="nav-links">
          <li><a href="#Accueil">Accueil</a></li>
          <li><a href="#languages">langues</a></li>
          <li><a href="#Àpropos">À propos</a></li>

          <li>
            <Link href="/registre">
              <button className="btn-signup">S’inscrire</button>
            </Link>
            <Link href="/login">
              <button className="btn-signin">Se connecter</button>
            </Link>
          </li>
        </ul>
      </nav>
       <AnimatedMap/>
      {/* Description Section */}
    
       <section id="languages" className="languages-section">
       <h2>Languages Available</h2>
       <LanguagesSection/>
      </section>

      <section id="Àpropos" className="about-section">
        <h3>À propos</h3>
        <p>
Eloquent est votre assistant de traduction en ligne, conçu pour rendre la communication simple et efficace à travers le monde. 
Notre plateforme permet 
de traduire instantanément du texte dans plusieurs langues, tout en conservant le contexte et le 
sens.

Notre mission est de connecter les personnes et les cultures grâce à une traduction rapide, 
précise et intuitive. Que vous soyez étudiant, professionnel ou voyageur, Translingo facilite vos échanges linguistiques partout où
 vous allez.        </p>
      </section>
      <Footer/>
    </div>
  );
}
