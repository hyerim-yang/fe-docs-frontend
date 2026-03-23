"use client";

import Link from "next/link";
import { BookOpen, FileText, Folder, Rocket, Shield, Wrench } from "lucide-react";
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
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

export interface Category {
  label: string;
  value: string;
  icon: React.ElementType;
  count: number;
}

interface AppSidebarProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (value: string) => void;
}

export function AppSidebar({ categories, activeCategory, onCategoryChange }: AppSidebarProps) {
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
              {categories.map((cat) => (
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
              ))}
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
  기타: FileText,
};
