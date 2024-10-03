import { SiteConfigSchema } from '@/schemas/siteConfigSchema';
import { SiteConfig } from '@/types/siteConfig';
import fs from 'fs';
import path from 'path';
import { loadLucideIcon } from './iconMapper';
// import { SiteConfigSchema, SiteConfig } from '../types/siteConfig';

export const loadSiteConfig = async (): Promise<SiteConfig> => {
    const configPath = path.join(process.cwd(), 'src', 'site_config.json');
    if (!fs.existsSync(configPath)) {
        throw new Error('site_config.json 파일이 존재하지 않습니다.');
    }

    const configFile = fs.readFileSync(configPath, 'utf-8');
    let config;

    try {
        config = JSON.parse(configFile);
    } catch (error) {
        console.error('site_config.json 파일 파싱 오류:', error);
        throw new Error('site_config.json 파일이 유효한 JSON 형식이 아닙니다.');
    }

    const parsedConfig = SiteConfigSchema.safeParse(config);

    if (!parsedConfig.success) {
        console.error('사이트 구성 파일 검증 오류:', parsedConfig.error);
        throw new Error('사이트 구성 파일이 유효하지 않습니다.');
    }

    // Sidebar에 있는 모든 아이콘을 동적으로 로드
    if (parsedConfig.data.sidebar?.items) {
        for (const item of parsedConfig.data.sidebar.items) {
          const iconComponent = await loadLucideIcon(item.icon); // item.icon은 여전히 string
          item.iconComponent = iconComponent; // LucideIcon을 iconComponent에 저장
        }
      }

    return parsedConfig.data;
};