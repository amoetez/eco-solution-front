import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
const breakPoints = [{ width: 1, itemsToShow: 1 }];

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/secondPageArticle.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { Carousel } from "react-responsive-carousel";


const Gallery = ({ imagePaths }) => {
  if (!Array.isArray(imagePaths)) {
    imagePaths = [imagePaths];
  }
  return (
    <div className="gallery">
      {imagePaths.map((path) => (
        <img
          key={path}
          src={`http://79.137.87.204:5050/imagesArticle/${path}`}
          alt={path}
        />
      ))}
    </div>
  );
};

export default function SecondPageArticle({ data }) {
  const router = useRouter();
  const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = "http://79.137.87.204:5050";
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/article/${data.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("hedhi idata", data);
        setArticle(data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    console.log("hedha article", article);
    console.log("hetha taille imta3 tableau images", article?.images?.length);
  }, [article]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickPrevious = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + article.images.length) % images.length
    );
  };

  const handleClickNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % article.images.length);
  };
  return (
    <div>
      <Head>
        <title>Articles</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className={styles.flex_container_page}>
        <h2 className={styles.titre}>{article.titre}</h2>

        {/* <img  className={styles.image1} src={`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/imagesArticle/${Array.isArray(article?.images)? article.images[0]:article.images}`} />  */}
        <div  style={{ maxWidth: "700px", margin: "0 auto" }}>
          <Carousel showThumbs={false}>
            {article.images &&
              article.images.map((image, index) => (
                <div key={index}>
                  <Gallery imagePaths={article.images[index]}></Gallery>
                </div>
              ))}
          </Carousel>
        </div>
        <div className={styles.article}>{article.description}</div>

        <div className=" d-flex justify-content-center">
          <button
            className={styles.art_button}
            onClick={() => {
              router.back();
            }}>
            {" "}
            Retour
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
SecondPageArticle.getInitialProps = async ({ query }) => {
  const data = query;

  return { data };
};
