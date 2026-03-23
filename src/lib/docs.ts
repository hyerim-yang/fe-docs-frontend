export interface Doc {
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  tag: string;
  href: string;
}

export const docs: Doc[] = [
  {
    title: "신규입사자 온보딩 가이드",
    description: "입사 첫 날부터 필요한 모든 정보를 한눈에 확인하세요.",
    author: "양혜림",
    date: "2026-03-23",
    category: "온보딩",
    tag: "온보딩",
    href: "/docs/onboarding",
  },
  {
    title: "프론트엔드 팀 생활 안내",
    description: "팀에 빠르게 적응하고 함께 일하기 위해 필요한 기본 안내입니다.",
    author: "양혜림",
    date: "2026-03-23",
    category: "온보딩",
    tag: "가이드",
    href: "/docs/fe-team-guide",
  },
  {
    title: "프론트엔드팀 업무 플로우",
    description: "지라 할당부터 배포까지, 프론트엔드 팀의 업무 진행 단계를 안내합니다.",
    author: "양혜림",
    date: "2026-03-23",
    category: "온보딩",
    tag: "가이드",
    href: "/docs/fe-workflow",
  },
  {
    title: "Git",
    description: "Git 관련 문서입니다.",
    author: "작성자 이름",
    date: "2026-03-23",
    category: "FrontEnd",
    tag: "기술",
    href: "/docs/git",
  },
  {
    title: "Vercel",
    description: "Vercel 관련 문서입니다.",
    author: "작성자 이름",
    date: "2026-03-23",
    category: "FrontEnd",
    tag: "기술",
    href: "/docs/vercel",
  },
  {
    title: "AI",
    description: "AI 관련 문서입니다.",
    author: "작성자 이름",
    date: "2026-03-23",
    category: "FrontEnd",
    tag: "기술",
    href: "/docs/ai",
  },
  {
    title: "팝테일",
    description: "팝테일 관련 문서입니다.",
    author: "작성자 이름",
    date: "2026-03-23",
    category: "팝테일",
    tag: "서비스",
    href: "/docs/poptail",
  },
  {
    title: "팝테일 에디터",
    description: "팝테일 에디터 관련 문서입니다.",
    author: "작성자 이름",
    date: "2026-03-23",
    category: "팝테일 에디터",
    tag: "서비스",
    href: "/docs/poptail-editor",
  },
  {
    title: "팝키즈",
    description: "팝키즈 관련 문서입니다.",
    author: "작성자 이름",
    date: "2026-03-23",
    category: "팝키즈",
    tag: "서비스",
    href: "/docs/popkids",
  },
  {
    title: "FastAPI",
    description: "FastAPI 관련 문서입니다.",
    author: "작성자 이름",
    date: "2026-03-23",
    category: "Study",
    tag: "스터디",
    href: "/docs/fastapi",
  },
  {
    title: "DBeaver",
    description: "DBeaver 관련 문서입니다.",
    author: "작성자 이름",
    date: "2026-03-23",
    category: "Study",
    tag: "스터디",
    href: "/docs/dbeaver",
  },
];

export const tagVariant: Record<string, string> = {
  온보딩:
    "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  가이드:
    "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
  정책: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
  기술: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800",
  서비스:
    "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800",
  스터디:
    "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950 dark:text-teal-300 dark:border-teal-800",
};
