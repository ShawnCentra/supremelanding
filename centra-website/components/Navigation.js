import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.scss";
import { Navbar, Nav } from "react-bootstrap";
import useWindowSize from "../utility/useWindowSize";
import { useOnClickOutside } from "../utility/useOnClickOutside";
import { Turn as Hamburger } from "hamburger-react";

//To set new mobile nav
//1.add mobile nav links section
//2. update mobilenav state with new menu nav link pages
//3. reference the state and render according menu using mobileNav.services for ex
export default function Navigation({ blackNavbar, whyRef, cultureRef, ownershipRef, caresRef, faqRef }) {
  const size = useWindowSize();


  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isSelected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  //[ family , windows, doors, services, pros ]


  const [mobileNav, setMobileNav] = useState({
    family: false,
    careers: false,
    windows: false,
    windowType: false,
    collectionType: false,
    doors: false,
    doorsType: false,
    doorsCollection: false,
    services: false,
    pros: false,
    buy: false,
  });


  //if user scrolls down 80pixels, change the navbars styling
  const changeBackground = () => {
    if (window.location.pathname == "/policy" || window.scrollY >= 80) {
      setNavbar(true);

    } else if (
      window.location.pathname == "/windows/casement" ||
      window.location.pathname == "/windows/awning" ||
      window.location.pathname == "/windows/sliding" ||
      window.location.pathname == "/windows/baybow" ||
      window.location.pathname == "/windows/custom-shapes" ||
      window.location.pathname == "/windows/picture-product" ||
      window.location.pathname == "/installation-2700" ||
      window.location.pathname == "/installation-5200" ||
      window.location.pathname == "/installation-experience" ||
      window.location.pathname == "/installation-standard"
    ) {
      setNavbar(false);

    } else {
      setNavbar(false);

    }
  };


  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    if (window.location.pathname == "/policy/") {
      setNavbar(true);
    }

    if (
      window.location.pathname == "/windows/casement/" ||
      window.location.pathname == "/windows/awning/" ||
      window.location.pathname == "/windows/sliding/" ||
      window.location.pathname == "/windows/baybow/" ||
      window.location.pathname == "/windows/custom-shapes/" ||
      window.location.pathname == "/windows/picture-product/" ||
      window.location.pathname == "/installation-2700/" ||
      window.location.pathname == "/installation-5200/" ||
      window.location.pathname == "/installation-experience/" ||
      window.location.pathname == "/installation-standard/"
    ) {
      setBlackNavbar(true);
    }
  }, []);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop, { behavior: 'smooth' })
  const executeScrollWhy = () => scrollToRef(whyRef)

  const scrollToCultureRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 180)
  const executeScrollCulture = () => scrollToCultureRef(cultureRef)

  const executeScrollOwnership = () => scrollToRef(ownershipRef)

  const executeScrollCares = () => scrollToRef(caresRef)

  const scrollToFaqRef = (ref) => window.scrollTo(0, ref.current.offsetTop + 80)
  const executeScrollFaq = () => scrollToFaqRef(faqRef)

  const scrollToFaqRefMobile = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const executeScrollFaqMobile = () => scrollToFaqRefMobile(faqRef)

  return (
    <>
      <Navbar
        expanded={expanded}

        className={
          navbar
            ? styles.scrolledNavbar +
            " " +
            styles.navBar +
            " " +
            styles.stickyNavbar
            : styles.navBar + " " + styles.stickyNavbar
        }
        expand="lg"
      >

        <Navbar.Brand className={styles.navTitle + " ml-4"} href="/">
          {size.width > 990 ? (
            <img
              className={styles.logo}
              src={
                blackNavbar && !navbar
                  ? "/images/centra_supreme_logo.png"
                  : "/images/centra_supreme_logo.png"
              }
              alt="Centra Logo"
            />
          ) : (
            <img
              className={styles.logo}
              src={"/images/centra_supreme_logo.png"}
              alt="Centra Logo"
            />
          )}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.toggleIcon}
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <Hamburger
            toggled={isOpen}
            toggle={() => setIsOpen((prevState) => !prevState)}
            color="#FFF"
          />
        </Navbar.Toggle>
        <Navbar.Collapse
          className={styles.basicNavbar + " " + "ml-5"}
          id="basic-navbar-nav"
        >
          <Nav className={styles.navbarContainer + " " + "mr-auto"}>
            {size.width > 990 || size.width === undefined ? (
              <>
                <div
                  onClick={executeScrollWhy}
                  className={
                    isSelected[0]
                      ? styles.selected + " " + styles.dropdown + " mr-5"
                      : styles.dropdown + " mr-5"
                  }
                >
                  <button
                    className={
                      blackNavbar && !navbar
                        ? styles.dropbtn + " " + styles.blackText
                        : styles.dropbtn
                    }
                  >
                    {size.width < 1180 ? "Why Supreme Windows" : "Why Supreme Windows"}
                  </button>

                </div>

                <div
                  className={
                    isSelected[1]
                      ? styles.selected + " " + styles.dropdown + " mr-5"
                      : styles.dropdown + " mr-5"
                  }
                  onClick={executeScrollCulture}
                >
                  <button
                    className={
                      blackNavbar && !navbar ? styles.dropbtn + " " + styles.blackText
                        : styles.dropbtn
                    }
                  >
                    Centra Culture
                  </button>

                </div>

                <div
                  className={
                    isSelected[2]
                      ? styles.selected + " " + styles.dropdown + " mr-5"
                      : styles.dropdown + " mr-5"
                  }
                  onClick={executeScrollOwnership}
                >
                  <button
                    className={
                      blackNavbar && !navbar ? styles.dropbtn + " " + styles.blackText
                        : styles.dropbtn
                    }
                  >
                    Employee Ownership
                  </button>

                </div>

                <div
                  className={
                    isSelected[3]
                      ? styles.selected + " " + styles.dropdown + " mr-5"
                      : styles.dropdown + " mr-5"
                  }
                  onClick={executeScrollCares}
                >
                  <button
                    className={
                      blackNavbar && !navbar ? styles.dropbtn + " " + styles.blackText
                        : styles.dropbtn
                    }
                  >
                    Supreme Cares
                  </button>

                </div>

                <div
                  className={
                    isSelected[4]
                      ? styles.selected + " " + styles.dropdown + " mr-5"
                      : styles.dropdown + " mr-5"
                  }
                  onClick={executeScrollFaq}
                >
                  <button
                    className={
                      blackNavbar && !navbar ? styles.dropbtn + " " + styles.blackText
                        : styles.dropbtn
                    }
                  >
                    FAQ
                  </button>

                </div>


              </>
            ) : (
              <>
                {/* main */}
                {size.width < 990 ? (
                  <div className={styles.mobileContainer}>
                    <h2
                      className={
                        styles.megamenuSubtitle + " " + styles.subtitleMargin
                      }
                    >
                      MENU
                    </h2>
                    <div className={styles.mobileDivider} />

                    <a
                      onClick={() => {
                        setIsOpen((prevState) => !prevState);
                        setExpanded(false);

                        setTimeout(
                          () => executeScrollWhy(),
                          700
                        );

                      }}
                      className={
                        styles.dropdown +
                        " mr-5 " +
                        " " +
                        styles.mobileDropdownMargins
                      }
                    >
                      <button
                        className={styles.dropbtn + " " + styles.blackText}
                      >
                        Why Supreme Windows
                      </button>
                    </a>
                    <div className={styles.mobileDivider} />

                    <a
                      onClick={() => {
                        setIsOpen((prevState) => !prevState);
                        setExpanded(false);

                        setTimeout(
                          () => executeScrollCulture(),
                          700
                        );

                      }}
                      className={
                        styles.dropdown +
                        " mr-5 " +
                        " " +
                        styles.mobileDropdownMargins
                      }
                    >
                      <button
                        className={styles.dropbtn + " " + styles.blackText}
                      >
                        Centra Culture
                      </button>
                    </a>
                    <div className={styles.mobileDivider} />

                    <a
                      onClick={() => {
                        setIsOpen((prevState) => !prevState);
                        setExpanded(false);

                        setTimeout(
                          () => executeScrollOwnership(),
                          700
                        );

                      }}
                      className={
                        styles.dropdown +
                        " mr-5 " +
                        " " +
                        styles.mobileDropdownMargins
                      }
                    >
                      <button
                        className={styles.dropbtn + " " + styles.blackText}
                      >
                        Employee Ownership
                      </button>
                    </a>
                    <div className={styles.mobileDivider} />
                    <a
                      onClick={() => {
                        setIsOpen((prevState) => !prevState);
                        setExpanded(false);

                        setTimeout(
                          () => executeScrollCares(),
                          700
                        );

                      }}
                      className={
                        styles.dropdown +
                        " mr-5 " +
                        " " +
                        styles.mobileDropdownMargins
                      }
                    >
                      <button
                        className={styles.dropbtn + " " + styles.blackText}
                      >
                        Supreme Cares
                      </button>
                    </a>
                    <div className={styles.mobileDivider} />
                    <a
                      onClick={() => {
                        setIsOpen((prevState) => !prevState);
                        setExpanded(false);

                        setTimeout(
                          () => size.width < 960 ? executeScrollFaqMobile() : executeScrollFaq(),
                          700
                        );

                      }}
                      className={
                        styles.dropdown +
                        " mr-5 " +
                        " " +
                        styles.mobileDropdownMargins
                      }
                    >
                      <button
                        className={styles.dropbtn + " " + styles.blackText}
                      >
                        FAQ
                      </button>
                    </a>
                    <div className={styles.mobileDivider} />

                  </div>
                ) : null}
                <div style={{ height: "200px" }} />
              </>
            )}
          </Nav>

        </Navbar.Collapse>
        {/* Centra family Mega menu DESKTOP */}


      </Navbar>
    </>
  );
}
