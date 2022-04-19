import React, { useState, useEffect } from "react";
import Link from "next/link";

import Spinner from "react-bootstrap/Spinner";
//style
import styles from "./CascadeContentAcademy.module.scss";
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
    process.env.NEXT_PUBLIC_WEB_API_ACADEMY_CATEGORIES,
    fetcher
  );

  const {
    data: categoryData,
    errorBlogsCategory,
    isValidating: isValidatingCategory,
  } = useSWR(
    process.env.NEXT_PUBLIC_WEB_API_ACADEMY_BY_CATEGORY +
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
      console.log("categoryData.length ", categoryData.length)
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

      <div className={styles.centerFilters}>

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
            categories.map((item) => (
              <button
                name={item.name}
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
      </div>

      {active ? <h1 className={styles.contentTitle}>{active}</h1> : null}

      <div className={styles.contentContainer}>
        {categoryBlogsData.length > 0 ? categoryBlogsData.map((item, index) => {
          return (
            <Link
              href={{
                pathname: `/academy/${item.slug}`,
              }}
              key={"key" + index}
            >
              <div className={styles.contentImgContainer}>
                <div className={styles.contentImgBox}>
                  <div className={styles.yellowContainer}>
                    <p className={styles.yellowContainerText}>Geek Level 1</p>
                  </div>
                  <img
                    className={styles.contentImg}
                    src={`${item.imagePath}/mobile`}
                    alt={item.seoAlt}
                  />
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
          categoryData === undefined || !showButton ? null : <button
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
