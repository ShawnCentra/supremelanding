import React, { useState, useEffect } from "react";
import Head from "next/head";
import useWindowSize from "../utility/useWindowSize";
//style
import styles from "./index.module.scss";
import LazyImage from "../components/lazyImage";
//components
import Youtube from "../components/Youtube";
import CallToAction from "../components/CallToAction";
import CentraCares from "../components/CentraCares";
import Footer from "../components/Footer";
import Carousel from "react-multi-carousel";
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

const centraCaresData = {
  content: "Some content",
  title: "centra cares",
  images: [{ seoAlt: "Cares Image", imagePath: "/cares/group.webp" },
  { seoAlt: "Cares Image", imagePath: "/cares/group.webp" },
  { seoAlt: "Cares Image", imagePath: "/cares/group.webp" },
  { seoAlt: "Cares Image", imagePath: "/cares/group.webp" },
  { seoAlt: "Cares Image", imagePath: "/cares/group.webp" },
  { seoAlt: "Cares Image", imagePath: "/cares/group.webp" }]
}
export default function career({ data, insta }) {
  const size = useWindowSize();
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
  //breadcrump visibility
  const [scrollTop, setScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [parsedText, setParsedText] = useState([]);
  const [parsedTextRest, setParsedTextRest] = useState([]);
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => {
    if (data) {
      const arr = data[4].title.split(" ");
      setParsedText(arr);
      const arrRest = arr.slice(2).join(" ");
      setParsedTextRest(arrRest);
    }
  }, [data]);

  return (
    <>
      <Head>
        {/* Title needs keywords, first 65 chars show only - 100 chars allowed
            meta description needs good phrase to draw in customers
        */}

        <title>
          {data?.[13]?.title ? data?.[13]?.title : "Centra Windows | Supreme"}
        </title>
        <link rel="canonical" href={`https://www.centrawindows.com/careers/`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={data?.[13]?.content ? data[13].content : "Centra Windows | Supreme"}
        />
        {/* prevents google bots from indexing this page */}
        {/* <meta name="robots" content="noindex"></meta> */}
      </Head>

      {/* 0 */}
      <div className={styles.headerBg}>


        <img
          src={data?.[0]?.images?.[0].imagePath}
          layout="fill"
          quality={100}
          alt={data?.[0]?.images?.[0]?.seoAlt}
          className={styles.headerImage}
        />

        <div className={styles.container}>
          <h1 className={styles.headerTitle}>{data[0].title}</h1>

        </div>
      </div>
      <div className={styles.headerRightAlignedContainer}>
        <div className={styles.containerCenterMiddle}>
          <p className={styles.headerText}>{data?.[0]?.content}</p>
        </div>
      </div>

      {/* 5 */}
      <div className={styles.awardContainer}>
        <div className={styles.awardTextContainer}>
          <p className={styles.awardTitle}>
            {data[5].title !== "" ? data[5].title : "Dummy text"}
          </p>

          <p className={styles.awardText}>
            {data[5].content !== "" ? data[5].content : "Dummy text"}
          </p>
        </div>
        <div className={styles.awardsVideoContainer}>
          <Youtube
            embedId={
              data[5].images[0].videoLink !== ""
                ? data[5].images[0].videoLink
                : "https://www.youtube.com/embed/Xc4SkjvvHzs"
            }
            width="100%"
            height="100%"
          />
        </div>
      </div>
      {/* 2 */}
      <div className={styles.container + " " + styles.flexUnset}>
        <img
          loading="lazy"
          src="/images/windows_geek_logo.webp"
          alt="centra windows geek icon"
          width="152"
          height="152"
          className={styles.SealImage}
        />

        <div className={styles.workTextContentContainer}>
          <img
            loading="lazy"
            src="/images/dump/Path.webp"
            alt="arrow down black"
            width="152"
            height="152"
            className={styles.arrowDownBlack}
          />
          <p className={styles.title + " " + styles.centerText}>
            {data[2].title !== "" ? data[2].title : "Dummy text"}
          </p>
          <p className={styles.text + " " + styles.workTextContainer}>
            {data[2].content !== "" ? data[2].content : "Dummy text"}
          </p>
        </div>

        <div className={styles.workVideosContainer}>
          <div className={styles.workVideosContent}>
            <Youtube
              embedId={
                data?.[2]?.images?.[0]?.videoLink
                  ? data[2].images[0].videoLink
                  : "https://www.youtube.com/embed/Xc4SkjvvHzs"
              }
              width="100%"
              height="100%"
              style="workVideo"
            />
            <p className={styles.category}>
              {data[2].images[0].imgCategory !== ""
                ? data[2].images[0].imgCategory
                : "Centra Family"}
            </p>
            <p className={styles.workTitle}>
              {data[2].images[0].imgVideoTitle !== ""
                ? data[2].images[0].imgVideoTitle
                : "Centra Video"}
            </p>
          </div>
          <div style={{ height: `50px` }} />
          <div className={styles.workVideosContent}>
            <Youtube
              embedId={
                data[2].images[1].videoLink !== ""
                  ? data[2].images[1].videoLink
                  : "https://www.youtube.com/embed/Xc4SkjvvHzs"
              }
              width="100%"
              height="100%"
              style="workVideo"
            />
            <p className={styles.category}>
              {data[2].images[1].imgCategory !== ""
                ? data[2].images[1].imgCategory
                : "FERST"}
            </p>
            <p className={styles.workTitle}>
              {data[2].images[1].imgVideoTitle !== ""
                ? data[2].images[1].imgVideoTitle
                : "Centra Video"}
            </p>
          </div>
        </div>
      </div>

      <CentraCares data={centraCaresData} size={size} />




      <div className={styles.ownersContainer}>
        <p className={styles.ownersText}>
          {data[4].subtitle !== "" ? data[4].subtitle : "Dummy text"}
        </p>
        <div className={styles.ownerLineContainer}>
          <p className={styles.ownersTitle}>
            {parsedText[0] + " " + parsedText[1]}
          </p>

          <p className={styles.ownersTitle}>{parsedTextRest}</p>
        </div>
      </div>

      {/* 6 */}
      <div className={styles.missionContainer}>
        <p className={styles.missionTitle}>
          {data[6].title !== "" ? data[6].title : "Dummy text"}
        </p>
        <div className={styles.missionCardContainer}>
          <div className={styles.missionCard}>
            <img
              src="/images/icons/OurPeopleAreOurProfits.webp"
              alt="People are our profits"
              width="40"
              height="40"
            />
            <p className={styles.missionSubtitle}>We Invest In Our People</p>
            <p className={styles.missionText}>
              People are at the core of our goals. Simply put, our business
              goals are always based on growing our team’s expertise and the
              number of Employee Owners.
            </p>
          </div>
          <div className={styles.missionCard}>
            <img
              src="/images/icons/PassionandPerformance.webp"
              alt="Passion and Performance"
              width="40"
              height="40"
            />
            <p className={styles.missionSubtitle}>Passion & Performance</p>
            <p className={styles.missionText}>
              We are passionate, and that passion is what drives our
              performance. You should belong to a culture where your passion is
              rewarded.
            </p>
          </div>

          <div className={styles.missionCard}>
            <img
              src="/images/icons/BuildEquityBeyondYourPaycheck.webp"
              alt="Build Equity Beyond Your Paycheque"
              width="40"
              height="40"
            />
            <p className={styles.missionSubtitle}>
              Build Equity Beyond Your Paycheck
            </p>
            <p className={styles.missionText}>
              Ever thought about going into business for yourself? Reduce the
              risk while still reaping the benefits with employee ownership!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      {/* 7 */}
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitsTitleContainer}>
          <p className={styles.benefitsTitle}>
            {data[7].title !== "" ? data[7].title : "Dummy text"}
          </p>
          <p className={styles.benefitsText}>
            {data[7].subtitle !== "" ? data[7].subtitle : "Dummy text"}
          </p>
        </div>

        <div className={styles.benefitsFlexContainer}>
          <div className={styles.benefitsContentContainer}>
            <div className={styles.benefitsImg}>
              <LazyImage
                src={data?.[7]?.images?.[0]?.imagePath}
                alt={data?.[7]?.images?.[0]?.seoAlt}
                width={"100%"}
                height={"100%"}
              />
            </div>

            <p className={styles.benefitsSubtitle}>
              {" "}
              {data[7].images[0].imgVideoTitle !== ""
                ? data[7].images[0].imgVideoTitle
                : "Dummy text"}
            </p>
            <p className={styles.benefitsContentText}>
              {data[7].images[0].imgVideoSubtitle !== ""
                ? data[7].images[0].imgVideoSubtitle
                : "Dummy text"}
            </p>
          </div>

          <div className={styles.benefitsContentContainer}>
            <div className={styles.benefitsImg}>
              <LazyImage
                src={data?.[7]?.images?.[1]?.imagePath}
                alt={data?.[7]?.images?.[1]?.seoAlt}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <p className={styles.benefitsSubtitle}>
              {" "}
              {data[7].images[1].imgVideoTitle !== ""
                ? data[7].images[1].imgVideoTitle
                : "Dummy text"}
            </p>
            <p className={styles.benefitsContentText}>
              {data[7].images[1].imgVideoSubtitle !== ""
                ? data[7].images[1].imgVideoSubtitle
                : "Dummy text"}
            </p>
          </div>
        </div>
        <div className={styles.benefitsFlexContainer}>
          <div className={styles.benefitsContentContainer}>
            <div className={styles.benefitsImg}>
              <LazyImage
                src={data?.[7]?.images?.[2]?.imagePath}
                alt={data?.[7]?.images?.[2]?.seoAlt}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <p className={styles.benefitsSubtitle}>
              {data[7].images[2].imgVideoTitle !== ""
                ? data[7].images[2].imgVideoTitle
                : "Dummy text"}
            </p>
            <p className={styles.benefitsContentText}>
              {data[7].images[2].imgVideoSubtitle !== ""
                ? data[7].images[2].imgVideoSubtitle
                : "Dummy text"}
            </p>
          </div>

          <div className={styles.benefitsContentContainer}>
            <div className={styles.benefitsImg}>
              <LazyImage
                src={data?.[7]?.images?.[3]?.imagePath}
                alt={data?.[7]?.images?.[3]?.seoAlt}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <p className={styles.benefitsSubtitle}>
              {data[7].images[3].imgVideoTitle !== ""
                ? data[7].images[3].imgVideoTitle
                : "Dummy text"}
            </p>
            <p className={styles.benefitsContentText}>
              {data[7].images[3].imgVideoSubtitle !== ""
                ? data[7].images[3].imgVideoSubtitle
                : "Dummy text"}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.equalContainer}>
        <div className={styles.equalContentContainer}>
          <p className={styles.equalTitle}>Respect for All</p>
          <p className={styles.equalText}>
            “As a woman in construction, it’s important that I belong to a
            company which gives me respect, support, and equal opportunities. At
            Centra, I’ve been given the tools to break down the barriers many
            women face in a typically male-dominated industry. I am proud to be
            a part of a team that encourages us to grow without prejudice and
            celebrates our talents as individuals.” - Natalie Honey
          </p>
          <a href="#" className={styles.learnMoreLink}>
            <p className={styles.equalLink}>Learn More</p>
            <img
              loading="lazy"
              alt="black arrow icon"
              src="/images/Atoms-Arrow-Small-Black.webp"
              width="40"
              height="40"
              className={styles.arrowBlack}
            />
          </a>
        </div>

        <div className={styles.equalContentContainer}>
          <p className={styles.equalTitle}>Become a Leader</p>
          <p className={styles.equalText}>
            "There are leaders in every team who take charge and have real
            impact; on the business, our people, and our customers every day.
            You are given the opportunity at Centra to lead if you are willing
            to take on the challenge. If you want experience and opportunity,
            you can find it here. Leading new teams, spearheading projects,
            owning a piece of the Centra evolution. Titles don’t always tell the
            whole tale." - Lana Gordin
          </p>
          <a href="#" className={styles.learnMoreLink}>
            <p className={styles.equalLink}>Learn More</p>
            <img
              loading="lazy"
              alt="black arrow icon"
              src="/images/Atoms-Arrow-Small-Black.webp"
              width="40"
              height="40"
              className={styles.arrowBlack}
            />
          </a>
        </div>
      </div>
      {/*11 */}
      {insta && size.width > 960 ? (
        <>
          {" "}
          <div className={styles.lifeContainer}>
            <p className={styles.lifeTitle}>
              {" "}
              {data[11].title !== "" ? data[11].title : "Dummy text"}
            </p>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/centrawindows/"
              className={styles.lifeLink}
            >
              <p className={styles.lifeSubtitle}>
                {`Follow us on Instagram:  `}{" "}
              </p>{" "}
              @centrawindows
            </a>
          </div>
          <div className={styles.blogContentContainer}>
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsive}
              infinite={true}
              keyBoardControl={true}
              containerClass={styles.carouselContainer + " carousel-container"}
              itemClass={styles.carouselItem}
              customRightArrow={<CustomRightArrow />}
              customLeftArrow={<CustomLeftArrow />}
            >
              {insta.data.map((image, index) => {
                return image.media_type !== "VIDEO" ? (
                  <LazyImage
                    src={`${image.media_url}`}
                    alt={image.caption}
                    width={"100%"}
                    height={"352px"}
                  />
                ) : null;
              })}
            </Carousel>
          </div>
        </>
      ) : null}
      {/* 12 */}
      <CallToAction
        data={data[12]}
        currentOpenings
        yellow
        text={"SEE OUR CURRENT OPENINGS"}
      />
      <Footer size={size} />
    </>
  );
}

export async function getStaticProps() {
  //use it to query both apis
  const res = await fetch(process.env.WEB_API_CAREERS);
  const data = await res.json();

  const res_insta = await fetch(process.env.INSTA);
  const insta = await res_insta.json();

  return {
    props: {
      data,
      insta,
      // blogsData,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
