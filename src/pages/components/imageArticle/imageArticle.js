import styles from "../../../styles/secondPage.module.scss";



    const ImageArticle = ({ imagePaths }) => {
        if(!Array.isArray(imagePaths)){imagePaths=[imagePaths]}
        return (
          <div className="gallery">
            {imagePaths.map(path => (
              <img key={path} src={`http://localhost:5050/imagesArticle/${path}`} alt={path} />
            ))}
          </div>
        );
      };
    