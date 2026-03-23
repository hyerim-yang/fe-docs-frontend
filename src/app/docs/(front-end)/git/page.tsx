import Link from "next/link";

const meta = {
  title: "Git",
  author: "양혜림",
  createdAt: "2026-03-23",
  updatedAt: "2026-03-23",
};

export default function GitPage() {
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
          {/* Repo */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Repo</h2>
            <a
              href="https://github.com/aipia-team"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-3 font-medium transition-colors hover:bg-muted"
            >
              aipia-team
              <svg
                className="h-4 w-4 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </section>

          {/* 1. 개인 토큰 발급 받기 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. 개인 토큰 발급 받기</h2>
            <ol className="list-decimal ml-5 space-y-3">
              <li>
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
                  https://github.com/settings/apps
                </code>{" "}
                &gt; Developer Settings 진입
              </li>
              <li>
                Personal access tokens &gt;{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
                  Personal access tokens (classic)
                </code>
              </li>
              <li>
                Generate new token &gt;{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">(classic)</code>{" "}
                선택
              </li>
              <li>아래 체크 목록 전체 체크하여 토큰 발급 받기</li>
            </ol>
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300">
              토큰은 다시 확인하기 어렵습니다. 토큰 복사해두기
            </div>
          </section>

          {/* 2. Git Clone */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Git Clone</h2>
            <pre className="rounded-lg bg-zinc-900 px-4 py-3 text-sm text-zinc-100 font-mono overflow-x-auto mb-4">
              git clone https://github.com/aipia-team/poptale-frontend.git
            </pre>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3">
                <span className="font-medium">username</span>
                <span>: github 계정 입력해주세요</span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3">
                <span className="font-medium">password</span>
                <span>: 좀 전에 발급받은 토큰 복사해서 입력해주세요</span>
              </li>
            </ul>
            <p className="mt-3 text-center text-base font-medium">클론 성공! 🥳</p>
          </section>

          {/* 3. FE 브랜치 전략 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. FE 브랜치 전략</h2>
            <p className="mb-4">
              중앙 원격 저장소(upstream)에서 지라 티켓 번호와 일치하는 작업브랜치로 관리합니다.
            </p>
            <Link
              href="/docs/fe-team-guide"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300 dark:hover:bg-blue-900"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              프론트엔드 팀 생활 안내에서 브랜치 전략 확인하기
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
