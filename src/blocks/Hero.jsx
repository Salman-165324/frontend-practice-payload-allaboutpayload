import React from "react";

export default function Hero({heading, text, backgroundImage, blockType}) {
  return (
    <div>
      <h2>Heading:{heading}</h2>
      <p>Text:{text}</p>
      <p>Block Type: {blockType}</p>
    </div>
  );
}
