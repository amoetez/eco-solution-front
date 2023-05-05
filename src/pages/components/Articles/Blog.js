import styles from "./Blog.module.css";
export default function Blog({ titre, description, contenu, image }) {
  return (
    <div>
      <div className="section3_inner">
        <div
          className="section3_left"
          style={{ "background-image": `url(${image})` }}
        ></div>
        <div className="section3_right">
          <h4 className="proj-title">{titre}</h4>
        </div>
      </div>
    </div>
  );
}
