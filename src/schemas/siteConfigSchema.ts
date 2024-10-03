// src/schemas/siteConfigSchema.ts
import { z } from 'zod';

const LogoSchema = z.object({
    src: z.string(),
    alt: z.string(),
    classes: z.string().optional(),
});

const NavigationItemSchema = z.object({
    label: z.string(),
    href: z.string(),
    icon: z.string().optional(),
});

const HeaderSchema = z.object({
    logo: LogoSchema,
    navigation: z.array(NavigationItemSchema),
    classes: z.string().optional(),
});


const SidebarItemSchema = z.object({
    label: z.string(),
    href: z.string(),
    icon: z.string().optional(),
    iconComponent: z.any().optional(),
});

const SidebarSchema = z.object({
    visible: z.boolean(),
    items: z.array(SidebarItemSchema).optional(),
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