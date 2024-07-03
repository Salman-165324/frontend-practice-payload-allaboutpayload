import React from 'react'

export default function TwoColumn({heading, direction, blockType} ) {


  return (
    <div>
        <h2>{heading}</h2>
        <p>{direction}</p>
        <p>{blockType}</p>
    </div>
  )
}
