import React from "react";

export default function TestimonialItem({
  testimonial: {
    quote,
    author: { name, company, position, linkedInUrl },
  },
}) {
  return (
    <div>
      <p className="TestimonialItem__Quote">{quote}</p>
      <p className="TestimonialItem__Author">
        <a href={linkedInUrl} target="_blank" rel="noreferrer">
          {name}
        </a>
        , {position} @{company}
      </p>
    </div>
  );
}
