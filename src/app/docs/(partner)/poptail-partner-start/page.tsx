import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const meta = {
  title: "환경 및 계정 안내",
  author: "양혜림",
  createdAt: "2026-03-23",
  updatedAt: "2026-03-23",
};

export default function PoptailPartnerStartPage() {
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
        </div>

        <div className="space-y-14 text-[15px] leading-relaxed text-foreground">
          {/* 1. 서비스 개요 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              1. 서비스 개요
            </h2>
            <p>
              Poptale 파트너사이트는 파트너사가 작품을 등록·관리할 수 있는 웹 기반 어드민
              서비스입니다.
            </p>
          </section>

          {/* 2. 환경별 URL */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              2. 환경별 URL
            </h2>
            <table className="w-full text-sm rounded-lg overflow-hidden border border-border">
              <thead>
                <tr className="bg-muted text-muted-foreground">
                  <th className="px-4 py-2.5 text-left font-medium">환경</th>
                  <th className="px-4 py-2.5 text-left font-medium">URL</th>
                  <th className="px-4 py-2.5 text-left font-medium">용도</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <tr className="border-t border-border">
                  <td className="px-4 py-2.5 font-medium">Development</td>
                  <td className="px-4 py-2.5">
                    <a
                      href="https://dev.partner.poptale.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      dev.partner.poptale.ai
                    </a>
                  </td>
                  <td className="px-4 py-2.5 text-foreground/70">개발 및 기능 검증</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-2.5 font-medium">Staging</td>
                  <td className="px-4 py-2.5">
                    <a
                      href="https://stg.partner.poptale.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      stg.partner.poptale.ai
                    </a>
                  </td>
                  <td className="px-4 py-2.5 text-foreground/70">QA 및 배포 전 검증</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-2.5 font-medium">Production</td>
                  <td className="px-4 py-2.5">
                    <a
                      href="https://partner.poptale.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      partner.poptale.ai
                    </a>
                  </td>
                  <td className="px-4 py-2.5 text-foreground/70">실서비스 운영</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-3 rounded-lg bg-muted px-4 py-3">
              <p className="text-sm text-foreground/70">
                <span className="font-medium text-foreground">Vercel 프로젝트:</span>{" "}
                poptale-partner-site-frontend
              </p>
            </div>
          </section>

          {/* 3. 테스트 계정 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              3. 테스트 계정
            </h2>
            <p className="text-sm text-foreground/60 mb-6">dev / stage 환경 동일</p>

            {/* 계정 1 */}
            <div className="space-y-10">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-3">
                  계정 1 — 일반 로그인
                </h3>
                <table className="w-full text-sm rounded-lg overflow-hidden border border-border mb-3">
                  <tbody className="text-foreground">
                    <tr className="bg-muted">
                      <td className="px-4 py-2.5 font-medium text-foreground/60 w-28">아이디</td>
                      <td className="px-4 py-2.5 font-mono">sunbookspartner</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2.5 font-medium text-foreground/60">비밀번호</td>
                      <td className="px-4 py-2.5 font-mono">partnertest1234!!</td>
                    </tr>
                  </tbody>
                </table>
                <ul className="space-y-1.5 text-sm text-foreground/70">
                  <li>
                    <span className="font-medium text-foreground">계정 권한:</span> CP사(도서출판
                    선) 권한 계정
                  </li>
                  <li>
                    <span className="font-medium text-foreground">기대 동작:</span> 로그인 성공 후
                    작품관리 화면으로 이동
                  </li>
                </ul>
              </div>

              {/* 계정 2 */}
              <div>
                <h3 className="text-base font-semibold text-foreground mb-3">
                  계정 2 — 최초 로그인 (비밀번호 변경 필요)
                </h3>
                <table className="w-full text-sm rounded-lg overflow-hidden border border-border mb-3">
                  <tbody className="text-foreground">
                    <tr className="bg-muted">
                      <td className="px-4 py-2.5 font-medium text-foreground/60 w-28">아이디</td>
                      <td className="px-4 py-2.5 font-mono">jakcompartner</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2.5 font-medium text-foreground/60">비밀번호</td>
                      <td className="px-4 py-2.5 font-mono">partnertest1234!!</td>
                    </tr>
                  </tbody>
                </table>
                <ul className="space-y-1.5 text-sm text-foreground/70">
                  <li>
                    <span className="font-medium text-foreground">계정 권한:</span> CP사(작가컴퍼니)
                    권한 계정
                  </li>
                  <li>
                    <span className="font-medium text-foreground">기대 동작:</span> 로그인 성공 후
                    비밀번호 변경 화면으로 이동 (최초 로그인 플로우)
                  </li>
                </ul>

                <Card className="mt-4 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
                  <CardContent className="text-sm text-amber-700 dark:text-amber-300">
                    ⚠️ 계정 2는 최초 로그인 시 비밀번호 변경이 필요합니다. 비밀번호를 변경한 경우,
                    다시 테스트하려면 계정 초기화가 필요합니다.
                  </CardContent>
                </Card>
              </div>

              {/* 계정 3 */}
              <div>
                <h3 className="text-base font-semibold text-foreground mb-3">
                  계정 3 — 일반 로그인
                </h3>
                <table className="w-full text-sm rounded-lg overflow-hidden border border-border mb-3">
                  <tbody className="text-foreground">
                    <tr className="bg-muted">
                      <td className="px-4 py-2.5 font-medium text-foreground/60 w-28">아이디</td>
                      <td className="px-4 py-2.5 font-mono">jakcomfantasy</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2.5 font-medium text-foreground/60">비밀번호</td>
                      <td className="px-4 py-2.5 font-mono">partnertest1234!!</td>
                    </tr>
                  </tbody>
                </table>
                <ul className="space-y-1.5 text-sm text-foreground/70">
                  <li>
                    <span className="font-medium text-foreground">계정 권한:</span> CP
                    레이블(JC미디어) 권한 계정
                  </li>
                  <li>
                    <span className="font-medium text-foreground">기대 동작:</span> 로그인 성공 후
                    작품관리 화면으로 이동
                  </li>
                </ul>
              </div>

              {/* 계정 4 */}
              <div>
                <h3 className="text-base font-semibold text-foreground mb-3">
                  계정 4 — 일반 로그인
                </h3>
                <table className="w-full text-sm rounded-lg overflow-hidden border border-border mb-3">
                  <tbody className="text-foreground">
                    <tr className="bg-muted">
                      <td className="px-4 py-2.5 font-medium text-foreground/60 w-28">아이디</td>
                      <td className="px-4 py-2.5 font-mono">jakcomromance</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2.5 font-medium text-foreground/60">비밀번호</td>
                      <td className="px-4 py-2.5 font-mono">partnertest1234!!</td>
                    </tr>
                  </tbody>
                </table>
                <ul className="space-y-1.5 text-sm text-foreground/70">
                  <li>
                    <span className="font-medium text-foreground">계정 권한:</span> CP
                    레이블(로제토) 권한 계정
                  </li>
                  <li>
                    <span className="font-medium text-foreground">기대 동작:</span> 로그인 성공 후
                    작품관리 화면으로 이동
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
