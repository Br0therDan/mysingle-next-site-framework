// src/app/page.tsx
import React from 'react';

import { loadSiteConfig } from '../utils/loadSiteConfig';
import { SiteConfig } from '../types/siteConfig';
import { GetStaticProps } from 'next';
import RootLayout from '../components/layout/RootLayout';

interface HomeProps {
  config: SiteConfig;
  pageData: {
    title: string;
    content: string;
    classes?: string;
  };
}

const Home: React.FC<HomeProps> = ({ config, pageData }) => {
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
  const config = loadSiteConfig();
  const pageData = (await config).pages['home'];

  return {
    title: pageData.title,
    description: pageData.content,
  };
};

export const generateStaticProps: GetStaticProps = async () => {
  const config = loadSiteConfig();
  const pageData = (await config).pages['home'];

  return {
    props: {
      config,
      pageData,
    },
  };
};

export default Home;