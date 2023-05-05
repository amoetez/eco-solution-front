import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Stepper from "../components/Stepper/Stepper";
export default function Cordonnees() {
  const router = useRouter();
  const [firstName, setFirstName] = useState(router.query.firstName ?? "");
  const [lastName, setLastName] = useState(router.query.lastName ?? "");
  const [phoneNumber, setPhoneNumber] = useState(
    router.query.phoneNumber ?? ""
  );
  const [email, setEmail] = useState(router.query.email ?? "");
  const [adress, setAdress] = useState(router.query.adress ?? "");
  const [job, setJob] = useState(router.query.job ?? "");
  const [age, setAge] = useState(router.query.age ?? "");

  console.log(router.query);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const isSubmitDisabled = firstName === ''|| lastName === ''|| email ===''||phoneNumber===''|| adress === ''|| job===''|| age==='';


  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (!isSubmitDisabled) {
      // Handle form submission
    }
  };

  return (
    <div className="wrapper2">
      <Navbar />
      <Stepper index={1} />
      <div className=" container whole-page justify-content-center row">
        <div className=" cardFormulaire   col-md-8 col-lg-8 col-sm-12">
          <div>
            <h4 className=" row cardFormulaire-title  justify-content-center  ">
              Etape 1 : Inserer vos données
            </h4>
          </div>

          <div onSubmit={handleSubmit}>
            <div className="row  justify-content-center ">
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                className="formInput"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </div>
            <div className="row  justify-content-center">
              <input
                type="text"
                name="prenom"
                placeholder="Prenom"
                className="formInput"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
            </div>
            <div className="row  justify-content-center">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="formInput"
                value={phoneNumber}
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
              />
            </div>
            <div className="row  justify-content-center ">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="formInput"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="row  justify-content-center">
              <input
                type="text"
                name="adresse"
                placeholder="Adresse"
                className="formInput"
                value={adress}
                onChange={(event) => {
                  setAdress(event.target.value);
                }}
              />
            </div>
            <div className="row  justify-content-center">
              <input
                type="text"
                name="fonction"
                placeholder="Fonction"
                className="formInput"
                value={job}
                onChange={(event) => {
                  setJob(event.target.value);
                }}
              />
            </div>
            <div className="row justify-content-center ">
              <input
                type="text"
                name="age"
                placeholder="Age"
                className="formInput"
                value={age}
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              />
            </div>
            {(isSubmitDisabled || (hasSubmitted && isSubmitDisabled)) && <div className="row justify-content-center " style={{ color: 'orange' }}>* Merci de remplir tous les champs</div>}

            <div className="row justify-content-end">
              <button
                className="form-button"
                disabled={isSubmitDisabled}
                onClick={() => {
                  router.push({
                    pathname: "/devis/Etape2",
                    query: {
                      firstName: firstName,
                      lastName: lastName,
                      phoneNumber: phoneNumber,
                      email: email,
                      adress: adress,
                      job: job,
                      age: age,
                    },
                  });
                }}>
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
