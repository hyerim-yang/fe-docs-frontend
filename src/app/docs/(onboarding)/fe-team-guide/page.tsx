import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const meta = {
  title: "프론트엔드 팀 생활 안내",
  author: "양혜림",
  createdAt: "2026-03-23",
  updatedAt: "2026-03-23",
};

export default function FeTeamGuidePage() {
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

        <Card className="mb-12 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
          <CardContent className="text-sm text-blue-700 dark:text-blue-300">
            😆 안녕하세요! 프론트엔드 개발팀에 오신 걸 환영합니다 🎉
            <br />
            아래는 팀에 빠르게 적응하고 함께 일하기 위해 필요한 기본 안내입니다.
          </CardContent>
        </Card>

        <div className="space-y-14 text-[15px] leading-relaxed text-foreground">
          {/* 팀 내 소통 방식 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              💬 팀 내 소통 방식
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 rounded-lg bg-muted px-4 py-3">
                <span>📢</span>
                <span>
                  <span className="font-medium">주요 소통 채널: Slack</span> — 업무 관련 문의,
                  공유사항 등은 Slack에서 진행됩니다.
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted px-4 py-3">
                <span>💼</span>
                <span>
                  <span className="font-medium">Microsoft Teams</span> — 전사 공지 및 미니게이트
                  협업 시 사용됩니다.
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted px-4 py-3">
                <span>👋</span>
                <span>새로 입사하시면 팀 단체방에 초대 후 간단히 자기소개를 부탁드려요</span>
              </li>
            </ul>
          </section>

          {/* 업무에 사용되는 기술 스택 / 회의 일정 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              📅 주간회의
            </h2>
            <Card className="mb-4 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
              <CardContent className="text-sm text-amber-700 dark:text-amber-300">
                <p className="font-medium mb-2">📅 회의 일정</p>
                <ul className="space-y-1">
                  <li>
                    <span className="font-medium">목요일:</span> FE팀 주간회의
                  </li>
                  <li>
                    <span className="font-medium">금요일:</span> 개발 주간회의 (각 팀 대표 인원들만
                    참석)
                  </li>
                  <li>
                    <span className="font-medium">월요일:</span> 아이피아 전체 주간회의
                  </li>
                </ul>
                <p className="text-xs mt-2 opacity-80">
                  *(회의 일정은 내부 사정에 따라 변경될 수 있습니다.)*
                </p>
              </CardContent>
            </Card>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 rounded-lg bg-muted px-4 py-3">
                <span>📝</span>
                <span>
                  <span className="font-medium">매주 목요일 오후까지</span> 주간 보고 문서를
                  작성해야합니다.
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted px-4 py-3">
                <span>📋</span>
                <span>작성 방법과 템플릿은 온보딩 시 별도로 안내드릴 예정입니다.</span>
              </li>
            </ul>
          </section>

          {/* 개발 환경 세팅 가이드 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              ⚙️ 개발 환경 세팅 가이드
            </h2>
            <p className="text-sm text-foreground/60 mb-3">
              아래 기본 항목을 설치하고, 필요시 개인 환경에 맞게 추가 설정해주세요.
            </p>
            <ol className="list-decimal ml-5 space-y-1.5">
              <li>
                <span className="font-medium">Homebrew</span>
              </li>
              <li>
                <span className="font-medium">Git</span>
              </li>
              <li>
                <span className="font-medium">Node.js</span>
              </li>
              <li>
                <span className="font-medium">nvm / npm</span>
              </li>
              <li>
                <span className="font-medium">pnpm</span>
              </li>
              <li>
                <span className="font-medium">VSCode / Cursor</span>
              </li>
              <li>
                <span className="font-medium">AI 툴 자유롭게 사용 (Claude, ChatGPT 등)</span>
              </li>
            </ol>
            <p className="text-sm text-foreground/60 mt-3">
              💡 세팅 중 막히는 부분이 있다면, 팀원에게 바로 물어보세요!
            </p>
          </section>

          {/* 브랜치 전략 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              🌿 브랜치 전략
            </h2>
            <p className="text-sm text-foreground/60 mb-3">
              프론트엔드 개발은 환경별 브랜치로 분리되어 운영됩니다. 작업 시 반드시 아래 절차를
              따라주세요.
            </p>

            <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              🪴 브랜치 구조
            </h3>
            <table className="w-full text-sm rounded-lg overflow-hidden border border-border mb-4">
              <thead>
                <tr className="bg-muted text-muted-foreground">
                  <th className="px-4 py-2.5 text-left font-medium">구분</th>
                  <th className="px-4 py-2.5 text-left font-medium">브랜치명</th>
                  <th className="px-4 py-2.5 text-left font-medium">병합 진행</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <tr className="border-t border-border">
                  <td className="px-4 py-2.5 font-medium">개발</td>
                  <td className="px-4 py-2.5 font-mono text-xs">dev</td>
                  <td className="px-4 py-2.5">작업 브랜치 → dev</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-2.5 font-medium">스테이징</td>
                  <td className="px-4 py-2.5 font-mono text-xs">stg</td>
                  <td className="px-4 py-2.5">작업 브랜치 → stg</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-2.5 font-medium">운영</td>
                  <td className="px-4 py-2.5 font-mono text-xs">prod</td>
                  <td className="px-4 py-2.5">작업 브랜치 → prod</td>
                </tr>
              </tbody>
            </table>

            <div className="flex items-start gap-2 rounded-lg bg-muted px-4 py-3">
              <span>
                <span className="font-medium">Merge 시 자동 배포 진행</span> —{" "}
                <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">dev</code>,{" "}
                <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">stg</code>,{" "}
                <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">prod</code>{" "}
                Merge 시 바로 Vercel 자동 빌드 및 배포
              </span>
            </div>
          </section>

          {/* 배포 관련 안내 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              🚀 배포 관련 안내
            </h2>
            <Card className="mb-4 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
              <CardContent className="text-sm text-amber-700 dark:text-amber-300">
                <p>💡 작업 브랜치를 push 하면 자동으로 Vercel에서 미리보기 배포가 생성됩니다.</p>
                <p className="mt-1">
                  ✅ <span className="font-medium">dev, stg</span> 브랜치에 PR이 merge되면 자동으로
                  빌드 및 배포됩니다.
                </p>
                <p className="mt-1">
                  ⚠️ <span className="font-medium">prod</span> 브랜치는 PR 생성 후 1인 이상 승인자가
                  있어야만 Merge를 허용해두었습니다.
                </p>
              </CardContent>
            </Card>
            <p className="text-sm text-foreground/60">
              💡 서비스마다 브랜치 전략 방식이 다를 수 있습니다!
            </p>
          </section>

          {/* 배포 방식 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              🚀 배포 방식
            </h2>
            <p className="text-sm text-foreground/60 mb-3">
              아래는 팝테일(poptale.ai) 도메인 기준 예시입니다.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 rounded-lg bg-muted px-4 py-3">
                <span>🔧</span>
                <span>
                  <span className="font-medium">Vercel</span>을 통한 자동 배포 파이프라인 사용
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted px-4 py-3">
                <span>🟢</span>
                <span>
                  <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                    prod
                  </code>{" "}
                  브랜치 merge 시 https://poptale.ai 배포
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted px-4 py-3">
                <span>🔵</span>
                <span>
                  <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">dev</code>{" "}
                  브랜치 merge 시 https://dev.poptale.ai 배포
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted px-4 py-3">
                <span>🟡</span>
                <span>
                  <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">stg</code>{" "}
                  브랜치 merge 시 https://stg.poptale.ai 배포
                </span>
              </li>
            </ul>
          </section>

          {/* 배포 제한 시간 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              📛 배포 제한 시간
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 rounded-lg bg-muted px-4 py-3">
                <span>⏰</span>
                <span>
                  <span className="font-medium">정규 배포 시간 : 10:00 - 11:00</span>
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted px-4 py-3">
                <span>🚫</span>
                <span>
                  <span className="font-medium">평일 오후 12시 이후 배포 금지</span>
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted px-4 py-3">
                <span>🙏</span>
                <span>
                  <span className="font-medium">금요일 배포는 최대한 지양</span> — 우리의 주말은
                  소중하니까!
                </span>
              </li>
            </ul>
          </section>

          {/* 팀 문화 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              🌈 팀 문화
            </h2>
            <div className="space-y-3">
              <div className="rounded-lg bg-muted px-4 py-3">
                <p className="font-medium mb-2">투명한 소통</p>
                <ul className="ml-4 text-sm text-foreground/60 space-y-1">
                  <li>이슈, 진행 상황, 아이디어는 주저하지 말고 공유해주세요</li>
                  <li>새로운 라이브러리, 유용한 팁, 문제 해결 경험 공유</li>
                  <li>슬랙 단체방 활용 권장</li>
                </ul>
              </div>
              <div className="rounded-lg bg-muted px-4 py-3">
                <p className="font-medium mb-2">문서화 습관</p>
                <ul className="ml-4 text-sm text-foreground/60 space-y-1">
                  <li>코드뿐 아니라 과정, 회의, 결정 사항도 문서화 혹은 공유해주세요</li>
                  <li>후임/타팀에게도 도움이 되는 자료 작성</li>
                </ul>
              </div>
              <div className="rounded-lg bg-muted px-4 py-3">
                <p className="font-medium mb-2">작은 개선도 환영. 리팩토링 좋아요!</p>
                <ul className="ml-4 text-sm text-foreground/60 space-y-1">
                  <li>불필요한 스타일 제거, 작은 UI 개선 등도 PR로 자유롭게 올려주세요.</li>
                </ul>
              </div>
              <div className="rounded-lg bg-muted px-4 py-3">
                <p className="font-medium mb-2">AI 활용 적극 권장</p>
                <ul className="ml-4 text-sm text-foreground/60 space-y-1">
                  <li>반복되는 작업, 리팩토링, 문서화 등 자유롭게 활용</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
