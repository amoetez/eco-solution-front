const img5 = new URL("./blog123.png", import.meta.url);
import { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";
import { items } from "./items";
export default function Projet() {
  const [projets, setProjets] = useState([]);
  const router = useRouter();
  const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = "http://79.137.87.204:5050";

  useEffect(() => {
    fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/projets`)
      .then((response) => response.json())
      .then((data) => {
        console.log("hedhi idata", data);
        setProjets(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {projets.map((item, index) => {
        return (
          <div
            key={index}
            className="container-article ">
            <div className="row justify-content-center">
              <div className="column1-article">
                <img
                  className="article-image"
                  src={`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/imagesProjet/${item.images[0]}`}></img>
              </div>
              <div className="column2-article">
                <h4 className="titre-article">{item.titre}</h4>
                <h5 className="content-article">Adresse : {item.adresse}</h5>
                <p className="content-article">Production Annuelle : {item.productionAnuelle}</p>

                <p className="content-article">Type du Projet : {item.type}</p>
                <div className="button-article-container">

                <div
                  className="button-article"
                  onClick={() => {
                    router.push({
                      pathname: "/secondPageProjet",
                      query: { id: item._id },
                    });
                  }}>
                  Lire la suite
                </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
