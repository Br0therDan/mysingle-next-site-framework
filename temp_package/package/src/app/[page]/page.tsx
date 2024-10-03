// src/app/[page]/page.tsx

import React from 'react';
import RootLayout from '../../components/layout/RootLayout';
import { loadSiteConfig } from '../../utils/loadSiteConfig';

interface PageProps {
  params: { page: string };
}

const Page = async ({ params }: PageProps) => {
  const config = await loadSiteConfig();
  const pageData = config.pages[params.page];

  // if (!pageData) {
  //   return <div>Page not found</div>;
  // }

  return (
    <RootLayout config={config}>
      <div className={`${pageData.classes || ''}`}>
        <h1 className="text-2xl font-bold mb-4">{pageData.title}</h1>
        <p>{pageData.content}</p>
      </div>
    </RootLayout>
  );
};

export default Page;

export const generateStaticParams = async () => {
  const config = await loadSiteConfig();
  const pages = Object.keys(config.pages);

  return pages.map((page) => ({
    page,
  }));
};

export const generateMetadata = async ({ params }: { params: { page: string } }) => {
  const config = await loadSiteConfig();
  const siteData = config.metadata
  const pageData = config.pages[params.page];

  return {
    title: `${siteData.title} | ${pageData?.title}` || 'Default Title',
    description: pageData?.content || 'Default Description',
  };
};