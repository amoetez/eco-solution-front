import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
const logg = new URL("./Navbar/logo.png", import.meta.url);
import { useState, useEffect, useRef } from "react";
export default function Footer() {
  const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = "http://79.137.87.204:5050";
  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/contactInfo`)
      .then((response) => response.json())
      .then((data) => {
        console.log("hedhi idata contact", data);
        setContact(data);
      })
      .catch((error) => console.log(error));
  }, []);
  const siegeSocial = parseFloat(contact[0]?.siegeSocial);
  const numeroTelephone = parseFloat(contact[0]?.numeroTelephone);

  const localisation = parseFloat(contact[0]?.localisation);

  return (
    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                <div class="cta-text">
                  <h4>Localisation</h4>
                  <span>
                    {contact[0]?.localisation}
                    Siège social GAFSA : Avenue El Hakim Gafsa -Z1 -2100
                  </span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-phone"></i>
                <div class="cta-text">
                  <h4>Numéro de téléphone</h4>
                  <span> {numeroTelephone} 58176730</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="far fa-envelope-open"></i>
                <div class="cta-text">
                  <h4>E-mail</h4>
                  <span>{contact[0]?.email} contact@ecosolution.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="/">
                    <img className="img-fluid " src={logg} width="200"></img>
                  </a>
                </div>
                <div class="footer-text"></div>
                <div class="footer-social-icon">
                  <span>Abonnez nous</span>
                  <a href="https://www.facebook.com/ecosoltunisie">
                    {contact[0]?.lienFacebook}
                    <i class="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-google-plus-g google-bg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Ecosolutions</h3>
                </div>
                <ul>
                  <li>
                    <a href="/Articles">Articles</a>
                  </li>
                  <li>
                    <a href="/ServicePage">services</a>
                  </li>
                  <li>
                    <a href="/ProjetRefPage">Projets Referents</a>
                  </li>
                  <li>
                    <a href="/Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Evaluez votre devis</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>
                    vous pouvez évaluer votre devis en cliquant sur ce bouton
                  </p>
                </div>
                <Link href="/devis/Cordonnees">
                  <button className={styles.navbarButton}>
                    Formulaire de devis
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
