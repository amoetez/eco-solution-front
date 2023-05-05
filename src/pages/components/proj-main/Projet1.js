export default function Projet1({
  id,
  titre,
  description,
  adresse,
  video,
  productionAnuelle,
  type,
  img,
}) {
  return (
    <div className="proj container-fluid d-flex justify-content-center ">
      <div className="section2_inner">
        <div
          className="section2_left"
          style={{ "background-image": `url(${img})` }}
        ></div>
        <div className="section2_right">
          <div>
            {" "}
            <h1>{titre}</h1>
            <h2>Type : {type}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
