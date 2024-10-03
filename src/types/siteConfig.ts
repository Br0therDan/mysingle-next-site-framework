// src/types/siteConfig.ts

import { LucideIcon } from 'lucide-react';

export interface LogoConfig {
    src: string;
    alt: string;
    classes?: string;
  }
  
  export interface NavigationItem {
    label: string;
    href: string;
    classes?: string;
  }
  
  export interface HeaderConfig {
    logo: LogoConfig;
    navigation: NavigationItem[];
    classes?: string;
  }


  export interface SidebarItem {
    label: string;
    icon?: string; // JSON에서 가져오는 아이콘 이름 (string)
    iconComponent?: LucideIcon | null; // 동적으로 로드된 LucideIcon
    href: string;
  }
  
  export interface SidebarConfig {
    visible: boolean;
    items?: SidebarItem[];
    classes?: string;
  }
  
  export interface PageConfig {
    title: string;
    content: string;
    classes?: string;
  }
  
  export interface LayoutConfig {
    type: 'default' | 'admin' | 'dashboard';
    theme: 'light' | 'dark';
  }
  
  export interface SiteConfig {
    layout: LayoutConfig;
    header: HeaderConfig;
    sidebar: SidebarConfig;
    pages: Record<string, PageConfig>;
  }