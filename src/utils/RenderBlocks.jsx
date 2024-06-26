import { blocks } from "@/blocks/blockList";
import React from "react";

export default function RenderBlocks({layout}) {
  console.log("Inside Render Blocks")
  return (
    <div>
      {layout.map((block, i) => {
        console.log('Blocks', block)
        const Block = blocks[block.blockType];
        if (Block) {
          return <Block key={block.id} {...block}></Block>;
        }
      })}
    </div>
  );
}
