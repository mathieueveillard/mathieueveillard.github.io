import React from "react";
import { useSwipeable } from "react-swipeable";
import "animate.css";

export default function Slider({ children }) {
  const numberOfSlides = children.length;
  const [index, setIndex] = React.useState(0);

  function toSlide(i) {
    return function () {
      setIndex(i);
    };
  }

  function previous() {
    setIndex((index + numberOfSlides - 1) % numberOfSlides);
  }

  function next() {
    console.log("next");
    setIndex((index + 1) % numberOfSlides);
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: previous,
  });

  return (
    <div>
      <div className="Slider__Container" {...swipeHandlers}>
        <div
          key={index}
          className="Slider__Content animate__animated animate__fadeIn"
        >
          {children[index]}
        </div>
        <div className="Slider__NavigationZone Slider__Left" onClick={previous} />
        <div className="Slider__NavigationZone Slider__Right" onClick={next} />
      </div>
      <div className="Slider__Controls">
        {[...new Array(numberOfSlides)].map((_, i) => (
          <div
            key={i}
            className={`Slider__Anchor ${
              i === index ? "Slider__Anchor--selected" : ""
            }`}
            onClick={toSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}
