// src/utils/iconMap.ts

import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export const IconsMap: Record<string, LucideIcon> = {};

// 'default'와 'createLucideIcon'을 제외하고 모든 아이콘을 IconsMap에 추가
for (const iconName in Icons) {
  if (iconName !== 'default' && iconName !== 'createLucideIcon') {
    IconsMap[iconName] = Icons[iconName as keyof typeof Icons] as LucideIcon;
  }
}
