import styles from "./Progress.module.css";
import CircleProgress from "./circleProgress";
import UseGetWindowSize from "../utils/UseGetWindowSize";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
const img1 = new URL("../../../../public/assets/CO2.png", import.meta.url);
const img2 = new URL("../../../../public/assets/puissance.png", import.meta.url);
const img3 = new URL("../../../../public/assets/PROJ.png", import.meta.url);
const img4 = new URL(
    "../../../../public/assets/panneau-solaire.png",
    import.meta.url
  );
  const img5 = new URL("../../../../public/assets/productif.png", import.meta.url);

export default function Progress() {
  const size = UseGetWindowSize();
  const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = "http://localhost:5050";
  const [indicateur, setIndicateur] = useState([]);

  useEffect(() => {
      fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/indicateur`)
          .then((response) => response.json())
          .then((data) => {
              console.log("hedhi idata indicateur", data);
              setIndicateur(data);
          })
          .catch((error) => console.log(error));
  }, []);
  const indicateurCarbone = parseFloat(indicateur[0]?.indicateurCarbone);
  const  indicateurPuissance = parseFloat(indicateur[0]?.indicateurPuissance);
  const  indicateurNombreDeProjet = parseFloat(indicateur[0]?.indicateurNombreDeProjet);
  const items = [
    
    {
        id: "1",
        title: 'Indicateur carbone CO2',
        number: indicateurCarbone,
        image:img1,
    },
    {
        id: "2",
        title: 'Puissance installée en KWC',
        number: indicateurPuissance,
        image:img4,

    },
    {
        id: "3",
        title: 'Nombre des Projets',
        number: indicateurNombreDeProjet,
        image:img5,

    },



]
  if (size.width <1000) {
    return(
        <div className={styles.container}>
      <h1 className={styles.first_title_mobile} >Offrir de meilleurs résultats à nos clients</h1>
      <div className={styles.counter_container_mobile}>   
      {items.map((element, key) => <CircleProgress key={key} id={element.id} title={element.title} number={element.number} image={element.image} />)}
         
        </div>
        </div>
    );
  }

    return (
      <div className={styles.container}>
      <h1 className={styles.first_title} >Offrir de meilleurs résultats à nos clients</h1>
      <div className={styles.counter_container}>   
      {items.map((element, key) => <CircleProgress key={key} id={element.id} title={element.title} number={element.number} image={element.image} />)}
         
        </div>
        </div>
    );
  }