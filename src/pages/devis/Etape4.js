import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";
import Stepper from "../components/Stepper/Stepper";
import { TbSolarPanel, TbSolarPanel2 } from "react-icons/tb";

const img_panneau_sol = new URL(
  "../../../public/assets/panneau_sur_sol.png",
  import.meta.url
);
export default function Etape4() {
  const router = useRouter();
  console.log(router.query);
  const type = router.query.type;
  const [estimation, setEstimation] = useState(
    router.query.estimation ?? 0
    //  type === "pompageSoleil" ? 4 : 2
  );
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);
  const handleSelect = (val,value) => {
    setPuissance(val);
    setEstimation(value);
    setShowOptions(false);
  };
  const handleDropdownClick = () => {
    setShowOptions(!showOptions);
  };
  const handleOptionClick = (val,value) => {
    handleSelect(val,value);
    dropdownRef.current.focus();
  };
  const handleDropdownChange = (event) => {
    setShowOptions(event.target.checked);
  };

  const [errorMessage, setErrorMessage] = useState("");
  const [puissance, setPuissance] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const isSubmitDisabled = puissance === 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSubmitDisabled) {
      setErrorMessage("Please enter a value");
    } else {
      // Handle form submission
      setErrorMessage("");
      e.target.submit();
    }
  };


  return (
    <div className="wrapper2">
      <Navbar />
      <Stepper index={4} />
      <div className=" container  justify-content-center row">
        <div className=" cardFormulaire   col-md-8 col-lg-8 col-sm-12">
          <div>
            <h4 className=" row cardFormulaire-title  justify-content-center  ">
              Etape 4 : Votre Consommation
            </h4>
          </div>
          <div>
            {type === "Pompage raccordé STEG" ||
            type === "Maison raccordé STEG" ? (
              <div className=" row  justify-content-center ">
                <div className="col">
                  <label>Electricité:</label>
                </div>
                <div className="row  justify-content-center ">
                  <div className="formSelect1">
                    <div
                      className="selectDropdown1"
                      tabIndex="0"
                      onClick={handleDropdownClick}
                      onChange={handleDropdownChange}
                      ref={dropdownRef}>
                      <span>{puissance || "Facture"}</span>
                      <span className="selectArrow1"></span>
                    </div>
                    {showOptions && (
                      <div className="selectOptions1">
                        <div
                          className="selectOption1"
                          value="1"
                          onClick={() => handleSelect("100 DT",2)}>
                          100 DT
                        </div>
                        <div
                          className="selectOption1"
                          value="2"
                          onClick={() => handleSelect("150 DT",2.5)}>
                          150 DT
                        </div>
                        <div
                          className="selectOption1"
                          value="3"
                          onClick={() => handleSelect("200 DT",3)}>
                          200 DT
                        </div>
                        <div
                          className="selectOption1"
                          value="4"
                          onClick={() => handleSelect("Plus que 200 DT",4)}>
                          Plus que 200 DT
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            {type === "Pompage au fil de soleil" ? (
              <div className=" row  justify-content-center ">
                <div className="col">
                  <label>Puissance Pompe:</label>
                </div>
                <div className="row  justify-content-center ">
                  {/* <select
                    name="puissance"
                    type="text"
                    placeholder="type de votre projet"
                    className="formSelect form-select"
                    value={puissance}
                    onChange={(event) => {
                      setpuissance(event.target.value);
                    }}
                  >
                    <option value="4">3 HP</option>
                    <option value="5">4 HP</option>
                    <option value="6.5">5.5 HP</option>
                    <option value="9">7.5 HP</option>
                    <option value="12">10 HP</option>
                    <option value="18">15 HP</option>
                    <option value="22">20 HP</option>
                    <option value="27">25 HP</option>
                  </select>
                </div> */}

                  <div className="formSelect1">
                    <div
                      className="selectDropdown1"
                      tabIndex="0"
                      onClick={handleDropdownClick}
                      onChange={handleDropdownChange}
                      ref={dropdownRef}>
                      <span>{puissance || "Puissance en HP"}</span>
                      <span className="selectArrow1"></span>
                    </div>
                    {showOptions && (
                      <div className="selectOptions1">
                        <div
                          className="selectOption1"
                          onClick={() => handleOptionClick("3","4")}>
                          3 HP
                        </div>
                        <div
                          className="selectOption1"
                          onClick={() => handleOptionClick("4","5")}>
                          4 HP
                        </div>
                        <div
                          className="selectOption1"
                          onClick={() => handleOptionClick("5.5","6.5")}>
                          5.5 HP
                        </div>
                        <div
                          className="selectOption1"
                          onClick={() => handleOptionClick("7.5","9")}>
                          7.5 HP
                        </div>
                        <div
                          className="selectOption1"
                          onClick={() => handleOptionClick("10","12")}>
                          10 HP
                        </div>
                        <div
                          className="selectOption1"
                          onClick={() => handleOptionClick("15","18")}>
                          15 HP
                        </div>
                        <div
                          className="selectOption1"
                          onClick={() => handleOptionClick("20","22")}>
                          20 HP
                        </div>
                        <div
                          className="selectOption1"
                          onClick={() => handleOptionClick("25","27")}>
                          25 HP
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            {type === "Maison non raccordé STEG" ? (
              <div className=" row  justify-content-center ">
                {/* <div className="col">
                  <label>puissance de l'installation:</label>
                </div>
                <div className="row  justify-content-center ">
                  <select
                    name="puissance"
                    type="text"
                    placeholder="type de votre projet"
                    className="formSelect form-select"
                    value={puissance}
                    onChange={(event) => {
                      setpuissance(event.target.value);
                    }}
                  >
                    <option value="1">1 KWC</option>
                    <option value="2">2 KWC</option>
                    <option value="3">3 KWC</option>
                  </select>
                </div> */}

                <div className="formSelect1">
                  <div
                    className="selectDropdown1"
                    tabIndex="0"
                    onClick={handleDropdownClick}
                    onChange={handleDropdownChange}
                    ref={dropdownRef}>
                    <span>{estimation || "Puissance en KWC"}</span>
                    <span className="selectArrow1"></span>
                  </div>
                  {showOptions && (
                    <div className="selectOptions1">
                      <div
                        className="selectOption1"
                        onClick={() => handleSelect("1")}>
                        1 KWC
                      </div>
                      <div
                        className="selectOption1"
                        onClick={() => handleSelect("2")}>
                        2 KWC
                      </div>
                      <div
                        className="selectOption1"
                        onClick={() => handleSelect("3")}>
                        3 KWC
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <></>
            )}
            {(isSubmitDisabled || (hasSubmitted && isSubmitDisabled)) && (
              <div
                className="row justify-content-center "
                style={{ color: "orange" }}>
                * Merci de remplir tous les champs
              </div>
            )}

            <div className="row justify-content-end">
              <button
                className="form-button "
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
                onClick={() => {
                 
                  router.push({
                    pathname: "/devis/Etape5",
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
                      estimation:estimation,
                      
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
