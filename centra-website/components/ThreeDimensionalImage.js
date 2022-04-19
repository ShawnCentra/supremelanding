import React, { useState, useEffect, useCallback } from "react";
import styles from "./ThreeDimensionalImage.module.scss";
import Carousel from "react-multi-carousel";const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1250 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1250, min: 800 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
  },
};

export default function components(props) {
  const [activeKeyBoardControl, setActiveKeyBoardControl] = useState(false);

  //handle key presses for carousel
  const [leftPress, setLeftPress] = useState(false);
  const [rightPress, setRightPress] = useState(false);
  const handleUserKeyPress = useCallback((event) => {
    const { key, keyCode } = event;
    //left
    if (keyCode === 37) {
      setLeftPress((prevState) => !prevState);
    }

    //right
    if (keyCode === 39) {
      setRightPress((prevState) => !prevState);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const CustomRightArrow = ({ onClick }) => {
    useEffect(() => {
      if (activeKeyBoardControl && rightPress) {
        setRightPress(false);
        onClick();
      }
    }, [rightPress]);



    return (
      <buttton
        onClick={() => onClick()}
        className={styles.buttonRight}
      ></buttton>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    useEffect(() => {
      if (activeKeyBoardControl && leftPress) {
        setLeftPress(false);
        onClick();
      }
    }, [leftPress]);


    if (activeKeyBoardControl && leftPress) {
      () => onClick();
      setLeftPress(false);
    }
    return (
      <buttton
        className={styles.buttonLeft}
        onClick={() => onClick()}
      ></buttton>
    );
  };

  return (
    <div
      onFocus={() => setActiveKeyBoardControl(true)}
      onMouseEnter={() => setActiveKeyBoardControl(true)}
      onBlur={() => setActiveKeyBoardControl(false)}
      onMouseLeave={() => setActiveKeyBoardControl(false)}
    >
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={activeKeyBoardControl}
        containerClass={
          styles.carouselContainer +
          " carousel-container" +
          " " +
          styles.threeDimensionalContainer
        }
        itemClass={styles.item}
        customTransition={`transform 0ms ease-in-out`}
        transitionDuration={`0`}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {props.images.map((item, index) => {
          return (
            <img
              src={item}
              alt={"Rotating 3D Image"}
              className={styles.threeDimensionalImage}
              key={index}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
