import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./blogsCarousel.module.scss";
import Link from "next/link";
import LazyImage from "./lazyImage";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1250 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1250, min: 800 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
  },
};
const BlogsCarousel = (props) => {
  const CustomRightArrow = ({ onClick }) => {
    // onMove means if dragging or swiping in progress.

    return (
      <buttton onClick={() => onClick()} className={styles.buttonRight}>
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

  const CustomLeftArrow = ({ onClick }) => {
    // onMove means if dragging or swiping in progress.
    return (
      <buttton className={styles.buttonLeft} onClick={() => onClick()}>
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
  return (
    <div className={styles.blogsContainer}>
      {props.currentOpenings ? null : (
        <div
          className={
            props.careers ? styles.dontShow : styles.blogsTitleContainer
          }
        >
          <img
            loading="lazy"
            alt="centra seal icon"
            className={styles.geeksLogo}
            src="/images/windows_geek_logo.webp"
            width="152"
            height="152"
          />
          <div className={styles.blogsTextContainer}>
            <h2 className={styles.blogsTitle}>
              {"We can talk windows allll day long…"}
            </h2>
            <p className={styles.blogsText}>
              {
                "Keep an eye on our blog, and soon you’ll be just as fluent in Window as we are!"
              }
            </p>
          </div>
        </div>
      )}

      <div className={styles.blogContentContainer}>
        {props.data ? (
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            infinite={true}
            keyBoardControl={true}
            containerClass={styles.carouselContainer + " carousel-container"}
            itemClass={styles.familyItem}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
          >
            {props.data.map((image, index) => {
              // var imageSplit = image.imagePath.slice(0, -4) + "_500x300.jpg";
              var imageSplit = image.imagePath.slice(0, -4) + "_500x300.jpg";
              return (
                <Link
                  key={index}
                  href={{
                    pathname: `/blog/${image.slug}`,
                  }}
                >
                  <div className={styles.blogContentWrapper}>
                    {
                      <LazyImage
                        src={imageSplit}
                        alt={image.seoAlt}
                        width={"100%"}
                        height={"269px"}
                      />
                    }
                    <p className={styles.blogTitle}>{image.categoryName}</p>
                    <p className={styles.blogText}>{image?.blogTitle}</p>
                  </div>
                </Link>
              );
            })}
          </Carousel>
        ) : null}
      </div>
    </div>
  );
};

export default BlogsCarousel;
