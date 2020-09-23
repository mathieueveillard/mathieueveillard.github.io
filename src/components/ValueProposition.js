import React from "react";
import Slider from "./_lib/Slider";
import ValuePropositionItem from "./ValuePropositionItem";

export default function ValueProposition({ services }) {
  return (
    <Slider>
      {services.map((service) => (
        <div key={service.name} className="column">
          <ValuePropositionItem service={service} />
        </div>
      ))}
    </Slider>
  );
}
