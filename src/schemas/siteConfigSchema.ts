// src/schemas/siteConfigSchema.ts
import { z } from 'zod';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// 아이콘 컴포넌트만을 포함하는 아이콘 이름 배열 생성
const iconNames = Object.keys(Icons).filter(
  (key) => typeof Icons[key as keyof typeof Icons] === 'function' && key !== 'createLucideIcon'
) as (keyof typeof Icons)[];

// 아이콘 이름과 컴포넌트를 매핑하는 객체 생성
const IconsMap: Record<string, LucideIcon> = {};
iconNames.forEach((iconName) => {
  IconsMap[iconName] = Icons[iconName as keyof typeof Icons] as LucideIcon;
});

const LogoSchema = z.object({
  src: z.string(),
  alt: z.string(),
  classes: z.string().optional(),
});

const NavigationItemSchema = z.object({
  label: z.string(),
  href: z.string(),
  classes: z.string().optional(),
  icon: z.string().optional().transform((iconName) => {
    if (!iconName) return null;
    const IconComponent = IconsMap[iconName];
    if (!IconComponent) {
      throw new Error(`Icon "${iconName}" not found in lucide-react`);
    }
    return IconComponent;
  }),
});

const HeaderSchema = z.object({
  logo: LogoSchema,
  navigation: z.array(NavigationItemSchema),
  classes: z.string().optional(),
});

const SidebarItemSchema = z.object({
    label: z.string(),
    href: z.string(),
    classes: z.string().optional(),
    icon: z.string().optional(), // transform 제거
  });

const SidebarSchema = z.object({
  visible: z.boolean(),
  items: z.array(SidebarItemSchema),
  classes: z.string().optional(),
});

const PageSchema = z.object({
  title: z.string(),
  content: z.string(),
  classes: z.string().optional(),
});

const LayoutSchema = z.object({
  type: z.enum(['default', 'admin', 'dashboard']),
  theme: z.enum(['light', 'dark']),
});

export const SiteConfigSchema = z.object({
  layout: LayoutSchema,
  header: HeaderSchema,
  sidebar: SidebarSchema,
  pages: z.record(PageSchema),
});

export type SiteConfig = z.infer<typeof SiteConfigSchema>;