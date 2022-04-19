import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import useSWR from "swr";
import Fetcher from "../utility/fetcher";
import LazyImage from "./lazyImage";
import useWindowSize from "../utility/useWindowSize";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";

//style
import styles from "./FilterGallery.module.scss";

//content gets api pulled into state (default content is rendered) ->
//filter inputs change the filter for the state content -> state content gets rendered

export default function FilterGallery(props) {
  const [show, setShow] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [colour, setColour] = useState(null);
  const [collection, setCollection] = useState(null);
  const [room, setRoom] = useState(null);
  const [shape, setShape] = useState(null);
  const [arrayOfData, setArrayOfData] = useState([]);

  const [pageIndex, setPageIndex] = useState(1);
  const [endOfIndex, setEndOfIndex] = useState(false);
  const [noItems, setNoItems] = useState(false);
  const size = useWindowSize();

  // The API URL includes the page index, which is a React state.
  const { data } = useSWR(
    `${props.doors
      ? process.env.NEXT_PUBLIC_WEB_API_INSPIRATION_DOORS
      : process.env.NEXT_PUBLIC_WEB_API_INSPIRATION
    }?page=${pageIndex}`,
    Fetcher
  );

  //attribute filter functions
  const handleColour = (event) => {
    if (event.target.value == 0) {
      setColour(null);
      return;
    }
    setColour(event.target.value);
  };
  const handleCollection = (event) => {
    if (event.target.value == 0) {
      setCollection(null);
      return;
    }
    setCollection(event.target.value);
  };
  const handleRoom = (event) => {
    if (event.target.value == 0) {
      setRoom(null);
      return;
    }
    setRoom(event.target.value);
  };
  const handleShape = (event) => {
    if (event.target.value == 0) {
      setShape(null);
      return;
    }
    setShape(event.target.value);
  };

  //if data changes, append new data to postsToShow

  useEffect(() => {
    if (props.fullInspiration && data) {
      if (data.length === 0 || data.length < 8) {
        setEndOfIndex(true);
      }
      //append api data to the state array
      setArrayOfData((prevState) => [...prevState, ...data]);
    }
  }, [props.data, data]);

  let posts = props.landing
    ? props.static
      ? props.data
      : props.data.images
    : arrayOfData.filter(
      (item) =>
        (colour != null ? item.attrColor === colour : true) &&
        (collection != null ? item.attrStyle === collection : true) &&
        (room != null ? item.attrRoom === room : true) &&
        (shape != null ? item.attrShape === shape : true)
    );

  useEffect(() => {
    let filtersArrayLength = arrayOfData.filter(
      (item) =>
        (colour != null ? item.attrColor === colour : true) &&
        (collection != null ? item.attrStyle === collection : true) &&
        (room != null ? item.attrRoom === room : true) &&
        (shape != null ? item.attrShape === shape : true)).length
   
    if (data && filtersArrayLength === 0) {
      console.log("showing button")
      setNoItems(true)
    } else {
      console.log("notshowing button")
      setNoItems(false)
    }

  }, [ colour, collection, room, shape])

  console.log(
    "filters length",
    arrayOfData.filter(
      (item) =>
        (colour != null ? item.attrColor === colour : true) &&
        (collection != null ? item.attrStyle === collection : true) &&
        (room != null ? item.attrRoom === room : true) &&
        (shape != null ? item.attrShape === shape : true)
    ).length
  );

  console.log("noItems", noItems)

  const openModal = (index) => {
    setModalIndex(index);
    setShow(true);
  };

  const handleClose = () => {
    setModalIndex(0);
    setShow(false);
  };

  return (
    <>
      <div className={styles.filterGalleryContainer + " " + styles.flex}>
        {props.landing ? (
          <div className={styles.textContainer}>
            <p className={styles.filterSubtitle}>{props?.data?.subtitle}</p>
            <p className={styles.filterTitle + " " + styles.center}>
              {props?.colorTitle ? props.colorTitle : props?.data?.title}
            </p>
            <p className={styles.filterText + " " + styles.center}>
              {props.colorText ? props.colorText : props?.data?.content}
            </p>
          </div>
        ) : (
          <>
            {" "}
            <p className={styles.filterTitle}>
              {" "}
              {props?.colorTitle ? props.colorTitle : props?.data?.title}
            </p>
            <p className={styles.filterText}>
              {" "}
              {props.colorText ? props.colorText : props?.data?.content}
            </p>
          </>
        )}

        {props.landing ? null : (
          <div className={styles.inputBoxContainer}>
            {props.doors ? (
              <select
                id="filter-select"
                className={styles.inputBox}
                onChange={(e) => handleColour(e)}
              >
                <option className={styles.dropDownText} value={0}>
                  Colour
                </option>
                <option className={styles.dropDownText} value="White">
                  White
                </option>
                <option className={styles.dropDownText} value="Black">
                  Black
                </option>

                <option className={styles.dropDownText} value="Vibrant">
                  Vibrant
                </option>
              </select>
            ) : (
              <select
                id="filter-select"
                className={styles.inputBox}
                onChange={(e) => handleColour(e)}
              >
                <option className={styles.dropDownText} value={0}>
                  Colour
                </option>
                <option className={styles.dropDownText} value="White">
                  White
                </option>
                <option className={styles.dropDownText} value="Black">
                  Black
                </option>
                <option className={styles.dropDownText} value="Green">
                  Green
                </option>
                <option className={styles.dropDownText} value="Red">
                  Red
                </option>
                <option className={styles.dropDownText} value="Blue">
                  Blue
                </option>
                <option className={styles.dropDownText} value="Gray">
                  Gray
                </option>
                <option className={styles.dropDownText} value="Brown">
                  Brown
                </option>
                <option className={styles.dropDownText} value="Tan">
                  Tan
                </option>
              </select>
            )}

            <select
              id="filter-select"
              className={styles.inputBox}
              value={collection}
              onChange={(e) => handleCollection(e)}
            >
              <option className={styles.dropDownText} value={0}>
                Architectural Style
              </option>
              <option className={styles.dropDownText} value="Farmhouse">
                Farmhouse
              </option>
              <option
                className={styles.dropDownText}
                value="Modern & Contemporary"
              >
                Modern & Contemporary
              </option>
              <option className={styles.dropDownText} value="Traditional">
                Traditional
              </option>
            </select>

            {props.doors ? (
              <select
                id="filter-select"
                className={styles.inputBox}
                value={room}
                onChange={(e) => handleRoom(e)}
              >
                <option className={styles.dropDownText} value={0}>
                  Room
                </option>
                <option className={styles.dropDownText} value="Living Room">
                  Living Room
                </option>
                <option className={styles.dropDownText} value="Kitchen">
                  Kitchen
                </option>
                <option className={styles.dropDownText} value="Bathroom">
                  Bathroom
                </option>
                <option className={styles.dropDownText} value="Dining Room">
                  Dining Room
                </option>
                <option className={styles.dropDownText} value="Bedroom">
                  Bedroom
                </option>

                <option className={styles.dropDownText} value="Patio">
                  Patio
                </option>
                <option className={styles.dropDownText} value="Entry">
                  Entry
                </option>
              </select>
            ) : (
              <select
                id="filter-select"
                className={styles.inputBox}
                value={room}
                onChange={(e) => handleRoom(e)}
              >
                <option className={styles.dropDownText} value={0}>
                  Room
                </option>
                <option className={styles.dropDownText} value="Living Room">
                  Living Room
                </option>
                <option className={styles.dropDownText} value="Kitchen">
                  Kitchen
                </option>
                <option className={styles.dropDownText} value="Bathroom">
                  Bathroom
                </option>
                <option className={styles.dropDownText} value="Bedroom">
                  Bedroom
                </option>
                <option className={styles.dropDownText} value="Dining Room">
                  Dining Room
                </option>
                <option className={styles.dropDownText} value="Patio">
                  Patio
                </option>
              </select>
            )}

            {props.doors ? (
              <select
                id="filter-select"
                className={styles.inputBox}
                value={shape}
                onChange={(e) => handleShape(e)}
              >
                <option className={styles.dropDownText} value={0}>
                  Type
                </option>

                <option
                  className={styles.dropDownText}
                  value="Sliding Patio Doors"
                >
                  Sliding Patio Doors
                </option>
                <option className={styles.dropDownText} value="French Doors">
                  French Doors
                </option>
                <option className={styles.dropDownText} value="Bifold Doors">
                  Bifold Doors
                </option>
                <option className={styles.dropDownText} value="Entry Doors">
                  Entry Doors
                </option>
              </select>
            ) : (
              <select
                id="filter-select"
                className={styles.inputBox}
                value={shape}
                onChange={(e) => handleShape(e)}
              >
                <option className={styles.dropDownText} value={0}>
                  Type
                </option>

                <option className={styles.dropDownText} value="Casement">
                  Casement
                </option>
                <option className={styles.dropDownText} value="Awning">
                  Awning
                </option>
                <option className={styles.dropDownText} value="Sliding">
                  Sliding
                </option>
                <option className={styles.dropDownText} value="Bay & Bow">
                  Bay & Bow
                </option>
                <option className={styles.dropDownText} value="Picture">
                  Picture
                </option>
                <option className={styles.dropDownText} value="Custom Shapes">
                  Custom Shapes
                </option>
              </select>
            )}
          </div>
        )}

        <div
          className={
            props.landing
              ? styles.filterGalleryImageContentContainer +
              " " +
              styles.centerContent
              : styles.filterGalleryImageContentContainer
          }
        >
          {posts.map((item, index) => {
            var imageSplit = item.imagePath.slice(0, -4) + "_500x300.jpg";
            return (
              <div
                key={"key" + index}
                onClick={() => openModal(index)}
                className={
                  styles.galleryContentContainer +
                  " " +
                  styles.landscapeContentContainer
                }
              >
                <div className={styles.imageContainer}>
                  {props.static ? (
                    <div className={styles.galleryImage}>
                      <LazyImage
                        src={imageSplit}
                        alt={item.seoAlt}
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                  ) : (
                    <div className={styles.galleryImage}>
                      <LazyImage
                        src={imageSplit}
                        alt={item.seoAlt}
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                  )}
                </div>
                {props.landing ? (
                  <>
                    {props.product ? (
                      <>
                        <p
                          className={
                            styles.filterContentSubtitle +
                            " " +
                            styles.filterWidth
                          }
                        >
                          {item.imgVideoTitle}
                        </p>
                        <p
                          className={
                            styles.filterText + " " + styles.filterWidth
                          }
                        >
                          {item.imgVideoDescription}
                        </p>
                      </>
                    ) : null}
                  </>
                ) : (
                  <>
                    <p
                      className={
                        styles.filterContentSubtitle + " " + styles.filterWidth
                      }
                    >
                      {item.imgVideoTitle}
                    </p>
                    <p className={styles.filterText + " " + styles.filterWidth}>
                      {item.imgVideoDescription}
                    </p>
                  </>
                )}
              </div>
            );
          })}

          {props.fullInspiration == undefined ? (
            <a
              href={props.doors ? "/doors/inspiration" : "/windows/inspiration"}
              className={styles.learnMoreButtonContainer}
            >
              <button className={styles.loadMoreButton}>
                See More Inspiration
              </button>
            </a>
          ) : (
            <div
              className={
                props?.data?.images?.length === posts.length
                  ? styles.learnMoreButtonContainer + " " + styles.dontShow
                  : styles.learnMoreButtonContainer
              }
            >
              {
                noItems ? <h2 className={styles.noItemsText}> <br/> Products Unavailable</h2> : <button
                  onClick={() => setPageIndex((prevState) => prevState + 1)}
                  className={
                    endOfIndex ? styles.hideButton : styles.loadMoreButton
                  }
                >
                  Load More
                </button>
              }
            </div>
          )}
        </div>
      </div>
      {posts.length != 0 ? (
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName={styles.modal}
          contentClassName={styles.modalContent}
          aria-labelledby="example-custom-modal-styling-title"
        >
          <div className={styles.contentLeft}>
            {props.static ? (
              <img
                src={
                  posts[modalIndex].imagePath ? posts[modalIndex].imagePath : ""
                }
                alt={posts[modalIndex]?.seoAlt}
                className={styles.modalImage}
              />
            ) : (
              <img
                src={
                  posts[modalIndex].imagePath ? posts[modalIndex].imagePath : ""
                }
                alt={posts[modalIndex]?.seoAlt}
                className={styles.modalImage}
              />
            )}

            {modalIndex !== 0 ? (
              <button
                className={
                  styles.buttonArrow + " " + styles.arrow + " " + styles.left
                }
                onClick={() => setModalIndex(modalIndex - 1)}
              >
                <svg
                  className={styles.svgIcon}
                  width="60px"
                  height="80px"
                  viewBox="0 0 50 80"
                >
                  <polyline
                    className={styles.poly}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="
	45.63,75.8 0.375,38.087 45.63,0.375 "
                  />
                </svg>
              </button>
            ) : null}

            {modalIndex !== posts.length - 1 ? (
              <button
                className={
                  styles.buttonArrow + " " + styles.arrow + " " + styles.right
                }
                onClick={() => setModalIndex(modalIndex + 1)}
              >
                <svg
                  className={styles.svgIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="60px"
                  height="80px"
                  viewBox="0 0 50 80"
                >
                  <polyline
                    className={styles.poly}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="
	0.375,0.375 45.63,38.087 0.375,75.8 "
                  />
                </svg>
              </button>
            ) : null}
          </div>

          <div className={styles.contentRight}>
            <div onClick={() => handleClose()} className={styles.close}></div>
            <p className={styles.modalTitle}>
              {posts[modalIndex].imgVideoTitle}
            </p>

            <div className={styles.tagContainer}>
              {posts?.[modalIndex].attrColor ? (
                <div className={styles.tag}>{posts[modalIndex].attrColor}</div>
              ) : null}
              {posts?.[modalIndex].attrStyle ? (
                <div className={styles.tag}>
                  {posts?.[modalIndex].attrStyle}
                </div>
              ) : null}

              {posts?.[modalIndex].attrRoom ? (
                <div className={styles.tag}>{posts[modalIndex].attrRoom}</div>
              ) : null}

              {posts?.[modalIndex].attrShape ? (
                <div className={styles.tag}>{posts[modalIndex].attrShape}</div>
              ) : null}
            </div>
            <p className={styles.modalText}>
              {posts[modalIndex].imgVideoDescription}
            </p>
            {props.doors ? (
              ""
            ) : (
              <div className={styles.linkContainer}>
                <h6 className={styles.linkHeader}>Other Window Collections</h6>
                <div className={styles.linksFlex}>
                <a className={styles.link} href="/windows/modern-collection">
                  Modern Collection { size.width > 1220 ? " >" : " |"}
                </a>
                <a
                  className={styles.link}
                  href="/windows/traditional-collection"
                >
                  Traditional Collection{ size.width > 1220 ? " >" : " |"}
                </a>
                <a className={styles.link} href="/windows/classic-collection">
                  Classic Sliding Collection{ size.width > 1220 ? " >" :null}
                </a>
                </div>
     
              </div>
            )}
            {props.doors ? <div className={styles.doorsSpacer}></div> : ""}
            <div className={styles.social}>
              <FacebookShareButton
                url="https://site.centrawindows.com/"
                quote={posts[modalIndex].imageTitle}
                hashtag={`#Centra`}
              >
                <img
                  src="/images/inspiration/facebook.webp"
                  alt="facebook image"
                  className={styles.socialIcon}
                />
              </FacebookShareButton>

              <TwitterShareButton
                url="https://site.centrawindows.com/"
                title={posts[modalIndex].imageTitle}
                via="Centra"
                hashtags={[
                  posts[modalIndex].colour,
                  posts[modalIndex].collection,
                  posts[modalIndex].shape,
                  posts[modalIndex].room,
                ]}
                related={["Centra"]}
              >
                <img
                  src="/images/inspiration/twitter.webp"
                  alt="twitter image"
                  className={styles.socialIcon}
                />
              </TwitterShareButton>
              <LinkedinShareButton
                url="https://site.centrawindows.com/"
                title={posts[modalIndex].imageTitle}
                summary={posts[modalIndex].imageText}
                source="https://site.centrawindows.com/"
              >
                <img
                  src="/images/inspiration/linked.webp"
                  alt="linkedin image"
                  className={styles.socialIcon}
                />
              </LinkedinShareButton>
              <PinterestShareButton
                url="https://site.centrawindows.com/"
                media="https://www.thesprucepets.com/thmb/560D75cxIT3Ik7AvPassFBjaLno=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-is-a-cats-age-determined-554296-01-52252e4c987b4655a4bf14394757e54e.jpg"
                description={posts[modalIndex].imageTitle}
              >
                <img
                  src="/images/inspiration/pintrest.webp"
                  alt="pintrest image"
                  className={styles.socialIcon}
                />
              </PinterestShareButton>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}
