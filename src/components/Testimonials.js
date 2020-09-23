import React from "react";
import Slider from "./_lib/Slider";
import TestimonialItem from "./TestimonialItem";

export default function Testimonials({ testimonials }) {
  return (
    <Slider>
      {testimonials.map((testimonial) => (
        <TestimonialItem
          key={testimonial.author.name}
          testimonial={testimonial}
        />
      ))}
    </Slider>
  );
}
