import Link from "next/link";

const meta = {
  title: "환경별 쿠키 도메인 충돌로 인한 무한 새로고침 이슈 분석 및 수정",
  author: "양혜림",
  createdAt: "2026-03-23",
  updatedAt: "2026-03-23",
};

export default function PoptailCookieConflictPage() {
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
          {/* 1. 문제 현상 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. 문제 현상</h2>
            <p>
              내부 직원이 같은 브라우저에서 dev / stg / prod를 오가며 사용할 때, 간헐적으로 무한
              새로고침이 발생하여 시크릿 창이나 쿠키 수동 삭제 없이는 접속이 불가능했습니다.
            </p>
          </section>

          {/* 2. 원인 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. 원인</h2>
            <p className="mb-4">쿠키 도메인 계층 구조에 의한 충돌이 원인입니다.</p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left px-4 py-2 font-medium">환경</th>
                    <th className="text-left px-4 py-2 font-medium">쿠키 도메인</th>
                    <th className="text-left px-4 py-2 font-medium">범위</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">Dev</td>
                    <td className="px-4 py-2">
                      <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
                        .dev.poptale.ai
                      </code>
                    </td>
                    <td className="px-4 py-2">dev 하위만</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Stg</td>
                    <td className="px-4 py-2">
                      <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
                        .stg.poptale.ai
                      </code>
                    </td>
                    <td className="px-4 py-2">stg 하위만</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Prod</td>
                    <td className="px-4 py-2">
                      <code className="rounded bg-muted px-1.5 py-0.5 text-sm">.poptale.ai</code>
                    </td>
                    <td className="px-4 py-2">모든 서브도메인 포함</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-4">
              prod의 <code className="rounded bg-muted px-1.5 py-0.5 text-sm">.poptale.ai</code>{" "}
              도메인 쿠키는{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm">dev.poptale.ai</code>,{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm">editor.dev.poptale.ai</code>{" "}
              등 모든 하위 도메인에서도 읽힙니다.
              <br />
              이로 인해 dev/stg 접속 시 브라우저에 동일 이름(
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm">user_token</code>) 쿠키가 2개
              존재하게 됩니다.
            </p>

            <h3 className="text-lg font-medium text-foreground mb-3">무한 새로고침 발생 흐름</h3>
            <ol className="list-decimal list-inside space-y-1.5 text-muted-foreground">
              <li>
                prod 로그인 →{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm">user_token</code>이{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm">.poptale.ai</code>에 설정됨
              </li>
              <li>
                dev 접속 → 브라우저가 prod의{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm">user_token</code>(
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm">.poptale.ai</code>)도 함께
                전송
              </li>
              <li>
                dev에서도 로그인 →{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm">user_token</code>(
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm">.dev.poptale.ai</code>)
                추가 설정 → 동일 이름 쿠키 2개
              </li>
              <li>
                dev 토큰 만료 시 →{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
                  Cookies.get(&apos;user_token&apos;)
                </code>
                이 prod 토큰을 반환할 수 있음 → 무한 새로고침 발생
              </li>
            </ol>
          </section>

          {/* 3. 수정 내용 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. 수정 내용</h2>
            <p className="mb-4">환경별로 쿠키 이름을 분리하여 충돌을 원천 차단했습니다.</p>

            <h3 className="text-lg font-medium text-foreground mb-3">핵심 로직</h3>
            <pre className="overflow-x-auto rounded-lg bg-muted/50 border p-4 text-sm mb-6">
              <code>{`// src/lib/cookie-name.ts (신규 파일)
export function getCookieName(): string {
  return process.env.NEXT_PUBLIC_COOKIE_NAME || 'user_token'
}`}</code>
            </pre>
            <p>
              기존 하드코딩된{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm">&apos;user_token&apos;</code>
              을 모두{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm">getCookieName()</code>으로
              교체했습니다.
            </p>
          </section>

          {/* 4. Vercel 환경변수 설정 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Vercel 환경변수 설정</h2>
            <p className="mb-4">poptale-editor + poptale-frontend 양쪽 동일하게 설정합니다.</p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left px-4 py-2 font-medium">환경</th>
                    <th className="text-left px-4 py-2 font-medium">변수</th>
                    <th className="text-left px-4 py-2 font-medium">값</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">Dev</td>
                    <td className="px-4 py-2">
                      <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
                        NEXT_PUBLIC_COOKIE_NAME
                      </code>
                    </td>
                    <td className="px-4 py-2">
                      <code className="rounded bg-muted px-1.5 py-0.5 text-sm">user_token_dev</code>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Stg</td>
                    <td className="px-4 py-2">
                      <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
                        NEXT_PUBLIC_COOKIE_NAME
                      </code>
                    </td>
                    <td className="px-4 py-2">
                      <code className="rounded bg-muted px-1.5 py-0.5 text-sm">user_token_stg</code>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Prod</td>
                    <td className="px-4 py-2 text-muted-foreground">-</td>
                    <td className="px-4 py-2 text-muted-foreground">미설정 (기본값 user_token)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. 배포 영향 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. 배포 영향</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left px-4 py-2 font-medium">대상</th>
                    <th className="text-left px-4 py-2 font-medium">영향</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">prod 외부 사용자 (앱/웹)</td>
                    <td className="px-4 py-2">영향 없음 — 쿠키명 user_token 그대로</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">dev/stg 내부 사용자</td>
                    <td className="px-4 py-2">배포 후 재로그인 1회 필요</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">무한새로고침 발생 중인 사용자</td>
                    <td className="px-4 py-2">배포 즉시 자동 해소 → 로그인 페이지로 이동</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">백엔드</td>
                    <td className="px-4 py-2">변경 없음 — 쿠키명은 프론트에서만 관리</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
