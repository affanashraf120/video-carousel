import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import "./carousel.scss";
import classnames from "classnames";
import { useSwipeable } from "react-swipeable";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CustomCarousel = ({ urls }) => {
  const [previousAnimate, setPreviousAnimate] = useState(false);
  const [nextAnimate, setNextAnimate] = useState(false);
  const [positions, setPositions] = useState([0, 1, 2, 3, 4]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      handlePrevious();
    },
    onSwipedRight: () => {
      handleNext();
    },
    trackTouch: true,
  });

  const settings = {
    width: "100%",
    height: "100%",
    style: {
      borderRadius: "1rem",
      overflow: "hidden",
    },
  };

  const getUrl = (data) => {
    const { thumbnail, url } = data;
    return {
      light: thumbnail || true,
      url,
    };
  };

  const moveNext = (size) => {
    setPositions((positions) => [
      ...positions.map((pos) => {
        return pos + 1 === size ? 0 : pos + 1;
      }),
    ]);
  };

  const movePrevious = (size) => {
    setPositions((positions) => [
      ...positions.map((pos) => {
        return pos - 1 < 0 ? size - 1 : pos - 1;
      }),
    ]);
  };

  const handleNext = () => {
    if (!nextAnimate) {
      setNextAnimate(true);
      setTimeout(() => {
        setNextAnimate(false);
        moveNext(urls.length);
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (!previousAnimate) {
      setPreviousAnimate(true);
      setTimeout(() => {
        setPreviousAnimate(false);
        movePrevious(urls.length);
      }, 500);
    }
  };

  return (
    <div
      className="bg-black d-flex flex-column align-items-center w-100 h-75"
      {...handlers}
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          handlePrevious();
        } else if (e.key === "ArrowRight") {
          handleNext();
        }
      }}
    >
      <div
        className={classnames(
          "position-relative",
          // "bg-white",
          "w-100",
          // "h-100",
          "shadow"
        )}
        style={{ height: "90%" }}
      >
        {/* Level 1 */}
        <div
          className={classnames("top-slide shadow-lg", {
            "center-to-left": previousAnimate,
            "center-to-right": nextAnimate,
          })}
        >
          <ReactPlayer
            {...settings}
            controls={true}
            playing={true}
            url={urls[positions[0]].url}
          />
          <span
            className={classnames({
              darken: previousAnimate || nextAnimate,
            })}
          ></span>
        </div>
        {/* Level 2 */}
        <div
          className={classnames("left-slide shadow-lg", {
            "to-center": nextAnimate,
            "left-to-left-sm": previousAnimate,
          })}
          onClick={handleNext}
        >
          <ReactPlayer {...settings} {...getUrl(urls[positions[1]])} />
          <span
            className={classnames({
              brighten: nextAnimate,
            })}
          ></span>
        </div>
        <div
          className={classnames("right-slide shadow-lg", {
            "to-center": previousAnimate,
            "right-to-right-sm": nextAnimate,
          })}
          onClick={handlePrevious}
        >
          <ReactPlayer {...settings} {...getUrl(urls[positions[4]])} />
          <span
            className={classnames({
              brighten: previousAnimate,
            })}
          ></span>
        </div>
        {/* Level 3 */}
        <div
          className={classnames("right-slide-sm shadow-lg", {
            "fade-in": nextAnimate,
            "right-sm-to-right": previousAnimate,
          })}
        >
          <ReactPlayer {...settings} {...getUrl(urls[positions[3]])} />
          <span></span>
        </div>
        <div
          className={classnames("left-slide-sm shadow-lg", {
            "left-sm-to-left": nextAnimate,
            "fade-in": previousAnimate,
          })}
        >
          <ReactPlayer {...settings} {...getUrl(urls[positions[2]])} />
          <span></span>
        </div>
      </div>
      <div className="d-flex">
        <button className="arrow-btn" onClick={handlePrevious}>
          <FaArrowLeft />
        </button>
        <button className="arrow-btn" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;
