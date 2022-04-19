import React, { useState } from "react";
import styles from "./Footer.module.scss";

//Cookie Policy Pop up
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

export default function Footer(props) {
  const runMarketoScript = () => {
    if (getCookieConsentValue()) {
      var didInit = false;
      function initMunchkin() {
        if (didInit === false) {
          didInit = true;
          Munchkin.init("748-KKO-677");
        }
      }
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "//munchkin.marketo.net/munchkin.js";
      s.onreadystatechange = function () {
        if (this.readyState == "complete" || this.readyState == "loaded") {
          initMunchkin();
        }
      };
      s.onload = initMunchkin;
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };

  //footer expansion on click for mobile
  const [showroomActive, setShowroomActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const [careActive, setCareActive] = useState(false);
  const [helpActive, setHelpActive] = useState(false);
  const [careersActive, setCareersActive] = useState(false);
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        style={{
          background: "rgb(14 58 103)",
          borderTop: "3px solid #F2FF56",
          padding: "20px",
        }}
        buttonStyle={{
          background: `rgb(193 42 42 / 0%)`,
          border: `2px solid #F2FF56!important`,
          borderRadius: `0px`,
          boxShadow: `none`,
          color: `#F2FF56`,
        }}
        buttonClasses="acceptButton"
        declineButtonClasses="declineButton"
        expires={150}
        onAccept={() => runMarketoScript()}
      >
        We use cookies to improve your experience on our website and to show you
        relevant products and advertising. To find out more please refer to our
        <a
          href="/privacy-policy"
          style={{
            color: "#F2FF56",
            textDecoration: "underline",
            padding: "0px 5px 0px 5px",
          }}
        >
          Privacy Policy.
        </a>
      </CookieConsent>
      <div>
        <footer className={styles.footerContainer}>
          {/* desktop then mobile */}
          {props.size.width > 1100 ? (
            <>
              <div className={styles.footerTitleContainer}>
                <h2 className={styles.footerTitle}>How can we help?</h2>
                <img
                  loading="lazy"
                  alt="slanted white arrow pointing downwards"
                  src="/images/slantedArrow.webp"
                  width="90"
                  height="71"
                  className={styles.footerImg}
                />
              </div>
              <div className={styles.footerLinkContainer}>
                <div className={styles.footerLinkColumn}>
                  <p className={styles.footerLinkTitle}>SHOWROOMS</p>
                  <a className={styles.footerLinkText} href="/Langley">
                    Langley
                  </a>
                  <a className={styles.footerLinkText} href="/Victoria">
                    Victoria
                  </a>
                  <a className={styles.footerLinkText} href="/Nanaimo">
                    Nanaimo
                  </a>
                  <a className={styles.footerLinkText} href="/Kelowna">
                    Kelowna
                  </a>
                </div>
                <div className={styles.footerLinkColumn}>
                  <p className={styles.footerLinkTitle}>CONTACT US</p>
                  <a className={styles.footerLinkText} href="/get-quote">
                    Get a quote
                  </a>
                  <a className={styles.footerLinkText} href="/service-request">
                    Book a service
                  </a>
                  <a className={styles.footerLinkText} href="/pay-bills-online">
                    Pay bills online
                  </a>
                </div>
                <div className={styles.footerLinkColumn}>
                  <p className={styles.footerLinkTitle}>CUSTOMER CARE</p>

                  <a className={styles.footerLinkText} href="/blog">
                    Blog
                  </a>
                  <a className={styles.footerLinkText} href="/brochures">
                    Brochures
                  </a>
                  <a className={styles.footerLinkText} href="/promotions">
                    Promotions & Grants
                  </a>
                  <a className={styles.footerLinkText} href="/events">
                    Webinars & Events
                  </a>
                  <a className={styles.footerLinkText} href="/financing">
                    Financing options
                  </a>
                  <a className={styles.footerLinkText} href="/safety">
                    Safety Policy
                  </a>
                </div>
                <div className={styles.footerLinkColumn}>
                  <p className={styles.footerLinkTitle}>HELP</p>
                  <a className={styles.footerLinkText} href="/help">
                    How can we help?
                  </a>
                  <a className={styles.footerLinkText} href="/how-to-buy">
                    How to buy
                  </a>
                  <a className={styles.footerLinkText} href="/window-terms">
                    Window terms
                  </a>
                  <a className={styles.footerLinkText} href="/academy">
                    Maintenance Videos
                  </a>

                  <a className={styles.footerLinkText} href="/how-to-remeasure">
                    How to measure
                  </a>
                </div>
                <div className={styles.footerLinkColumn}>
                  <p className={styles.footerLinkTitle}>CAREERS</p>
                  <a className={styles.footerLinkText} href="/careers">
                    Working at Centra
                  </a>
                  <a
                    className={styles.footerLinkText}
                    href="/careers/current-openings"
                  >
                    Current Openings
                  </a>
                </div>
              </div>
              <div className={styles.footerBottomLinksContainer}>
                <img
                  src={"/images/whiteLogo.webp"}
                  className={styles.footerLogo}
                  alt="Centra Logo"
                />
                <p className={styles.footerText}>©2022 Centra</p>
                {/* <p className={styles.footerText}>Terms & Conditions</p> */}
                <a href="/privacy-policy" className={styles.footerText}>
                  Privacy
                </a>
                {/* <p className={styles.footerText}>Legal</p> */}
                <div>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/centrawindows/"
                  >
                    <img
                      alt="facebook logo"
                      src="/images/facebookIcon.webp"
                      width="36"
                      height="36"
                      className={styles.socialMediaLogos}
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.pinterest.ca/centrawindows/"
                  >
                    <img
                      alt="pinterest logo"
                      src="/images/Pinterest_white.webp"
                      width="36"
                      height="36"
                      className={styles.socialMediaLogos}
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/centrawindows/"
                  >
                    <img
                      alt="instagram logo"
                      src="/images/instagramIcon.webp"
                      width="36"
                      height="36"
                      className={styles.socialMediaLogos}
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/centra "
                  >
                    <img
                      alt="linkedIn logo"
                      src="/images/linkedinIcon.webp"
                      width="36"
                      height="36"
                      className={styles.socialMediaLogos}
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCcPXN5wQgJC7T8gQSYAuUew"
                  >
                    <img
                      alt="youtube logo"
                      src="/images/youtubeIcon.webp"
                      width="36"
                      height="36"
                      className={styles.socialMediaLogos}
                    />
                  </a>
                  <a target="_blank" href="https://twitter.com/CentraWindows">
                    <img
                      alt="twitter logo"
                      src="/images/twitterIcon.webp"
                      width="36"
                      height="36"
                      className={styles.socialMediaLogos}
                    />
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.footerTitleContainer}>
                <h2 className={styles.footerTitle}>How can we help?</h2>
                <img
                  src="/images/white-arrow.webp"
                  alt="white arrow"
                  className={styles.whiteArrow}
                />
              </div>

              <div
                className={styles.footerLinkTitleContainer}
                onClick={() => setShowroomActive((prevState) => !prevState)}
              >
                <p className={styles.footerLinkTitle}>SHOWROOMS</p>
                <p className={styles.footerPlus}>+</p>
              </div>
              <div className={styles.innerLinkContainer}>
                <div
                  className={
                    showroomActive ? styles.displayDiv : styles.hideDiv
                  }
                >
                  <a className={styles.footerLinkText} href="/Langley">
                    Langley
                  </a>
                  <a className={styles.footerLinkText} href="/Victoria">
                    Victoria
                  </a>
                  <a className={styles.footerLinkText} href="/Nanaimo">
                    Nanaimo
                  </a>
                  <a className={styles.footerLinkText} href="/Kelowna">
                    Kelowna
                  </a>
                </div>
              </div>

              <div
                className={styles.footerLinkTitleContainer}
                onClick={() => setContactActive((prevState) => !prevState)}
              >
                <p className={styles.footerLinkTitle}>CONTACT US</p>
                <p className={styles.footerPlus}>+</p>
              </div>
              <div className={styles.innerLinkContainer}>
                <div
                  className={contactActive ? styles.displayDiv : styles.hideDiv}
                >
                  <a className={styles.footerLinkText} href="/get-quote">
                    Get a quote
                  </a>
                  <a className={styles.footerLinkText} href="/service-request">
                    Book a service
                  </a>
                  <a className={styles.footerLinkText} href="/pay-bills-online">
                    Pay bills online
                  </a>
                </div>
              </div>

              <div
                className={styles.footerLinkTitleContainer}
                onClick={() => setCareActive((prevState) => !prevState)}
              >
                <p className={styles.footerLinkTitle}>CUSTOMER CARE</p>
                <p className={styles.footerPlus}>+</p>
              </div>
              <div className={styles.innerLinkContainer}>
                <div
                  className={careActive ? styles.displayDiv : styles.hideDiv}
                >
                  <a className={styles.footerLinkText} href="/blog">
                    Blog
                  </a>
                  <a className={styles.footerLinkText} href="/brochures">
                    Brochures
                  </a>
                  <a className={styles.footerLinkText} href="/promotions">
                    Promotions & Grants
                  </a>
                  <a className={styles.footerLinkText} href="/events">
                    Webinars & Events
                  </a>
                  <a className={styles.footerLinkText} href="/financing">
                    Financing options
                  </a>
                  <a className={styles.footerLinkText} href="/safety">
                    Safety Policy
                  </a>
                </div>
              </div>

              <div
                className={styles.footerLinkTitleContainer}
                onClick={() => setHelpActive((prevState) => !prevState)}
              >
                <p className={styles.footerLinkTitle}>HELP</p>
                <p className={styles.footerPlus}>+</p>
              </div>
              <div className={styles.innerLinkContainer}>
                <div
                  className={helpActive ? styles.displayDiv : styles.hideDiv}
                >
                  <a className={styles.footerLinkText} href="/help">
                    How can we help?
                  </a>
                  <a className={styles.footerLinkText} href="/how-to-buy">
                    How to buy
                  </a>
                  <a className={styles.footerLinkText} href="/window-terms">
                    Window terms
                  </a>
                  <a className={styles.footerLinkText} href="/academy">
                    Maintenance Videos
                  </a>

                  <a className={styles.footerLinkText} href="/how-to-remeasure">
                    How to measure
                  </a>
                </div>
              </div>

              <div
                className={styles.footerLinkTitleContainer}
                onClick={() => setCareersActive((prevState) => !prevState)}
              >
                <p className={styles.footerLinkTitle}>WORKING AT CENTRA</p>
                <p className={styles.footerPlus}>+</p>
              </div>
              <div className={styles.innerLinkContainer}>
                <div
                  className={careersActive ? styles.displayDiv : styles.hideDiv}
                >
                  <a className={styles.footerLinkText} href="/careers">
                    Working at Centra
                  </a>
                  <a
                    className={styles.footerLinkText}
                    href="/careers/current-openings"
                  >
                    Current Openings
                  </a>
                  <a className={styles.footerLinkText} href="/brochures">
                    Employee ownership
                  </a>
                </div>
              </div>

              <div className={styles.footerBottomLinksContainer}>
                <div className={styles.footerImagesContainer}>
                  <a href="https://www.facebook.com/centrawindows/">
                    <img
                      target="_blank"
                      alt="facebook logo"
                      src="/images/facebookIcon.webp"
                      width="36"
                      height="36"
                      className={styles.socialMediaLogos}
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.pinterest.ca/centrawindows/"
                  >
                    <img
                      alt="pinterest logo"
                      src="/images/Pinterest_white.webp"
                      width="36"
                      height="36"
                      className={styles.socialMediaLogos}
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/centrawindows/"
                  >
                    <img
                      alt="instagram logo"
                      src="/images/instagramIcon.webp"
                      width="36"
                      height="36"
                      className={styles.socialMediaLogos}
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/centra"
                  >
                    <img
                      alt="linkedIn logo"
                      src="/images/linkedinIcon.webp"
                      width="36"
                      height="36"
                      className={styles.socialMediaLogos}
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCcPXN5wQgJC7T8gQSYAuUew"
                  >
                    <img
                      alt="youtube logo"
                      src="/images/youtubeIcon.webp"
                      width="36"
                      height="36"
                      className={styles.socialMediaLogos}
                    />
                  </a>
                  <a target="_blank" href="https://twitter.com/CentraWindows">
                    <img
                      alt="twitter logo"
                      src="/images/twitterIcon.webp"
                      width="36"
                      height="36"
                      className={styles.socialMediaLogos}
                    />
                  </a>
                </div>
                <div className={styles.spacer}></div>
                <p className={styles.footerText}>©2022 Centra</p>
                <div className={styles.spacer}></div>
                {/* <p className={styles.footerText}>Terms & Conditions</p> */}
                <a href="/privacy-policy" className={styles.footerText}>
                  Privacy
                </a>
                {/* <p className={styles.footerText}>Legal</p> */}
              </div>
            </>
          )}
        </footer>
      </div>
    </>
  );
}
