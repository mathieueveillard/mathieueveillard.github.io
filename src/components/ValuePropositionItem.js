import React from "react";

export default function ValuePropositionItem({
  service: { name, description },
}) {
  return (
    <div>
      <p className="emphasis">{name}</p>
      <p>{description}</p>
    </div>
  );
}
