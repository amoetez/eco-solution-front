import Link from "next/link";
import Image from "next/image";
import Services from "../Nos_services/Services";
import React, { useEffect, useRef, useState } from "react";
import NavItem from "./NavItems";
import { useRouter } from "next/router";

import styles from "../../../styles/Navbar.module.css";

const log= new URL("./logo.png",import.meta.url); 

const MENU_LIST = [

   { text: "Acceuil", href: "/" },
  { text: "Articles", href: "/Articles" },
  { text: "Services", href: "/ServicePage" },
  { text: "Projets réferents", href: "/ProjetRefPage"},
  { text: "Contact", href: "/Contact"},
  // { text: "Formulaire de devis ", href: "/devis/Cordonnees" },

];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  useEffect(()=>{
console.log("ena navactive tvbadalt")
console.log(navActive)
  },[navActive])

  return (
    <header>
      <nav>
        <div className={styles.logo}>
           
        <Link href={"/"}>
        <img src={log} width="150"></img>  
         
        </Link>
        </div>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.nav__menuBar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={navActive ? `${styles.active} ${styles.nav__menuList }` : styles.nav__menuList}>

          {MENU_LIST.map((menu, idx) => (
            <div
              className={styles.items}
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              
              <NavItem  active={activeIdx === idx} {...menu} />
             
            </div>
          
          ))}
         <Link href="/devis/Cordonnees">
                 <button className={styles.navbarButton}>Formulaire de devis</button>
                </Link>
          </div>
       
      </nav>
    </header>
  );
};

export default Navbar;