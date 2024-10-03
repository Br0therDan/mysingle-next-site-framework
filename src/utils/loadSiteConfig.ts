// src/utils/loadSiteConfig.ts

import { SiteConfigSchema, SiteConfig } from '@/schemas/siteConfigSchema';
import fs from 'fs';
import path from 'path';

export const loadSiteConfig = (): SiteConfig => {
  const configPath = path.join(process.cwd(), 'src', 'site_config.json');
  if (!fs.existsSync(configPath)) {
    throw new Error('site_config.json 파일이 존재하지 않습니다.');
  }

  const configFile = fs.readFileSync(configPath, 'utf-8');
  let config;

  try {
    config = JSON.parse(configFile);
  } catch (error) {
    // console.error('site_config.json 파일 파싱 오류:', error);
    throw new Error('site_config.json 파일이 유효한 JSON 형식이 아닙니다.');
  }

  try {
    const parsedConfig = SiteConfigSchema.parse(config);
    return parsedConfig;
  } catch (error) {
    // console.error('사이트 구성 파일 검증 오류:', error);
    throw new Error('사이트 구성 파일이 유효하지 않습니다.');
  }
};