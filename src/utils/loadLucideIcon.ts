// src/utils/loadLucideIcon.ts


import { LucideIcon } from 'lucide-react';
import { IconsMap } from './iconMap';

export const loadLucideIcon = (iconName: string): LucideIcon | null => {
  const IconComponent = IconsMap[iconName];
  if (IconComponent) {
    return IconComponent;
  } else {
    return null;
  }
};