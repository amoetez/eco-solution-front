import Footer from "./components/Footer";
import GoogleMaps from "./components/googleMaps/googleMaps";
import Navbar from "./components/Navbar/Navbar";
import styles from "../styles/contact.module.scss";
import {FaFacebook, FaInstagram , FaLinkedin} from 'react-icons/fa';
import Titres from "./components/titres/titres";
import { useState, useEffect, useRef } from "react";
export default function Contact() {
  const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = "http://localhost:5050";
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
  const   numeroTelephone = parseFloat(contact[0]?.numeroTelephone);
  const    email = parseFloat(contact[0]?.email);
  const   localisation = parseFloat(contact[0]?.localisation);
  const    lienFacebook = parseFloat(contact[0]?.lienFacebook);
  return (
    <div>
      <Navbar />
      <div className={styles.contact_title}>
      <Titres text="Contactez nous"/>
    
      </div>
      <div className={styles.containerMap}>
        <div className={styles.blockone}>
            <p>EcoSolutions Tunisie est une entreprise agréée par la STEG et l'ANME, spécialiste dans
l'étude, la conception et l'installation de systèmes photovoltaïque pour les agriculteurs, les
particuliers et les professionnels.</p>
       <div className={styles.email}>
                        <div className={styles.single_cta}>
                            <i class="far fa-envelope-open"></i>
                            <div className={styles.cta_text} >
                                <h4>E-mail</h4>
                                <span>{email} contact@ecosolution.com</span>
                            </div>
                            </div>
                        </div>
                        <div className={styles.numerotel}>
                        <div className={styles.single_cta}>
                            <i class="fas fa-phone"></i>
                            <div className={styles.cta_text}>
                                <h4>Numéro de téléphone</h4>
                                <span> {numeroTelephone} 58176730</span>
                            </div>
                        </div>
                        </div>
        
        
        </div>
        <div className={styles.blocktwo}>
             <div className={styles.single_cta}>
                            <i class="fas fa-map-marker-alt"></i>
                            <div className={styles.cta_text}>
                                <h4>Localisation</h4>
                            </div>
                        </div>
                        <div className={styles.googleMaps}>
          <GoogleMaps />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
