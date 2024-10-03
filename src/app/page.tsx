// src/app/page.tsx
import React from 'react';
import RootLayout from '../components/layout/RootLayout';
import { loadSiteConfig } from '../utils/loadSiteConfig';
import { SiteConfig } from '../schemas/siteConfigSchema';

const Home = async () => {
  const config: SiteConfig = await loadSiteConfig();
  const pageData = config.pages['home'];

  if (!pageData) {
    // Handle the case where pageData is undefined
    return (
      <RootLayout config={config}>
        <div>
          <h1>Page Not Found</h1>
        </div>
      </RootLayout>
    );
  }

  return (
    <RootLayout config={config}>
      <div className={`${pageData.classes || ''}`}>
        <h1 className="text-3xl font-bold mb-4">{pageData.title}</h1>
        <p>{pageData.content}</p>
      </div>
    </RootLayout>
  );
};

export const generateMetadata = async () => {
  const config = await loadSiteConfig();
  const pageData = config.pages['home'];

  return {
    title: pageData.title,
    description: pageData.content,
  };
};

export default Home;