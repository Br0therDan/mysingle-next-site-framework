// src/components/layout/Header.tsx
"use client";
import { useState } from "react";

import { Menu, X } from "lucide-react";
import SearchBar from "../buttons/SearchBar";
import Notification from "../buttons/Notification";
import UserButton from "../buttons/UserButton";
import { Button } from '../ui/button';
import { HeaderConfig, SidebarConfig } from '@/types/siteConfig';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  config: HeaderConfig;
  sidebarConfig: SidebarConfig;
}


const Header: React.FC<HeaderProps> = ({ config, sidebarConfig }) => {
  const { logo, navigation, classes } = config;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const items = sidebarConfig.items || [];
  const sidebarClasses = sidebarConfig.classes;


  // TODO: user authentication 로직 추후 연계구현 아래 Mock Data 제거
  const user = {
    profile: {
      full_name: "John Doe",
    },
    email: "john.doe@example.com"
  };
  
  return (

    <header className={`${classes || 'bg-white fixed top-0 left-0 right-0 h-14 w-full z-50'}`}>
      <div className="flex items-center py-2">
        <div className="flex-shrink-0 flex items-center px-3">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </Button>
          <div className="logo">
            <Image src={logo.src} alt={logo.alt} className={logo.classes} />
          </div>
        </div>
        <nav className="navigation">
        <ul className="flex space-x-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <a className={item.classes}>{item.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
        <SearchBar />
        <div className="hidden gap-1 pr-4 lg:ml-4 sm:flex sm:items-center">
          <Notification />
          <UserButton />
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
          <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <a className={`${sidebarClasses || 'block px-4 py-2 rounded hover:bg-gray-100'}`}>
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
          </div>
          {user?.profile && (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {user.profile.full_name}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {user.email}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
export default Header;