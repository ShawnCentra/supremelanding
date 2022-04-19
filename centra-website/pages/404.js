import React, { useState, useEffect } from "react";
import Head from "next/head";
import useWindowSize from "../utility/useWindowSize";

//style
import styles from "./404.module.scss";
//components

import Breadcrumb from "react-bootstrap/Breadcrumb";

import Navbar from "../components/Navigation";
import Footer from "../components/Footer";

export default function services() {
  const size = useWindowSize();

  //breadcrump visibility
  const [scrollTop, setScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <Head>
        {/* Title needs keywords, first 65 chars show only - 100 chars allowed
            meta description needs good phrase to draw in customers
        */}

        <title>Centra | 404 Page Not Found</title>
        <link
          rel="canonical"
          href={`https://www.centrawindows.com/404/`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="SEO Content Description" />
        {/* prevents google bots from indexing this page */}
        {/* <meta name="robots" content="noindex"></meta> */}
      </Head>
      <Navbar />
      <div className={styles.headerBg}>
        {scrollTop === 0 || !scrolling ? (
          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item className={styles.breadcrumbItem} href="/">
              Home
            </Breadcrumb.Item>
            <div className={"breadcrumbSlash"}>/</div> 
            <Breadcrumb.Item
              className={styles.breadcrumbItem + " " + styles.active}
              active
              href="/professionals/architects-engineers"
            >
              404 Page Not Found
            </Breadcrumb.Item>
          </Breadcrumb>
        ) : (
          ""
        )}

        <picture style={{ height: "inherit" }}>
          <source
            srcSet="/images/404/Centra-Windows-provide-comfort-in-BC-west-coast-climate.webp"
            type="image/jpg"
            media="(max-width: 480px)"
          />
          <img
            src="/images/404/Centra-Windows-provide-comfort-in-BC-west-coast-climate.webp"
            alt="header window man"
            className={styles.headerImage}
          />
        </picture>

        <div className={styles.container}>
          <h1 className={styles.headerTitle}>
            Sorry :( this page doesn't exist.
          </h1>
        </div>
      </div>
      <div className={styles.headerRightAlignedContainer}>
        <div
          className={styles.containerCenterMiddle + " " + styles.geekPadding}
        >
          <p className={styles.headerText404}>404</p>
          <p className={styles.headerText}>
            But feel free to check out the ones that do, they're great.{" "}
          </p>
        </div>
      </div>
      <div style={{ height: "150px" }} />
      <Footer size={size} />
    </>
  );
}
