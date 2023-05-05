import styles from "./Blog.module.css";
import Blog from "./Blog";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Blogs() {
  const [articleCardsContent, setArticleCardsContent] = useState([]);
  const PROTOCOLANDHOSTNAMEPARTOFTHEURL = "http://localhost:5050/";
  const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = "http://localhost:5050";
  useEffect(() => {
    fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/articles`)
      .then((response) => response.json())
      .then((data) => {
        console.log("hedhi idata", data);
        setArticles(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(PROTOCOLANDHOSTNAMEPARTOFTHEURL + "latestArticles")
      .then((response) => response.json())
      .then((data) => {
        setArticleCardsContent(data);
        console.log(articleCardsContent);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div>
        {articleCardsContent.map((element, key) => (
          <Blog
            key={key}
            id={element._id}
            titre={element.titre}
            contenu={element.contenu}
            description={element.description}
            image={`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/imagesArticle/${element.images[0]}`}
          />
        ))}
      </div>

      <div className="container-fluid d-flex justify-content-center">
        <Link href="../../Articles">
          <button className="blog-button  ">Voir tous les articles</button>
        </Link>
      </div>
    </div>
  );
}
