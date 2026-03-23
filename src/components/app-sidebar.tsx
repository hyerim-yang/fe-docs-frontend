"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  BookOpen,
  Code,
  FileText,
  Folder,
  GraduationCap,
  Layers,
  Palette,
  Rocket,
  Shield,
  Sparkles,
  Wrench,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ThemeToggle } from "@/components/theme-toggle";

export interface SubDoc {
  title: string;
  href: string;
}

export interface Category {
  label: string;
  value: string;
  icon: React.ElementType;
  count: number;
  docs?: SubDoc[];
}

interface AppSidebarProps {
  categories: Category[];
  activeCategory: string;
  activePath?: string;
  onCategoryChange: (value: string) => void;
}

export function AppSidebar({
  categories,
  activeCategory,
  activePath,
  onCategoryChange,
}: AppSidebarProps) {
  // 현재 문서가 속한 카테고리는 자동으로 펼침
  const activeDocCategory = activePath
    ? categories.find((c) => c.docs?.some((d) => d.href === activePath))?.value
    : undefined;

  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>(() =>
    activeDocCategory ? { [activeDocCategory]: true } : {},
  );

  const toggleMenu = (value: string) => {
    setOpenMenus((prev) => ({ ...prev, [value]: !prev[value] }));
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-600">
            <span className="text-xs font-bold text-white">FE</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight">{"<FrontEnd />"}</span>
            <span className="text-[10px] text-muted-foreground">프론트엔드팀 문서 저장소</span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>카테고리</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((cat) =>
                cat.docs && cat.docs.length > 0 ? (
                  <Collapsible
                    key={cat.value}
                    open={openMenus[cat.value] ?? false}
                    onOpenChange={() => toggleMenu(cat.value)}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger
                        render={
                          <SidebarMenuButton
                            isActive={activeCategory === cat.value}
                            onClick={() => onCategoryChange(cat.value)}
                          />
                        }
                      >
                        <cat.icon className="h-4 w-4" />
                        <span>{cat.label}</span>
                        <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {cat.docs.map((doc) => (
                            <SidebarMenuSubItem key={doc.href}>
                              <SidebarMenuSubButton
                                isActive={activePath === doc.href}
                                render={<Link href={doc.href} />}
                              >
                                <span>{doc.title}</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={cat.value}>
                    <SidebarMenuButton
                      isActive={activeCategory === cat.value}
                      onClick={() => onCategoryChange(cat.value)}
                    >
                      <cat.icon className="h-4 w-4" />
                      <span>{cat.label}</span>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>{cat.count}</SidebarMenuBadge>
                  </SidebarMenuItem>
                ),
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-2">
        <div className="flex items-center justify-between px-2">
          <span className="text-[10px] text-muted-foreground">© 2026 FrontEnd Team</span>
          <ThemeToggle />
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}

/** 카테고리 목록 — 아이콘 매핑 */
export const CATEGORY_ICON_MAP: Record<string, React.ElementType> = {
  전체: Folder,
  온보딩: Rocket,
  가이드: BookOpen,
  정책: Shield,
  기술: Wrench,
  FrontEnd: Code,
  팝테일: Layers,
  "팝테일 에디터": Palette,
  팝키즈: Sparkles,
  Study: GraduationCap,
  기타: FileText,
};
