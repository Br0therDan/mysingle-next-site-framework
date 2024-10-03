
# mysingle-next-site-framework

[![npm version](https://img.shields.io/npm/v/@mysingle/next-site-framework)](https://www.npmjs.com/package/@mysingle/next-site-framework)
[![License](https://img.shields.io/npm/l/@mysingle/next-site-framework)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/Br0therDan/mysingle-api-client)](https://github.com/Br0therDan/mysingle-next-site-framework/issues)
[![GitHub stars](https://img.shields.io/github/stars/Br0therDan/mysingle-next-site-framework?style=social)](https://github.com/Br0therDan/mysingle-next-site-framework)
[한국어](#ko)

Next.js와 Tailwind CSS를 사용하여 동적으로 사이트 레이아웃과 컴포넌트를 구성할 수 있는 프레임워크입니다.

## 설치

```bash
npm install mysingle-next-site-framework
```

사용 방법

1. site_config.json 생성

프로젝트 루트의 src 폴더에 site_config.json 파일을 생성하고, 사이트 구성 정보를 작성합니다.

{
  "layout": {
    "type": "default",
    "theme": "light"
  },
  "header": {
    "logo": {
      "src": "/logo.png",
      "alt": "사이트 로고",
      "classes": "h-8 w-auto"
    },
    "navigation": [
      { "label": "홈", "href": "/", "classes": "text-gray-700 hover:text-gray-900" },
      { "label": "소개", "href": "/about", "classes": "text-gray-700 hover:text-gray-900" },
      { "label": "연락처", "href": "/contact", "classes": "text-gray-700 hover:text-gray-900" }
    ],
    "classes": "bg-white shadow p-4 flex items-center justify-between"
  },
  "sidebar": {
    "visible": true,
    "items": [
      { "label": "대시보드", "href": "/dashboard", "icon": "Home", "classes": "text-gray-700 hover:bg-gray-100" },
      { "label": "사용자 관리", "href": "/users", "icon": "User", "classes": "text-gray-700 hover:bg-gray-100" },
      { "label": "설정", "href": "/settings", "icon": "Settings", "classes": "text-gray-700 hover:bg-gray-100" }
    ],
    "classes": "bg-gray-50 w-64 p-4"
  },
  "pages": {
    "home": {
      "title": "홈 페이지",
      "content": "환영합니다!",
      "classes": "p-8 bg-white rounded shadow"
    },
    "about": {
      "title": "소개 페이지",
      "content": "이 사이트는 ... 입니다.",
      "classes": "p-8 bg-white rounded shadow"
    },
    "contact": {
      "title": "연락처 페이지",
      "content": "문의 사항은 ... ",
      "classes": "p-8 bg-white rounded shadow"
    }
  }
}

2. Tailwind CSS 설정

프로젝트에 Tailwind CSS를 설치하고 설정합니다.

npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

tailwind.config.js 파일을 다음과 같이 설정합니다.

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 패키지 내 컴포넌트를 포함합니다.
    "./node_modules/mysingle-next-site-framework/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    // 동적 클래스 이름을 추가합니다.
    "bg-white",
    "shadow",
    "p-4",
    "flex",
    "items-center",
    "justify-between",
    // 필요한 클래스들을 추가하세요.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

3. app/layout.tsx 설정

패키지의 RootLayout 컴포넌트를 사용하여 전체 레이아웃을 구성합니다.

// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { RootLayout, loadSiteConfig, SiteConfig } from 'mysingle-next-site-framework';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dynamic Site Config',
  description: 'Next.js와 Tailwind CSS를 사용한 동적 사이트 구성 예제',
};

export default async function RootLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  let config: SiteConfig;

  try {
    config = loadSiteConfig();
  } catch (error) {
    console.error(error);
    // 필요한 경우 에러 처리를 합니다.
    return null;
  }

  return (
    <html lang="ko">
      <body className={`${inter.className}`}>
        <RootLayout config={config}>{children}</RootLayout>
      </body>
    </html>
  );
}

4. 페이지 컴포넌트 생성

각 페이지는 site_config.json의 pages 데이터를 기반으로 동적으로 생성됩니다.

// app/[page]/page.tsx
import React from 'react';
import { loadSiteConfig } from 'mysingle-next-site-framework';
import { SiteConfig } from 'mysingle-next-site-framework';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { page: string };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const config = loadSiteConfig();
  const pageData = config.pages[params.page];

  if (!pageData) {
    notFound();
  }

  return (
    <div className={`${pageData.classes || ''}`}>
      <h1 className="text-2xl font-bold mb-4">{pageData.title}</h1>
      <p>{pageData.content}</p>
    </div>
  );
};

export default Page;

5. 홈 페이지 설정

app/page.tsx 파일을 생성하여 홈 페이지를 구성합니다.

// app/page.tsx
import React from 'react';
import { loadSiteConfig } from 'mysingle-next-site-framework';
import { SiteConfig } from 'mysingle-next-site-framework';

const Home: React.FC = async () => {
  const config = loadSiteConfig();
  const pageData = config.pages['home'];

  return (
    <div className={`${pageData.classes || ''}`}>
      <h1 className="text-3xl font-bold mb-4">{pageData.title}</h1>
      <p>{pageData.content}</p>
    </div>
  );
};

export default Home;

6. 아이콘 사용

site_config.json에서 정의한 아이콘을 사용하려면 lucide-react 패키지를 설치해야 합니다.

npm install lucide-react

7. 기타 설정

	•	타입스크립트 설정: 프로젝트에 타입스크립트를 사용한다면 tsconfig.json 파일을 설정하세요.
	•	패키지 의존성: 패키지의 peerDependencies에 정의된 패키지들을 프로젝트에 설치해야 합니다.

기여

	•	이 프로젝트에 기여하고 싶으시면 이슈나 풀 리퀘스트를 보내주세요.

라이선스

	•	이 프로젝트는 MIT 라이선스로 배포됩니다.

---

이렇게 npm 패키지를 배포하는 방법과 함께 README.md 문서화를 완료했습니다. 이제 이 패키지를 npm에 배포하고, 다른 개발자들이 사용할 수 있도록 안내할 수 있습니다.