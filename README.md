# MySingle Next.js Site Framework

[![npm version](https://img.shields.io/npm/v/@mysingle/next-site-framework)](https://www.npmjs.com/package/@mysingle/next-site-framework)
[![License](https://img.shields.io/npm/l/@mysingle/next-site-framework)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/Br0therDan/mysingle-next-site-framework)](https://github.com/Br0therDan/mysingle-next-site-framework/issues)
[![GitHub stars](https://img.shields.io/github/stars/Br0therDan/mysingle-next-site-framework?style=social)](https://github.com/Br0therDan/mysingle-next-site-framework)

[한국어](#ko)

An extensible and dynamic site framework built with Next.js and Tailwind CSS, allowing you to configure site layouts and components dynamically. This package integrates Lucide icons, Radix UI components, and TypeScript to help you build flexible and scalable websites.

## Features

- **Dynamic Layout Configuration**: Configure site layouts, headers, sidebars, and page contents dynamically using a `site_config.json` file.
- **Lucide Icons Integration**: Easily add and change icons by specifying them as strings.
- **Radix UI Components**: Provide consistent user experiences using accessible UI components.
- **TypeScript Support**: Enhance development productivity by maintaining type safety.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [1. Project Setup](#1-project-setup)
  - [2. Create `site_config.json`](#2-create-site_configjson)
  - [3. Tailwind CSS Configuration](#3-tailwind-css-configuration)
  - [4. TypeScript Configuration](#4-typescript-configuration)
  - [5. Update `app/layout.tsx`](#5-update-applayouttsx)
  - [6. Create Page Components](#6-create-page-components)
  - [7. Using Icons](#7-using-icons)
  - [8. Additional Configuration](#8-additional-configuration)
  - [9. Build and Run](#9-build-and-run)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the package, run:

```bash
npm install @mysingle/next-site-framework
```

Or with Yarn:

```bash
yarn add @mysingle/next-site-framework
```

## Usage

### 1. Project Setup

#### 1.1. Create a Next.js Project

If you don't have a Next.js project, create one using the following command:

```bash
npx create-next-app@latest my-app --typescript
```

#### 1.2. Install the Package

Navigate to your project directory and install the package:

```bash
npm install @mysingle/next-site-framework
```

#### 1.3. Install Peer Dependencies

Install the required peer dependencies:

```bash
npm install next react react-dom lucide-react react-icons @radix-ui/react-tooltip
```

### 2. Create `site_config.json`

Create a `site_config.json` file in the root directory of your project and define your site configuration:

```json
{
  "metadata": {
    "title": "My Single Page Application",
    "description": "A dynamic Next.js site"
  },
  "layout": {
    "type": "default",
    "theme": "light"
  },
  "header": {
    "logo": {
      "src": "/logo.png",
      "alt": "Site Logo",
      "classes": "flex justify-center items-center"
    },
    "navigation": [
      { "label": "Home", "href": "/", "classes": "hover:text-blue-700" },
      { "label": "About", "href": "/about", "classes": "hover:text-blue-700" },
      { "label": "Contact", "href": "/contact", "classes": "hover:text-blue-700" }
    ],
    "classes": "fixed top-0 left-0 right-0 h-14 w-full z-50 text-sm border-b border-gray-200 bg-white"
  },
  "sidebar": {
    "visible": true,
    "items": [
      { "label": "Dashboard", "href": "/dashboard", "icon": "Home" },
      { "label": "Accounts", "href": "/accounts", "icon": "Building2" },
      { "label": "Contacts", "href": "/contacts", "icon": "BookUser" },
      { "label": "Opportunities", "href": "/opportunities", "icon": "DollarSign" },
      { "label": "Leads", "href": "/leads", "icon": "Archive" },
      { "label": "Quotes", "href": "/quotes", "icon": "ScrollText" },
      { "label": "Projects", "href": "/projects", "icon": "SquareChartGantt" },
      { "label": "Tasks", "href": "/tasks", "icon": "CheckSquare" },
      { "label": "Daily Scrums", "href": "/daily-scrums", "icon": "MessageSquare" }
    ]
  },
  "pages": {
    "home": {
      "title": "Home Page",
      "content": "Welcome!",
      "classes": "p-4"
    },
    "about": {
      "title": "About Page",
      "content": "This site is about...",
      "classes": "p-4"
    },
    "contact": {
      "title": "Contact Page",
      "content": "Feel free to reach out...",
      "classes": "p-4"
    },
    "dashboard": {
      "title": "Dashboard",
      "content": "Dashboard content",
      "classes": "p-4"
    }
    // Add more pages as needed
  },
  "footer": {
    "content": "© 2021 My Single Page Application",
    "classes": "fixed bottom-0 left-0 right-0 h-14 w-full z-50 text-sm border-t border-gray-200 bg-white flex justify-center items-center"
  }
}
```

### 3. Tailwind CSS Configuration

#### 3.1. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### 3.2. Update `tailwind.config.js`

Configure your `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@mysingle/next-site-framework/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    // Add any dynamic class names here
    "bg-white",
    "shadow",
    "p-4",
    "flex",
    "items-center",
    "justify-between",
    "bg-gray-50",
    "w-64",
    "text-gray-700",
    "hover:text-gray-900",
    "hover:bg-gray-100",
    "block",
    "px-4",
    "py-2",
    "rounded",
    "text-2xl",
    "font-bold",
    "mb-4"
    // Add more classes as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### 3.3. Update Global CSS

In your `styles/globals.css`, include Tailwind CSS directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. TypeScript Configuration

Ensure your `tsconfig.json` has the correct settings:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### 5. Update `app/layout.tsx`

Use the `RootLayout` component from the package:

```tsx
// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { RootLayout, loadSiteConfig } from '@mysingle/next-site-framework';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dynamic Site Config',
  description: 'An example of dynamic site configuration with Next.js and Tailwind CSS',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const config = loadSiteConfig();

  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayout config={config}>{children}</RootLayout>
      </body>
    </html>
  );
}
```

### 6. Create Page Components

#### 6.1. Create `[page]/page.tsx`

```tsx
// app/[page]/page.tsx
import React from 'react';
import { loadSiteConfig } from '@mysingle/next-site-framework';

interface PageProps {
  params: { page: string };
}

export default function Page({ params }: PageProps) {
  const config = loadSiteConfig();
  const pageData = config.pages[params.page];

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    <div className={pageData.classes || ''}>
      <h1 className="text-2xl font-bold mb-4">{pageData.title}</h1>
      <p>{pageData.content}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const config = loadSiteConfig();
  const pages = Object.keys(config.pages);

  return pages.map((page) => ({
    page,
  }));
}

export async function generateMetadata({ params }: { params: { page: string } }) {
  const config = loadSiteConfig();
  const siteData = config.metadata;
  const pageData = config.pages[params.page];

  return {
    title: `${siteData.title} | ${pageData?.title}` || 'Default Title',
    description: pageData?.content || 'Default Description',
  };
}
```

#### 6.2. Update `app/page.tsx`

```tsx
// app/page.tsx
import React from 'react';
import { loadSiteConfig } from '@mysingle/next-site-framework';

export default function Home() {
  const config = loadSiteConfig();
  const pageData = config.pages['home'];

  return (
    <div className={pageData.classes || ''}>
      <h1 className="text-2xl font-bold mb-4">{pageData.title}</h1>
      <p>{pageData.content}</p>
    </div>
  );
}
```

### 7. Using Icons

Ensure that the icon names in your `site_config.json` match those provided by `lucide-react`. Icon names are case-sensitive.

- Icon list: [lucide.dev/icons](https://lucide.dev/icons)

### 8. Additional Configuration

#### 8.1. Next.js Configuration

If needed, update your `next.config.js`:

```javascript
// next.config.js
module.exports = {
  reactStrictMode: true,
  // Add any additional configurations here
}
```

#### 8.2. ESLint and Prettier

Set up ESLint and Prettier for code quality and formatting.

### 9. Build and Run

#### 9.1. Run Development Server

```bash
npm run dev
```

#### 9.2. Build for Production

```bash
npm run build
npm start
```

## Contributing

We welcome contributions! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.

---

<a id="ko"></a>

# 마이싱글 Next.js 사이트 프레임워크

[![npm 버전](https://img.shields.io/npm/v/@mysingle/next-site-framework)](https://www.npmjs.com/package/@mysingle/next-site-framework)
[![라이선스](https://img.shields.io/npm/l/@mysingle/next-site-framework)](LICENSE)
[![GitHub 이슈](https://img.shields.io/github/issues/Br0therDan/mysingle-next-site-framework)](https://github.com/Br0therDan/mysingle-next-site-framework/issues)
[![GitHub 스타](https://img.shields.io/github/stars/Br0therDan/mysingle-next-site-framework?style=social)](https://github.com/Br0therDan/mysingle-next-site-framework)

Next.js와 Tailwind CSS를 사용하여 동적으로 사이트 레이아웃과 컴포넌트를 구성할 수 있는 확장 가능하고 동적인 프레임워크입니다. 이 패키지는 Lucide 아이콘과 Radix UI 컴포넌트, TypeScript를 활용하여 유연하고 확장 가능한 사이트를 구축할 수 있도록 도와줍니다.

## 특징

- **동적 레이아웃 구성**: `site_config.json` 파일을 통해 사이트의 레이아웃, 헤더, 사이드바, 페이지 내용을 동적으로 구성할 수 있습니다.
- **Lucide 아이콘 통합**: 아이콘을 문자열로 지정하여 손쉽게 아이콘을 추가하고 변경할 수 있습니다.
- **Radix UI 컴포넌트 사용**: 접근성이 높은 UI 컴포넌트를 활용하여 일관된 사용자 경험을 제공합니다.
- **TypeScript 지원**: 타입 안전성을 유지하여 개발 생산성을 향상시킵니다.

## 목차

- [설치](#설치)
- [사용 방법](#사용-방법)
  - [1. 프로젝트 설정](#1-프로젝트-설정)
  - [2. `site_config.json` 생성](#2-site_configjson-생성)
  - [3. Tailwind CSS 설정](#3-tailwind-css-설정)
  - [4. TypeScript 설정](#4-typescript-설정)
  - [5. `app/layout.tsx` 설정](#5-applayouttsx-설정)
  - [6. 페이지 컴포넌트 생성](#6-페이지-컴포넌트-생성)
  - [7. 아이콘 사용](#7-아이콘-사용)
  - [8. 기타 설정](#8-기타-설정)
  - [9. 빌드 및 실행](#9-빌드-및-실행)
- [기여](#기여)
- [라이선스](#라이선스)

## 설치

```bash
npm install @mysingle/next-site-framework
```

또는

```bash
yarn add @mysingle/next-site-framework
```

## 사용 방법

### 1. 프로젝트 설정

#### 1.1. Next.js 프로젝트 생성

Next.js 프로젝트가 없으시다면 아래 명령어로 새로운 프로젝트를 생성하세요.

```bash
npx create-next-app@latest my-app --typescript
```

#### 1.2. 패키지 설치

프로젝트 디렉토리로 이동한 후 패키지를 설치합니다.

```bash
npm install @mysingle/next-site-framework
```

#### 1.3. 필수 의존성 설치

패키지의 `peerDependencies`에 포함된 패키지들을 설치해야 합니다.

```bash
npm install next react react-dom lucide-react react-icons @radix-ui/react-tooltip
```

### 2. `site_config.json` 생성

프로젝트 루트에 `site_config.json` 파일을 생성하고, 사이트 구성 정보를 작성합니다.

```json
{
  "metadata": {
    "title": "마이싱글 페이지 애플리케이션",
    "description": "동적인 Next.js 사이트"
  },
  "layout": {
    "type": "default",
    "theme": "light"
  },
  "header": {
    "logo": {
      "src": "/logo.png",
      "alt": "사이트 로고",
      "classes": "flex justify-center items-center"
    },
    "navigation": [
      { "label": "홈", "href": "/", "classes": "hover:text-blue-700" },
      { "label": "소개", "href": "/about", "classes": "hover:text-blue-700" },
      { "label": "연락처", "href": "/contact", "classes": "hover:text-blue-700" }
    ],
    "classes": "fixed top-0 left-0 right-0 h-14 w-full z-50 text-sm border-b border-gray-200 bg-white"
  },
  "sidebar": {
    "visible": true,
    "items": [
      { "label": "대시보드", "href": "/dashboard", "icon": "Home" },
      { "label": "계정", "href": "/accounts", "icon": "Building2" },
      { "label": "연락처", "href": "/contacts", "icon": "BookUser" },
      { "label": "영업기회", "href": "/opportunities", "icon": "DollarSign" },
      { "label": "리드", "href": "/leads", "icon": "Archive" },
      { "label": "견적", "href": "/quotes", "icon": "ScrollText" },
      { "label": "프로젝트", "href": "/projects", "icon": "SquareChartGantt" },
      { "label": "업무", "href": "/tasks", "icon": "CheckSquare" },
      { "label": "데일리 스크럼", "href": "/daily-scrums", "icon": "MessageSquare" }
    ]
  },
  "pages": {
    "home": {
      "title": "홈 페이지",
      "content": "환영합니다!",
      "classes": "p-4"
    },
    "about": {
      "title": "소개 페이지",
      "content": "이 사이트는 ... 입니다.",
      "classes": "p-4"
    },
    "contact": {
      "title": "연락처 페이지",
      "content": "문의 사항은 ...",
      "classes": "p-4"
    },
    "dashboard": {
      "title": "대시보드",
      "content": "대시보드 내용",
      "classes": "p-4"
    }
    // 필요한 페이지를 추가하세요
  },
  "footer": {
    "content": "© 2021 마이싱글 페이지 애플리케이션",
    "classes": "fixed bottom-0 left-0 right-0 h-14 w-full z-50 text-sm border-t border-gray-200 bg-white flex justify-center items-center"
  }
}
```

### 3. Tailwind CSS 설정

#### 3.1. Tailwind CSS 설치

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### 3.2. `tailwind.config.js` 설정

`tailwind.config.js` 파일을 다음과 같이 설정합니다.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@mysingle/next-site-framework/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    // 동적 클래스 이름을 여기에 추가하세요
    "bg-white",
    "shadow",
    "p-4",
    "flex",
    "items-center",
    "justify-between",
    "bg-gray-50",
    "w-64",
    "text-gray-700",
    "hover:text-gray-900",
    "hover:bg-gray-100",
    "block",
    "px-4",
    "py-2",
    "rounded",
    "text-2xl",
    "font-bold",
    "mb-4"
    // 필요한 클래스들을 추가하세요
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### 3.3. 글로벌 CSS 파일 설정

`styles/globals.css` 파일에 Tailwind CSS 지시어를 추가합니다.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. TypeScript 설정

`tsconfig.json` 파일에서 `jsx` 옵션을 `"react-jsx"`로 설정합니다.

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### 5. `app/layout.tsx` 설정

패키지의 `RootLayout` 컴포넌트를 사용하여 전체 레이아웃을 구성합니다.

```tsx
// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { RootLayout, loadSiteConfig } from '@mysingle/next-site-framework';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dynamic Site Config',
  description: 'Next.js와 Tailwind CSS를 사용한 동적 사이트 구성 예제',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const config = loadSiteConfig();

  return (
    <html lang="ko">
      <body className={inter.className}>
        <RootLayout config={config}>{children}</RootLayout>
      </body>
    </html>
  );
}
```

### 6. 페이지 컴포넌트 생성

#### 6.1. `[page]/page.tsx` 파일 생성

```tsx
// app/[page]/page.tsx
import React from 'react';
import { loadSiteConfig } from '@mysingle/next-site-framework';

interface PageProps {
  params: { page: string };
}

export default function Page({ params }: PageProps) {
  const config = loadSiteConfig();
  const pageData = config.pages[params.page];

  if (!pageData) {
    return <div>페이지를 찾을 수 없습니다.</div>;
  }

  return (
    <div className={pageData.classes || ''}>
      <h1 className="text-2xl font-bold mb-4">{pageData.title}</h1>
      <p>{pageData.content}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const config = loadSiteConfig();
  const pages = Object.keys(config.pages);

  return pages.map((page) => ({
    page,
  }));
}

export async function generateMetadata({ params }: { params: { page: string } }) {
  const config = loadSiteConfig();
  const siteData = config.metadata;
  const pageData = config.pages[params.page];

  return {
    title: `${siteData.title} | ${pageData?.title}` || 'Default Title',
    description: pageData?.content || 'Default Description',
  };
}
```

#### 6.2. `app/page.tsx` 수정

```tsx
// app/page.tsx
import React from 'react';
import { loadSiteConfig } from '@mysingle/next-site-framework';

export default function Home() {
  const config = loadSiteConfig();
  const pageData = config.pages['home'];

  return (
    <div className={pageData.classes || ''}>
      <h1 className="text-2xl font-bold mb-4">{pageData.title}</h1>
      <p>{pageData.content}</p>
    </div>
  );
}
```

### 7. 아이콘 사용

`site_config.json`에서 정의한 아이콘을 사용하려면 `lucide-react` 패키지를 설치하고, 아이콘 이름이 정확한지 확인하세요.

- 아이콘 이름은 `lucide-react`에서 제공하는 아이콘 이름과 정확히 일치해야 합니다.
- 아이콘 목록은 [lucide.dev/icons](https://lucide.dev/icons)에서 확인할 수 있습니다.

### 8. 기타 설정

#### 8.1. `next.config.js` 설정

필요한 경우 Next.js의 설정을 변경합니다.

```javascript
// next.config.js
module.exports = {
  reactStrictMode: true,
  // 기타 설정을 추가하세요
}
```

#### 8.2. ESLint 및 Prettier 설정

코드 품질을 유지하기 위해 ESLint와 Prettier를 설정할 수 있습니다.

### 9. 빌드 및 실행

#### 9.1. 개발 서버 실행

```bash
npm run dev
```

#### 9.2. 프로덕션 빌드

```bash
npm run build
npm start
```

## 기여

이 프로젝트에 기여하고 싶으시면 이슈나 풀 리퀘스트를 보내주세요.

## 라이선스

이 프로젝트는 MIT 라이선스로 배포됩니다.

---