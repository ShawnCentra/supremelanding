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
  content:
    "Our community is very important to us and we want to make sure that we support our new Alberta family. We will be organizing a Centra Cares charity donation based on causes you all care about. Nominate a Calgary charity of your choice by May 31st and we will provide $10,000 to the local charity! Please contact us to share with us a cause you’re passionate about that you would like us to support.",
  title: "Centra Cares",
  images: [
    {
      seoAlt: "Cares Image",
      imagePath:
        "/images/Section 5/Centra-Cares-members-celebrating-at-local-golf-tournament.webp",
    },
    {
      seoAlt: "Cares Image",
      imagePath:
        "/images/Section 5/Centra-Cares-supporting-local-communities-in-Haiti.webp",
    },
    {
      seoAlt: "Cares Image",
      imagePath:
        "/images/Section 5/Centra-Windows-Employees-at-Langley-manufacturing-plant.webp",
    },
    {
      seoAlt: "Cares Image",
      imagePath:
        "/images/Section 5/Centra-Windows-Family-at-Langley-manufacturing-plant.webp",
    },
    {
      seoAlt: "Cares Image",
      imagePath:
        "/images/Section 5/Centra-Windows-supporting-local-school-and-vancouver-giants.webp",
    },
    {
      seoAlt: "Cares Image",
      imagePath:
        "/images/Section 5/Centra-Windows-supporting-Wagner-Hills-charity.webp",
    },
  ],
};
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

  return (
    <>
      <Head>
        {/* Title needs keywords, first 65 chars show only - 100 chars allowed
            meta description needs good phrase to draw in customers
        */}

        <title>{"Centra Windows | Supreme"}</title>
        <link rel="canonical" href={`https://www.centrawindows.com/careers/`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={"Centra Windows | Supreme"} />
        {/* prevents google bots from indexing this page */}
        {/* <meta name="robots" content="noindex"></meta> */}
      </Head>

      {/* s1 */}
      <div className={styles.headerBg}>
        <img
          src={
            size.width > 960
              ? "/images/Section 1/Centra-Windows-Locally-owned-and-operated-where-customers-become-family-vinyl-windows.webp"
              : "/images/Section 1/Centra-Windows-Locally-owned-and-operated-where-customers-become-family-vinyl-windows_mobile.webp"
          }
          layout="fill"
          quality={100}
          alt={"Header Supreme"}
          className={styles.headerImage}
        />

        <div className={styles.container}>
          <h1 className={styles.headerTitle}>{"Welcome Supreme Team!"}</h1>
        </div>
      </div>
      <div className={styles.headerRightAlignedContainer}>
        <div className={styles.containerCenterMiddle}>
          <p className={styles.headerText}>
            {
              "We are so excited to welcome the Supreme team to our family. Centra has a very special culture, and we value all the unique gifts each of you bring to work every day. We are here to support you through this transition. As we learn about each other and align the businesses through this exciting new chapter, we want to ensure open and transparent communication."
            }
          </p>
        </div>
      </div>

      {/* s2 */}
      <div className={styles.awardContainer}>
        <div className={styles.awardTextContainer}>
          <p className={styles.awardTitle}>{"Why Centra Windows?"}</p>

          <p className={styles.awardText}>
            {
              "Leadership at Centra is collaborative and supportive. This is why we took the opportunity to hear from Supreme management, to learn more about the amazing brand that you have all built and how we can help take that next step together. "
            }
          </p>
        </div>
        <div className={styles.awardsVideoContainer}>
          <Youtube
            embedId={"https://www.youtube.com/embed/Xc4SkjvvHzs"}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      {/* s3 */}
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
          {size.width > 992 ? (
            <img
              loading="lazy"
              src="/images/dump/Path.webp"
              alt="arrow down black"
              width="152"
              height="152"
              className={styles.arrowDownBlack}
            />
          ) : null}

          <p className={styles.title + " " + styles.centerText}>
            {"What is the Centra Culture?"}
          </p>
          <p className={styles.text + " " + styles.workTextContainer}>
            At Centra, passion and performance meet to create a culture full of
            people who OWN IT! This unique, evolving culture is built on the
            unshakeable foundation of our key values. Family, Entrepreneurial
            Spirit, Respect, Safety, and Teamwork are more than just buzzwords.
            Learn more from these videos. If you have any questions, just reach
            out and we’ll be happy to answer them! In a few weeks, you will have
            access to our internal Workplace group, where you can meet and learn
            more about our team. Stay tuned! <br /> <br /> Feel free to contact
            us with any questions and concerns. We'd love to hear from you!{" "}
            <br />
            <a href="mailto:letstalk@centra.ca">Contact Us</a>
          </p>
        </div>

        <div className={styles.workVideosContainer}>
          <div className={styles.workVideosContent}>
            <Youtube
              embedId={"https://www.youtube.com/embed/Xc4SkjvvHzs"}
              width="100%"
              height="100%"
              style="workVideo"
            />
            <p className={styles.category}>Centra Family</p>
            <p className={styles.workTitle}>Centra Video</p>
          </div>
          <div style={{ height: `50px` }} />
          <div className={styles.workVideosContent}>
            <Youtube
              embedId={"https://www.youtube.com/embed/Xc4SkjvvHzs"}
              width="100%"
              height="100%"
              style="workVideo"
            />
            <p className={styles.category}>FERST</p>
            <p className={styles.workTitle}>Centra Video</p>
          </div>
        </div>
      </div>

      {/* s4 */}
      <div className={styles.PercentContainer}>
        <div className={styles.imagesContainer}>
          {size.width > 992 ? (
            <img
              src={
                "/images/Section 4/Centra-Windows-Expert-with-happy-customer-in-Victoria.webp"
              }
              alt={"group"}
              className={styles.smallImage}
            />
          ) : null}
          {size.width > 992 ? (
            <img
              src={
                "/images/Section 4/Centra-Windows-Expert-with-his-child-celebrating-at-local-manufacturing-plant.webp"
              }
              alt={"group"}
              className={styles.bigImage}
            />
          ) : null}

          {size.width > 992 ? (
            <img
              src={
                "/images/Section 4/Centra-Windows-Installer-standing-next-to-vinyl-window-in-Surrey.webp"
              }
              alt={"group"}
              className={styles.smallImage}
            />
          ) : null}
        </div>
        <div className={styles.hundredContainer}>
          <div className={styles.hundredContentContainer}>
            <img
              src="/images/dump/percent.webp"
              alt="100 percent icon"
              className={styles.hundred}
            />

            {size.width > 992 ? (
              <div className={styles.employeeTextContainer}>
                <p className={styles.employeeTitle}> {"Employee Owned"}</p>
                <p className={styles.employeeText}>
                  {
                    "We understand that change can seem scary. This is especially true when it comes to your work which is an important part of how you support yourself and your families. We’re Employee Owned because we care about our people and their families, and we want them to have security and peace of mind through work now and forever."
                  }
                </p>
              </div>
            ) : (
              <p className={styles.employeeTitle}> {"Employee Owned"}</p>
            )}
          </div>

          {size.width > 992 ? null : (
            <p className={styles.employeeText}>
              {
                "We understand that change can seem scary. This is especially true when it comes to your work which is an important part of how you support yourself and your families. We’re Employee Owned because we care about our people and their families, and we want them to have security and peace of mind through work now and forever."
              }
            </p>
          )}
        </div>
      </div>

      {/* s5 */}
      <div className={styles.missionContainer}>
        <p className={styles.missionTitle}>{"Why Centra? "}</p>
        <div className={styles.missionCardContainer}>
          <div className={styles.missionCard}>
            <img
              src="/images/icons/OurPeopleAreOurProfits.webp"
              alt="People are our profits"
              width="40"
              height="40"
            />
            <p className={styles.missionSubtitle}>Locally Owned & Operated</p>
            <p className={styles.missionText}>
              We understand and appreciate the role the community has played in
              our success, and we’re constantly striving to give back. When
              people choose Centra, they are supporting a locally owned and
              operated business.
            </p>
          </div>
          <div className={styles.missionCard}>
            <img
              src="/images/icons/PassionandPerformance.webp"
              alt="Passion and Performance"
              width="40"
              height="40"
            />
            <p className={styles.missionSubtitle}>Employee Owned</p>
            <p className={styles.missionText}>
              Centra is 100% Employee Owned and operated. Everyone who works for
              Centra, and now for Supreme Windows, has a chance to join our
              share match program and benefit as we continue to grow.
            </p>
          </div>

          <div className={styles.missionCard}>
            <img
              src="/images/icons/BuildEquityBeyondYourPaycheck.webp"
              alt="Build Equity Beyond Your Paycheque"
              width="40"
              height="40"
            />
            <p className={styles.missionSubtitle}>Award-Winning Culture</p>
            <p className={styles.missionText}>
              We’re not in the window business, we’re in the people business.
              Centra is very proud to be recognized and awarded as one of
              Canada’s most admired corporate cultures.
            </p>
          </div>
        </div>
      </div>
      {/* s6 */}
      <CentraCares data={centraCaresData} size={size} />
      {/* s7 */}
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitsTitleContainer}>
          <p className={styles.benefitsTitle}>
            Our Commitments {size.width < 600 ? <br /> : null}to You
          </p>
          <p className={styles.benefitsText}>
            {
              "We’re proud of the culture our people have created. We’re committed to it, and also to you. Learn more about how our team of Employee Owners will support you and your journey at Centra."
            }
          </p>
        </div>

        <div className={styles.benefitsFlexContainer}>
          <div className={styles.benefitsContentContainer}>
            <div className={styles.benefitsImg}>
              <LazyImage
                src={
                  "/images/Section 6/Centra-Windows-Experts-working-together-and-celebrating-teamwork.webp"
                }
                alt={"Diversity Image"}
                width={"100%"}
                height={"100%"}
              />
            </div>

            <p className={styles.benefitsSubtitle}>Diversity and Inclusion</p>
            <p className={styles.benefitsContentText}>
              We’re committed to building the most diverse and inclusive company
              in the industry. Our Employee Owners come from diverse cultures,
              backgrounds, genders, and sexualities, and they come with diverse
              thoughts, skillsets, and ideas.
            </p>
          </div>

          <div className={styles.benefitsContentContainer}>
            <div className={styles.benefitsImg}>
              <LazyImage
                src={
                  "/images/Section 6/Centra-Windows-investing-in-training-and-education-for-young-installers-and-builders.webp"
                }
                alt={"Health & Well Being "}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <p className={styles.benefitsSubtitle}>Growth Opportunities</p>
            <p className={styles.benefitsContentText}>
              We’re committed to growing your career and nurturing you however
              we can. We want to see you advance and try new things. We’ll also
              support your education and offer the opportunity to learn exciting
              new skills.
            </p>
          </div>
        </div>
        <div className={styles.benefitsFlexContainer}>
          <div className={styles.benefitsContentContainer}>
            <div className={styles.benefitsImg}>
              <LazyImage
                src={
                  "/images/Section 6/Centra-Windows-Safety-officer-training-installers-in-BC.webp"
                }
                alt={"Health & Well Being "}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <p className={styles.benefitsSubtitle}>Health and Wellbeing</p>
            <p className={styles.benefitsContentText}>
              We’re committed to your health and wellbeing. This includes your
              physical, psychological, and financial wellness. You’re not a
              robot, and you shouldn’t be treated like one.
            </p>
          </div>

          <div className={styles.benefitsContentContainer}>
            <div className={styles.benefitsImg}>
              <LazyImage
                src={
                  "/images/Section 6/Centra-Windows-team-training-and-learning-about-vinyl-windows-in-BC.webp"
                }
                alt={"Health & Well Being "}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <p className={styles.benefitsSubtitle}>Investment & Training</p>
            <p className={styles.benefitsContentText}>
              We’re committed to offering you the opportunity to learn exciting
              new skills, both with in-house training programs, formal
              education, and support in trade designations.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.containerStandard + " " + styles.mdMarginTop}>
        <div className={styles.locationsContainer}>
          <p className={styles.familyTitle}>{"Our Locations"}</p>
          <p className={styles.familyText + " " + styles.locationsText}>
            {
              "Find the location closest to you and pay our showroom a visit. Our Window Geeks can’t wait to meet you!"
            }
          </p>

          <div className={styles.locationsContentContainer}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/dir//google+maps+centra+langley/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x5485d3e74511f5f5:0x9b455e03b3fce0f0?sa=X&ved=2ahUKEwjHkovDi7LwAhXRqp4KHYtPBZkQ9RcwE3oECC8QBQ"
              className={styles.relativePosition}
            >
              <img
                src="/images/dump/langley.webp"
                alt="langley"
                className={styles.locationImage}
              />
              <p className={styles.locationText}>Langley</p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/dir//centra+victoria+google+maps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x548f736382c6eb41:0xe35c384332f1613?sa=X&ved=2ahUKEwitvNSjlbLwAhUNpp4KHV-EBZgQ9RcwHHoECCQQBA"
              className={styles.relativePosition}
            >
              <img
                src="/images/dump/victoria.webp"
                alt="victoria"
                className={styles.locationImage}
              />
              <p className={styles.locationText}>Victoria</p>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/dir//centra+nanaimo+google+maps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x5488a2257f1d2815:0x3145d3c5f696e45a?sa=X&ved=2ahUKEwiN6KyylbLwAhVPuZ4KHRkpBJoQ9RcwE3oECBoQBA"
              className={styles.relativePosition}
            >
              <img
                src="/images/dump/nanaimo.webp"
                alt="nanaimo"
                className={styles.locationImage}
              />
              <p className={styles.locationText}>Nanaimo</p>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/dir//centra+kelowna+google+maps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x537d8d2d2f29e721:0x70eb410a5ca73d64?sa=X&ved=2ahUKEwiqlN6_lbLwAhVHgp4KHf2rA5sQ9RcwHHoECDEQBQ"
              className={styles.relativePosition}
            >
              <img
                src="/images/dump/kelowna.webp"
                alt="kelowna"
                className={styles.locationImage}
              />
              <p className={styles.locationText}>Kelowna</p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Supreme+Windows+(Calgary)+Inc.+Established+1967/@50.9621047,-113.9702901,17z/data=!3m1!4b1!4m5!3m4!1s0x537179e3865a2417:0xf5a36d40583da144!8m2!3d50.9621047!4d-113.9681015"
              className={styles.relativePosition}
            >
              <img
                src="/images/dump/Calgary.jpg"
                alt="Calgary Supreme Windows"
                className={styles.locationImage}
              />
              <p className={styles.locationText}>Calgary</p>
            </a>
          </div>
        </div>
      </div>
      {/*11 */}
      {insta && size.width > 960 ? (
        <>
          <div className={styles.lifeContainer}>
            <p className={styles.lifeTitle}>Follow us on Social!</p>
            <p className={styles.lifeSubtitle}>
              Follow us on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/centrawindows/"
                className={styles.lifeLink}
              >
                Instagram
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/centrawindows/"
                className={styles.lifeLink}
              >
                Facebook
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/CentraWindows?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                className={styles.lifeLink}
              >
                Twitter
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ca.linkedin.com/company/centra"
                className={styles.lifeLink}
              >
                LinkedIn
              </a>
            </p>
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
      <CallToAction data={data[12]} supreme text={"SEE OUR CURRENT OPENINGS"} />
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
