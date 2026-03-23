"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar, CATEGORY_ICON_MAP, type Category } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

/* ── 문서 데이터 ── */

interface Doc {
  title: string;
  description: string;
  author: string;
  date: string;
  tag: string;
  href: string;
}

const docs: Doc[] = [
  {
    title: "신규입사자 온보딩 가이드",
    description: "입사 첫 날부터 필요한 모든 정보를 한눈에 확인하세요.",
    author: "양혜림",
    date: "2026-03-23",
    tag: "온보딩",
    href: "/docs/onboarding",
  },
];

const tagVariant: Record<string, string> = {
  온보딩:
    "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  가이드:
    "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
  정책: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
  기술: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}

/* ── 카테고리 빌드 ── */

function buildCategories(allDocs: Doc[]): Category[] {
  const countMap: Record<string, number> = {};
  for (const doc of allDocs) {
    countMap[doc.tag] = (countMap[doc.tag] ?? 0) + 1;
  }

  const cats: Category[] = [
    {
      label: "전체",
      value: "전체",
      icon: CATEGORY_ICON_MAP["전체"],
      count: allDocs.length,
    },
  ];

  for (const [tag, count] of Object.entries(countMap)) {
    cats.push({
      label: tag,
      value: tag,
      icon: CATEGORY_ICON_MAP[tag] ?? CATEGORY_ICON_MAP["기타"],
      count,
    });
  }

  return cats;
}

/* ── Page ── */

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("전체");

  const categories = useMemo(() => buildCategories(docs), []);

  const filtered = docs.filter((doc) => {
    const matchesCategory = activeCategory === "전체" || doc.tag === activeCategory;
    const matchesQuery =
      query === "" ||
      doc.title.includes(query) ||
      doc.description.includes(query) ||
      doc.author.includes(query) ||
      doc.tag.includes(query);
    return matchesCategory && matchesQuery;
  });

  return (
    <SidebarProvider>
      <AppSidebar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <SidebarInset>
        {/* ── Header ── */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b bg-background/80 backdrop-blur-md px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="!h-4" />
          <div className="flex flex-1 items-center justify-between">
            <span className="text-sm font-medium">
              {activeCategory === "전체" ? "모든 문서" : activeCategory}
            </span>
            <div className="flex items-center gap-2 sm:hidden">
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* ── Content ── */}
        <main className="flex-1 px-6 pt-8 pb-20">
          <div className="mx-auto max-w-[960px]">
            {/* Hero */}
            <section className="mb-8">
              <h1 className="text-2xl font-bold tracking-tight mb-1">문서 목록</h1>
              <p className="text-sm text-muted-foreground mb-6">
                총 <span className="font-medium text-foreground">{filtered.length}</span>
                개의 문서
                {activeCategory !== "전체" && (
                  <Badge variant="secondary" className="ml-2">
                    {activeCategory}
                  </Badge>
                )}
              </p>

              {/* Search */}
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <Input
                  type="text"
                  placeholder="제목, 작성자, 태그로 검색..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="h-10 pl-9"
                />
              </div>
            </section>

            <Separator className="mb-8" />

            {/* Document Grid */}
            {filtered.length > 0 ? (
              <ul className="grid gap-4 sm:grid-cols-2">
                {filtered.map((doc) => (
                  <li key={doc.href}>
                    <Link href={doc.href} className="block h-full">
                      <Card className="h-full transition-all hover:shadow-md hover:border-foreground/20">
                        <CardHeader>
                          <div className="mb-1">
                            <Badge
                              variant="outline"
                              className={
                                tagVariant[doc.tag] ?? "bg-secondary text-secondary-foreground"
                              }
                            >
                              {doc.tag}
                            </Badge>
                          </div>
                          <CardTitle className="text-base group-hover/card:text-red-600 dark:group-hover/card:text-red-400 transition-colors">
                            {doc.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {doc.description}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="text-xs text-muted-foreground gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[10px] font-medium">
                            {doc.author[0]}
                          </div>
                          <span>{doc.author}</span>
                          <span className="text-border">·</span>
                          <span>{formatDate(doc.date)}</span>
                        </CardFooter>
                      </Card>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20 text-muted-foreground">
                <svg
                  className="h-10 w-10 mb-3 opacity-40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <p className="text-sm mb-3">검색 결과가 없습니다.</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setQuery("");
                    setActiveCategory("전체");
                  }}
                >
                  필터 초기화
                </Button>
              </div>
            )}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
