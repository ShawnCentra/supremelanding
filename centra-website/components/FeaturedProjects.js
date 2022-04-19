import React, { useState, useEffect } from "react";
import styles from "./FeaturedProjects.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
const FeaturedProjects = (props) => {
  const [featuredProjectsCategory, setFeaturedProjectsCategory] = useState(
    "Single-Family New Construction"
  );

  const [buttons, setButtons] = useState([false, false, false]);

  useEffect(() => {
    const handleButtonsUpdate = (value, index) => {
      const arrayOfButtonValues = buttons;
      arrayOfButtonValues[index] = value;
      setButtons(arrayOfButtonValues);
    };
    Object.entries(props.featuredProjectsData)?.[0]?.[1]?.categoryName;
    if (props.featuredProjectsData) {
      if (Object.entries(props.featuredProjectsData)?.[0]?.[1]?.categoryName) {
        handleButtonsUpdate(true, 0);
      }

      if (Object.entries(props.featuredProjectsData)?.[1]?.[1]?.categoryName) {
        handleButtonsUpdate(true, 1);
      }

      if (Object.entries(props.featuredProjectsData)?.[2]?.[1]?.categoryName) {
        handleButtonsUpdate(true, 2);
      }
    }
  });

  const filteredData = Object.entries(props.featuredProjectsData).filter(
    ([key, value]) => value.categoryName === featuredProjectsCategory
  );

  return (
    <div className={styles.featuredContainer}>
      <p className={styles.premiumTitle}>Featured Projects</p>
      <p className={styles.premiumText}>
        We're proud to have been a part of some amazing projects. Take a look at
        the work our experts have completed along with testimonials from our
        fellow builders and developers.
      </p>
      <div className={styles.categoryContainer}>
        {buttons[0] ? (
          <button
            className={
              featuredProjectsCategory === "Single-Family New Construction"
                ? styles.categoryText +
                  " " +
                  styles.categoryFeaturedMargins +
                  " " +
                  styles.activeCategory
                : styles.categoryText + " " + styles.categoryFeaturedMargins
            }
            onClick={() =>
              setFeaturedProjectsCategory("Single-Family New Construction")
            }
          >
            Single-Family New Construction
          </button>
        ) : null}

        {buttons[1] ? (
          <button
            className={
              featuredProjectsCategory === "Multi-Family New Construction"
                ? styles.categoryText +
                  " " +
                  styles.categoryFeaturedMargins +
                  " " +
                  styles.activeCategory
                : styles.categoryText + " " + styles.categoryFeaturedMargins
            }
            onClick={() =>
              setFeaturedProjectsCategory("Multi-Family New Construction")
            }
          >
            Multi-Family New Construction
          </button>
        ) : null}

        {buttons[2] ? (
          <button
            className={
              featuredProjectsCategory === "Multi-Family Renovation"
                ? styles.categoryText +
                  " " +
                  styles.categoryFeaturedMargins +
                  " " +
                  styles.activeCategory
                : styles.categoryText + " " + styles.categoryFeaturedMargins
            }
            onClick={() =>
              setFeaturedProjectsCategory("Multi-Family Renovation")
            }
          >
            Multi-Family Renovation
          </button>
        ) : null}
      </div>
      <div className={styles.greyBorder} />
      {featuredProjectsCategory === "Single-Family New Construction" ? (
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={props.responsiveness}
          infinite={true}
          keyBoardControl={true}
          containerClass={styles.carouselContainer + " carousel-container"}
          itemClass="carousel-item-padding-40-px"
        >
          {filteredData?.[0]?.[1]?.staticImage.map((item, index) => {
            return (
              <Link
                key={index}
                href={{
                  pathname: `/featuredproject/${item.slug}`,
                }}
              >
                <div className={styles.slide} key={index}>
                  <img
                    className={styles.projectImage}
                    src={item.imagePath}
                    alt={item?.seoAlt}
                  />
                  <p className={styles.projectsCategory}>{item.categoryName}</p>
                  <p className={styles.projectsTitle}>{item.title}</p>
                </div>
              </Link>
            );
          })}
        </Carousel>
      ) : null}
      {featuredProjectsCategory === "Multi-Family New Construction" ? (
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={props.responsiveness}
          infinite={true}
          keyBoardControl={true}
          containerClass={styles.carouselContainer + " carousel-container"}
          itemClass="carousel-item-padding-40-px"
        >
          {filteredData[0][1].staticImage.map((item, index) => {
            return (
              <Link
                key={index}
                href={{
                  pathname: `/featuredproject/${item.slug}`,
                }}
              >
                <div className={styles.slide} key={index}>
                  <img
                    className={styles.projectImage}
                    src={item.imagePath}
                    alt={item?.seoAlt}
                  />
                  <p className={styles.projectsCategory}>{item.categoryName}</p>
                  <p className={styles.projectsTitle}>{item.title}</p>
                </div>
              </Link>
            );
          })}
        </Carousel>
      ) : null}

      {featuredProjectsCategory === "Multi-Family Renovation" ? (
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={props.responsiveness}
          infinite={true}
          keyBoardControl={true}
          containerClass={styles.carouselContainer + " carousel-container"}
          itemClass="carousel-item-padding-40-px"
        >
          {filteredData?.[0]?.[1]?.staticImage.map((item, index) => {
            return (
              <Link
                key={index}
                href={{
                  pathname: `/featuredproject/${item.slug}`,
                }}
              >
                <div className={styles.slide} key={index}>
                  <img
                    className={styles.projectImage}
                    src={item.imagePath}
                    alt={item?.seoAlt}
                  />
                  <p className={styles.projectsCategory}>{item.categoryName}</p>
                  <p className={styles.projectsTitle}>{item.title}</p>
                </div>
              </Link>
            );
          })}
        </Carousel>
      ) : null}
    </div>
  );
};

export default FeaturedProjects;
