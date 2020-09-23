import React from "react";
import "animate.css";

const INTERVAL_IN_MILLISECONDS = 4000;

export default function PageTitle({ title, keywords }) {
  const [index, setIndex] = React.useState(0);
  const keyword = keywords[index];

  function next() {
    setIndex((index + 1) % keywords.length);
  }

  React.useEffect(() => {
    const id = setInterval(next, INTERVAL_IN_MILLISECONDS);
    return function () {
      clearInterval(id);
    };
  });

  return (
    <div>
      <h1>{title}</h1>
      <div key={keyword} className="animate__animated animate__fadeIn">
        {keyword}
      </div>
    </div>
  );
}
