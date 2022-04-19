import React, { useState, useEffect } from "react";
import Link from "next/link";

import Spinner from "react-bootstrap/Spinner";
//style
import styles from "./CascadeContent.module.scss";
//data fetching from json file/api
import useSWR from "swr";
import fetcher from "../utility/fetcher";
import Youtube from "./../components/Youtube";

const postsPerPage = 8;
export default function CascadeContent(props) {
  const [category, setCategory] = useState(0);
  const [active, setActiveButton] = useState("All");
  const [pageCategory, setPageCategory] = useState(0);
  const [categoryBlogsData, setCategoryBlogsData] = useState([]);
  const [showButton, setShowButton] = useState(true);

  //get the categories for the filters
  const { data: categories, error } = useSWR(
    process.env.NEXT_PUBLIC_WEB_API_BLOG_CATEGORIES,
    fetcher
  );

  const {
    data: categoryData,
    errorBlogsCategory,
    isValidating: isValidatingCategory,
  } = useSWR(
    process.env.NEXT_PUBLIC_WEB_API_BLOGS_BY_CATEGORY +
    `?CategroyId=${category}` +
    `&PageNumber=${pageCategory}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  //if blogs or categoryBlogs data changes, update their arrays with new appended data
  useEffect(() => {
    setCategoryBlogsData([]);
  }, [category]);

  useEffect(() => {
    if (categoryData && categoryData.length !== 0) {
      console.log("categoryData.length ",categoryData.length )
      if (categoryData.length < 8) {
        console.log("showButton set to false")
        setShowButton(false)
      } else {
        setShowButton(true)
      }
      setCategoryBlogsData((prevState) =>
        [...prevState].concat(...categoryData)
      );
    }
  }, [categoryData]);
  console.log("showButton", showButton)
  //category limits
  const isLoadingInitialDataCategory =
    !categoryBlogsData && !errorBlogsCategory;

  const isLoadingMoreCategory =
    isLoadingInitialDataCategory || categoryBlogsData === "undefined";

  const isEmptyCategory = categoryData?.length === 0;

  const isReachingCategoryEnd =
    isEmptyCategory ||
    (categoryData &&
      categoryData[categoryData.length - 1]?.length < postsPerPage);

  const isRefreshingCategory = isValidatingCategory && categoryData;



  // console.log(`isLoadingInitialDataCategory`, isLoadingInitialDataCategory, "\n", `isEmptyCategory`, isEmptyCategory, "\n", `isRefreshingCategory`, isRefreshingCategory, "\n", `isReachingCategoryEnd`, isReachingCategoryEnd, "\n", `categoryData`, categoryData, "\n", `categoryBlogsData`, categoryBlogsData, "\n")
  // //switch categories, update States { category , page, active button}

  const clickedButtonHandler = (e, id) => {
    const { name } = e.target;

    if (name != active) {
      setPageCategory(1);

      setCategory(id);
      setActiveButton(name);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.filter}>FILTERS</p>
      <div className={styles.buttonContainer}>
        <button
          name={"All"}
          onClick={(e) => clickedButtonHandler(e, 0)}
          className={
            active === "All"
              ? styles.button + " " + styles.buttonActive
              : styles.button
          }
        >
          <span className={styles.buttonTitle}>All</span>
        </button>
        {categories ? (
          categories.map((item, index) => (
            <button
              name={item.name}
              key={index}
              onClick={(e) => clickedButtonHandler(e, item.id)}
              className={
                active === item.name
                  ? styles.button + " " + styles.buttonActive
                  : styles.button
              }
            >
              <span className={styles.buttonTitle}>{item.name}</span>
            </button>
          ))
        ) : (
          <div className={styles.spinnerContainer}>
            <Spinner animation="border" variant="primary" />
          </div>
        )}
      </div>

      {active !== "All" ? null : (
        <div className={styles.trendingContainer}>
          <Link
            href={{
              pathname: `/blog/${props.images[0].slug}`,
            }}
            className={styles.trendingImgContainer}
          >
            <div className={styles.trendingImgContainer}>
              <div className={styles.trendingImgBox}>
                <img
                  className={styles.trendingImg}
                  src={props.images[0].imagePath}
                  alt={props.images[0]?.seoAlt}
                />
              </div>

              <p className={styles.contentSubtitle}>
                {props.images[0].imgCategory}
              </p>
              <p className={styles.contentText}>
                {props.images[0].imgVideoTitle}
              </p>
            </div>
          </Link>
          <div className={styles.trendingNowContainer}>
            <p className={styles.trendingTitle}>Trending</p>
            <Link
              href={{
                pathname: `/blog/${props.images[1].slug}`,
              }}
            >
              <div className={styles.trendingContentContainer}>
                <div className={styles.borderLeft}></div>
                <p className={styles.contentSubtitle}>
                  {props.images[1] ? props.images[1].imgCategory : "t"}
                </p>
                <p className={styles.contentText}>
                  {props.images[1] ? props.images[1].imgVideoTitle : "t"}
                </p>
              </div>
            </Link>
            <div className={styles.divider} />
            <Link
              href={{
                pathname: `/blog/${props.images[2].slug}`,
              }}
            >
              <div className={styles.trendingContentContainer}>
                <div className={styles.borderLeft}></div>
                <p className={styles.contentSubtitle}>
                  {props.images[2] ? props.images[2].imgCategory : " ex text"}
                </p>
                <p className={styles.contentText}>
                  {props.images[2] ? props.images[2].imgVideoTitle : "ex text"}
                </p>
              </div>
            </Link>
            <div className={styles.divider} />
            <Link
              href={{
                pathname: `/blog/${props.images[3].slug}`,
              }}
            >
              <div className={styles.trendingContentContainer}>
                <div className={styles.borderLeft}></div>
                <p className={styles.contentSubtitle}>
                  {props.images[3] ? props.images[3].imgCategory : " ex text"}
                </p>
                <p className={styles.contentText}>
                  {props.images[3] ? props.images[3].imgVideoTitle : "ex text"}
                </p>
              </div>
            </Link>
            {props.images?.[4]?.slug ? (<><div className={styles.divider} />
              <Link
                href={{
                  pathname: `/blog/${props.images[4].slug}`,
                }}
              >
                <div className={styles.trendingContentContainer}>
                  <div className={styles.borderLeft}></div>
                  <p className={styles.contentSubtitle}>
                    {props.images[4] ? props.images[4].imgCategory : " ex text"}
                  </p>
                  <p className={styles.contentText}>
                    {props.images[4] ? props.images[4].imgVideoTitle : "ex text"}
                  </p>
                </div>
              </Link></>) : null}
          </div>
        </div>
      )}
      {active ? <h1 className={styles.contentTitle}>{active}</h1> : null}

      <div className={styles.contentContainer}>
        {categoryBlogsData.length > 0 ? categoryBlogsData.map((item, index) => {
          return (
            <Link
              href={{
                pathname: `/blog/${item.slug}`,
              }}
              key={"key" + index}
            >
              <div className={styles.contentImgContainer}>
                <div className={styles.contentImgBox}>
                  {item.videoUrl !== "" ? (
                    <div id="blog-youtube" className={styles.contentImg}>
                      <Youtube
                        width={"100%"}
                        height={"100%"}
                        embedId={item.videoUrl}
                      />
                    </div>
                  ) : (
                    <img
                      className={styles.contentImg}
                      src={item.imagePath}
                      alt={item.seoAlt}
                    />
                  )}
                </div>

                <p className={styles.contentSubtitle}>{item.categoryName}</p>
                <p className={styles.contentText}>{item.title}</p>
              </div>
            </Link>
          );
        }) : <div class="lds-dual-ring"></div>}
      </div>

      <a className={styles.learnMoreButtonContainer}>
        {
          categoryData === undefined || !showButton? null : <button
            disabled={isReachingCategoryEnd}
            onClick={() => setPageCategory((prevState) => prevState + 1)}
            className={
              isLoadingMoreCategory
                ? styles.loadMoreButton + " " + styles.loadingMoreState
                : styles.loadMoreButton
            }
          >
            {isLoadingMoreCategory ? "Loading..." : "Load More"}
          </button>
        }

      </a>
    </div>
  );
}
