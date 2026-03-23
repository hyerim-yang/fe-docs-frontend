import Link from "next/link";

const meta = {
  title: "DBeaver",
  author: "작성자 이름",
  createdAt: "2026-03-23",
  updatedAt: "2026-03-23",
};

export default function DBeaverPage() {
  return (
    <main className="flex-1 px-6 pt-8 pb-20">
      <article className="mx-auto w-full max-w-[720px]">
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

        <div className="space-y-14 text-[15px] leading-relaxed text-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">섹션 제목</h2>
            <p>내용을 작성하세요.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
