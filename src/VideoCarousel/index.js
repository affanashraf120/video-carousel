import classnames from "classnames";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactPlayer from "react-player/lazy";
import { useSwipeable } from "react-swipeable";
import "./carousel.scss";

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

  const styles = {
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

  const setNextPositions = (size) => {
    setPositions((positions) => [
      ...positions.map((pos) => {
        return pos + 1 === size ? 0 : pos + 1;
      }),
    ]);
  };

  const setPreviousPositions = (size) => {
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
        setNextPositions(urls.length);
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (!previousAnimate) {
      setPreviousAnimate(true);
      setTimeout(() => {
        setPreviousAnimate(false);
        setPreviousPositions(urls.length);
      }, 500);
    }
  };

  const arrowKeysHandler = (e) => {
    if (e.key === "ArrowLeft") {
      handlePrevious();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  return (
    <div
      className="bg-black d-flex flex-column align-items-center w-100 h-75"
      {...handlers}
      tabIndex="0"
      onKeyDown={arrowKeysHandler}
    >
      <div
        className={classnames("position-relative", "w-100", "shadow")}
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
            {...styles}
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
          <ReactPlayer {...styles} {...getUrl(urls[positions[1]])} />
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
          <ReactPlayer {...styles} {...getUrl(urls[positions[4]])} />
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
          <ReactPlayer {...styles} {...getUrl(urls[positions[3]])} />
          <span></span>
        </div>
        <div
          className={classnames("left-slide-sm shadow-lg", {
            "left-sm-to-left": nextAnimate,
            "fade-in": previousAnimate,
          })}
        >
          <ReactPlayer {...styles} {...getUrl(urls[positions[2]])} />
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
