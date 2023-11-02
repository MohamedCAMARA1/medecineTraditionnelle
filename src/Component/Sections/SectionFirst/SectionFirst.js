import React from "react";
import logo from "../../../assets/img_logo.png";
import img_accueil from "../../../assets/img_accueil.jpeg";
import "./SectionFirst.css";

const SectionFirst = () => {
  const handleScrollToCards = () => {
    const cardsSection = document.getElementById("refCards");
    if (cardsSection) {
      window.scrollTo({
        top: cardsSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="welcome">
      <div className="welcome-left">
        <div className="logo">
          <img className="logoImg" src={logo} alt="logoMaitreKoba" />
          <p>
            MAÎTRE <br /> KOBA
          </p>
        </div>
        <img className="img_accueil" src={img_accueil} alt="fleur accueil" />
      </div>

      <div className="welcome-right">
        <p>Concevoir le meilleur plan de santé qui vous correspondent </p>
        <h1>Fournir des soins médicaux de premier plan</h1>

        <button className="btn" type="button" onClick={handleScrollToCards}>
          EN SAVOIR PLUS
        </button>
      </div>
    </div>
  );
};

export default SectionFirst;
