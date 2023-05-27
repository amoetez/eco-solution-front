import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import Stepper from "../components/Stepper/Stepper";
const img_panneau_sol = new URL(
    "../../../public/assets/panneau_sur_sol.png",
    import.meta.url
);
const img1 = new URL("../../../public/assets/CO2.png", import.meta.url);
const img2 = new URL("../../../public/assets/gain.png", import.meta.url);
const img3 = new URL(
    "../../../public/assets/installation-facile.png",
    import.meta.url
);
const img4 = new URL(
    "../../../public/assets/panneau-solaire.png",
    import.meta.url
);
const img5 = new URL("../../../public/assets/productif.png", import.meta.url);
const img6 = new URL(
    "../../../public/assets/gestion-de-projet.png",
    import.meta.url
);
const img7 = new URL(
    "../../../public/assets/check.png",
    import.meta.url
);

export default function Etape5() {
    const router = useRouter();
    const [formSubmitted, setFormSubmitted] = useState(false);

    console.log(router.query);
    const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = "http://79.137.87.204:5050";
    const [puissance, setPuissance] = useState([]);

    useEffect(() => {
        fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/puissance`)
            .then((response) => response.json())
            .then((data) => {
                console.log("hedhi idata", data);
                setPuissance(data);
            })
            .catch((error) => console.log(error));
    }, []);


    const popupRef = useRef(null);




    //a changer par des requete back pour avoir les variable a jour a chaque fois!!!!!!!!
    const puissanceAllemand = parseFloat(puissance[0]?.puissanceAllemande);
    const puissanceChinois = parseFloat(puissance[0]?.puissanceChinoise);

    const sendResults = async () => {
        //envoyer au backend les informations voici les variables et comment avoir leurs contenu
        console.log('ena lina fil send results')
        const response = await fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/devis`, {
            method: 'POST',
            body: JSON.stringify({
                firstName: router.query.firstName,
                lastName: router.query.lastName,
                phoneNumber: router.query.phoneNumber,
                email: router.query.email,
                adress: router.query.adress,
                job: router.query.job,
                age: router.query.age,
                type: router.query.type,
                technology: router.query.technology,
                place: router.query.place,
                longeur: router.query.longeur,
                largeur: router.query.largeur,
                orientation: router.query.orientation,
                puissance: router.query.technology === "Allemande" ? puissanceAllemand : puissanceChinois,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        }
        )
        console.log(response);
        if (response.ok) {
            setFormSubmitted(true);
        }
    }

    return (
        <div className="wrapper2">
            <Navbar />
            <Stepper index={5} />
            <div className=" container  justify-content-center row">
                <div className=" cardFormulaire   col-md-8 col-lg-8 col-sm-12">
                    <div>
                        <h4 className=" row cardFormulaire-title  justify-content-center  ">
                            Résultats
                        </h4>
                    </div>

                    <div className="row">
                        <div className="result-col col  justify-content-center ">
                            <div className="row justify-content-center">
                                <img className="img-result" src={img3} />
                            </div>
                            <div className="result-text">Estimation d'Installation</div>
                            <div className="result-number">{router.query.estimation} KWC</div>
                        </div>
                        <div className="result-col col  justify-content-center ">
                            <div className="row justify-content-center">
                                <img className="img-result" src={img6} />
                            </div>
                            <div className="result-text">Technologie Choisie</div>
                            <div className="result-number">{router.query.technology}</div>
                        </div>
                        <div className=" result-col col  justify-content-center ">
                            <div className="row justify-content-center">
                                <img className="img-result" src={img4} />
                            </div>{" "}
                            <div className="result-text ">Nombre de panneaux requis</div>
                            <div className="result-number">
                                {Math.round(
                                    (router.query.estimation * 1000) /
                                    (router.query.technology === "Allemande"
                                        ? puissanceAllemand
                                        : puissanceChinois)
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="result-col col  justify-content-center ">
                                <div className="row justify-content-center">
                                    <img className="img-result" src={img5} />
                                </div>
                                <div className="result-text">Production annuelle</div>
                                <div className="result-number">
                                    {" "}
                                    {router.query.estimation * 1700} Kwh
                                </div>
                            </div>
                            <div className="result-col col  justify-content-center ">
                                <div className="row justify-content-center">
                                    <img className="img-result" src={img1} />
                                </div>
                                <div className="result-text">Dimintion CO2</div>
                                <div className="result-number">
                                    {router.query.estimation * 0.77 * 25} T{" "}
                                </div>
                            </div>
                            <div className="result-col col  justify-content-center ">
                                <div className="row justify-content-center">
                                    <img className="img-result" src={img2} />
                                </div>
                                <div className="result-text">Gains économiques</div>
                                <div className="result-number justify-content-center">
                                    {(router.query.type === "pompageSteg" ||
                                        router.query.type === "maisonSteg"
                                        ? 2700
                                        : 3500) *
                                        router.query.estimation *
                                        25 *
                                        0.22 -
                                        router.query.estimation * 1700 * 25 * 0.22}
                                    {/* investisement  */}
                                </div>
                            </div>
                        </div>
                        <div className=" row justify-content-end m-30">
                            <button
                                className="form-button "
                                onClick={() => {
                                    router.push({
                                        pathname: "/devis/Etape4",
                                        query: {
                                            firstName: router.query.firstName,
                                            lastName: router.query.lastName,
                                            phoneNumber: router.query.phoneNumber,
                                            email: router.query.email,
                                            adress: router.query.adress,
                                            job: router.query.job,
                                            age: router.query.age,
                                            type: router.query.type,
                                            technology: router.query.technology,
                                            place: router.query.place,
                                            longeur: router.query.longeur,
                                            largeur: router.query.largeur,
                                            orientation: router.query.orientation,
                                        },
                                    });
                                }}>
                                Précédent
                            </button>

                            <button
                                className="form-button"
                                onClick={sendResults}>
                                Envoyer
                            </button>

                            {/* setFormSubmitted(true) && sendResults;  */}
                            {formSubmitted && (
                                <div className="popup">
                                    <div className="iconform">
                                        <img className="img-result1  container-fluid d-flex justify-content-center" src={img7}></img>

                                    </div>
                                    <div className="result-number" >Formulaire envoyé avec succès !</div>
                                    <div className="container-fluid  d-flex justify-content-center">
                                        <Link href="../../">
                                            <button className="blog-button  ">
                                                Merci
                                            </button>
                                        </Link>
                                    </div>
                                </div>


                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
