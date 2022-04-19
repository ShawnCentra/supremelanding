import React, { useState, useEffect, useRef } from "react";

//style
import styles from "./SlidingReview.module.scss";

import Carousel from "react-multi-carousel";const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1516 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1516, min: 1035 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 1035, min: 0 },
    items: 1,
  },
};

export default function slidingReview(props) {
  const inputEl = useRef(null);

  const [referals, setReferals] = useState([]);
  const [isMiddle, setIsMiddle] = useState(1);
  useEffect(() => {
    if (props.data) {
      setReferals(props.data);
    }
  }, [props.data]);

  const previousReferal = () => {
    if (isMiddle != 0) {
      const newIndex = isMiddle - 1;
      setIsMiddle(newIndex);
    }
    return;
  };

  const nextReferal = () => {
    if (isMiddle != 0) {
      const newIndex = isMiddle + 1;
      setIsMiddle(newIndex);
    }
    return;
  };



  const CustomRightArrow = ({ onClick }) => {

    // onMove means if dragging or swiping in progress.

    return (
      <buttton
        onClick={() => {
          inputEl.current.next();
          nextReferal();
        }}
        className={styles.buttonRight}
      >
        <img
          loading="lazy"
          alt="black arrow icon"
          src="/images/Atoms-Arrow-Small-Black.webp"
          width="40"
          height="40"
          className={styles.arrowBlack}
        />
      </buttton>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {

    // onMove means if dragging or swiping in progress.
    return (
      <buttton
        className={styles.buttonLeft}
        disabled={isMiddle === 1}
        onClick={() => {
          inputEl.current.previous();
          previousReferal();
        }}
      >
        <img
          loading="lazy"
          alt="black arrow icon"
          src="/images/Atoms-Arrow-Small-Black.webp"
          width="40"
          height="40"
          className={styles.arrowBlack + " " + styles.arrowBack}
        />
      </buttton>
    );
  };

  return (
    <div>
      <Carousel
        ref={inputEl}
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass={styles.carouselContainer + " carousel-container"}
        itemClass={styles.item}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {referals.map((image, index) => {
          return (
            <div className={styles.referalContainer} key={index}>
              <div className={styles.referalContentContainer}>
                <img
                  className={styles.quoteImage}
                  src={"/images/dump/quote.webp"}
                  alt="yellow quotes"
                  width="53"
                  height="38"
                />
                <p className={styles.referalText}>
                  {image.imgVideoTitle !== ""
                    ? image.imgVideoTitle
                    : "Dummy text"}
                </p>
              </div>

              <img
                src={image.imagePath}
                alt={image.seoAlt}
                width="108"
                height="121"
                className={styles.portraitImage}
              />
              <p className={styles.portraitTextBold}>
                {image.imgVideoSubtitle !== ""
                  ? image.imgVideoSubtitle
                  : "Dummy text"}
              </p>
              <p className={styles.portraitText}>
                {image.imgCategory !== "" ? image.imgCategory : "Dummy text"}
              </p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
