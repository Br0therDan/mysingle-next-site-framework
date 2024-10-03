import { LucideIcon } from 'lucide-react'; // LucideIcon 타입 가져오기

// 동적으로 아이콘을 가져오는 함수
export const loadLucideIcon = async (iconName?: string): Promise<LucideIcon | null> => {
  if (!iconName) {
    return null;
  }

  try {
    // 동적 import를 통해 아이콘을 불러옴
    const iconModule = await import(`lucide-react/${iconName}`);
    return iconModule.default as LucideIcon; // 아이콘 모듈을 LucideIcon으로 캐스팅
  } catch (error) {
    console.error(`아이콘 ${iconName}을(를) 불러오는 중 오류 발생:`, error);
    return null; // 아이콘을 찾지 못할 경우 null 반환
  }
};