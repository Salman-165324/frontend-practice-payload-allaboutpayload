import RenderBlocks from '@/utils/renderBlocks';
import React from 'react';

const API_BASE_URL = 'http://localhost:4000';

export async function generateStaticParams() {
  const res = await fetch(`${API_BASE_URL}/api/pages?limit=100`);
  const pageData = await res.json();

  return pageData.docs.map(({ slug }) => {
    return {
      slug: slug === 'index' ? ['index'] : slug // Ensure slug is always a string or an array of strings
    };
  });
}

async function getPageData(slug) {
  const res = await fetch(`${API_BASE_URL}/api/pages?where[slug][equals]=${Array.isArray(slug) ? slug.join('/') : slug}`);
  const data = await res.json();

  return data.docs[0];
}

export default async function Page({ params }) {
  const slug = params?.slug || 'index';
  const pageData = await getPageData(slug);
  console.log("layout from page data",pageData.layout)

  return (
    <div>
      <RenderBlocks layout={pageData?.layout} />
    </div>
  );
}
