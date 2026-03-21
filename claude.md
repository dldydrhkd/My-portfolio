# 포트폴리오 웹사이트 제작 프롬프트 (Claude Code용)

## 역할 및 목표

Next.js 14 + Tailwind CSS 기반의 개인 포트폴리오 웹사이트를 제작한다.
타겟: LG CNS 인사/채용팀, 기술 면접관, 일반 채용 시장.
배포: Vercel (GitHub 연동 자동 배포).
스타일: 심플/미니멀, 전문적, 다크모드 지원.

---

## 기술 스택

- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Animation: framer-motion
- Font: Geist (Next.js 기본) 또는 Pretendard
- Icons: lucide-react
- 배포: Vercel

---

## 프로젝트 초기 세팅

```bash
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir
cd portfolio
npm install framer-motion lucide-react
```

---

## 디렉토리 구조

```
src/
  app/
    page.tsx              # 메인 랜딩 (모든 섹션 포함)
    layout.tsx            # 루트 레이아웃 (메타데이터 포함)
    globals.css
  components/
    Hero.tsx
    ImpactNumbers.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Experience.tsx
    Contact.tsx
    Navbar.tsx
  data/
    resume.ts             # 모든 콘텐츠 데이터 (수정 용이하게 분리)
```

---

## 콘텐츠 데이터 (src/data/resume.ts)

아래 데이터를 `resume.ts`에 정의하고, 모든 컴포넌트는 이 파일에서 import한다.

### 기본 정보
```ts
export const personal = {
  name: "이용광",
  nameEn: "Yongkwang Lee",
  title: "Data Engineer & AI Agent Developer",
  tagline: "Building data systems that think for themselves",
  email: "sksda4614@naver.com",
  github: "https://github.com/dldydrhkd",
  blog: "https://velog.io/@dldydrhkd/posts",
  resumePdf: "/resume.pdf",  // public/ 폴더에 PDF 배치
}
```

### Impact Numbers (4개)
```ts
export const impacts = [
  {
    number: "75%",
    label: "쿼리 처리 시간 단축",
    context: "4시간 → 1시간",
    detail: "Global Temporary View + Broadcast Join 도입",
  },
  {
    number: "31%",
    label: "리포트 생성 단축",
    context: "32시간 → 22시간",
    detail: "UNION → IN절 쿼리 재설계, 인프라 변경 없이 달성",
  },
  {
    number: "3×",
    label: "일 처리량 확장",
    context: "500만 → 1,500만 건",
    detail: "Redis 캐싱 도입, 안정성 95% → 99.9%",
  },
  {
    number: "550개",
    label: "테이블 설계",
    context: "메달리온 아키텍처 기반",
    detail: "SAP·Argos 등 내외부 소스 단일 플랫폼 통합",
  },
]
```

### About (3단락)
```ts
export const about = {
  paragraphs: [
    "AI 모델을 공부하면서 깨달았습니다. 모델 성능은 결국 데이터 품질에 달려 있다는 것. 그때부터 데이터를 잘 다루는 사람이 되어야겠다고 생각했고, SK쉴더스에서 4년간 일 수억 건의 보안 로그 처리부터 Databricks 기반 레이크하우스 구축, LLM 에이전트 개발까지 데이터 엔지니어링 전 영역을 경험했습니다.",
    "아이언맨의 자비스가 인상적이었던 건, 토니 스타크가 모든 걸 직접 하지 않는다는 점이었습니다. 사람은 방향을 주고, 에이전트가 나머지를 처리하는 구조. LangGraph로 ETL 자동화 에이전트를 만들고, Databricks Genie로 비전문가도 데이터를 직접 조회할 수 있게 한 건 그 방향으로 가는 첫 걸음이었습니다.",
    "ERP 개발팀, 개인정보팀, 외부 벤더 등 다양한 이해관계자와 소통하며 데이터 플랫폼 프로젝트를 조율한 경험이 있습니다. 기술과 비즈니스 사이의 가교 역할을 할 수 있다고 생각합니다.",
  ],
}
```

### Skills (5개 카테고리)
```ts
export const skills = [
  {
    category: "Data Engineering",
    primary: ["Databricks", "Apache Spark", "PySpark", "Delta Lake", "Airflow"],
    secondary: ["Kafka", "Hive", "Vector DB"],
  },
  {
    category: "AI / LLM",
    primary: ["LangGraph", "LangChain", "RAG"],
    secondary: ["Prompt Engineering"],
  },
  {
    category: "Cloud & Infra",
    primary: ["AWS EC2", "S3", "Lambda", "Docker"],
    secondary: ["MWAA", "ECR", "API Gateway", "Transit Gateway"],
  },
  {
    category: "Database",
    primary: ["PostgreSQL", "Redis", "SparkSQL"],
    secondary: ["Elasticsearch"],
  },
  {
    category: "Language",
    primary: ["Python", "Linux", "Shell"],
    secondary: ["Scala"],
  },
]
```

### Projects (4개 — 중요도 순)
```ts
export const projects = [
  {
    title: "SK쉴더스 Databricks ETL Agent",
    period: "2026.01 – 2026.03",
    problem: "반복되는 데이터 추출·적재 작업을 매번 수동으로 수행",
    solution: "LangGraph 멀티에이전트 아키텍처로 자연어 지시만으로 ETL 워크플로우 자동 생성·실행. FastAPI + HTMX + Tailwind CSS 풀스택 단독 개발.",
    result: "비전문가도 데이터 파이프라인 실행 가능. Databricks Genie 연동으로 SQL 없이 데이터 조회 환경 구축.",
    tags: ["LangGraph", "LangChain", "Databricks", "FastAPI", "HTMX", "Python"],
    highlight: true,
    github: "",  // 있으면 추가
  },
  {
    title: "지리정보 기반 KPI 자동화 BI 서비스",
    period: "2024.07 – 2024.10",
    problem: "Excel 수작업 KPI 집계, 부서 간 데이터 정의 불일치",
    solution: "영업·마케팅·경영기획 다부서 협업으로 핵심 KPI 20개 정의. Global Temporary View + Broadcast Join 도입. 스타 스키마 기반 마트 설계.",
    result: "처리 시간 75% 단축 (4시간 → 1시간). Row 기반 확장 구조로 스키마 변경 없이 확장 가능.",
    tags: ["Databricks", "PySpark", "Spark SQL", "AWS", "PostgreSQL"],
    highlight: false,
    github: "",
  },
  {
    title: "Databricks 기반 데이터 분석 플랫폼 구축",
    period: "2024.01 – 2024.06",
    problem: "AWS 레거시 플랫폼의 사일로화된 데이터, 분석가 접근 불가",
    solution: "Snowflake vs Databricks 기술 의사결정 참여. 메달리온 아키텍처 기반 550개 테이블 설계. SAP·Argos 등 내외부 소스 단일 플랫폼 통합. RBAC 접근 제어 설계.",
    result: "전사 데이터 단일 플랫폼 통합 완료. 데이터 파기 정책 수립으로 컴플라이언스 대응.",
    tags: ["Databricks", "PySpark", "Delta Lake", "AWS S3", "RBAC"],
    highlight: false,
    github: "",
  },
  {
    title: "Alarm Monitoring 인프라 재구축",
    period: "2025.01 – 2025.03",
    problem: "일 처리량 한계 도달 (500만 건), 안정성 95% 수준",
    solution: "Redis 캐싱 레이어 도입. AWS Lambda 기반 실시간 데이터 처리 파이프라인으로 전환.",
    result: "일 처리량 3배 확장 (500만 → 1,500만 건). 안정성 95% → 99.9% 달성.",
    tags: ["AWS Lambda", "Redis", "ECR", "API Gateway", "Hive"],
    highlight: false,
    github: "",
  },
]
```

### Experience
```ts
export const experience = [
  {
    company: "SK쉴더스",
    role: "데이터 엔지니어링 / AI 시스템 구축",
    period: "2022.06 – 현재",
    duration: "4년",
    bullets: [
      "LangGraph 멀티에이전트 기반 ETL 자동화 시스템 설계·개발 (풀스택 단독)",
      "Databricks 기반 전사 데이터 레이크하우스 구축 (550개 테이블, 메달리온 아키텍처)",
      "지리정보 기반 KPI BI 서비스 구축, 처리 시간 75% 단축",
      "Alarm Monitoring 인프라 재구축, 일 처리량 3배 확장",
      "ERP·개인정보팀·외부벤더 다부서 협업 PM, 데이터 마스킹·파기 정책 조율",
    ],
    tags: ["Databricks", "LangGraph", "PySpark", "AWS", "Python"],
  },
]

export const education = [
  {
    school: "인하대학교",
    major: "컴퓨터공학과",
    degree: "학사",
    period: "2014.03 – 2022.08",
    gpa: "3.56 / 4.50",
  },
]

export const activities = [
  { name: "42Seoul 본과정 2기", period: "2020.09 – 2021.05", type: "교육" },
  { name: "네이버 부스트캠프 AI Tech 1기", period: "2021.01 – 2021.06", type: "교육" },
  { name: "네이버 부스트캠프 웹풀스택 챌린지 6기", period: "2021.07 – 2021.08", type: "교육" },
  { name: "플레이데이터 빅데이터 엔지니어 양성과정 7기", period: "2021.11 – 2022.04", type: "교육" },
  { name: "교내 알고리즘 소모임 CTP", period: "2019.03 – 2021.03", type: "동아리" },
]
```

---

## 컴포넌트별 UI 명세

### Navbar
- 최상단 고정 (sticky top-0), 배경 blur 처리
- 좌: 이름 "이용광" (클릭 시 최상단 이동)
- 우: 섹션 링크 (About / Skills / Projects / Experience / Contact)
- 모바일: 햄버거 메뉴

### Hero
- 전체 화면 높이 (min-h-screen), 수직 중앙 정렬
- 이름 (큰 폰트, 한글), 직함 (영문), tagline (작은 폰트, muted)
- 스택 뱃지 줄: Databricks · LangGraph · AWS · PySpark
- CTA 버튼 2개: [이력서 PDF 다운로드] [GitHub →]
- framer-motion으로 순차 fade-in (staggered, delay 0.1s씩)
- 아래 방향 scroll indicator 추가

### ImpactNumbers
- 4개 카드 그리드 (2×2 또는 4열)
- 숫자: 크고 굵게
- 라벨: 작은 폰트, muted
- context: 더 작은 폰트, tertiary
- hover 시 detail 텍스트 fade-in (framer-motion)
- 스크롤 진입 시 숫자 카운트업 애니메이션 (useInView + spring)

### About
- 좌우 2열: 좌(텍스트 3단락), 우(Contact 정보 카드)
- 3단락은 각각 제목 없이 자연스럽게 흘러가게
- 우측 Contact 카드: 이메일, GitHub, Velog 아이콘 포함
- 모바일: 세로 스택

### Skills
- 5개 카테고리 행 배치
- 각 행: 카테고리명(좌) + 태그들(우)
- Primary 태그: filled 스타일 (배경색 있음)
- Secondary 태그: outline 스타일 (배경 없음, 테두리만)
- 숙련도 바(%) 사용 금지

### Projects
- 카드 그리드 (2열, 모바일 1열)
- 첫 번째 카드(ETL Agent): highlight 처리 (border accent)
- 카드 내 구성: 제목 + 기간 / 문제→기술→성과 3행 / 태그 목록 / GitHub 링크 버튼
- hover 시 카드 살짝 위로 이동 (framer-motion layoutId 불필요, transform만)

### Experience
- 타임라인 형태 (세로선 + 점)
- 회사명, 기간, 역할, bullet 5개, 기술 태그
- 하단에 Education & Activities 소형 카드 그리드

### Contact
- 심플하게: 이메일 + GitHub + Velog + PDF 다운로드
- 큰 CTA: "함께 일하고 싶다면 연락주세요"
- 전화번호는 포함하지 않음 (스팸 방지)

---

## 디자인 토큰 (globals.css 또는 tailwind.config.ts)

```css
:root {
  --font-sans: 'Pretendard', 'Geist', system-ui;
}
```

색상 팔레트 (다크모드 우선):
- 배경: #0a0a0a (다크), #fafafa (라이트)
- 텍스트: #ededed (다크), #171717 (라이트)
- Muted: #a1a1aa
- Accent: #3b82f6 (blue-500) — CTA 버튼, highlight에만 사용
- 테두리: #27272a (다크), #e4e4e7 (라이트)

---

## 메타데이터 (layout.tsx)

```ts
export const metadata: Metadata = {
  title: "이용광 | Data Engineer & AI Agent Developer",
  description: "SK쉴더스 4년차 데이터 엔지니어. Databricks, LangGraph, AWS 기반 데이터 플랫폼 및 AI 에이전트 개발.",
  openGraph: {
    title: "이용광 포트폴리오",
    description: "Data Engineer & AI Agent Developer",
    url: "https://your-domain.vercel.app",
    type: "website",
  },
}
```

---

## 추가 구현 요구사항

1. **PDF 이력서**: `public/resume.pdf`에 파일 배치 후 다운로드 링크 연결
2. **반응형**: 모든 섹션 모바일(375px) 대응
3. **다크모드**: Tailwind `darkMode: 'class'` + 토글 버튼 (Navbar 우측)
4. **스크롤 애니메이션**: 각 섹션 진입 시 fade-in-up (framer-motion `whileInView`)
5. **Smooth scroll**: `html { scroll-behavior: smooth }`
6. **Active nav**: 현재 보이는 섹션의 Navbar 링크 강조 (Intersection Observer)

---

## 제작 순서 (Claude Code에게 지시)

1. `npx create-next-app` 으로 프로젝트 생성
2. `src/data/resume.ts` 데이터 파일 먼저 작성
3. 공통 컴포넌트 (Navbar) 작성
4. 섹션 순서대로: Hero → ImpactNumbers → About → Skills → Projects → Experience → Contact
5. `src/app/page.tsx`에서 모든 섹션 조합
6. `globals.css` 다크모드 변수 및 scroll behavior 설정
7. `vercel.json` 또는 기본 설정으로 배포 준비

---

## Claude Code 시작 프롬프트 (복사해서 그대로 사용)

```
Next.js 14 App Router + Tailwind CSS + framer-motion으로 개인 포트폴리오 웹사이트를 처음부터 만들어줘.

## 요구사항
- 배포: Vercel (GitHub 연동)
- 스타일: 심플/미니멀, 다크모드 기본, 라이트모드 토글 지원
- 폰트: Pretendard (CDN) + Geist fallback
- 애니메이션: framer-motion (스크롤 진입 fade-in-up, Hero staggered reveal)

## 파일 구조
src/data/resume.ts에 모든 콘텐츠 데이터를 분리해서 관리.
src/components/ 아래 섹션별 컴포넌트 분리.

## 섹션 구성 (위→아래)
1. Navbar: sticky, blur backdrop, 섹션 링크, 다크모드 토글
2. Hero: 이름·직함·tagline·스택뱃지·CTA버튼 2개, staggered fade-in
3. ImpactNumbers: 4개 카드 그리드, 숫자 카운트업 애니메이션 (whileInView)
4. About: 2열 레이아웃 (스토리 3단락 / Contact 카드)
5. Skills: 카테고리별 Primary(filled)/Secondary(outline) 태그 구분, 숙련도 바 없음
6. Projects: 2열 카드 그리드, 첫 번째 카드 highlight(accent border), 문제→기술→성과 구조
7. Experience: 타임라인 + Education & Activities
8. Contact: 이메일·GitHub·Velog·PDF 다운로드, 전화번호 제외

## 콘텐츠 데이터 (resume.ts에 포함할 것)
[이 프롬프트 파일의 "콘텐츠 데이터" 섹션 전체를 그대로 붙여넣기]

## 디자인 토큰
배경: #0a0a0a(다크)/#fafafa(라이트)
텍스트: #ededed(다크)/#171717(라이트)
Accent: #3b82f6 (CTA, highlight만)
테두리: #27272a(다크)/#e4e4e7(라이트)

## 메타데이터
title: "이용광 | Data Engineer & AI Agent Developer"
description: "SK쉴더스 4년차 데이터 엔지니어. Databricks, LangGraph, AWS 기반 데이터 플랫폼 및 AI 에이전트 개발."

전체 코드를 파일별로 완성해줘. package.json, tailwind.config.ts, globals.css, layout.tsx, page.tsx, 각 컴포넌트 파일 전부 포함.
```
