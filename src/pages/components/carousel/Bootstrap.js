import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../../styles/secondPageProjet.module.scss";

const img0 = new URL("./IMG00.jpg", import.meta.url);
const img1 = new URL("./IMG11.jpg", import.meta.url);
const img2 = new URL("./IMG22.jpg", import.meta.url);
const img3 = new URL("./IMG33.jpg", import.meta.url);
const img4 = new URL("./IMG44.jpg", import.meta.url);

function MyCarousel() {
  const breakPoints = [{ width: 1, itemsToShow: 1 }];

  return (
    <div className={styles.top_carrousel}>
      <Carousel className="carrousel" breakPoints={breakPoints} autoPlay>
        <div>
          <img src={img1} alt="tahche"></img>
          <h1>hello</h1>
        </div>
        <div>
          <img src={img2} alt="tahche"></img>
        </div>
        <div>
          <img src={img3} alt="tahche"></img>
        </div>
        <div>
          <img src={img4} alt="tahche"></img>
        </div>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
