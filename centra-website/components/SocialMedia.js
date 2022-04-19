import React, { useState, useEffect } from "react";
import styles from "./SocialMedia.module.scss";
import Carousel from "react-multi-carousel";
import { FacebookProvider, EmbeddedPost } from "react-facebook";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Youtube from "../components/Youtube";
import ReactPlayer from "react-player";

const SocialMedia = (props) => {
  const CustomRightArrow = ({ onClick, whySection }) => {
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

  const CustomLeftArrow = ({ onClick, whySection }) => {
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
  const [activeState, setActiveIndex] = useState([
    { Instagram: true },
    { Facebook: false },
    { Twitter: false },
    { LinkedIn: false },
    { Youtube: false },
  ]);
  const [youtubeLinks, setYoutubeLinks] = useState([]);
  const [filteredPics, setFilteredPics] = useState([]);

  function handleActiveState(value) {
    if (value === "Facebook") {
      if (activeState[0].Facebook === "Facebook") {
        return;
      }
      setActiveIndex([
        { Instagram: false },
        { Facebook: true },
        { Twitter: false },

        { Youtube: false },
        { LinkedIn: false },
      ]);
    } else if (value === "Twitter") {
      if (activeState[0].Twitter === "Twitter") {
        return;
      }
      setActiveIndex([
        { Instagram: false },
        { Facebook: false },
        { Twitter: true },

        { Youtube: false },
        { LinkedIn: false },
      ]);
    } else if (value === "LinkedIn") {
      if (activeState[0].LinkedIn === "LinkedIn") {
        return;
      }
      setActiveIndex([
        { Instagram: false },
        { Facebook: false },
        { Twitter: false },
        { Youtube: false },
        { LinkedIn: true },
      ]);
    } else if (value === "Instagram") {
      if (activeState[0].Instagram === "Instagram") {
        return;
      }
      setActiveIndex([
        { Instagram: true },
        { Facebook: false },
        { Twitter: false },
        { Youtube: false },
        { LinkedIn: false },
      ]);
    } else if (value === "Youtube") {
      if (activeState[0].Youtube === "Youtube") {
        return;
      }
      setActiveIndex([
        { Instagram: false },
        { Facebook: false },
        { Twitter: false },
        { Youtube: true },
        { LinkedIn: false },
      ]);
    }
  }

  useEffect(() => {
    if (props.insta?.error?.code) {
      setFilteredPics([]);
      console.log("error with insta api: ", props.insta?.error?.code)
      return
    }
    if (props.insta) {
      const instaData = props.insta?.error?.code ? [] : props.insta?.data?.filter(
        (item) => item.media_type == "IMAGE"
      );
      console.log("instaDaata", instaData)
      setFilteredPics(instaData);
      // FB?.XFBML.parse(document.getElementById("fb-post"));
    }
  }, [props.insta]);
  console.log("active state ", activeState)
  // useEffect(() => {
  //   if (props.youtube?.error?.code ?? 200 !== 403) {
  //     console.log("youtube error : ", props.youtube?.error?.code);
  //     return;
  //   }

  //   const setLinks = props.youtube.items.map(
  //     (items) => "https://www.youtube.com/embed/" + items.id.videoId
  //   );
  //   setYoutubeLinks(setLinks);
  // }, [props.youtube]);

  return props.family ? (
    props.insta ? (
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={props.responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass={styles.carouselContainer + " carousel-container"}
        itemClass={styles.familyItem}
        centerMode={false}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {filteredPics.map((item, index) => {
          return (
            <a href={item.permalink} key={index}>
              {item.media_type === "VIDEO" ? (
                <ReactPlayer
                  url={item.media_url}
                  controls={true}
                  className={styles.image}
                  height={"250px"}
                  width={"unset"}
                />
              ) : (
                <img
                  src={item.media_url}
                  alt=""
                  className={styles.familyImage}
                />
              )}
            </a>
          );
        })}
      </Carousel>
    ) : null
  ) : (
    <div>
      <div className={styles.socialContainer}>
        <h2 className={styles.socialTitle}>Join us online!</h2>
        <p className={styles.socialText}>
          Follow us on social media, share ideas, ask questions, post about your
          project. Stay right up to the minute with all things windows on
          Instagram, Facebook, Twitter, Linkedin and YouTube.
        </p>
        <div className={styles.socialCategoryContainer}>
          <p
            className={
              activeState[0].Instagram
                ? styles.activeCategory + " " + styles.socialCategoryText
                : styles.socialCategoryText
            }
            onClick={() => handleActiveState("Instagram")}
          >
            Instagram
          </p>

          <p
            className={
              activeState[2].Twitter
                ? styles.activeCategory + " " + styles.socialCategoryText
                : styles.socialCategoryText
            }
            onClick={() => handleActiveState("Twitter")}
          >
            Twitter
          </p>


        </div>
        {activeState[0].Instagram === true ? (
          <>
            <div className={styles.socialContentContainer}>
              <p className={styles.socialHeader}>
                Instant window gratification on Instagram
              </p>

              <a
                href="https://www.instagram.com/centrawindows/?hl=en"
                className={styles.learnMoreLink}
              >
                <p className={styles.learnMoreText}>Follow us on Instagram</p>
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

          </>
        ) : null}


        {activeState[2].Twitter ? (
          <>
            <div className={styles.socialContentContainer}>
              <p className={styles.socialHeader}>We're all friends on Twitter</p>

              <a
                href="https://twitter.com/CentraWindows?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                className={styles.learnMoreLink}
              >
                <p className={styles.learnMoreText}>FOLLOW US ON TWITTER</p>
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
          </>
        ) : null}


      </div>

      {props.insta && activeState[0].Instagram === true ? (
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={props.responsive}
          infinite={true}
          keyBoardControl={true}
          containerClass={styles.carouselContainer + " carousel-container"}
          itemClass={styles.familyItem}
          centerMode={false}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {filteredPics.map((item, index) => {
            return (
              <a href={item.permalink} key={index}>
                {item.media_type === "VIDEO" ? (
                  <ReactPlayer
                    url={item.media_url}
                    controls={true}
                    className={styles.image + " " + "ReactVideoPlayer"}
                    height={"250px"}
                    width={"unset"}
                  />
                ) : (
                  <img
                    src={item.media_url}
                    alt=""
                    className={styles.image}
                  />
                )}
              </a>
            );
          })}
        </Carousel>
      ) : null}

      {activeState[2].Twitter === true ? (
        <div className={styles.twitterContainer}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="CentraWindows"
            options={{ height: 800 }}
            className={styles.twitter}
            noHeader="true"
            noBorders="true"
            noFooter="true"
          />    </div>
      ) : null}


    </div>

  );
};

export default SocialMedia;
