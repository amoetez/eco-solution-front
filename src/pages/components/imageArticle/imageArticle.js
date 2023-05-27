
    const ImageArticle = ({ imagePaths }) => {
        if(!Array.isArray(imagePaths)){imagePaths=[imagePaths]}
        return (
          <div className="gallery">
            {imagePaths.map(path => (
              <img key={path} src={`http://79.137.87.204:5050/imagesArticle/${path}`} alt={path} />
            ))}
          </div>
        );
      };
    
