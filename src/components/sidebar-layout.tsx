"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar, CATEGORY_ICON_MAP, type Category } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { docs } from "@/lib/docs";

function buildCategories(): Category[] {
  const groupMap: Record<string, typeof docs> = {};
  for (const doc of docs) {
    (groupMap[doc.category] ??= []).push(doc);
  }

  const cats: Category[] = [
    {
      label: "전체",
      value: "전체",
      icon: CATEGORY_ICON_MAP["전체"],
      count: docs.length,
    },
  ];

  for (const [cat, catDocs] of Object.entries(groupMap)) {
    cats.push({
      label: cat,
      value: cat,
      icon: CATEGORY_ICON_MAP[cat] ?? CATEGORY_ICON_MAP["기타"],
      count: catDocs.length,
      docs: catDocs.map((d) => ({ title: d.title, href: d.href })),
    });
  }

  return cats;
}

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const categories = useMemo(() => buildCategories(), []);

  // 현재 경로에서 카테고리 추론
  const currentDoc = docs.find((d) => d.href === pathname);
  const [activeCategory, setActiveCategory] = useState("전체");

  const displayCategory = isHome ? activeCategory : (currentDoc?.category ?? "전체");

  const handleCategoryChange = (value: string) => {
    if (isHome) {
      setActiveCategory(value);
    } else {
      // 문서 페이지에서 카테고리 클릭 시 홈으로 이동
      router.push("/");
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar
        categories={categories}
        activeCategory={displayCategory}
        activePath={pathname}
        onCategoryChange={handleCategoryChange}
      />

      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b bg-background/80 backdrop-blur-md px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="!h-4" />
          <div className="flex flex-1 items-center justify-between">
            <span className="text-sm font-medium">
              {displayCategory === "전체" ? "모든 문서" : displayCategory}
            </span>
            <div className="flex items-center gap-2 sm:hidden">
              <ThemeToggle />
            </div>
          </div>
        </header>

        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
