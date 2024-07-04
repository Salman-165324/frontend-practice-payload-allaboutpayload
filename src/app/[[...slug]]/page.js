import RenderBlocks from "@/utils/RenderBlocks";
import React from "react";

const BASE_URL = "http://localhost:4000";

export async function generateStaticParams() {
  const res = await fetch(`${BASE_URL}/api/pages?limit=100`);
  const pagesData = await res.json();
  // console.log("All the pages Data",pagesData)

  return pagesData.docs.map(({ slug }) => {
    slug: slug !=='index' ? slug.split("/") : false;
    console.log("Slug first", slug)
  });
}

const  getPageData  = async (slug)  => {

    const res = await fetch(`${BASE_URL}/api/pages?where[slug][equals]=${slug}`)
    const pageData = await res.json();
    return pageData.docs[0];  
 
}
export default async function page({ params }) {
  console.log("Slug", params.slug)
  const slug = params.slug || 'index'; 
  const pageData = await getPageData(slug); 
  return <>
    <RenderBlocks layout={pageData?.layout}></RenderBlocks>
  </>;
}
