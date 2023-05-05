import styles from "../../../styles/partenariat.module.scss";
const img1 = new URL("../../../../public/assets/logo11.png", import.meta.url);
const img2 = new URL("../../../../public/assets/logo22.png", import.meta.url);
const img3 = new URL("../../../../public/assets/logo44.png", import.meta.url);
const img4 = new URL("../../../../public/assets/logo33.png", import.meta.url);
const img5 = new URL("../../../../public/assets/R.png", import.meta.url);
const img6 = new URL("../../../../public/assets/steg.png", import.meta.url);

export default function Partenariat() {
  return (
    <div className={styles.slider}>
      <div className={styles.slide_track}>
        <div className={styles.slide}>
          <img src={img1} height="100" width="250" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={img2} height="100" width="250" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={img3} height="100" width="250" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={img4} height="100" width="250" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={img5} height="100" width="250" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={img6} height="100" width="250" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={img1} height="100" width="250" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={img2} height="100" width="250" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={img3} height="100" width="250" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={img4} height="100" width="250" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={img5} height="100" width="250" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={img6} height="100" width="250" alt="" />
        </div>
      </div>
    </div>
  );
}
