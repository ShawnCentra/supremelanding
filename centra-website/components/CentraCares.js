import React from "react";
import styles from "./CentraCares.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LazyImage from "./lazyImage";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1250 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1250, min: 800 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
  },
};




export default function components(props) {
  const CustomRightArrow = ({ onClick }) => {
    // onMove means if dragging or swiping in progress.

    return (
      <buttton
        onClick={() => onClick()}
        className={styles.caresArrowImgContainer}
      >
        <img
          loading="lazy"
          alt="yellow arrow icon"
          src="/images/ArrowNoBg.webp"
          width="40"
          height="40"
          className={styles.caresArrowImg}
        />
      </buttton>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    // onMove means if dragging or swiping in progress.
    return (
      <buttton
        className={styles.caresArrowImgContainerBack}
        onClick={() => onClick()}
      >
        <img
          loading="lazy"
          alt="yellow arrow icon"
          src="/images/ArrowNoBg.webp"
          width="40"
          height="40"
          className={styles.blogBackButton}
        />
      </buttton>
    );
  };
  return (
    <div className={styles.caresContainer}>
      <div className={styles.caresTitleContainer}>
        {props.size.width < 1000 ? (
          ""
        ) : (
          <img
            loading="lazy"
            alt="centra cares logo"
            src="/images/Centra-Cares-logo.webp"
            width="194.5"
            height="183"
          />
        )}

        <div className={styles.caresTextContainer}>
          <h2 className={styles.caresTitle}>{props?.data?.title}</h2>
          <div className={styles.caresFlexWrapper}>
            <p className={styles.caresText}>{props?.data?.content}</p>
            <div className={styles.caresLinkContainer}>
              <a href="https://www.centracares.ca/" className={styles.caresLink}>
                CENTRACARES.CA
              </a>
              <div className={styles.caresArrowImgContainerLink}>
                <img
                  loading="lazy"
                  alt="yellow arrow icon"
                  src="/images/ArrowNoBg.webp"
                  width="40"
                  height="40"
                  className={styles.caresArrowImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {props.size.width < 1000 ? (
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite={false}
          containerClass={styles.carouselContainer + " carousel-container"}
          itemClass={styles.item}
          
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {props.data.images.map((image, index) => {
            return (
              <div className={styles.carouselImageContainer}>
                <LazyImage
                  src={
                    props.size.width > 992
                      ? image.imagePath
                      : image.imagePath.slice(0, -4) + "_500x300.jpg"
                  }
                  alt={image.alt ? image.alt : ""}
                  width={"100%"}
              
                />
              </div>


            );
          })}
        </Carousel>
      ) : (
        <div className={styles.caresImgContainer}>
          {props.data.images.map((image, index) => {
            return (
              <LazyImage
                key={index}
                alt={image?.seoAlt}
                src={image.imagePath}
                width={"352px"}
                height={"352px"}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
