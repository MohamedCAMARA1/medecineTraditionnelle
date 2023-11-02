import React from "react";
import img_femme_pillules from "../../../assets/img_femme_pillules.jpeg";
import "./SectionSecond.css";

const SectionSecond = () => {
  return (
    <div className="second">
      <div className="second-left">
        <h1>Nos Services Principaux</h1>
      </div>

      <div className="second-right">
        <img
          className="img_sectionSecond"
          src={img_femme_pillules}
          alt="femme tenant des pillules"
        />
        <div className="list_of_services">
          <div className="list_of_services_left">
            <li>Désenvoûtement</li>
            <li>Protection contre les mauvais sorts</li>
            <li>Impuissance sexuelle</li>
            <li>Union rapide en amour</li>
            <li>Retour de l'être aimé</li>
          </div>

          <div className="list_of_services_right">
            <li> Crise conjugale</li>
            <li>Obésité</li>
            <li>Attraction de la clientèle</li>
            <li>Chance aux jeux</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSecond;
