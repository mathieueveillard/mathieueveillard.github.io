import React from "react";
import "animate.css";

export default function PageTitle({ title, headline }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{headline}</div>
    </div>
  );
}
