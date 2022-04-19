import React from "react";

import styles from "./CallToAction.module.scss";

export default function CallToAction(props) {
  //file name pushing to main
  return (
    <div
      className={
        styles.ctaContainer
      }
    >
      <h2
        className={
          styles.ctaTitle
        }
      >
        How can we help?
      </h2>
      <p
        className={
          props.yellow == true
            ? styles.ctaText + " " + styles.blackText
            : styles.ctaText
        }
      >
        You’re just getting to know us, and you may be reluctant to ask your questions openly. That’s totally understandable. We’ve created a confidential line where you can have all your questions answered anonymously and in private.
      </p>
      {props.supreme ? (
        <a href="mailto:letstalk@centra.ca">
          <button
            className={
              styles.consultantButton
            }
          >
            <p
              className={

                styles.consultantButtonText
              }
            >
              Contact our Anonymous Line
            </p>
          </button>
        </a>
      ) : (
        null
      )}
    </div>
  );
}
