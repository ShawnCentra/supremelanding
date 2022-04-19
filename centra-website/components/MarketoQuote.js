import MarketoForm from "./Marketo";
//style
import styles from "./MarketoQuote.module.scss";
import React, { useState, useEffect } from "react";

const marketoScriptId = "mktoForms";

export default function MarketoQuote(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    //check if the script is already on the page - if not, load it onto the page
    if (!document.getElementById(marketoScriptId)) {
      loadScript();
    } else {
      setIsLoaded(true);
    }
  }, []);

  //load the first form
  useEffect(() => {
    isLoaded &&
      window?.MktoForms2?.loadForm(
        "//app-ab28.marketo.com",
        "748-KKO-677",
        props.id
      );
  }, [isLoaded, props.id]);

  //load the second form
  useEffect(() => {
    isLoaded &&
      window?.MktoForms2?.loadForm(
        "//app-ab28.marketo.com",
        "748-KKO-677",
        props.cta
      );
  }, [isLoaded, props.cta]);

  //loads script onto page
  const loadScript = () => {
    var s = document.createElement("script");
    s.id = marketoScriptId;
    s.type = "text/javascript";
    s.async = true;
    s.src = "//app-ab28.marketo.com/js/forms2/js/forms2.min.js";
    s.onreadystatechange = function () {
      if (this.readyState === "complete" || this.readyState === "loaded") {
        setIsLoaded(true);
      }
    };
    s.onload = () => setIsLoaded(true);
    document.getElementsByTagName("head")[0].appendChild(s);
  };
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formQuoteContainer}>
          <p className={styles.formQuoteImgTitle}>
            {props.request
              ? "Request a Free Project Quote"
              : "Choose your preferred consultation:"}
          </p>
          <form id={`mktoForm_${props.id}`}></form>
        </div>
      </div>

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
        Sign up for our Window Geeks newsletter
        </p>
        <p className={styles.newsletterText}>
        Don’t miss out on industry trends, events, courses, and window updates.
        </p>
        <div>
          <form id={`mktoForm_${props.cta}`}></form>
        </div>
      </div>
    </>
  );
}
