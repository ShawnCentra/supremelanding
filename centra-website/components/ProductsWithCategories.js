import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import Youtube from "./../components/Youtube";
//style
import styles from "./ProductsWithCategories.module.scss";

const ProductsWithCategories = (props) => {
  const CustomRightArrow = ({ onClick, products }) => {
    // onMove means if dragging or swiping in progress.

    return (
      <buttton
        onClick={() => onClick()}
        className={products ? styles.buttonRightProducts : styles.buttonRight}
      >
        <img
          loading="lazy"
          alt="black arrow icon"
          src="/images/Atoms-Arrow-Small-Black.webp"
          width="40"
          height="40"
          className={styles.arrowBlack}
        />
      </buttton>
    );
  };

  const CustomLeftArrow = ({ onClick, products }) => {
    // onMove means if dragging or swiping in progress.
    return (
      <buttton
        className={products ? styles.buttonLeftProducts : styles.buttonLeft}
        onClick={() => onClick()}
      >
        <img
          loading="lazy"
          alt="black arrow icon"
          src="/images/Atoms-Arrow-Small-Black.webp"
          width="40"
          height="40"
          className={styles.arrowBlack + " " + styles.arrowBack}
        />
      </buttton>
    );
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1516 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1516, min: 1035 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1035, min: 0 },
      items: 1,
    },
  };

  const responsiveProducts = {
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1400, min: 1035 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1035, min: 0 },
      items: 1,
    },
  };
  const {
    patio,
    page,
    data,
    size,
    windows,
    doors,
    services,
    title,
    context,
    nonbinary,
    text,
  } = props;

  if (page === "home") {
    const [activeIndex, setActiveIndex] = useState([true, false]);

    function handleActiveState(value) {
      if (value === 1) {
        setActiveIndex([true, false]);
      } else {
        setActiveIndex([false, true]);
      }
    }

    return (
      <div className={styles.productsContainer}>
        <div className={styles.productsContainerHome}>
          <div className={styles.productsTextContainerHome}>
            <h2 className={styles.productsTitle}>{data.title}</h2>
            <p className={styles.productsText}>{data.content}</p>
          </div>
          <div>
            <a href="/get-quote" className={styles.consultantContainer}>
              <img
                src="/images/Shape.webp"
                className="consultImage"
                alt="me"
                width="12"
                height="12"
              />
              <p className={styles.consultantText}>BOOK A CONSULTATION</p>
            </a>
          </div>
        </div>
        <div className={styles.productsCategoryContainerHome}>
          <p
            onClick={() => handleActiveState(1)}
            className={
              activeIndex[0] === true
                ? styles.activeCategory + " " + styles.productsCategoryText
                : styles.productsCategoryText
            }
          >
            Windows
          </p>
          <p
            onClick={() => handleActiveState(2)}
            className={
              activeIndex[1] === true
                ? styles.activeCategory + " " + styles.productsCategoryText
                : styles.productsCategoryText
            }
          >
            Doors
          </p>
          {activeIndex[0] ? (
            <a href="/windows" className={styles.learnMoreLinkHome}>
              <p className={styles.productsCategoryText + " " + styles.allText}>View All Windows</p>
              <img
                loading="lazy"
                alt="yellow arrow icon"
                src="/images/Atoms-Arrow-Small-Yellow.webp"
                width="40"
                height="40"
                className={styles.yellowArrowImg}
              />
            </a>
          ) : (
            <a href="/doors" className={styles.learnMoreLinkHome}>
              <p className={styles.productsCategoryText + " " + styles.allText}>View All Doors</p>
              <img
                loading="lazy"
                alt="yellow arrow icon"
                src="/images/Atoms-Arrow-Small-Yellow.webp"
                width="40"
                height="40"
                className={styles.yellowArrowImg}
              />
            </a>
          )}
        </div>
        <div className={styles.divider} />
        <div className={styles.productsCarousel}>
          {activeIndex[0] ? (
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsiveProducts}
              infinite={false}
              containerClass={styles.carouselContainer + " carousel-container"}
              itemClass={styles.item}
              customRightArrow={<CustomRightArrow products />}
              customLeftArrow={<CustomLeftArrow products />}
            >
              <div>
                <a
                  href="/windows/casement"
                  className={styles.productsContentWrapper}
                >
                  <img
                    className={styles.productsImgHome}
                    src="/images/productImages/Casement.webp"
                    alt={"casement"}
                    width="240px"
                    height="240px"
                  />
                  <p className={styles.productsContentText}>Casement</p>
                </a>
              </div>
              <div>
                <a
                  href="/windows/sliding"
                  className={styles.productsContentWrapper}
                >
                  <img
                    className={styles.productsImg}
                    src="/images/productImages/Sliding.webp"
                    alt={"Slide"}
                    width="240px"
                    height="240px"
                  />
                  <p className={styles.productsContentText}>Sliding</p>
                </a>
              </div>
              <div>
                <a
                  href="/windows/baybow"
                  className={styles.productsContentWrapper}
                >
                  <img
                    className={styles.productsImg}
                    src="/images/productImages/Bay.webp"
                    alt={"Bay & Bow"}
                    width="240px"
                    height="240px"
                  />
                  <p className={styles.productsContentText}>Bay & bow</p>
                </a>
              </div>

              <div>
                <a
                  href="/windows/picture-product"
                  className={styles.productsContentWrapper}
                >
                  <img
                    className={styles.productsImg}
                    src="/images/productImages/Arc.webp"
                    alt={"Picture"}
                    width="240px"
                    height="240px"
                  />
                  <p className={styles.productsContentText}>Picture</p>
                </a>
              </div>

              <div>
                <a
                  href="/windows/awning"
                  className={styles.productsContentWrapper}
                >
                  <img
                    className={styles.productsImg}
                    src="/images/productImages/Awning.webp"
                    alt={"awning"}
                    width="240px"
                    height="240px"
                  />
                  <p className={styles.productsContentText}>Awning</p>
                </a>
              </div>

              <div>
                <a
                  href="/windows/custom-shapes"
                  className={styles.productsContentWrapper}
                >
                  <img
                    className={styles.productsImg}
                    src="/images/productImages/Hex.webp"
                    alt={"custom shapes"}
                    width="240px"
                    height="240px"
                  />
                  <p className={styles.productsContentText}>Custom Shapes</p>
                </a>
              </div>
            </Carousel>
          ) : (
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsiveProducts}
              infinite={false}
              containerClass={styles.carouselContainer + " carousel-container"}
              itemClass={styles.item}
              customRightArrow={<CustomRightArrow products />}
              customLeftArrow={<CustomLeftArrow products />}
            >
              <div>
                <a
                  href="/doors/sliding-patio/"
                  className={styles.productsContentWrapper}
                >
                  <img
                    className={
                      styles.productsImg + " " + styles.doorProductsImg
                    }
                    src="/images/megamenu/Centra-Windows-Patio-Doors-White-Vinyl-Exterior.webp"
                    alt={"Slide Patio Door"}
                    width="240px"
                    height="240px"
                  />
                  <p className={styles.productsContentText}>Sliding</p>
                </a>
              </div>

              <div>
                <a
                  href="/doors/french/"
                  className={styles.productsContentWrapper}
                >
                  <img
                    className={
                      styles.productsImg + " " + styles.doorProductsImg
                    }
                    src="/images/megamenu/Traditional-French-Doors-white.webp"
                    alt={"Traditional french doors"}
                    width="240px"
                    height="240px"
                  />
                  <p className={styles.productsContentText}>French</p>
                </a>
              </div>

              <div>
                <a
                  href="/doors/bifold"
                  className={styles.productsContentWrapper}
                >
                  <img
                    className={
                      styles.productsImg + " " + styles.doorProductsImg
                    }
                    src="/images/megamenu/MuskokaRoomShot.webp"
                    alt={"bifold door"}
                    width="240px"
                    height="240px"
                  />
                  <p className={styles.productsContentText}>Bifold</p>
                </a>
              </div>

              <div>
                <a
                  href="/doors/entry"
                  className={styles.productsContentWrapper}
                >
                  <img
                    className={
                      styles.productsImg + " " + styles.doorProductsImg
                    }
                    src="/images/megamenu/KelownaCentraShowroom-EntryDoor-Blue-Vignette.webp"
                    alt={"awning"}
                    width="240px"
                    height="240px"
                  />
                  <p className={styles.productsContentText}>Entry</p>
                </a>
              </div>
            </Carousel>
          )}
        </div>
      </div>
    );
  }

  if (page === "products" && windows) {
    return (
      <div className={styles.productsContainer}>
        <div className={styles.productsTextContainer}>
          <h2 className={styles.productsTitle}>
            {props.data.title ? props.data.title : "Window Types"}
          </h2>
          <p className={styles.productsText}>
            {props?.data?.content
              ? props?.data?.content
              : "See our other Window styles"}
          </p>
        </div>

        <div className={styles.productsCarousel}>
          {props.classic ? (
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
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Sliding.webp"
                    alt="Sliding"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/sliding"
                    className={styles.productsContentText}
                  >
                    Sliding
                  </a>
                </div>
              </div>
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Arc.webp"
                    alt="Picture Product"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/picture-product"
                    className={styles.productsContentText}
                  >
                    Picture
                  </a>
                </div>
              </div>
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Bay.webp"
                    alt="Bay"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/baybow"
                    className={styles.productsContentText}
                  >
                    Bay & Bow
                  </a>
                </div>
              </div>
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Casement.webp"
                    alt="Casement"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/casement"
                    className={styles.productsContentText}
                  >
                    Casement
                  </a>
                </div>
              </div>

              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Awning.webp"
                    alt="Awning"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/awning"
                    className={styles.productsContentText}
                  >
                    Awning
                  </a>
                </div>
              </div>

              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Hex.webp"
                    alt="Custom Picture"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/custom-shapes"
                    className={styles.productsContentText}
                  >
                    Custom
                  </a>
                </div>
              </div>
            </Carousel>
          ) : props.traditional ? (
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
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Casement.webp"
                    alt="Casement"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/casement"
                    className={styles.productsContentText}
                  >
                    Casement
                  </a>
                </div>
              </div>
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Awning.webp"
                    alt="Awning"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/awning"
                    className={styles.productsContentText}
                  >
                    Awning
                  </a>
                </div>
              </div>
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Arc.webp"
                    alt="Picture Product"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/picture-product"
                    className={styles.productsContentText}
                  >
                    Picture
                  </a>
                </div>
              </div>
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Sliding.webp"
                    alt="Sliding"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/sliding"
                    className={styles.productsContentText}
                  >
                    Sliding
                  </a>
                </div>
              </div>
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Bay.webp"
                    alt="Bay"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/baybow"
                    className={styles.productsContentText}
                  >
                    Bay & Bow
                  </a>
                </div>
              </div>
     
    
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Hex.webp"
                    alt="Custom Picture"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/custom-shapes"
                    className={styles.productsContentText}
                  >
                    Custom
                  </a>
                </div>
              </div>
     
            </Carousel>
          ) : (
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
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Casement.webp"
                    alt="Casement"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/casement"
                    className={styles.productsContentText}
                  >
                    Casement
                  </a>
                </div>
              </div>
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Awning.webp"
                    alt="Awning"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/awning"
                    className={styles.productsContentText}
                  >
                    Awning
                  </a>
                </div>
              </div>
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Arc.webp"
                    alt="Picture Product"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/picture-product"
                    className={styles.productsContentText}
                  >
                    Picture
                  </a>
                </div>
              </div>
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Bay.webp"
                    alt="Bay"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/baybow"
                    className={styles.productsContentText}
                  >
                    Bay & Bow
                  </a>
                </div>
              </div>
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Sliding.webp"
                    alt="Sliding"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/sliding"
                    className={styles.productsContentText}
                  >
                    Sliding
                  </a>
                </div>
              </div>
 
     
    
              <div className={styles.typeContainer}>
                <div className={styles.productsContentWrapper}>
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src="/images/productImages/Hex.webp"
                    alt="Custom Picture"
                    width="240px"
                    height="240px"
                  />
                  <a
                    href="/windows/custom-shapes"
                    className={styles.productsContentText}
                  >
                    Custom
                  </a>
                </div>
              </div>
     
            </Carousel>
          )}
        </div>
      </div>
    );
  }

  if (page === "products" && doors) {
    return (
      <div className={styles.productsContainer}>
        <div className={styles.productsTextContainer}>
          <h2 className={styles.productsTitle}>
            {props?.data?.title ? props.data.title : "Door Types"}
          </h2>
          <p className={styles.productsText}>
            {props?.data?.content
              ? props?.data?.content
              : "See our other Door styles"}
          </p>
        </div>

        <div className={styles.productsCarousel}>
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
            <div className={styles.typeContainer}>
              <a
                href="/doors/sliding-patio/classic/"
                onMouseDown={(e) => preventDefault(e)}
                className={styles.productsContentWrapper}
              >
                <img
                  onMouseDown={(e) => preventDefault(e)}
                  className={styles.productsImg}
                  src={data?.images?.[0]?.imagePath}
                  alt={data?.images?.[0]?.seoAlt}
                  width="240px"
                  height="240px"
                />
                <p className={styles.productsContentText}>
                  Classic Patio Slider
                </p>
              </a>
            </div>
            <div className={styles.typeContainer}>
              <div className={styles.productsContentWrapper}>
                <a
                  href="/doors/sliding-patio/lift-slide/"
                  onMouseDown={(e) => preventDefault(e)}
                  className={styles.productsContentWrapper}
                >
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src={data?.images?.[1]?.imagePath}
                    alt={data?.images?.[1]?.seoAlt}
                    width="240px"
                    height="240px"
                  />
                  <p className={styles.productsContentText}>
                    Lift & Slide Patio Slider
                  </p>
                </a>
              </div>
            </div>
            <div className={styles.typeContainer}>
              <div className={styles.productsContentWrapper}>
                <a
                  href="/doors/french/traditional"
                  onMouseDown={(e) => preventDefault(e)}
                  className={styles.productsContentWrapper}
                >
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src={data?.images?.[2]?.imagePath}
                    alt={data?.images?.[2]?.seoAlt}
                    width="240px"
                    height="240px"
                  />
                  <p className={styles.productsContentText}>
                    Traditional French Door
                  </p>
                </a>
              </div>
            </div>

            <div className={styles.typeContainer}>
              <div className={styles.productsContentWrapper}>
                <a
                  href="/doors/french/cenergy"
                  onMouseDown={(e) => preventDefault(e)}
                  className={styles.productsContentWrapper}
                >
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    src={data?.images?.[3]?.imagePath}
                    alt={data?.images?.[3]?.seoAlt}
                    width="240px"
                    height="240px"
                    className={styles.productsImg}
                  />
                  <p className={styles.productsContentText}>
                    Cenergy French Door
                  </p>
                </a>
              </div>
            </div>
            <div className={styles.typeContainer}>
              <div className={styles.productsContentWrapper}>
                <a
                  href="/doors/entry"
                  onMouseDown={(e) => preventDefault(e)}
                  className={styles.productsContentWrapper}
                >
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    src={data?.images?.[4]?.imagePath}
                    alt={data?.images?.[4]?.seoAlt}
                    width="240px"
                    height="240px"
                    className={styles.productsImg}
                  />
                  <p className={styles.productsContentText}>Entry Doors</p>
                </a>
              </div>
            </div>
            <div className={styles.typeContainer}>
              <div className={styles.productsContentWrapper}>
                <a
                  href="/doors/bifold"
                  onMouseDown={(e) => preventDefault(e)}
                  className={styles.productsContentWrapper}
                >
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    src={data?.images?.[5]?.imagePath}
                    alt={data?.images?.[5]?.seoAlt}
                    width="240px"
                    height="240px"
                    className={styles.productsImg}
                  />
                  <p className={styles.productsContentText}>Bifold Doors</p>
                </a>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }

  if (page === "products" && nonbinary) {
    return (
      <div className={styles.productsContainer}>
        <div className={styles.productsTextContainer}>
          <h2 className={styles.productsTitle}>
            {props.data.title ? props.data.title : "Door Types"}
          </h2>
          <p className={styles.productsText}>
            {props?.data?.content
              ? props?.data?.content
              : "See our other Door styles"}
          </p>
        </div>

        <div className={styles.productsCarousel}>
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
            <div className={styles.typeContainer}>
              <a
                href="/doors/sliding-patio/classic/"
                onMouseDown={(e) => preventDefault(e)}
                className={styles.productsContentWrapper}
              >
                <img
                  onMouseDown={(e) => preventDefault(e)}
                  className={styles.productsImg}
                  src={data?.images?.[0]?.imagePath}
                  alt={data?.images?.[0]?.seoAlt}
                  width="240px"
                  height="240px"
                />
                <p className={styles.productsContentText}>
                  Classic Patio Slider
                </p>
              </a>
            </div>
            <div className={styles.typeContainer}>
              <div className={styles.productsContentWrapper}>
                <a
                  href="/doors/sliding-patio/lift-slide/"
                  onMouseDown={(e) => preventDefault(e)}
                  className={styles.productsContentWrapper}
                >
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src={data?.images?.[1]?.imagePath}
                    alt={data?.images?.[1]?.seoAlt}
                    width="240px"
                    height="240px"
                  />
                  <p className={styles.productsContentText}>
                    Lift & Slide Patio Slider
                  </p>
                </a>
              </div>
            </div>
            <div className={styles.typeContainer}>
              <div className={styles.productsContentWrapper}>
                <a
                  href="/doors/french/traditional"
                  onMouseDown={(e) => preventDefault(e)}
                  className={styles.productsContentWrapper}
                >
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    className={styles.productsImg}
                    src={data?.images?.[2]?.imagePath}
                    alt={data?.images?.[2]?.seoAlt}
                    width="240px"
                    height="240px"
                  />
                  <p className={styles.productsContentText}>
                    Traditional French Door
                  </p>
                </a>
              </div>
            </div>

            <div className={styles.typeContainer}>
              <div className={styles.productsContentWrapper}>
                <a
                  href="/doors/french/cenergy"
                  onMouseDown={(e) => preventDefault(e)}
                  className={styles.productsContentWrapper}
                >
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    src={data?.images?.[3]?.imagePath}
                    alt={data?.images?.[3]?.seoAlt}
                    width="240px"
                    height="240px"
                    className={styles.productsImg}
                  />
                  <p className={styles.productsContentText}>
                    Cenergy French Door
                  </p>
                </a>
              </div>
            </div>
            <div className={styles.typeContainer}>
              <div className={styles.productsContentWrapper}>
                <a
                  href="/doors/entry"
                  onMouseDown={(e) => preventDefault(e)}
                  className={styles.productsContentWrapper}
                >
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    src={data?.images?.[4]?.imagePath}
                    alt={data?.images?.[4]?.seoAlt}
                    width="240px"
                    height="240px"
                    className={styles.productsImg}
                  />
                  <p className={styles.productsContentText}>Entry Doors</p>
                </a>
              </div>
            </div>
            <div className={styles.typeContainer}>
              <div className={styles.productsContentWrapper}>
                <a
                  href="/doors/bifold"
                  onMouseDown={(e) => preventDefault(e)}
                  className={styles.productsContentWrapper}
                >
                  <img
                    onMouseDown={(e) => preventDefault(e)}
                    src={data?.images?.[5]?.imagePath}
                    alt={data?.images?.[5]?.seoAlt}
                    width="240px"
                    height="240px"
                    className={styles.productsImg}
                  />
                  <p className={styles.productsContentText}>Bifold Doors</p>
                </a>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }

  if (page === "products" && services) {
    const [activeIndex, setActiveIndex] = useState([true, false, false, false]);

    const energyText = data?.images?.[0]?.imgVideoDescription
      ? data?.images?.[0].imgVideoDescription.split(/\r?\n/)
      : null;
    const homeText = data?.images?.[2]?.imgVideoDescription
      ? data?.images?.[1].imgVideoDescription.split(/\r?\n/)
      : null;
    const soundText = data?.images?.[2]?.imgVideoDescription
      ? data?.images?.[2].imgVideoDescription.split(/\r?\n/)
      : null;
    const tempText = data?.images?.[3]?.imgVideoDescription
      ? data?.images?.[3].imgVideoDescription.split(/\r?\n/)
      : null;

    function handleActiveState(value) {
      if (value === 1) {
        setActiveIndex([true, false, false, false]);
      } else if (value === 2) {
        setActiveIndex([false, true, false, false]);
      } else if (value === 3) {
        setActiveIndex([false, false, true, false]);
      } else if (value === 4) {
        setActiveIndex([false, false, false, true]);
      }
    }
    return (
      <div className={styles.productsContainer}>
        <div
          className={
            styles.productsTextContainer +
            " " +
            styles.productsTextContainerPerformance
          }
        >
          <div className={styles.productsTextContentContainer}>
            <h2 className={styles.productsTitle}>{data.title}</h2>
            <p className={styles.productsText + " " + styles.productsTextWidth}>
              {data.content}
            </p>
          </div>
          <img
            loading="lazy"
            src="/images/windows_geek_logo.webp"
            alt="centra family seal icon"
            width="152"
            height="152"
            className={styles.SealImage}
          />
        </div>
        <div className={styles.productsCategoryContainerPerformance}>
          <p
            onClick={() => handleActiveState(1)}
            className={
              activeIndex[0] === true
                ? styles.activeCategory + " " + styles.productsCategoryText
                : styles.productsCategoryText
            }
          >
            Energy Efficiency
          </p>
          <p
            onClick={() => handleActiveState(2)}
            className={
              activeIndex[1] === true
                ? styles.activeCategory + " " + styles.productsCategoryText
                : styles.productsCategoryText
            }
          >
            Home Comfort
          </p>

          <p
            onClick={() => handleActiveState(3)}
            className={
              activeIndex[2] === true
                ? styles.activeCategory + " " + styles.productsCategoryText
                : styles.productsCategoryText
            }
          >
            Sound Reduction
          </p>

          <p
            onClick={() => handleActiveState(4)}
            className={
              activeIndex[3] === true
                ? styles.activeCategory + " " + styles.productsCategoryText
                : styles.productsCategoryText
            }
          >
            Temperature Control
          </p>
        </div>
        <div>
          {activeIndex[0] ? (
            <div className={styles.productsTabContainer}>
              <div className={styles.productsTabImage}>
                <Youtube
                  embedId={"https://www.youtube.com/embed/4Nl6v-E1Eo8"}
                  width="100%"
                  height="500px"
                />
              </div>

              <div className={styles.productTabTextContainer}>
                <p className={styles.productsTabTitle}>
                  {data?.images?.[0]?.imgVideoTitle}
                </p>

                {energyText
                  ? energyText.map((item, index) => {
                      return (
                        <p
                          key={index}
                          index={`energy ` + index}
                          className={styles.productsTabText}
                        >
                          {item}
                        </p>
                      );
                    })
                  : null}

                <a
                  href="/windows/performance/"
                  className={styles.learnMoreLink}
                >
                  Learn More
                  <img
                    loading="lazy"
                    alt="yellow arrow icon"
                    src="/images/Atoms-Arrow-Small-Yellow.webp"
                    width="40"
                    height="40"
                    className={styles.yellowArrowImg}
                  />
                </a>
              </div>
            </div>
          ) : null}
          {activeIndex[1] ? (
            <div className={styles.productsTabContainer}>
              <div className={styles.productsTabImage}>
                <Youtube
                  embedId={"https://www.youtube.com/embed/qdRqZTnKSxg"}
                  width="100%"
                  height="500px"
                />
              </div>

              <div className={styles.productTabTextContainer}>
                <p className={styles.productsTabTitle}>
                  {data.images[1].imgVideoTitle}
                </p>
                {homeText
                  ? homeText.map((item, index) => {
                      return (
                        <p
                          key={`energy ` + index}
                          className={styles.productsTabText}
                        >
                          {item}
                        </p>
                      );
                    })
                  : null}
                <a
                  href="/windows/performance/"
                  className={styles.learnMoreLink}
                >
                  Learn More
                  <img
                    loading="lazy"
                    alt="yellow arrow icon"
                    src="/images/Atoms-Arrow-Small-Yellow.webp"
                    width="40"
                    height="40"
                    className={styles.yellowArrowImg}
                  />
                </a>
              </div>
            </div>
          ) : null}

          {activeIndex[2] ? (
            <div className={styles.productsTabContainer}>
              <div className={styles.productsTabImage}>
                <Youtube
                  embedId={"https://www.youtube.com/embed/YkNtAJ-Muiw"}
                  width="100%"
                  height="500px"
                />
              </div>

              <div className={styles.productTabTextContainer}>
                <p className={styles.productsTabTitle}>
                  {data.images[2].imgVideoTitle}
                </p>
                {soundText
                  ? soundText.map((item, index) => {
                      return (
                        <p
                          key={`energy ` + index}
                          className={styles.productsTabText}
                        >
                          {item}
                        </p>
                      );
                    })
                  : null}
                <a
                  href="/windows/performance/"
                  className={styles.learnMoreLink}
                >
                  Learn More
                  <img
                    loading="lazy"
                    alt="yellow arrow icon"
                    src="/images/Atoms-Arrow-Small-Yellow.webp"
                    width="40"
                    height="40"
                    className={styles.yellowArrowImg}
                  />
                </a>
              </div>
            </div>
          ) : null}

          {activeIndex[3] ? (
            <div className={styles.productsTabContainer}>
              <div className={styles.productsTabImage}>
                <Youtube
                  embedId={"https://www.youtube.com/embed/lOjxqpKAcbM"}
                  width="100%"
                  height="500px"
                />
              </div>

              <div className={styles.productTabTextContainer}>
                <p className={styles.productsTabTitle}>
                  {data?.images?.[3]?.imgVideoTitle}
                </p>
                {tempText
                  ? tempText.map((item, index) => {
                      return (
                        <p
                          key={`energy ` + index}
                          className={styles.productsTabText}
                        >
                          {item}
                        </p>
                      );
                    })
                  : null}
                <a
                  href="/windows/performance/"
                  className={styles.learnMoreLink}
                >
                  Learn More
                  <img
                    loading="lazy"
                    alt="yellow arrow icon"
                    src="/images/Atoms-Arrow-Small-Yellow.webp"
                    width="40"
                    height="40"
                    className={styles.yellowArrowImg}
                  />
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  if (page === "products") {
    const [activeIndex, setActiveIndex] = useState([true, false, false, false]);

    function handleActiveState(value) {
      if (value === 1) {
        setActiveIndex([true, false, false, false]);
      } else if (value === 2) {
        setActiveIndex([false, true, false, false]);
      } else if (value === 3) {
        setActiveIndex([false, false, true, false]);
      } else if (value === 4) {
        setActiveIndex([false, false, false, true]);
      }
    }
    return (
      <div className={styles.productsContainer}>
        <div
          className={
            styles.productsTextContainer +
            " " +
            styles.productsTextContainerPerformance
          }
        >
          <div className={styles.productsTextContentContainer}>
            <h2 className={styles.productsTitle}>{data.title}</h2>
            <p className={styles.productsText + " " + styles.productsTextWidth}>
              {data.content}
            </p>
          </div>
          <img
            loading="lazy"
            src="/images/windows_geek_logo.webp"
            alt="centra family seal icon"
            width="152"
            height="152"
            className={styles.SealImage}
          />
        </div>
        <div className={styles.productsCategoryContainerPerformance}>
          <p
            onClick={() => handleActiveState(1)}
            className={
              activeIndex[0] === true
                ? styles.activeCategory + " " + styles.productsCategoryText
                : styles.productsCategoryText
            }
          >
            Energy Efficiency
          </p>
          <p
            onClick={() => handleActiveState(2)}
            className={
              activeIndex[1] === true
                ? styles.activeCategory + " " + styles.productsCategoryText
                : styles.productsCategoryText
            }
          >
            Home Comfort
          </p>

          <p
            onClick={() => handleActiveState(3)}
            className={
              activeIndex[2] === true
                ? styles.activeCategory + " " + styles.productsCategoryText
                : styles.productsCategoryText
            }
          >
            Sound Reduction
          </p>

          <p
            onClick={() => handleActiveState(4)}
            className={
              activeIndex[3] === true
                ? styles.activeCategory + " " + styles.productsCategoryText
                : styles.productsCategoryText
            }
          >
            Temperature Control
          </p>
        </div>
        <div>
          {activeIndex[0] ? (
            <div className={styles.productsTabContainer}>
              <div className={styles.productTabImage}>
                <Youtube
                  embedId={"https://www.youtube.com/embed/4Nl6v-E1Eo8"}
                />
              </div>

              <div className={styles.productTabTextContainer}>
                <p className={styles.productsTabTitle}>
                  {data?.images?.[0]?.imgVideoTitle}
                </p>
                <p className={styles.productsTabText}>
                  {data?.images?.[0]?.imgVideoDescription}
                </p>
                <a
                  href="/windows/performance/"
                  className={styles.learnMoreLink}
                >
                  Learn More
                  <img
                    loading="lazy"
                    alt="yellow arrow icon"
                    src="/images/Atoms-Arrow-Small-Yellow.webp"
                    width="40"
                    height="40"
                    className={styles.yellowArrowImg}
                  />
                </a>
              </div>
            </div>
          ) : null}
          {activeIndex[1] ? (
            <div className={styles.productsTabContainer}>
              <div className={styles.productTabImage}>
                <Youtube
                  embedId={"https://www.youtube.com/embed/qdRqZTnKSxg"}
                />
              </div>

              <div className={styles.productTabTextContainer}>
                <p className={styles.productsTabTitle}>
                  {data.images[1].imgVideoTitle}
                </p>
                <p className={styles.productsTabText}>
                  {`${data.images[1].imgVideoDescription}`}
                </p>
                <a
                  href="/windows/performance/"
                  className={styles.learnMoreLink}
                >
                  Learn More
                  <img
                    loading="lazy"
                    alt="yellow arrow icon"
                    src="/images/Atoms-Arrow-Small-Yellow.webp"
                    width="40"
                    height="40"
                    className={styles.yellowArrowImg}
                  />
                </a>
              </div>
            </div>
          ) : null}

          {activeIndex[2] ? (
            <div className={styles.productsTabContainer}>
              <div className={styles.productTabImage}>
                <Youtube
                  embedId={"https://www.youtube.com/embed/YkNtAJ-Muiw"}
                />
              </div>

              <div className={styles.productTabTextContainer}>
                <p className={styles.productsTabTitle}>
                  {data.images[2].imgVideoTitle}
                </p>
                <p className={styles.productsTabText}>
                  {`${data.images[2].imgVideoDescription}`}
                </p>
                <a
                  href="/windows/performance/"
                  className={styles.learnMoreLink}
                >
                  Learn More
                  <img
                    loading="lazy"
                    alt="yellow arrow icon"
                    src="/images/Atoms-Arrow-Small-Yellow.webp"
                    width="40"
                    height="40"
                    className={styles.yellowArrowImg}
                  />
                </a>
              </div>
            </div>
          ) : null}

          {activeIndex[3] ? (
            <div className={styles.productsTabContainer}>
              <div className={styles.productTabImage}>
                <Youtube
                  embedId={"https://www.youtube.com/embed/lOjxqpKAcbM"}
                />
              </div>

              <div className={styles.productTabTextContainer}>
                <p className={styles.productsTabTitle}>
                  {data?.images?.[3]?.imgVideoTitle}
                </p>
                <p className={styles.productsTabText}>
                  {`${data?.images?.[3]?.imgVideoDescription}`}
                </p>
                <a
                  href="/windows/performance/"
                  className={styles.learnMoreLink}
                >
                  Learn More
                  <img
                    loading="lazy"
                    alt="yellow arrow icon"
                    src="/images/Atoms-Arrow-Small-Yellow.webp"
                    width="40"
                    height="40"
                    className={styles.yellowArrowImg}
                  />
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  if (page === "collections") {
    const [activeIndex, setActiveIndex] = useState([true, false, false, false]);

    function handleActiveState(value) {
      if (value === 1) {
        setActiveIndex([true, false, false, false]);
      } else if (value === 2) {
        setActiveIndex([false, true, false, false]);
      } else if (value === 3) {
        setActiveIndex([false, false, true, false]);
      } else if (value === 4) {
        setActiveIndex([false, false, false, true]);
      }
    }

    return (
      <div className={styles.productsContainer}>
        <div
          className={
            styles.productsTextContainer +
            " " +
            styles.productsTextContainerPerformance
          }
        >
          <div className={styles.productsTextContentContainer}>
            <h2 className={styles.productsTitle}>{props?.data?.title}</h2>
            <p className={styles.productsText + " " + styles.productsTextWidth}>
              {props?.data?.content}
            </p>
          </div>
          <img
            loading="lazy"
            src="/images/windows_geek_logo.webp"
            alt="centra family seal icon"
            width="152"
            height="152"
            className={styles.SealImage}
          />
        </div>
        <div className={styles.productsCategoryContainerPerformance}>
          <p
            onClick={() => handleActiveState(1)}
            className={
              activeIndex[0] === true
                ? styles.activeCategory + " " + styles.productsCategoryText
                : styles.productsCategoryText
            }
          >
            {doors ? "Sliding" : "Modern"}
          </p>
          <p
            onClick={() => handleActiveState(2)}
            className={
              activeIndex[1] === true
                ? styles.activeCategory + " " + styles.productsCategoryText
                : styles.productsCategoryText
            }
          >
            {doors ? "French" : "Classic"}
          </p>

          <p
            onClick={() => handleActiveState(3)}
            className={
              activeIndex[2] === true
                ? styles.activeCategory + " " + styles.productsCategoryText
                : styles.productsCategoryText
            }
          >
            {doors ? "Bifold" : "Traditional"}
          </p>
          <p
            onClick={() => handleActiveState(4)}
            className={
              activeIndex[3] === true
                ? styles.activeCategory + " " + styles.productsCategoryText
                : styles.productsCategoryText
            }
          >
            {doors ? "Entry" : null}
          </p>
        </div>
        <div>
          {activeIndex[0] ? (
            <div className={styles.productsTabContainer}>
              <img
                src={data?.images?.[0]?.imagePath}
                alt={data?.images?.[0]?.seoAlt}
                className={styles.productsTabImage}
              />
              <div className={styles.productTabTextContainer}>
                <p className={styles.productsTabTitle}>
                  {data?.images?.[0]?.imgVideoTitle}
                </p>
                <p className={styles.productsTabText}>
                  {data?.images?.[0]?.imgVideoDescription}
                </p>
                <a
                  href={
                    doors
                      ? "/doors/sliding-patio"
                      : "/windows/modern-collection"
                  }
                  className={styles.learnMoreLink}
                >
                  Learn More
                  <img
                    loading="lazy"
                    alt="yellow arrow icon"
                    src="/images/Atoms-Arrow-Small-Yellow.webp"
                    width="40"
                    height="40"
                    className={styles.yellowArrowImg}
                  />
                </a>
              </div>
            </div>
          ) : null}
          {activeIndex[1] ? (
            <div className={styles.productsTabContainer}>
              <img
                src={data?.images?.[1].imagePath}
                alt={data?.images?.[1]?.seoAlt}
                className={styles.productsTabImage}
              />
              <div className={styles.productTabTextContainer}>
                <p className={styles.productsTabTitle}>
                  {data.images[1].imgVideoTitle}
                </p>
                <p className={styles.productsTabText}>
                  {data.images[1].imgVideoDescription}
                </p>
                <a
                  href={doors ? "/doors/french" : "/windows/classic-collection"}
                  className={styles.learnMoreLink}
                >
                  Learn More
                  <img
                    loading="lazy"
                    alt="yellow arrow icon"
                    src="/images/Atoms-Arrow-Small-Yellow.webp"
                    width="40"
                    height="40"
                    className={styles.yellowArrowImg}
                  />
                </a>
              </div>
            </div>
          ) : null}

          {activeIndex[2] ? (
            <div className={styles.productsTabContainer}>
              <img
                src={data?.images?.[2].imagePath}
                alt={data?.images?.[2]?.seoAlt}
                className={styles.productsTabImage}
              />
              <div className={styles.productTabTextContainer}>
                <p className={styles.productsTabTitle}>
                  {data.images[2].imgVideoTitle}
                </p>
                <p className={styles.productsTabText}>
                  {data.images[2].imgVideoDescription}
                </p>
                <a
                  href={
                    doors ? "/doors/bifold" : "/windows/traditional-collection"
                  }
                  className={styles.learnMoreLink}
                >
                  Learn More
                  <img
                    loading="lazy"
                    alt="yellow arrow icon"
                    src="/images/Atoms-Arrow-Small-Yellow.webp"
                    width="40"
                    height="40"
                    className={styles.yellowArrowImg}
                  />
                </a>
              </div>
            </div>
          ) : null}

          {activeIndex[3] && doors ? (
            <div className={styles.productsTabContainer}>
              <img
                src={data?.images?.[3]?.imagePath}
                alt={data?.images?.[3]?.seoAlt}
                className={styles.productsTabImage}
              />
              <div className={styles.productTabTextContainer}>
                <p className={styles.productsTabTitle}>
                  {data?.images?.[3]?.imgVideoTitle}
                </p>
                <p className={styles.productsTabText}>
                  {data?.images?.[3]?.imgVideoDescription}
                </p>
                <a
                  href={doors ? "/doors/entry" : "/windows/classic-collection"}
                  className={styles.learnMoreLink}
                >
                  Learn More
                  <img
                    loading="lazy"
                    alt="yellow arrow icon"
                    src="/images/Atoms-Arrow-Small-Yellow.webp"
                    width="40"
                    height="40"
                    className={styles.yellowArrowImg}
                  />
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  if (page === "doorType") {
    const [activeIndex, setActiveIndex] = useState([true, false]);

    function handleActiveState(value) {
      if (value === 1) {
        setActiveIndex([true, false]);
      } else if (value === 2) {
        setActiveIndex([false, true]);
      }
    }

    return (
      <div className={styles.productsContainer}>
        <div
          className={
            styles.productsTextContainer +
            " " +
            styles.productsTextContainerPerformance
          }
        >
          <div className={styles.productsTextContentContainer}>
            <h2 className={styles.productsTitle}>{props?.data?.title}</h2>
            <p className={styles.productsText + " " + styles.productsTextWidth}>
              {props?.data?.content}
            </p>
          </div>
          <img
            loading="lazy"
            src="/images/windows_geek_logo.webp"
            alt="centra family seal icon"
            width="152"
            height="152"
            className={styles.SealImage}
          />
        </div>
        <div className={styles.doorsProductsCategoryContainerPerformance}>
          <p
            onClick={() => handleActiveState(1)}
            className={
              activeIndex[0] === true
                ? styles.activeCategory +
                  " " +
                  styles.productsCategoryText +
                  " " +
                  styles.widthCategoryDoors
                : styles.productsCategoryText + " " + styles.widthCategoryDoors
            }
          >
            {patio ? "Classic Patio Slider" : "Traditional French Door"}
          </p>
          <p
            onClick={() => handleActiveState(2)}
            className={
              activeIndex[1] === true
                ? styles.activeCategory +
                  " " +
                  styles.productsCategoryText +
                  " " +
                  styles.widthCategoryDoors
                : styles.productsCategoryText + " " + styles.widthCategoryDoors
            }
          >
            {patio ? "Lift & Slide Patio Slider" : "Cenergy French Door"}
          </p>
        </div>
        <div>
          {activeIndex[0] ? (
            <div className={styles.productsTabContainer}>
              <img
                src={data?.images?.[0]?.imagePath}
                alt={data?.images?.[0]?.seoAlt}
                className={
                  styles.doorsProductsTabImage + " " + styles.doorsImage
                }
              />
              <div className={styles.doubleLinkContainer}>
                <div className={styles.doorTypeProductTabTextContainer}>
                  <p className={styles.productsTabTitle}>
                    {data?.images?.[0].imageVideoTitle}
                  </p>
                  <p className={styles.productsTabText}>
                    {data?.images?.[0]?.imgVideoDescription}
                  </p>
                  <a
                    href={
                      patio
                        ? "/doors/sliding-patio/classic"
                        : "/doors/french/traditional"
                    }
                    className={styles.learnMoreLink}
                  >
                    Learn More
                    <img
                      loading="lazy"
                      alt="yellow arrow icon"
                      src="/images/Atoms-Arrow-Small-Yellow.webp"
                      width="40"
                      height="40"
                      className={styles.yellowArrowImg}
                    />
                  </a>
                </div>
              </div>
            </div>
          ) : null}

          {activeIndex[1] ? (
            <div className={styles.productsTabContainer}>
              <img
                src={data?.images?.[1].imagePath}
                alt={data?.images?.[1]?.seoAlt}
                className={
                  styles.doorsProductsTabImage + " " + styles.doorsImage
                }
              />
              <div className={styles.doubleLinkContainer}>
                <div className={styles.doorTypeProductTabTextContainer}>
                  <p className={styles.productsTabTitle}>
                    {data?.images?.[1].imageVideoTitle}
                  </p>
                  <p className={styles.productsTabText}>
                    {data?.images?.[1]?.imgVideoDescription}
                  </p>
                  <a
                    href={
                      patio
                        ? "/doors/sliding-patio/lift-slide"
                        : "/doors/french/cenergy"
                    }
                    className={styles.learnMoreLink}
                  >
                    Learn More
                    <img
                      loading="lazy"
                      alt="yellow arrow icon"
                      src="/images/Atoms-Arrow-Small-Yellow.webp"
                      width="40"
                      height="40"
                      className={styles.yellowArrowImg}
                    />
                  </a>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
};

export default ProductsWithCategories;
