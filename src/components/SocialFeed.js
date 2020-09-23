import React from "react";
import SocialFeedItem from "./SocialFeedItem";

export default function SocialFeed({ networks }) {
  return (
    <ul>
      {networks.map((network, index) => (
        <React.Fragment key={network.url}>
          {index > 0 && "∙"}
          <SocialFeedItem network={network} />
        </React.Fragment>
      ))}
    </ul>
  );
}
