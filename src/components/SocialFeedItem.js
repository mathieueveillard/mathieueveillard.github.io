import React from "react"

export default function SocialFeedItem({ network: { name, url } }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {name}
    </a>
  )
}
