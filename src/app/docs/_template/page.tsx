/**
 * 문서 템플릿 — 새 문서를 만들 때 이 파일을 복사하세요.
 *
 * 사용법:
 *   1. src/app/docs/ 아래에 새 폴더를 만든다 (예: docs/my-topic)
 *   2. 이 파일을 해당 폴더에 page.tsx 로 복사한다
 *   3. 아래 metadata 상수와 JSX 내용을 수정한다
 *   4. src/app/page.tsx 의 docs 배열에 항목을 추가한다
 */

import Link from "next/link";

// ──────────────────────────────────────────────
// ✏️ 문서 메타데이터 — 여기만 수정하세요
// ──────────────────────────────────────────────
const meta = {
  title: "문서 제목을 입력하세요",
  author: "작성자 이름",
  createdAt: "2026-03-23",
  updatedAt: "2026-03-23",
};

export default function TemplatePage() {
  return (
    <main className="flex-1 px-6 pt-8 pb-20">
      <article className="mx-auto w-full max-w-[720px]">
        {/* 뒤로가기 */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          목록으로
        </Link>

        {/* 제목 & 메타 정보 */}
        <h1 className="text-3xl font-semibold text-foreground mb-3">{meta.title}</h1>
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
          <span>작성자 : {meta.author}</span>
          <span className="text-border">|</span>
          <span>작성일 : {meta.createdAt}</span>
          {meta.updatedAt !== meta.createdAt && (
            <>
              <span className="text-border">|</span>
              <span>수정일 : {meta.updatedAt}</span>
            </>
          )}
        </div>

        {/* ──────────────────────────────────────────── */}
        {/* ✏️ 본문 내용을 아래에 작성하세요               */}
        {/* ──────────────────────────────────────────── */}
        <div className="space-y-14 text-[15px] leading-relaxed text-foreground">
          {/* 섹션 예시 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">섹션 제목</h2>
            <p>내용을 작성하세요.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
