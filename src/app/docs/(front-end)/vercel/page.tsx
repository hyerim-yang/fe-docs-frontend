import Link from "next/link";

// ──────────────────────────────────────────────
// ✏️ 문서 메타데이터 — 여기만 수정하세요
// ──────────────────────────────────────────────
const meta = {
  title: "Vercel",
  author: "양혜림",
  createdAt: "2026-03-24",
  updatedAt: "2026-03-24",
};

export default function VercelPage() {
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
          {/* Aipia Vercel URL */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Aipia Vercel URL</h2>
            <a
              href="https://vercel.com/aipia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-3 font-medium transition-colors hover:bg-muted"
            >
              Overview – Vercel
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

          {/* Environments 설정 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Environments | 브랜치 설정하기
            </h2>
            <a
              href="https://vercel.com/aipia/poptale-frontend/settings/environments"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-3 font-medium transition-colors hover:bg-muted"
            >
              Vercel &gt; Settings &gt; Environments
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
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border px-3 py-2 bg-muted text-left">환경</th>
                  <th className="border px-3 py-2 bg-muted text-left">브랜치</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">Production Branch</td>
                  <td className="border px-3 py-2">
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm">prod</code>
                  </td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Preview Branch</td>
                  <td className="border px-3 py-2">
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm">stg</code>,{" "}
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm">dev</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Domains 설정 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Domains | 도메인 등록하기
            </h2>
            <a
              href="https://vercel.com/aipia/poptale-frontend/settings/domains"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-flex items-center gap-2 rounded-lg bg-muted/50 px-4 py-3 font-medium transition-colors hover:bg-muted"
            >
              Vercel &gt; Settings &gt; Domains
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
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border px-3 py-2 bg-muted text-left">도메인</th>
                  <th className="border px-3 py-2 bg-muted text-left">연결 브랜치</th>
                  <th className="border px-3 py-2 bg-muted text-left">연결 방식</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm">dev.poptale.ai</code>
                  </td>
                  <td className="border px-3 py-2">
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm">dev</code>
                  </td>
                  <td className="border px-3 py-2">Preview Connect</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm">stg.poptale.ai</code>
                  </td>
                  <td className="border px-3 py-2">
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm">stg</code>
                  </td>
                  <td className="border px-3 py-2">Preview Connect</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* DNS Records 설정 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              DNS Records | DNS 설정하기
            </h2>
            <div className="bg-muted rounded-lg p-4 border mb-6">
              <p>
                도메인만 등록하면{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                  Invalid Configuration
                </code>
                이 표시됩니다. 아래 단계를 따라 DNS를 설정해주세요.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-3">1️⃣ DNS 설정 확인</h3>
            <p className="mb-3">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">dev.poptale.ai</code>가
              Vercel에 연결되어 있으므로, DNS 레코드가 정확해야 합니다.
            </p>
            <table className="w-full border-collapse mb-4">
              <thead>
                <tr>
                  <th className="border px-3 py-2 bg-muted text-left">항목</th>
                  <th className="border px-3 py-2 bg-muted text-left">값</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">CNAME 레코드 Name</td>
                  <td className="border px-3 py-2">
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm">dev</code>
                  </td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Value</td>
                  <td className="border px-3 py-2">
                    Vercel에서 제공한 CNAME 값 (예:{" "}
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                      0949f0d9d4841e5a.vercel-dns-017.com
                    </code>
                    )
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>TTL은 기본값으로 두면 됩니다.</li>
              <li>A 레코드나 다른 중복된 레코드가 있으면 제거합니다.</li>
              <li>DNS 전파는 보통 몇 분~1시간 정도 걸립니다.</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-3">
              2️⃣ Vercel 환경과 도메인 연결
            </h3>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>
                Vercel 프로젝트 → Settings → Domains에{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm">dev.poptale.ai</code>가
                추가되어 있어야 합니다.
              </li>
              <li>
                Status가 <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Verified</code>{" "}
                또는 <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Connected</code>로
                표시되어야 합니다.
              </li>
              <li>
                만약{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                  Invalid Configuration
                </code>
                이 계속 뜬다면 DNS가 아직 전파되지 않았거나, CNAME이 올바르게 설정되지 않은 것일
                가능성이 높습니다.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-3">3️⃣ 브랜치 배포 확인</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm">dev</code> 브랜치가 Preview
                Branch로 설정되어 있으면, dev 브랜치 푸시 시 자동으로 배포됩니다.
              </li>
              <li>
                배포 URL은 기본적으로 Vercel이 생성한 Preview URL이지만, 커스텀 도메인(
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm">dev.poptale.ai</code>
                )과 연결되어 있으면 해당 도메인으로 접근 가능합니다.
              </li>
            </ul>
            <div className="bg-muted rounded-lg p-4 border">
              <p>
                <strong>Tip:</strong> Vercel Dashboard에서 Deployments 탭을 확인하면 dev 브랜치가
                마지막에 배포된 상태와 URL을 볼 수 있습니다.
              </p>
            </div>
          </section>

          {/* 최종 확인 체크리스트 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">최종 확인 체크리스트</h2>
            <ol className="list-decimal pl-5 space-y-1">
              <li>DNS 레코드가 정확한지 확인하고, 전파될 때까지 기다립니다.</li>
              <li>
                Vercel Domains에서{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm">dev.poptale.ai</code>가
                Verified 되었는지 확인합니다.
              </li>
              <li>
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm">dev</code> 브랜치에 커밋
                푸시 → 배포 →{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm">dev.poptale.ai</code> 접속
                확인.
              </li>
            </ol>
          </section>
        </div>
      </article>
    </main>
  );
}
