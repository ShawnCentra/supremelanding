import React, { useState } from "react";
import styles from "./RotatingImages.module.scss";

import useWindowSize from "../utility/useWindowSize";

export default function rotatingImages(props) {
  //rotating images on button click
  const [imageIndex, setImageIndex] = useState([1, 2, 3]);

  function handleImageRotate() {
    const incrementedArray = imageIndex.map((index) => index + 1);
    incrementedArray[incrementedArray.findIndex((index) => index > 3)] = 1;
    setImageIndex(incrementedArray);
  }

  function imageStackLocation(value) {
    if (value === 1) {
      return styles.topImage;
    } else if (value === 2) {
      return styles.middleImage;
    } else {
      return styles.bottomImage;
    }
  }
  const size = useWindowSize();
  if (!props) {
    return null;
  }
  return (
    
    <div className={styles.familyContainer}>
      <div className={styles.familyTextContainer}>
        <h2 className={styles.familyTitle}>{`${props?.data?.title}`}</h2>
        <p className={styles.familyText}>{props?.data?.content}</p>

        <a
          href={props.careers ? "/careers/current-openings" : "/get-quote"}
          className={styles.consultantButtonRotatingImages}
        >
          {props.careers ? null : (
            <img
              src="/images/Shape.webp"
              className="consultImage"
              alt="black calendar icon"
              width="12"
              height="12"
            />
          )}

          <p className={styles.consultantButtonTextRotatingImages}>
            {props.careers ? "JOIN OUR TEAM" : "BOOK A CONSULTATION"}
          </p>
        </a>
      </div>

      <div className={styles.familyImgContainer}>
        <img
          loading="lazy"
          alt="man and woman image"
          src={ props.data.images[0].imagePath}
          className={
            styles.centerImage + " " + imageStackLocation(imageIndex[0])
          }
          alt={props.data.images[0]?.seoAlt}
          width="400"
          height="500"
        />

        <img
          loading="lazy"
          src={ props.data.images[1].imagePath}
          className={styles.leftImage + " " + imageStackLocation(imageIndex[1])}
          alt={props.data.images[1]?.seoAlt}
          width="400"
          height="500"
        />

        <img
          loading="lazy"
          src={ props.data.images[2].imagePath}
          className={
            styles.rightImage + " " + imageStackLocation(imageIndex[2])
          }
          alt={props.data.images[2]?.seoAlt}
          width="400"
          height="500"
        />

        <button
          className={styles.imageRotateButton}
          onClick={handleImageRotate}
        >
          <img
            loading="lazy"
            alt="small black arrow icon"
            src="/images/Atoms-Arrow-Small-Black.webp"
            width="40"
            height="40"
          />
        </button>
      </div>
    </div>
  );
}
