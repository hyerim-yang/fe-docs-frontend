"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { docs, tagVariant } from "@/lib/docs";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = docs.filter((doc) => {
    return (
      query === "" ||
      doc.title.includes(query) ||
      doc.description.includes(query) ||
      doc.author.includes(query) ||
      doc.tag.includes(query)
    );
  });

  return (
    <main className="flex-1 px-6 pt-8 pb-20">
      <div className="mx-auto max-w-[960px]">
        {/* Hero */}
        <section className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight mb-1">문서 목록</h1>
          <p className="text-sm text-muted-foreground mb-6">
            총 <span className="font-medium text-foreground">{filtered.length}</span>
            개의 문서
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
                      <CardDescription className="line-clamp-2">{doc.description}</CardDescription>
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
            <Button variant="outline" size="sm" onClick={() => setQuery("")}>
              필터 초기화
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
