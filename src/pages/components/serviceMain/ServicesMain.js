import styles from "./ServiceMain.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import ServiceMain from "./ServiceMain";
export default function ServicesMain() {
  const [services, setServices] = useState([]);
  const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = "http://79.137.87.204:5050";

  useEffect(() => {
    fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/services`)
      .then((response) => response.json())
      .then((data) => {
        console.log("hedhi idata", data);
        setServices(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="services-bar">
        {services.slice(-3).map((element, key) => (
          <ServiceMain
            key={key}
            id={element._id}
            title={element.titre}
            description={element.description}
            image={`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/imageService/${element.image}`}
          />
        ))}
      </div>

      <div className="container-fluid d-flex justify-content-center">
        <Link href="../../ServicePage">
          <button className="blog-button  ">Voir tous les services</button>
        </Link>
      </div>
    </div>
  );
}
