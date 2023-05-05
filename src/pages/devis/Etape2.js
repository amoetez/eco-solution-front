import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";
import Stepper from "../components/Stepper/Stepper";
export default function Etape2() {
  const router = useRouter();
  console.log(router.query);
  const [type, setType] = useState(router.query.type ?? "Votre Projet");
  const [technology, setTechnology] = useState(
    router.query.technology ?? "Type des panneaux"
  );
  const [showOptions1, setShowOptions1] = useState(false);
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const handleSelect1 = (value) => {
    setTechnology(value);
    console.log(value);
    setShowOptions1(false);
  };
  const handleDropdownChange1 = (event) => {
    setShowOptions1(event.target.checked);
  };
  const handleDropdownClick1 = () => {
    setShowOptions1(!showOptions1);
  };
  const handleOptionClick1 = (value) => {
    handleSelect1(value);
    dropdownRef1.current.focus();
  };
  const [showOptions2, setShowOptions2] = useState(false);

  const handleSelect2 = (value) => {
    setType(value);
    setShowOptions2(false);
  };

  const handleDropdownClick2 = () => {
    setShowOptions2(!showOptions2);
  };
  const handleDropdownChange2 = (event) => {
    setShowOptions2(event.target.checked);
  };

  const handleOptionClick2 = (value) => {
    handleSelect2(value);
    dropdownRef2.current.focus();
  };
  const handleSelectChange = (event) => {
    setType(event.target.value);
  };
  const [errorMessage, setErrorMessage] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
 
  const isSubmitDisabled = type === 'Votre Projet'|| technology === 'Type des panneaux';
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSubmitDisabled) {
      setErrorMessage('Please enter a value');
    } else {
      // Handle form submission
      setErrorMessage('');
      e.target.submit();
    }
  };
  return (
    <div className="wrapper2">
      <Navbar />
      <Stepper index={2} />
      <div className=" container  justify-content-center row">
        <div className=" cardFormulaire   col-md-8 col-lg-8 col-sm-12">
          <div>
            <h4 className=" row marginize-top cardFormulaire-title  justify-content-center  ">
              Etape 2 : Votre Projet
            </h4>
          </div>
          <div onSubmit={handleSubmit} >
            <div className="row  justify-content-center">
              <div className="formSelect1">
                <div
                  className="selectDropdown1"
                  tabIndex="0"
                  onClick={handleDropdownClick1}
                  onChange={handleDropdownChange1}
                  ref={dropdownRef1}>
                  <span>{technology || "Choose technology"}</span>
                  <span className="selectArrow1"></span>
                </div>
                {showOptions1 && (
                  <div className="selectOptions1">
                    <div
                      className="selectOption1"
                      onClick={() => handleSelect1("Allemande")}
                      value="Allemande">
                      Allemande
                    </div>
                    <div
                      className="selectOption1"
                      onClick={() => handleOptionClick1("Chinoise")}
                      value="Chinoise">
                      Chinoise
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="row  justify-content-center">
              <div className="formSelect1">
                <div
                  className="selectDropdown1"
                  tabIndex="0"
                  onClick={handleDropdownClick2}
                  ref={dropdownRef2}>
                  <span>{type || "Choose Type"}</span>
                  <span className="selectArrow1"></span>
                </div>
                {showOptions2 && (
                  <div className="selectOptions1">
                    <div
                      className="selectOption1"
                      
                      onClick={() => handleOptionClick2("Pompage au fil de soleil")}
                      value="pompageSoleil">
                    Pompage au fil de soleil
                    </div>
                    <div
                      className="selectOption1"
                      onClick={() =>
                        handleOptionClick2("Pompage raccordé STEG")
                      }
                      value="pompageSteg">
                      Pompage raccordé STEG
                    </div>
                    <div
                      className="selectOption1"
                      value="maisonSteg"
                      onClick={() =>
                        handleOptionClick2("Maison raccordé STEG")
                      }>
                      Maison raccordé STEG
                    </div>
                    <div
                      className="selectOption1"
                      value="maisonNonSteg"
                      onClick={() =>
                        handleOptionClick2("Maison non raccordé STEG")
                      }>
                      Maison non raccordé STEG
                    </div>
                  </div>
                )}
              </div>
            </div>
            {(isSubmitDisabled || (hasSubmitted && isSubmitDisabled))&& <div className="row justify-content-center " style={{ color: 'orange' }}>* Merci de remplir tous les champs</div>}

            <div className="abc">
              <button
                className="form-button"
                onClick={() => {
                  router.push({
                    pathname: "/devis/Cordonnees",
                    query: {
                      firstName: router.query.firstName,
                      lastName: router.query.lastName,
                      phoneNumber: router.query.phoneNumber,
                      email: router.query.email,
                      adress: router.query.adress,
                      job: router.query.job,
                      age: router.query.age,
                    },
                  });
                }}>
                Précédent
              </button>

              <button
             
                className="form-button"
                disabled={isSubmitDisabled}
                onClick={() => {
                  router.push({
                    pathname: "/devis/Etape3",
                    query: {
                      firstName: router.query.firstName,
                      lastName: router.query.lastName,
                      phoneNumber: router.query.phoneNumber,
                      email: router.query.email,
                      adress: router.query.adress,
                      job: router.query.job,
                      age: router.query.age,
                      type: type,
                      technology: technology,
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
