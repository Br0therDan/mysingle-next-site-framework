// src/components/RootLayout.tsx

import React from "react";
import { SiteConfig } from "@/schemas/siteConfigSchema";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Breadcrumb from "./Breadcrumb";

interface RootLayoutProps {
  config: SiteConfig;
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ config, children }) => {
  const { layout, header, sidebar } = config;
  const layoutClass = `layout-${layout.type}`;
  const themeClass = `theme-${layout.theme}`;

  return (
    <div className={`${layoutClass} ${themeClass} flex flex-col min-h-screen`}>
      <Header config={header} sidebarConfig={sidebar} />
      <div className="flex flex-1 mt-14">
        {sidebar.visible && <Sidebar config={sidebar} />}
        <main className="flex-1 p-2 md:p-4">
          <Breadcrumb />
          <div className="flex justify-center">
            <div className="flex flex-col p-4 w-full max-w-[1048px]">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
