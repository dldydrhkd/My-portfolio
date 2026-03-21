export const personal = {
  name: "이용광",
  nameEn: "Yongkwang Lee",
  title: "Data Engineer & AI Agent Developer",
  tagline: "Building data systems that think for themselves",
  email: "sksda4614@naver.com",
  github: "https://github.com/dldydrhkd",
  blog: "https://velog.io/@dldydrhkd/posts",
  resumePdf: "/resume.pdf",
};

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
];

export const about = {
  paragraphs: [
    "AI 모델을 공부하면서 깨달았습니다. 모델 성능은 결국 데이터 품질에 달려 있다는 것. 그때부터 데이터를 잘 다루는 사람이 되어야겠다고 생각했고, SK쉴더스에서 4년간 일 수억 건의 보안 로그 처리부터 Databricks 기반 레이크하우스 구축, LLM 에이전트 개발까지 데이터 엔지니어링 전 영역을 경험했습니다.",
    "아이언맨의 자비스가 인상적이었던 건, 토니 스타크가 모든 걸 직접 하지 않는다는 점이었습니다. 사람은 방향을 주고, 에이전트가 나머지를 처리하는 구조. LangGraph로 ETL 자동화 에이전트를 만들고, Databricks Genie로 비전문가도 데이터를 직접 조회할 수 있게 한 건 그 방향으로 가는 첫 걸음이었습니다.",
    "ERP 개발팀, 개인정보팀, 외부 벤더 등 다양한 이해관계자와 소통하며 데이터 플랫폼 프로젝트를 조율한 경험이 있습니다. 기술과 비즈니스 사이의 가교 역할을 할 수 있다고 생각합니다.",
  ],
};

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
];

export const projects = [
  {
    title: "SK쉴더스 Databricks ETL Agent",
    period: "2026.01 – 2026.03",
    problem:
      "반복되는 데이터 추출·적재 작업을 매번 수동으로 수행",
    solution:
      "LangGraph 멀티에이전트 아키텍처로 자연어 지시만으로 ETL 워크플로우 자동 생성·실행. FastAPI + HTMX + Tailwind CSS 풀스택 단독 개발.",
    result:
      "비전문가도 데이터 파이프라인 실행 가능. Databricks Genie 연동으로 SQL 없이 데이터 조회 환경 구축.",
    tags: ["LangGraph", "LangChain", "Databricks", "FastAPI", "HTMX", "Python"],
    highlight: true,
    github: "",
  },
  {
    title: "지리정보 기반 KPI 자동화 BI 서비스",
    period: "2024.07 – 2024.10",
    problem: "Excel 수작업 KPI 집계, 부서 간 데이터 정의 불일치",
    solution:
      "영업·마케팅·경영기획 다부서 협업으로 핵심 KPI 20개 정의. Global Temporary View + Broadcast Join 도입. 스타 스키마 기반 마트 설계.",
    result:
      "처리 시간 75% 단축 (4시간 → 1시간). Row 기반 확장 구조로 스키마 변경 없이 확장 가능.",
    tags: ["Databricks", "PySpark", "Spark SQL", "AWS", "PostgreSQL"],
    highlight: false,
    github: "",
  },
  {
    title: "Databricks 기반 데이터 분석 플랫폼 구축",
    period: "2024.01 – 2024.06",
    problem:
      "AWS 레거시 플랫폼의 사일로화된 데이터, 분석가 접근 불가",
    solution:
      "Snowflake vs Databricks 기술 의사결정 참여. 메달리온 아키텍처 기반 550개 테이블 설계. SAP·Argos 등 내외부 소스 단일 플랫폼 통합. RBAC 접근 제어 설계.",
    result:
      "전사 데이터 단일 플랫폼 통합 완료. 데이터 파기 정책 수립으로 컴플라이언스 대응.",
    tags: ["Databricks", "PySpark", "Delta Lake", "AWS S3", "RBAC"],
    highlight: false,
    github: "",
  },
  {
    title: "Alarm Monitoring 인프라 재구축",
    period: "2025.01 – 2025.03",
    problem: "일 처리량 한계 도달 (500만 건), 안정성 95% 수준",
    solution:
      "Redis 캐싱 레이어 도입. AWS Lambda 기반 실시간 데이터 처리 파이프라인으로 전환.",
    result:
      "일 처리량 3배 확장 (500만 → 1,500만 건). 안정성 95% → 99.9% 달성.",
    tags: ["AWS Lambda", "Redis", "ECR", "API Gateway", "Hive"],
    highlight: false,
    github: "",
  },
];

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
];

export const education = [
  {
    school: "인하대학교",
    major: "컴퓨터공학과",
    degree: "학사",
    period: "2014.03 – 2022.08",
    gpa: "3.56 / 4.50",
  },
];

export const activities = [
  { name: "42Seoul 본과정 2기", period: "2020.09 – 2021.05", type: "교육" },
  {
    name: "네이버 부스트캠프 AI Tech 1기",
    period: "2021.01 – 2021.06",
    type: "교육",
  },
  {
    name: "네이버 부스트캠프 웹풀스택 챌린지 6기",
    period: "2021.07 – 2021.08",
    type: "교육",
  },
  {
    name: "플레이데이터 빅데이터 엔지니어 양성과정 7기",
    period: "2021.11 – 2022.04",
    type: "교육",
  },
  {
    name: "교내 알고리즘 소모임 CTP",
    period: "2019.03 – 2021.03",
    type: "동아리",
  },
];
