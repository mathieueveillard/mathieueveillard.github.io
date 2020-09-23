import React from "react";

export default function Contact({ data: { email } }) {
  return (
    <div className="Contact">
      <div className="Contact__Image">
        <img src="./me.jpg" alt="Mathieu Eveillard" />
      </div>
      <div className="Contact__Email">
        <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
          {email}
        </a>
      </div>
    </div>
  );
}
