import React from "react";
import "./Contacts.css";
import logo_contact from "../../assets/img_logo.png";
import {
  FaSnapchat,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="logo_contact">
        <img
          className="logo_contact_img"
          src={logo_contact}
          alt="logoMaitreKoba"
        />
        <p>
          MAÎTRE <br /> KOBA
        </p>
      </div>
      <div className="adress">
        <h2>Adresse</h2>
        <ul>
          <li>123 rue de Paris, 95490</li>
          <li>Paris</li>
          <li>Tel: 07 45 73 80 94</li>
          <li>Email: koba.guerisseur@gmail.com</li>
        </ul>
      </div>

      <div className="schedules_and_Social_media">
        <div className="schedules">
          <h2>Horaires</h2>
          <ul>
            <li>Du Lundi au Samedi</li>
            <li>De 8h à 18h</li>
            <li>Dimanche</li>
            <li>De 9h à 17h</li>
          </ul>
        </div>

        <div className="social_Media">
          <h2>Réseaux sociaux</h2>
          <div className="icones">
            <ul>
              <FaFacebook />
            </ul>
            <ul>
              <FaSnapchat />
            </ul>
            <ul>
              <FaInstagram />
            </ul>
            <ul>
              <FaWhatsapp />
            </ul>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p className="copyright">
          &copy; 2023 Designed by AÏ_Tech, Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default Contacts;
