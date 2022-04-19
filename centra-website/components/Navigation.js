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
export default function Navigation({ blackNavbar }) {
  const size = useWindowSize();

  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isSelected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  //[ family , windows, doors, services, pros ]
  const [megamenu, setMegamenu] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [picture, setPicture] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

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

  const [throwback, setThrowback] = useState(false);

  const backtoMainMenu = (value) => {
    if (value === "reset") {
      setMobileNav({
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
      setThrowback(false);
      return;
    }
    if (mobileNav.windowType === true) {
      setMobileNav({
        family: false,
        careers: false,
        windows: true,
        windowType: false,
        collectionType: false,
        doors: false,
        doorsType: false,
        doorsCollection: false,
        services: false,
        pros: false,
        buy: false,
      });
      return;
    }

    if (mobileNav.collectionType === true) {
      setMobileNav({
        family: false,
        careers: false,
        windows: true,
        windowType: false,
        collectionType: false,
        doors: false,
        doorsType: false,
        doorsCollection: false,
        services: false,
        pros: false,
        buy: false,
      });
      return;
    }

    if (mobileNav.doorsType === true) {
      setMobileNav({
        family: false,
        careers: false,
        windows: false,
        windowType: false,
        collectionType: false,
        doors: true,
        doorsType: false,
        doorsCollection: false,
        services: false,
        pros: false,
        buy: false,
      });
      return;
    }

    if (mobileNav.doorsCollection === true) {
      setMobileNav({
        family: false,
        careers: false,
        windows: false,
        windowType: false,
        collectionType: false,
        doors: true,
        doorsType: false,
        doorsCollection: false,
        services: false,
        pros: false,
        buy: false,
      });
      return;
    }

    if (mobileNav.pros === true) {
      setMobileNav({
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
      return;
    }

    if (mobileNav.buy === true) {
      setMobileNav({
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
      return;
    }
    setMobileNav({
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
    setThrowback(false);
  };

  //if goMain isn't supplied, this won't take you back to the main menu.
  //this changes mobileNav to boolean values that translate specific off-screen windows onto the screen.
  // ex: "services" : true shows services mobile menu
  // if you're nested in a mobile navigation menu, make false the menu shown and true to the value wanting to be shown in two calls of this function.
  const changeMobileMenu = (name, value, goMain) => {
    setMobileNav((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setThrowback(true);
    if (goMain) {
      setThrowback(false);
    }
  };

  //close menu when user clicks outside the navbar region
  const ref = useRef();
  useOnClickOutside(ref, () => changeMegamenu(0));

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
  const changeMegamenu = (value) => {
    if (value == 1) {
      if (megamenu[0] != true) {
        setMegamenu([true, false, false, false, false, false]);
        setSelected([true, false, false, false, false, false]);
        return;
      }
      setMegamenu([false, false, false, false, false, false]);
      setSelected([false, false, false, false, false, false]);
      return;
    }

    if (value == 2) {
      if (megamenu[1] != true) {
        setMegamenu([false, true, false, false, false, false]);
        setSelected([false, true, false, false, false, false]);
        return;
      }
      setMegamenu([false, false, false, false, false, false]);
      setSelected([false, false, false, false, false, false]);
      return;
    }

    if (value == 3) {
      if (megamenu[2] != true) {
        setMegamenu([false, false, true, false, false, false]);
        setSelected([false, false, true, false, false, false]);
        return;
      }
      setMegamenu([false, false, false, false, false, false]);
      setSelected([false, false, false, false, false, false]);
      return;
    }

    if (value == 4) {
      if (megamenu[3] != true) {
        setMegamenu([false, false, false, true, false, false]);
        setSelected([false, false, false, true, false, false]);
        return;
      }
      setMegamenu([false, false, false, false, false, false]);
      setSelected([false, false, false, false, false, false]);
      return;
    }

    if (value == 5) {
      if (megamenu[4] != true) {
        setMegamenu([false, false, false, false, true, false]);
        setSelected([false, false, false, false, true, false]);
        return;
      }
      setMegamenu([false, false, false, false, false, false]);
      setSelected([false, false, false, false, false, false]);
      return;
    }

    if (value == 6) {
      if (megamenu[5] != true) {
        setMegamenu([false, false, false, false, false, true]);
        setSelected([false, false, false, false, false, true]);
        return;
      }
      setMegamenu([false, false, false, false, false, false]);
      setSelected([false, false, false, false, false, false]);
      return;
    }

    if (value == 0) {
      setMegamenu([false, false, false, false, false, false]);
      setSelected([false, false, false, false, false, false]);
      return;
    }
  };

  const changePicture = (value) => {
    if (value == 0) {
      return setPicture([true, false, false, false, false, false]);
    }
    if (value == 1) {
      return setPicture([true, false, false, false, false, false]);
    }
    if (value == 2) {
      return setPicture([false, true, false, false, false, false]);
    }

    if (value == 3) {
      return setPicture([false, false, true, false, false, false]);
    }
    if (value == 4) {
      return setPicture([false, false, false, true, false, false]);
    }
    if (value == 5) {
      return setPicture([false, false, false, false, true, false]);
    }
    if (value == 6) {
      return setPicture([false, false, false, false, false, true]);
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

  return (
    <>
      <Navbar
        ref={ref}
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
        <div className={styles.backButtonContainer}>
          {(throwback === true) & (size.width < 990) ? (
            <button
              onClick={() => backtoMainMenu()}
              className={styles.backMobile}
            >
              <img
                className={styles.backArrow}
                src={"/images/backArrow.webp"}
                alt="back arrow"
                width="26"
                height="26"
              />
            </button>
          ) : null}
        </div>
        <Navbar.Brand className={styles.navTitle + " ml-4"} href="/">
          {size.width > 990 ? (
            <img
              className={styles.logo}
              src={
                blackNavbar && !navbar
                  ? "/images/blueLogo.webp"
                  : "/images/whiteLogo.webp"
              }
              alt="Centra Logo"
            />
          ) : (
            <img
              className={styles.logo}
              src={"/images/whiteLogo.webp"}
              alt="Centra Logo"
            />
          )}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.toggleIcon}
          onClick={() => backtoMainMenu("reset")}
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
                  onClick={() => changeMegamenu(1)}
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
                    {size.width< 1180 ?"Centra Family" : "The Centra Family"}
                  </button>
                  <img
                    src={
                           blackNavbar && !navbar ? "/images/productDetail/downBlackArrow.webp"
                        : "/images/Path.webp"
                    }
                    alt="drop down arrow"
                    width="12"
                    height="12"
                    className={styles.arrownDownIcon}
                  />
                </div>

                <div
                  className={
                    isSelected[1]
                      ? styles.selected + " " + styles.dropdown + " mr-5"
                      : styles.dropdown + " mr-5"
                  }
                  onClick={() => changeMegamenu(2)}
                >
                  <button
                    className={
                           blackNavbar && !navbar ? styles.dropbtn + " " + styles.blackText
                        : styles.dropbtn
                    }
                  >
                    Windows
                  </button>
                  <img
                    src={
                           blackNavbar && !navbar ? "/images/productDetail/downBlackArrow.webp"
                        : "/images/Path.webp"
                    }
                    alt="drop down arrow"
                    width="12"
                    height="12"
                    className={styles.arrownDownIcon}
                  />
                </div>

                <div
                  className={
                    isSelected[2]
                      ? styles.selected + " " + styles.dropdown + " mr-5"
                      : styles.dropdown + " mr-5"
                  }
                  onClick={() => changeMegamenu(3)}
                >
                  <button
                    className={
                           blackNavbar && !navbar ? styles.dropbtn + " " + styles.blackText
                        : styles.dropbtn
                    }
                  >
                    Doors
                  </button>
                  <img
                    src={
                           blackNavbar && !navbar ? "/images/productDetail/downBlackArrow.webp"
                        : "/images/Path.webp"
                    }
                    alt="drop down arrow"
                    width="12"
                    height="12"
                    className={styles.arrownDownIcon}
                  />
                </div>

                <div
                  className={
                    isSelected[3]
                      ? styles.selected + " " + styles.dropdown + " mr-5"
                      : styles.dropdown + " mr-5"
                  }
                  onClick={() => changeMegamenu(4)}
                >
                  <button
                    className={
                           blackNavbar && !navbar ? styles.dropbtn + " " + styles.blackText
                        : styles.dropbtn
                    }
                  >
                    Services
                  </button>
                  <img
                    src={
                           blackNavbar && !navbar ? "/images/productDetail/downBlackArrow.webp"
                        : "/images/Path.webp"
                    }
                    alt="drop down arrow"
                    width="12"
                    height="12"
                    className={styles.arrownDownIcon}
                  />
                </div>

                <div
                  className={
                    isSelected[4]
                      ? styles.selected + " " + styles.dropdown + " mr-5"
                      : styles.dropdown + " mr-5"
                  }
                  onClick={() => changeMegamenu(5)}
                >
                  <button
                    className={
                           blackNavbar && !navbar ? styles.dropbtn + " " + styles.blackText
                        : styles.dropbtn
                    }
                  >
                                       {size.width< 1180 ?"Pros" : "For Pros"} 
                  </button>
                  <img
                    src={
                           blackNavbar && !navbar ? "/images/productDetail/downBlackArrow.webp"
                        : "/images/Path.webp"
                    }
                    alt="drop down arrow"
                    width="12"
                    height="12"
                    className={styles.arrownDownIcon}
                  />
                </div>

                <div
                  className={
                    isSelected[5]
                      ? styles.selected + " " + styles.dropdown + " mr-5"
                      : styles.dropdown + " mr-5"
                  }
                >
                  <a href="/how-to-buy">
                    <button
                      className={
                        blackNavbar && !navbar
                          ? styles.dropbtn + " " + styles.blackText
                          : styles.dropbtn
                      }
                    >
                      How to Buy
                    </button>
                  </a>
                </div>
              </>
            ) : (
              <>
                {/* centra family */}
                <div
                  className={
                    mobileNav.family === true
                      ? styles.mobileContainerSlide + " " + styles.showTop
                      : styles.mobileContainerSlide
                  }
                >
                  <h2
                    className={
                      styles.megamenuSubtitle + " " + styles.subtitleMargin
                    }
                  >
                    THE CENTRA FAMILY
                  </h2>{" "}
                  <div className={styles.mobileDivider} />
                  <a
                    href="/family"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Family
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/careers"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Careers
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/centra-cares"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Centra Cares
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/contact-us"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Contact Us
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <div style={{ height: "200px" }} />
                </div>
                {/* doors  */}
                <div
                  className={
                    mobileNav.doors === true
                      ? styles.mobileContainerSlide + " " + styles.showTop
                      : styles.mobileContainerSlide
                  }
                >
                  <h2
                    className={
                      styles.megamenuSubtitle + " " + styles.subtitleMargin
                    }
                  >
                    DOORS
                  </h2>{" "}
                  <div className={styles.mobileDivider} />
                  <a
                    href="/doors"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      All Doors
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <div
                    onClick={() => changeMobileMenu("doorsType", true)}
                    className={
                      styles.dropdown +
                      " mr-5 " +
                      " " +
                      styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      By Door Type
                    </button>
                    <img
                      src={"/images/rightArrow.webp"}
                      alt="drop down arrow"
                      width="12"
                      height="12"
                    />
                  </div>
                  <div className={styles.mobileDivider} />
                  <div
                    onClick={() => changeMobileMenu("doorsCollection", true)}
                    className={
                      styles.dropdown +
                      " mr-5 " +
                      " " +
                      styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      By Collection Type
                    </button>
                    <img
                      src={"/images/rightArrow.webp"}
                      alt="drop down arrow"
                      width="12"
                      height="12"
                    />
                  </div>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/doors/inspiration"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Window Inspiration
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <div style={{ height: "200px" }} />
                </div>
                {/* door types  */}
                <div
                  className={
                    mobileNav.doorsType === true
                      ? styles.mobileContainerSlide +
                        " " +
                        styles.nestedCategory +
                        " " +
                        styles.showTop
                      : styles.mobileContainerSlide +
                        " " +
                        styles.nestedCategory
                  }
                >
                  <h2
                    className={
                      styles.megamenuSubtitle + " " + styles.subtitleMargin
                    }
                  >
                    BY DOOR TYPE
                  </h2>{" "}
                  <div className={styles.mobileDivider} />
                  <a
                    href="/doors"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      All Doors
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/doors/sliding-patio"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Sliding Patio
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/doors/french"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      French
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/doors/bifold"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Bifold
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/doors/entry"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Entry
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <div style={{ height: "200px" }} />
                </div>
                {/* door collection  */}
                <div
                  className={
                    mobileNav.doorsCollection === true
                      ? styles.mobileContainerSlide +
                        " " +
                        styles.showTop +
                        " " +
                        styles.nestedCategory
                      : styles.mobileContainerSlide +
                        " " +
                        styles.nestedCategory
                  }
                >
                  <h2
                    className={
                      styles.megamenuSubtitle + " " + styles.subtitleMargin
                    }
                  >
                    BY COLLECTION TYPE
                  </h2>{" "}
                  <div className={styles.mobileDivider} />
                  <a
                    href="/doors/sliding-patio/classic"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Classic Sliding Patio
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/doors/sliding-patio/lift-slide"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Lift & Slide Patio Slider
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/doors/french/traditional"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Traditional French Door
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/doors/french/cenergy"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Cenergy French Door
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/doors/entry"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Entry
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/doors/bifold"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Bifold
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <div style={{ height: "200px" }} />
                </div>
                {/* windows  */}
                <div
                  className={
                    mobileNav.windows === true
                      ? styles.mobileContainerSlide + " " + styles.showTop
                      : styles.mobileContainerSlide
                  }
                >
                  <h2
                    className={
                      styles.megamenuSubtitle + " " + styles.subtitleMargin
                    }
                  >
                    WINDOWS
                  </h2>{" "}
                  <div className={styles.mobileDivider} />
                  <a
                    href="/windows"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      All Windows
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <div
                    onClick={() => changeMobileMenu("windowType", true)}
                    className={
                      styles.dropdown +
                      " mr-5 " +
                      " " +
                      styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      By Window Type
                    </button>
                    <img
                      src={"/images/rightArrow.webp"}
                      alt="drop down arrow"
                      width="12"
                      height="12"
                    />
                  </div>
                  <div className={styles.mobileDivider} />
                  <div
                    onClick={() => changeMobileMenu("collectionType", true)}
                    className={
                      styles.dropdown +
                      " mr-5 " +
                      " " +
                      styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      By Collection Type
                    </button>
                    <img
                      src={"/images/rightArrow.webp"}
                      alt="drop down arrow"
                      width="12"
                      height="12"
                    />
                  </div>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/windows/inspiration"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Window Inspiration
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/windows/performance#sound"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Sound Reduction
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/windows/performance#water"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Water Control
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/windows/performance#comfort"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Comfort Control
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <div style={{ height: "200px" }} />
                </div>
                {/* window types  */}
                <div
                  className={
                    mobileNav.windowType === true
                      ? styles.mobileContainerSlide +
                        " " +
                        styles.nestedCategory +
                        " " +
                        styles.showTop
                      : styles.mobileContainerSlide +
                        " " +
                        styles.nestedCategory
                  }
                >
                  <h2
                    className={
                      styles.megamenuSubtitle + " " + styles.subtitleMargin
                    }
                  >
                    BY WINDOW TYPE
                  </h2>{" "}
                  <div className={styles.mobileDivider} />
                  <a
                    href="/windows"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      All Windows
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/windows/casement"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Casement
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/windows/awning"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Awning
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/windows/baybow"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Bay & Bow
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/windows/sliding"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Sliding
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/windows/picture-product"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Picture Product
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/windows/custom-shapes"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Custom Shapes
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <div style={{ height: "200px" }} />
                </div>
                {/* window Collection  */}
                <div
                  className={
                    mobileNav.collectionType === true
                      ? styles.mobileContainerSlide +
                        " " +
                        styles.showTop +
                        " " +
                        styles.nestedCategory
                      : styles.mobileContainerSlide +
                        " " +
                        styles.nestedCategory
                  }
                >
                  <h2
                    className={
                      styles.megamenuSubtitle + " " + styles.subtitleMargin
                    }
                  >
                    BY COLLECTION TYPE
                  </h2>{" "}
                  <div className={styles.mobileDivider} />
                  <a
                    href="/windows/modern-collection"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Modern
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/windows/traditional-collection"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Traditional
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/windows/classic-collection"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Classic
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <div style={{ height: "200px" }} />
                </div>

                {/* FOR PROS*/}
                <div
                  className={
                    mobileNav.pros === true
                      ? styles.mobileContainerSlide + " " + styles.showTop
                      : styles.mobileContainerSlide
                  }
                >
                  <h2
                    className={
                      styles.megamenuSubtitle + " " + styles.subtitleMargin
                    }
                  >
                    FOR PROS
                  </h2>{" "}
                  <div className={styles.mobileDivider} />
                  <a
                    href="/professionals"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      For Pros
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/professionals/architects-engineers"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Architects & Engineers
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/professionals/builders-developers"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Builders & Developers
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/professionals/property-management"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Property Managers
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                </div>

                {/* HOW TO BUY*/}
                <div
                  className={
                    mobileNav.buy === true
                      ? styles.mobileContainerSlide + " " + styles.showTop
                      : styles.mobileContainerSlide
                  }
                >
                  <h2
                    className={
                      styles.megamenuSubtitle + " " + styles.subtitleMargin
                    }
                  >
                    HOW TO BUY
                  </h2>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/professionals"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      How To Buy
                    </button>
                  </a>{" "}
                  <div className={styles.mobileDivider} />
                  <a
                    href="/professionals/project-quote"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Request A Quote
                    </button>
                  </a>{" "}
                  <div className={styles.mobileDivider} />
                  <a
                    href="/professionals/request-technical-specifications/"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Request Technical Specifications
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/safety/"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Safety
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/events/"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Events
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/promotions/"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Promotions
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/financing/"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Financing
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/referral-program/"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Referral Program
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/privacy-policy/"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Privacy Policy
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                  <a
                    href="/refund-policy/"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Refund Policy
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                </div>

                {/* Services*/}
                <div
                  className={
                    mobileNav.services === true
                      ? styles.mobileContainerSlide + " " + styles.showTop
                      : styles.mobileContainerSlide
                  }
                >
                  <h2
                    className={
                      styles.megamenuSubtitle + " " + styles.subtitleMargin
                    }
                  >
                    SERVICES
                  </h2>
                  <a
                    href="/services/manufacturing"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Manufacturing
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />

                  <a
                    href="/services/window-door-replacement"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Window & Door Replacement
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />

                  <a
                    href="/services/strata-installations"
                    className={
                      styles.dropdown + " mr-5 " + styles.mobileDropdownMargins
                    }
                  >
                    <button className={styles.dropbtn + " " + styles.blackText}>
                      Strata Installations
                    </button>
                  </a>
                  <div className={styles.mobileDivider} />
                </div>
                {/* main */}
                {size.width < 990 ? (
                  <div className={styles.mobileContainer}>
                    <h2
                      className={
                        styles.megamenuSubtitle + " " + styles.subtitleMargin
                      }
                    >
                      MAIN
                    </h2>
                    <div className={styles.mobileDivider} />
                    <div
                      onClick={() => changeMobileMenu("family", true)}
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
                        The Centra Family
                      </button>
                      <img
                        src={"/images/rightArrow.webp"}
                        alt="drop down arrow"
                        width="12"
                        height="12"
                      />
                    </div>
                    <div className={styles.mobileDivider} />

                    <div
                      onClick={() => changeMobileMenu("windows", true)}
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
                        Windows
                      </button>
                      <img
                        src={"/images/rightArrow.webp"}
                        alt="drop down arrow"
                        width="12"
                        height="12"
                      />
                    </div>
                    <div className={styles.mobileDivider} />
                    <div
                      onClick={() => changeMobileMenu("doors", true)}
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
                        Doors
                      </button>
                      <img
                        src={"/images/rightArrow.webp"}
                        alt="drop down arrow"
                        width="12"
                        height="12"
                      />
                    </div>
                    <div className={styles.mobileDivider} />

                    <div
                      onClick={() => changeMobileMenu("services", true)}
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
                        Services
                      </button>
                      <img
                        src={"/images/rightArrow.webp"}
                        alt="drop down arrow"
                        width="12"
                        height="12"
                      />
                    </div>
                    <div className={styles.mobileDivider} />

                    <div
                      onClick={() => changeMobileMenu("pros", true)}
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
                        For Pros
                      </button>
                      <img
                        src={"/images/rightArrow.webp"}
                        alt="drop down arrow"
                        width="12"
                        height="12"
                      />
                    </div>
                    <div className={styles.mobileDivider} />

                    <a
                      href="/how-to-buy"
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
                        How To Buy
                      </button>
                    </a>
                    <div className={styles.mobileDivider} />
                  </div>
                ) : null}
                <div style={{ height: "200px" }} />
              </>
            )}
          </Nav>
          {size.width > 992 ? (
            <div style={{ display: "flex" }}>
              {/* <Form inline>
                <FormControl
                  className={styles.searchBar + " mr-sm-2 mr-6"}
                  type="text"
                  placeholder="Search"
                />
                <Button className={styles.searchButton}>
                  <img
                    className={blackNavbar ? styles.invert : null}
                    src="/images/Search.webp"
                    alt="me"
                    width="16"
                    height="16"
                  />
                </Button>
              </Form> */}
              <a href="/get-quote" className={styles.consultantContainer}>
                <img
                  src="/images/Shape.webp"
                  className="consultImage"
                  alt="shape"
                  width="12"
                  height="12"
                />
                <p className={styles.consultantText}>BOOK A CONSULTATION</p>
              </a>
            </div>
          ) : null}
        </Navbar.Collapse>
        {/* Centra family Mega menu DESKTOP */}

        <div
          className={
            size.width > 992
              ? megamenu[0] ||
                megamenu[1] ||
                megamenu[2] ||
                megamenu[3] ||
                megamenu[4]
                ? styles.whiteContainer
                : null
              : styles.displayNone
          }
        >
          <div
            className={
              megamenu[0] && size.width > 992
                ? styles.familyMegamenu + " " + styles.showMenu
                : styles.familyMegamenu
            }
          >
            <div
              className={
                styles.megamenuContainer + " " + styles.familyContainer
              }
            >
              <h2
                className={
                  styles.megamenuTitle +
                  " " +
                  styles.familyTitle +
                  " " +
                  styles.topMargin
                }
              >
                The Centra Family
              </h2>
              <div
                className={
                  styles.flexCol +
                  " " +
                  styles.centerItems +
                  " " +
                  styles.topMargin
                }
              >
                <div style={{ height: "35px" }} />
                <a className={styles.megamenuLinks} href="/family">
                  The Centra Family
                </a>
                <div className={styles.divider} />
                <a className={styles.megamenuLinks} href="/careers">
                  Careers
                </a>
                <div className={styles.divider} />
                <a className={styles.megamenuLinks} href="/contact-us">
                  Contact Us
                </a>
                <div className={styles.divider} />
                <a className={styles.megamenuLinks} href="/help">
                  Help
                </a>
                <div className={styles.divider} />
                <a className={styles.megamenuLinks} href="/centra-cares">
                  Centra Cares
                </a>
                <div className={styles.divider} />
              </div>
              {size.width > 1100 ? (
                <img
                  src="/images/megamenu/centra_family.webp"
                  alt="centra family"
                  className={
                    megamenu[0] && size.width > 992
                      ? styles.opacity + " " + styles.megamenuImage
                      : styles.megamenuImage
                  }
                />
              ) : null}
            </div>
          </div>

          {/* Windows */}
          <div
            className={
              megamenu[1] && size.width > 992
                ? styles.familyMegamenu + " " + styles.showMenu
                : styles.familyMegamenu
            }
          >
            <div
              className={
                styles.megamenuContainer + " " + styles.firstMegamenuContainer
              }
            >
              <div className={styles.flexCol + " " + styles.topMargin}>
                <h2 className={styles.megamenuTitle}>Windows </h2>
                <a
                  className={styles.megamenuLinks + " " + styles.leftMargin}
                  href="/windows/"
                  onMouseOver={() => changePicture(1)}
                  onMouseOut={() => changePicture(0)}
                >
                  All Windows
                </a>
              </div>
            </div>

            <div className={styles.megamenuContainer}>
              <div className={styles.flexCol + " " + styles.topMargin}>
                <h2 className={styles.megamenuSubtitle}>
                  INSPIRATION & DESIGN
                </h2>

                <div className={styles.divider} />
                <a className={styles.megamenuLinks} href="/windows/inspiration">
                  Inspiration Gallery
                </a>
                <div className={styles.divider} />
                <a className={styles.megamenuLinks} href="/windows/colour">
                  Colour Options
                </a>
                <div className={styles.divider} />
                <a className={styles.megamenuLinks} href="/windows/glass">
                  Glass Technology
                </a>

                <div className={styles.divider} />

                <a className={styles.megamenuLinks} href="/windows/grids">
                  Grid Styles
                </a>

                <div className={styles.divider} />
                <h2 className={styles.megamenuSubtitle}>PERFORMANCE</h2>
                <div className={styles.divider} />
                <a
                  className={styles.megamenuLinks}
                  href="/windows/performance#sound"
                >
                  Sound Reduction
                </a>
                <div className={styles.divider} />
                <a
                  className={styles.megamenuLinks}
                  href="/windows/performance#water"
                >
                  Water Control
                </a>
                <div className={styles.divider} />
                <a
                  className={styles.megamenuLinks}
                  href="/windows/performance#comfort"
                >
                  Comfort Control
                </a>
              </div>
            </div>
            <div className={styles.megamenuContainer}>
              <div className={styles.flexCol + " " + styles.topMargin}>
                <h2 className={styles.megamenuSubtitle}>BY COLLECTION TYPE</h2>
                <div className={styles.divider} />
                <a
                  className={styles.megamenuLinks}
                  href="/windows/modern-collection"
                >
                  Modern
                </a>
                <div className={styles.divider} />
                <a
                  className={styles.megamenuLinks}
                  href="/windows/traditional-collection"
                >
                  Traditional
                </a>
                <div className={styles.divider} />
                <a
                  className={styles.megamenuLinks}
                  href="/windows/classic-collection"
                >
                  Classic
                </a>{" "}
                <div className={styles.divider} />
                {/* <a
                  className={styles.megamenuLinks}
                  href="/experience-series-brickmold"
                >
                  Experience Series Brickmold
                </a>
                <div className={styles.divider} />
                <a className={styles.megamenuLinks} href="/black-colourshield">
                  Black Colour Shield
                </a> */}
              </div>
            </div>
            <div className={styles.megamenuContainer}>
              <div className={styles.flexCol + " " + styles.topMargin}>
                <h2 className={styles.megamenuSubtitle}>BY WINDOW TYPE</h2>

                <div className={styles.divider} />
                <a
                  className={styles.megamenuLinks}
                  href="/windows/casement"
                  onMouseOver={() => changePicture(1)}
                >
                  Casement
                </a>
                <div className={styles.divider} />

                <a
                  className={styles.megamenuLinks}
                  href="/windows/awning"
                  onMouseOver={() => changePicture(2)}
                >
                  Awning
                </a>
                <div className={styles.divider} />

                <a
                  className={styles.megamenuLinks}
                  href="/windows/sliding"
                  onMouseOver={() => changePicture(3)}
                >
                  Sliding
                </a>
                <div className={styles.divider} />
                <a
                  className={styles.megamenuLinks}
                  href="/windows/baybow"
                  onMouseOver={() => changePicture(4)}
                >
                  Bay & Bow
                </a>
                <div className={styles.divider} />
                <a
                  className={styles.megamenuLinks}
                  href="/windows/picture-product"
                  onMouseOver={() => changePicture(5)}
                >
                  Picture
                </a>
                <div className={styles.divider} />

                <a
                  className={styles.megamenuLinks}
                  href="/windows/custom-shapes"
                  onMouseOver={() => changePicture(6)}
                >
                  Custom Shapes
                </a>
                <div className={styles.divider} />
              </div>
            </div>

            {size.width > 1220 ? (
              <div
                className={
                  megamenu[1]
                    ? styles.imageSection + " " + styles.show
                    : styles.imageSection
                }
              >
                <img
                  className={
                    picture[0]
                      ? styles.opacityItems + " " + styles.windowImage
                      : styles.windowImage
                  }
                  src="/images/productImages/Casement.webp"
                  alt="casement product"
                />

                <img
                  className={
                    picture[1]
                      ? styles.opacityItems + " " + styles.windowImage
                      : styles.windowImage
                  }
                  src="\images\productImages\Awning.webp"
                  alt="awning product"
                />

                <img
                  className={
                    picture[2]
                      ? styles.opacityItems + " " + styles.windowImage
                      : styles.windowImage
                  }
                  src="\images\productImages\Sliding.webp"
                  alt="sliding window product"
                />

                <img
                  className={
                    picture[3]
                      ? styles.opacityItems + " " + styles.windowImage
                      : styles.windowImage
                  }
                  src="\images\productImages\Bay.webp"
                  alt="bay and bow product"
                />

                <img
                  className={
                    picture[4]
                      ? styles.opacityItems + " " + styles.windowImage
                      : styles.windowImage
                  }
                  src="\images\productImages\Arc.webp"
                  alt="arc product"
                />

                <img
                  className={
                    picture[5]
                      ? styles.opacityItems + " " + styles.windowImage
                      : styles.windowImage
                  }
                  src="\images\productImages\Hex.webp"
                  alt="hex product"
                />
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Doors */}
          <div
            className={
              megamenu[2] && size.width > 992
                ? styles.familyMegamenu + " " + styles.showMenu
                : // +
                  // " " +
                  // styles.justifyBetween
                  styles.familyMegamenu
            }
          >
            <div
              className={
                styles.megamenuContainer + " " + styles.firstMegamenuContainer
              }
            >
              <div className={styles.flexCol + " " + styles.topMargin}>
                <h2 className={styles.megamenuTitle}>Doors </h2>
                <a
                  className={styles.megamenuLinks + " " + styles.leftMargin}
                  href="/doors/"
                >
                  All Doors
                </a>
              </div>
            </div>

            <div className={styles.megamenuContainer}>
              <div className={styles.flexCol + " " + styles.topMargin}>
                <h2 className={styles.megamenuSubtitle}>DOOR COLLECTIONS</h2>

                <div className={styles.divider} />
                <a
                  className={styles.megamenuLinks}
                  href="/doors/sliding-patio/classic"
                >
                  Classic Patio Slider
                </a>
                <div className={styles.divider} />

                <a
                  className={styles.megamenuLinks}
                  href="/doors/sliding-patio/lift-slide"
                >
                  Lift & Slide Patio Slider
                </a>
                <div className={styles.divider} />

                <a
                  className={styles.megamenuLinks}
                  href="/doors/french/traditional"
                >
                  Traditional French Door
                </a>
                <div className={styles.divider} />

                <a
                  className={styles.megamenuLinks}
                  href="/doors/french/cenergy"
                >
                  Cenergy French Door
                </a>
                <div className={styles.divider} />
              </div>
            </div>
            <div className={styles.megamenuContainer}>
              <div className={styles.flexCol + " " + styles.topMargin}>
                <h2 className={styles.megamenuSubtitle}>INSPIRATION</h2>

                <div className={styles.divider} />
                <a className={styles.megamenuLinks} href="/doors/inspiration">
                  Inspiration Gallery
                </a>
                <div className={styles.divider} />
              </div>
            </div>
            <div className={styles.megamenuContainer}>
              <div className={styles.flexCol + " " + styles.topMargin}>
                <h2 className={styles.megamenuSubtitle}>DOOR TYPE</h2>

                <div className={styles.divider} />
                <a
                  className={styles.megamenuLinks}
                  href="/doors/sliding-patio/"
                  onMouseOver={() => changePicture(1)}
                >
                  Sliding Patio Doors
                </a>
                <div className={styles.divider} />

                <a
                  className={styles.megamenuLinks}
                  href="/doors/french"
                  onMouseOver={() => changePicture(2)}
                >
                  French Doors
                </a>
                <div className={styles.divider} />

                <a
                  className={styles.megamenuLinks}
                  href="/doors/bifold"
                  onMouseOver={() => changePicture(3)}
                >
                  Bifold Doors
                </a>
                <div className={styles.divider} />

                <a
                  className={styles.megamenuLinks}
                  href="/doors/entry"
                  onMouseOver={() => changePicture(4)}
                >
                  Entry Doors
                </a>
                <div className={styles.divider} />
              </div>
            </div>

            {size.width > 1220 ? (
              <div className={styles.imageSection + " " + styles.show}>
                <img
                  className={
                    picture[0]
                      ? styles.opacityItems + " " + styles.windowImage
                      : styles.windowImage
                  }
                  src="/images/megamenu/Centra-Windows-Patio-Doors-White-Vinyl-Exterior.webp"
                  alt="centra windows patio doors white vinyl exterior"
                />

                <img
                  className={
                    picture[1]
                      ? styles.opacityItems + " " + styles.windowImage
                      : styles.windowImage
                  }
                  src="/images/megamenu/Traditional-French-Doors-white.webp"
                  alt="french doors white"
                />

                <img
                  className={
                    picture[2]
                      ? styles.opacityItems + " " + styles.windowImage
                      : styles.windowImage
                  }
                  src="/images/megamenu/MuskokaRoomShot.webp"
                  alt="muskoka room shot"
                />

                <img
                  className={styles.windowImage}
                  className={
                    picture[3]
                      ? styles.opacityItems + " " + styles.windowImage
                      : styles.windowImage
                  }
                  src="/images/megamenu/KelownaCentraShowroom-EntryDoor-Blue-Vignette.webp"
                  alt="kelowna centra showroom entry door blue vignette"
                />
              </div>
            ) : (
              ""
            )}
          </div>
          {/* Services */}
          <div
            className={
              megamenu[3] && size.width > 992
                ? styles.familyMegamenu + " " + styles.showMenu
                : styles.familyMegamenu
            }
          >
            <div
              className={
                styles.megamenuContainer + " " + styles.familyContainer
              }
            >
              <h2
                className={
                  styles.megamenuTitle +
                  " " +
                  styles.familyTitle +
                  " " +
                  styles.topMargin
                }
              >
                Services
              </h2>
              <div
                className={
                  styles.flexCol +
                  " " +
                  styles.centerItems +
                  " " +
                  styles.topMargin
                }
              >
                <div style={{ height: "35px" }} />
                <a
                  className={styles.megamenuLinks}
                  href="/services/"
                  onMouseOver={() => changePicture(1)}
                  onMouseOut={() => changePicture(0)}
                >
                  Services
                </a>
                <div className={styles.divider} />
                <a
                  className={styles.megamenuLinks}
                  href="/services/manufacturing/"
                  onMouseOver={() => changePicture(1)}
                  onMouseOut={() => changePicture(0)}
                >
                  Manufacturing
                </a>
                <div className={styles.divider} />

                <a
                  className={styles.megamenuLinks}
                  href="/services/window-door-replacement"
                  onMouseOver={() => changePicture(1)}
                  onMouseOut={() => changePicture(0)}
                >
                  Window & Door Replacement
                </a>
                <a
                  className={styles.megamenuLinks}
                  href="/services/strata-installations/"
                  onMouseOver={() => changePicture(1)}
                  onMouseOut={() => changePicture(0)}
                >
                  Strata Installations
                </a>
                <div className={styles.divider} />

                {/* <a
                  className={styles.megamenuLinks}
                  href="/warranty-service/"
                  onMouseOver={() => changePicture(1)}
                  onMouseOut={() => changePicture(0)}
                >
                  Warranty Service
                </a>
                <div className={styles.divider} /> */}
              </div>
              {size.width > 1100 ? (
                <img
                  src="/images/megamenu/centra_workers.webp"
                  alt="centra family"
                  className={
                    megamenu[3] && size.width > 992
                      ? styles.opacity + " " + styles.megamenuImage
                      : styles.megamenuImage
                  }
                />
              ) : null}
            </div>
          </div>
          {/* Pros */}
          <div
            className={
              megamenu[4] && size.width > 992
                ? styles.familyMegamenu + " " + styles.showMenu
                : styles.familyMegamenu
            }
          >
            <div
              className={
                styles.megamenuContainer + " " + styles.familyContainer
              }
            >
              <h2
                className={
                  styles.megamenuTitle +
                  " " +
                  styles.familyTitle +
                  " " +
                  styles.topMargin
                }
              >
                For Pros
              </h2>
              <div
                className={
                  styles.flexCol +
                  " " +
                  styles.centerItems +
                  " " +
                  styles.topMargin
                }
              >
                <div style={{ height: "35px" }} />
                <div className={styles.divider} />
                <a
                  className={styles.megamenuLinks}
                  href="/professionals/"
                  onMouseOver={() => changePicture(1)}
                  onMouseOut={() => changePicture(0)}
                >
                  For Pros
                </a>
                <div className={styles.divider} />
                <a
                  className={styles.megamenuLinks}
                  href="/professionals/builders-developers"
                  onMouseOver={() => changePicture(2)}
                  onMouseOut={() => changePicture(0)}
                >
                  Builders & Developers
                </a>
                <div className={styles.divider} />
                <a
                  className={styles.megamenuLinks}
                  href="/professionals/architects-engineers"
                  onMouseOver={() => changePicture(1)}
                  onMouseOut={() => changePicture(0)}
                >
                  Architect & Engineers
                </a>
                <div className={styles.divider} />

                <a
                  className={styles.megamenuLinks}
                  href="/professionals/property-management"
                  onMouseOver={() => changePicture(2)}
                  onMouseOut={() => changePicture(0)}
                >
                  Strata & Property Management
                </a>
                <div className={styles.divider} />

                <a
                  className={styles.megamenuLinks}
                  href="/professionals/project-quote"
                  onMouseOver={() => changePicture(2)}
                  onMouseOut={() => changePicture(0)}
                >
                  Request a Project Quote
                </a>
                <div className={styles.divider} />

                <a
                  className={styles.megamenuLinks}
                  href="/professionals/request-technical-specifications"
                  onMouseOver={() => changePicture(2)}
                  onMouseOut={() => changePicture(0)}
                >
                  Request Technical Specifications
                </a>
                <div className={styles.divider} />
              </div>
              {size.width > 1100 ? (
                <img
                  src="/images/megamenu/centra_smiling.webp"
                  alt="centra family"
                  className={
                    megamenu[4] && size.width > 992
                      ? styles.opacity + " " + styles.megamenuImage
                      : styles.megamenuImage
                  }
                />
              ) : null}
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}
