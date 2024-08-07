import { blocks } from '@/blocks/blockList'
import React from 'react'

export default function RenderBlocks({layout}) {

  return (
    <>
      {
        layout.map((block) => {
          
          const Block = blocks[block.blockType];
          if(Block){
            return <Block key={block.id} {...block}></Block>
          }
        })
      }
    </>
  )
}
