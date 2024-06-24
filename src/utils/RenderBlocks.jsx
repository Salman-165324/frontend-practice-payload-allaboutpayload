import { blocks } from "@/blocks/blockList";
import React from "react";

export default function RenderBlocks({ layout }) {
  return (
    <div>
      {layout.map((block, i) => {
        const Block = blocks[block.blockTypes];
        if (Block) {
          return <Block key={i} {...block}></Block>;
        }
      })}
    </div>
  );
}
