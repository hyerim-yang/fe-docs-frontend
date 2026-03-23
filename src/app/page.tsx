"use client";

import Link from "next/link";
import { useState } from "react";

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

const tagColors: Record<string, string> = {
  온보딩: "bg-blue-50 text-blue-600",
  가이드: "bg-green-50 text-green-600",
  정책: "bg-purple-50 text-purple-600",
  기술: "bg-orange-50 text-orange-600",
};

function getTagColor(tag: string) {
  return tagColors[tag] ?? "bg-gray-100 text-gray-600";
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = docs.filter(
    (doc) =>
      doc.title.includes(query) ||
      doc.description.includes(query) ||
      doc.author.includes(query) ||
      doc.tag.includes(query),
  );

  return (
    <div className="min-h-screen bg-gray-50/60">
      {/* ── Header ── */}
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[960px] items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-600">
              <span className="text-xs font-bold text-white">FE</span>
            </div>
            <span className="text-[15px] font-semibold text-gray-900">{"<FrontEnd />"}</span>
          </Link>
          <span className="text-xs text-gray-400">프론트엔드팀 문서 저장소</span>
        </div>
      </header>

      <main className="mx-auto max-w-[960px] px-6 pt-10 pb-20">
        {/* ── Hero ── */}
        <section className="mb-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">문서 목록</h1>
          <p className="text-sm text-gray-500 mb-6">
            총 <span className="font-medium text-gray-700">{docs.length}</span>개의 문서가 있습니다.
          </p>

          {/* Search */}
          <div className="relative">
            <svg
              className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
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
            <input
              type="text"
              placeholder="제목, 작성자, 태그로 검색..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pr-4 pl-10 text-sm text-gray-900 placeholder:text-gray-400 focus:border-red-300 focus:ring-2 focus:ring-red-100 focus:outline-none transition-all"
            />
          </div>
        </section>

        {/* ── Document Grid ── */}
        {filtered.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2">
            {filtered.map((doc) => (
              <li key={doc.href}>
                <Link
                  href={doc.href}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-sm"
                >
                  {/* Tag */}
                  <span
                    className={`mb-3 inline-flex w-fit rounded-md px-2 py-0.5 text-xs font-medium ${getTagColor(doc.tag)}`}
                  >
                    {doc.tag}
                  </span>

                  {/* Title */}
                  <h2 className="text-[15px] font-semibold text-gray-900 mb-1.5 group-hover:text-red-600 transition-colors">
                    {doc.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                    {doc.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-auto flex items-center gap-2 text-xs text-gray-400">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-[10px] font-medium text-gray-500">
                      {doc.author[0]}
                    </div>
                    <span>{doc.author}</span>
                    <span className="text-gray-200">·</span>
                    <span>{formatDate(doc.date)}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <svg
              className="h-10 w-10 mb-3"
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
            <p className="text-sm">검색 결과가 없습니다.</p>
          </div>
        )}
      </main>
    </div>
  );
}
