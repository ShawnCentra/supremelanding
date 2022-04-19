import React from "react";
import styles from "./lazyImage.module.scss";
import LazyLoad from "react-lazyload";

const LazyImage = ({ src, alt, width, height, relative }) => {
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };


  return (
    <div
      style={{ width: `${width}`, height: `${height}`, position: "relative" }}
    >
      <div className={styles.placeHolder} ref={refPlaceholder} />
      <LazyLoad>
        <img
          className={relative ? styles.styleRelative : styles.styledImage }
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </div>
  );
};

export default LazyImage;
