import React from "react";

import styles from "./CallToAction.module.scss";

export default function CallToAction(props) {
  //file name pushing to main
  return (
    <div
      className={
        props.yellow == true
          ? styles.ctaContainer + " " + styles.yellowBg
          : styles.ctaContainer
      }
    >
      <h2
        className={
          props.yellow == true
            ? styles.ctaTitle + " " + styles.blackText
            : styles.ctaTitle
        }
      >
        {props?.data?.title}
      </h2>
      <p
        className={
          props.yellow == true
            ? styles.ctaText + " " + styles.blackText
            : styles.ctaText
        }
      >
        {props?.data?.content}
      </p>
      {props.currentOpenings ? (
        <a href={"/careers/current-openings/"}>
          <button
            className={
              props.yellow == true
                ? styles.consultantButton + " " + styles.blackBg
                : styles.consultantButton
            }
          >
            {props.yellow !== true ? (
              <img
                loading="lazy"
                src="/images/Shape.webp"
                className="consultImage"
                alt="black calendar icon"
                width="12"
                height="12"
              />
            ) : (
              ""
            )}

            <p
              className={
                props.yellow == true
                  ? styles.consultantButtonText + " " + styles.whiteText
                  : styles.consultantButtonText
              }
            >
              {props?.text}
            </p>
          </button>
        </a>
      ) : (
        <a href={props.charity ? "https://www.centracares.ca" : "/get-quote"}>
          <button
            className={
              props.yellow == true
                ? styles.consultantButton + " " + styles.blackBg
                : styles.consultantButton
            }
          >
            {props.yellow !== true ? (
              <img
                loading="lazy"
                src="/images/Shape.webp"
                className="consultImage"
                alt="black calendar icon"
                width="12"
                height="12"
              />
            ) : (
              ""
            )}

            <p
              className={
                props.yellow == true
                  ? styles.consultantButtonText + " " + styles.whiteText
                  : styles.consultantButtonText
              }
            >
              {props?.text}
            </p>
          </button>
        </a>
      )}
    </div>
  );
}
