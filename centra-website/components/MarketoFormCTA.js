import React from "react";
import MarketoForm from "./Marketo";
//style
import styles from "./MarketoFormCTA.module.scss";

const MarketoFormCTA = (props) => {

  return (
    <div className={styles.newsletterContainer}>
      <img
        loading="lazy"
        src="/images/windows_geek_logo.webp"
        alt="centra family seal icon"
        width="152"
        height="152"
        className={styles.SealImageNewsletter}
      />
      <p className={styles.newsletterTitle}>
        Sign up for the Window Geek newsletter
      </p>
      <p className={styles.newsletterText}>
        Don’t miss out on industry trends, events, CPD accredited courses, and
        window updates.
      </p>
      <MarketoForm formId={props.id} />
    </div>
  );
};

export default MarketoFormCTA;
