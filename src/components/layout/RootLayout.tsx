// src/components/RootLayout.tsx
'use client';

import React from 'react';
import { SiteConfig } from '../../types/siteConfig';
import Header from './Header';
import Sidebar from './Sidebar';

interface RootLayoutProps {
  config: SiteConfig;
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ config, children }) => {
  const { layout, header, sidebar } = config;
  const layoutClass = `layout-${layout.type}`;
  const themeClass = `theme-${layout.theme}`;

  return (
    <div className={`${layoutClass} ${themeClass} min-h-screen flex flex-col`}>
      <Header config={header} sidebarConfig={sidebar}  />
      <div className="flex flex-1">
        {sidebar.visible && <Sidebar config={sidebar} />}
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default RootLayout;