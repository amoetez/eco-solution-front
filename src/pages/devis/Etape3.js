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
export default function Etape3() {
  const router = useRouter();
  console.log(router.query);
  const [place, setPlace] = useState(router.query.place ?? "sol");
  const [longeur, setLongeur] = useState(router.query.longeur ?? 0);
  const [largeur, setLargeur] = useState(router.query.largeur ?? 0);
  const [orientation, setOrientation] = useState(
    router.query.orientation ?? "votre orientation"
  );
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);
  const handleSelect = (value) => {
    setOrientation(value);
    setShowOptions(false)
  };
  const handleDropdownClick = () => {
    setShowOptions(!showOptions);
  };
  const handleDropdownChange = (event) => {
    setShowOptions(event.target.value);
  };
  const handleOptionClick = (value) => {
    handleSelect(value);
    dropdownRef.current.focus();
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
 
  const isSubmitDisabled = longeur === 0|| largeur === 0 || orientation === 'votre orientation';
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
      <Stepper index={3} />
      <div className=" container  justify-content-center row">
        <div className=" cardFormulaire   col-md-8 col-lg-8 col-sm-12">
          <div>
            <h4 className=" row cardFormulaire-title  justify-content-center  ">
              Etape 3 : Votre Emplacement
            </h4>
          </div>
          <div onSubmit={handleSubmit}>
            <div className="row justify-content-center">
              <div className="flex">
              <h4 className="radtitle">Ou tu veux installer vos panneau ?  : </h4>
              <div class='px'>
                  <div className="itemrd">
                    <label>
                      <input type="radio" class="option-input radio" name="example"
                      id="toit"
                      value="toit"
                      checked={place === "toit"}
                      onChange={(event) => {
                        setPlace("toit");
                  
                      }}
                      required />
                    Sur le toit
                    </label>
                  </div>
                  <div className="itemrd">
                  <label>
                  <input type="radio" class="option-input radio" name="example"
                  id="sol"
                  value="sol"
                  checked={place === "sol"}
                  onChange={(event) => {
                    setPlace("sol");
                  }}
                  required />
                  Sur le sol 
                </label>
                </div>
              </div>
              </div>
            </div>       
            <div className=" row ">
              <div className="Longeur">
              <label>Largeur :
              <input
                type="text"
                name="longeur"
                placeholder="longeur"
                className="formInput"
                value={longeur}
                onChange={(event) => {
                  setLongeur(event.target.value);
                }}
                required
              />
              </label>
              <label>Longeur : 
              <input
                type="text"
                name="largeur"
                placeholder="largeur"
                className="formInput"
                value={largeur}
                onChange={(event) => {
                  setLargeur(event.target.value);
                }}
                required
              />
              </label>
              </div>
            </div>
            <div className="row  justify-content-center">
              <div className="formSelect1">
              <div className="region">
              <h4 className="radtitle">Votre region :</h4>
                <div className="selectDropdown1" tabIndex="0" onClick={handleDropdownClick} onChange={handleDropdownChange} ref={dropdownRef}
                >
                  <span>{orientation || 'Choose orientation'}</span>
                  <span className="selectArrow1"></span>
                </div>
              {showOptions && (
              <div className="selectOptions1">
                <div
                  className="selectOption1"
                  onClick={() => handleSelect('sud')
                }
                >
                  Sud
                </div>
                <div
                  className="selectOption1"
                  onClick={() => handleOptionClick('sudEst')}
                >
                  Sud Est
                </div>
                <div
                className="selectOption1"
                onClick={() => handleOptionClick('sudOuest')}
              >
                Sud Ouest
              </div>
              </div>
              )}
              </div>
              </div>
            </div>
            {(isSubmitDisabled || (hasSubmitted && isSubmitDisabled))&& <div className="row justify-content-center " style={{ color: 'orange' }}>* Merci de remplir tous les champs</div>}

            <div className="row justify-content-end">
              <button
                className="form-button "
                onClick={() => {
                  router.push({
                    pathname: "/devis/Etape2",
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
                    },
                  });
                }}
              >
              Précédent
              </button>

              <button
                className="form-button"
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
                      place: place,
                      longeur: longeur,
                      largeur: largeur,
                      orientation: orientation,
                    },
                  });
                }}
              >
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
