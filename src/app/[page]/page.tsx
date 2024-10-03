// src/app/[page]/page.tsx

// import { GetStaticPaths, GetStaticProps } from 'next';
import { GetStaticProps } from 'next';
import React from 'react';
import RootLayout from '../../components/layout/RootLayout';
import { SiteConfig } from '../../types/siteConfig';
import { loadSiteConfig } from '../../utils/loadSiteConfig';
import { Home } from 'lucide-react';


interface PageProps {
  config: SiteConfig;
  pageData: {
    title: string;
    content: string;
    classes?: string;
  };
}

const Page: React.FC<PageProps> = ({ config, pageData }) => {
  return (
    <RootLayout config={config}>
      <div className={`${pageData.classes || ''}`}>
        <h1 className="text-2xl font-bold mb-4">{pageData.title}</h1>
        <p>{pageData.content}</p>
      </div>
      <Home />
    </RootLayout>
  );
};

export const generateStaticParams = async () => {
  const config = loadSiteConfig();
  return Object.keys((await config).pages).map((page) => ({
    page,
  }));
};

export const generateMetadata = async ({ params }: { params: { page: string } }) => {
  const config = loadSiteConfig();
  const pageData = (await config).pages[params.page];

  return {
    title: pageData.title,
    description: pageData.content,
  };
};

export const generateStaticProps: GetStaticProps = async ({ params }) => {
  const config = loadSiteConfig();
  const page = params?.page as string;
  const pageData = (await config).pages[page];

  if (!pageData) {
    return { notFound: true };
  }

  return {
    props: {
      config,
      pageData,
    },
  };
};

export default Page;