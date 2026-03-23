"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

const meta = {
  title: "프론트엔드팀 업무 플로우",
  author: "양혜림",
  createdAt: "2026-03-23",
  updatedAt: "2026-03-23",
};

function ToggleSection({
  number,
  title,
  emoji,
  defaultOpen = false,
  children,
}: {
  number: number;
  title: string;
  emoji: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="w-full cursor-pointer">
        <div className="flex items-center gap-3 rounded-lg bg-muted px-5 py-4 transition-colors hover:bg-muted/80">
          <svg
            className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-90" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          <span className="text-lg font-semibold text-foreground">
            {emoji} {number}. {title}
          </span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="px-5 pt-4 pb-2">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-0.5 text-muted-foreground">☐</span>
      <span>{children}</span>
    </li>
  );
}

export default function FeWorkflowPage() {
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
            🔄 프론트엔드 팀의 업무 플로우를 단계별로 정리한 가이드입니다.
            <br />각 단계를 클릭하여 상세 내용을 확인하세요.
          </CardContent>
        </Card>

        <div className="space-y-3 text-[15px] leading-relaxed text-foreground">
          {/* 1. 지라 할당 */}
          <ToggleSection number={1} title="지라 할당" emoji="📋" defaultOpen>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3">
                <span>📌</span>
                <span>업무 요청에 따라 기획 지라 발생됨</span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3">
                <span>👤</span>
                <span>
                  <span className="font-medium">담당자</span> : 나에게 할당
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3">
                <span>🔄</span>
                <span>
                  <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                    해야 할 일
                  </code>{" "}
                  로 되어있다면 →{" "}
                  <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                    프론트 진행중
                  </code>{" "}
                  으로 변경
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3">
                <span>🏃</span>
                <span>
                  <span className="font-medium">Sprint</span> : 관련 스프린트 설정
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3">
                <span>📅</span>
                <span>
                  <span className="font-medium">일정</span> : 디자인 완료 되고, 일정 협의가 됐다면
                  기한 날짜 추가하여 일정 설정
                </span>
              </li>
            </ul>
          </ToggleSection>

          {/* 2. 기획 검토 */}
          <ToggleSection number={2} title="기획 검토" emoji="🔍">
            <Card className="mb-4 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
              <CardContent className="text-sm text-amber-700 dark:text-amber-300">
                작업 전 확인해야 할 모~든 것들을 검토해봐야합니다.
              </CardContent>
            </Card>
            <ul className="space-y-2">
              <CheckItem>기획서 내용 확인</CheckItem>
              <CheckItem>
                작업 영역이 어디 서비스 어느 페이지까지 적용되고 노출되고 있는지 확인
              </CheckItem>
              <CheckItem>사이드 이펙트 날 수 있는 부분 있을지 파악 필요</CheckItem>
              <CheckItem>
                <div>
                  <p>UI 서비스 영역 확인</p>
                  <ul className="ml-5 mt-1 space-y-1 text-sm text-foreground/60">
                    <li>
                      • 같은 영역을 작업중인 지라가 있는데 배포 일정이 겹칠 수 있는 문제라던가?
                    </li>
                    <li>• 이전 동일한 영역 작업은 어떻게 진행되었는가?</li>
                  </ul>
                </div>
              </CheckItem>
              <CheckItem>이전 지라 및 문서 히스토리 확인</CheckItem>
              <CheckItem>
                스태틱리소스(css, img)가 어디까지 같이 묶여서 사용되고 있는지 확인
              </CheckItem>
              <CheckItem>
                <div>
                  <p>단순 이미지 삭제라도 확인해보기</p>
                  <ul className="ml-5 mt-1 space-y-1 text-sm text-foreground/60">
                    <li>• 그 이미지가 어디어디에 쓰이고 있는지 확인해봐야한다.</li>
                    <li className="ml-4">→ 그럼 그 이미지를 쓰던 이벤트는?</li>
                    <li className="ml-4">→ 디자인 및 다른 팀과 협의가 된건가?</li>
                    <li>• 확인 후, 내부에도 공유해야한다.</li>
                  </ul>
                </div>
              </CheckItem>
              <CheckItem>
                기획/디자인에 이것을 바꾸는 의도가 내가 생각한 것과 일치한지 물어보고 더 나은 방법이
                있다면 제안하기
              </CheckItem>
              <CheckItem>PC 와 모바일 코드에 엮여있는 페이지는 없는지?</CheckItem>
              <CheckItem>
                <div>
                  <p>실제 사용자 플로우 확인</p>
                  <Card className="mt-2 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
                    <CardContent className="text-sm text-blue-700 dark:text-blue-300">
                      📌 기획서에 A → B 로 라는 내용이 있다면 고것만 확인하면 안되고, 실제 사용자가
                      플로우로 어떻게 타는지 한번 봐주셔야 합니다. 기획서 이외의 UI가 어떻게 입력을
                      받고 얼만큼을 노출 시키는지도 꼭 화면을 보고 기획 검토때 리스크 체크 해주시면
                      제일 좋습니다.
                    </CardContent>
                  </Card>
                </div>
              </CheckItem>
            </ul>
            <p className="mt-3 text-sm text-foreground/60">이 외 등등..</p>
          </ToggleSection>

          {/* 3. 기획 검토 후, 일정 산출 및 작업 범위 공유 */}
          <ToggleSection number={3} title="기획 검토 후, 일정 산출 및 작업 범위 공유" emoji="📆">
            <p className="font-medium mb-3">작업 일정 정할 때 여유있게 잡아주시면 좋아요</p>
            <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
              <CardContent className="text-sm text-amber-700 dark:text-amber-300">
                🗣{" "}
                <span className="font-medium">
                  작업일 + 코드리뷰 시간 포함해서 계산한 일정으로 잡아야합니다.
                </span>
              </CardContent>
            </Card>
          </ToggleSection>

          {/* 4. 저장소 세팅 및 브랜치 생성 */}
          <ToggleSection number={4} title="저장소 세팅 및 브랜치 생성" emoji="🌿">
            {/* 저장소 세팅 */}
            <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              1️⃣ 저장소 세팅
            </h3>
            <div className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3 mb-3">
              <span>📂</span>
              <span>
                저장소:{" "}
                <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                  https://github.com/aipia-team/poptale-frontend
                </code>
              </span>
            </div>
            <ol className="list-decimal ml-5 space-y-2 mb-4">
              <li>해당 저장소에서 경로 복사</li>
              <li>터미널에서 저장소 clone</li>
              <li>
                <div>
                  <p>node, pnpm 버전 확인</p>
                  <pre className="mt-2 rounded-lg bg-zinc-900 px-4 py-3 text-sm text-zinc-100 font-mono overflow-x-auto">
                    {`"engines": {
  "node": "20.18.3",
  "pnpm": "10.5.2"
}`}
                  </pre>
                </div>
              </li>
              <li>
                <div>
                  <p>세팅</p>
                  <pre className="mt-2 rounded-lg bg-zinc-900 px-4 py-3 text-sm text-zinc-100 font-mono overflow-x-auto">
                    {`pnpm install # 패키지 모듈 설치
pnpm dev     # 로컬 환경 구동
pnpm build   # 빌드`}
                  </pre>
                </div>
              </li>
            </ol>

            <hr className="my-6 border-border" />

            {/* FE 브랜치 전략 */}
            <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              2️⃣ FE 브랜치 전략 + 브랜치 생성
            </h3>
            <Card className="mb-4 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <CardContent className="text-sm text-blue-700 dark:text-blue-300">
                중앙 원격 저장소(upstream)에서 지라 티켓 번호와 일치하는 작업브랜치로 관리합니다.
              </CardContent>
            </Card>
            <ol className="list-decimal ml-5 space-y-3">
              <li>
                <div>
                  <p>
                    <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                      prod
                    </code>
                    에서 작업브랜치 생성 (ex. SCRUM-123)
                  </p>
                  <p className="text-sm text-foreground/60 mt-1">
                    →{" "}
                    <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                      prod
                    </code>{" "}
                    브랜치 항상 최신화 상태에서 작업 진행하기
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>작업 완료 후 PR 생성</p>
                  <ul className="ml-4 mt-1 space-y-1 text-sm text-foreground/60">
                    <li>
                      •{" "}
                      <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                        SCRUM-123
                      </code>
                      {" → "}
                      <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                        dev
                      </code>
                    </li>
                    <li>
                      •{" "}
                      <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                        SCRUM-123
                      </code>
                      {" → "}
                      <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                        stg
                      </code>
                    </li>
                    <li>
                      •{" "}
                      <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                        SCRUM-123
                      </code>
                      {" → "}
                      <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                        prod
                      </code>
                    </li>
                    <li>• 각 환경별로 머지 후, 서버별 테스트 진행</li>
                  </ul>
                </div>
              </li>
              <li>
                <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">stg</code>{" "}
                환경에서 기획QA / 디자인QC 진행
              </li>
              <li>
                기획 최종 확인 됐을때만{" "}
                <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                  SCRUM-123
                </code>
                {" → "}
                <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                  prod
                </code>{" "}
                머지
              </li>
            </ol>
          </ToggleSection>

          {/* 5. 작업 진행 */}
          <ToggleSection number={5} title="작업 진행" emoji="💻">
            {/* JIRA 상태 변경 */}
            <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              1. JIRA 상태 변경 → 프론트 진행중
            </h3>
            <div className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3 mb-6">
              <span>🔄</span>
              <span>
                지라 상태를{" "}
                <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                  프론트 진행중
                </code>{" "}
                으로 변경
              </span>
            </div>

            <hr className="my-6 border-border" />

            {/* prod에서 브랜치 생성 */}
            <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              2. prod 에서 브랜치 생성
            </h3>
            <p className="font-medium mb-2">Branch</p>
            <Card className="mb-4 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <CardContent className="text-sm text-blue-700 dark:text-blue-300">
                <p>
                  작업 시작 → feature/지라번호로 브랜치 생성 → 작업 완료 → dev, stg, prod 로 풀리퀘
                </p>
                <ul className="ml-4 mt-1 space-y-0.5">
                  <li>• dev</li>
                  <li>• stg</li>
                  <li>• prod</li>
                </ul>
              </CardContent>
            </Card>
            <p className="font-medium mb-2">브랜치 생성</p>
            <Card className="mb-3 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
              <CardContent className="text-sm text-amber-700 dark:text-amber-300">
                ✔️ 꼭 pull 해줘서 잘 끌어왔는지 확인해야한다.
              </CardContent>
            </Card>
            <pre className="rounded-lg bg-zinc-900 px-4 py-3 text-sm text-zinc-100 font-mono overflow-x-auto mb-6">
              {`git checkout prod
git branch
* prod
git pull origin prod
git checkout -b feature/SCRUM-123`}
            </pre>

            <hr className="my-6 border-border" />

            {/* 작업 완료 후 commit, push */}
            <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              3. 작업 완료 후 commit, push
            </h3>
            <pre className="rounded-lg bg-zinc-900 px-4 py-3 text-sm text-zinc-100 font-mono overflow-x-auto">
              {`git add .
git commit -m "[SCRUM-000] commit message" # pnpm commit 써도됨
git push origin feature/SCRUM-0000`}
            </pre>
          </ToggleSection>

          {/* 6. PR 생성 및 코드리뷰 */}
          <ToggleSection number={6} title="PR 생성 및 코드리뷰" emoji="🔀">
            {/* PR 생성 */}
            <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              1️⃣ PR 생성
            </h3>
            <ul className="space-y-1.5 mb-3">
              <li className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3">
                <span>🤖</span>
                <span>
                  작업브랜치 →{" "}
                  <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">dev</code>
                  <span className="ml-2 text-sm text-foreground/60">
                    — CodeRabbit(AI) 자동 코드리뷰 진행
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3">
                <span>🔵</span>
                <span>
                  작업브랜치 →{" "}
                  <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">stg</code>
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3">
                <span>👀</span>
                <span>
                  작업브랜치 →{" "}
                  <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                    prod
                  </code>
                  <span className="ml-2 text-sm text-foreground/60">
                    — 팀원 코드리뷰 및 승인 후 Merge
                  </span>
                </span>
              </li>
            </ul>
            <div className="space-y-2 mb-4">
              <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
                <CardContent className="text-sm text-yellow-700 dark:text-yellow-300">
                  ⭐ <span className="font-medium">dev, stg PR Merge 는 작업자도 가능</span>
                </CardContent>
              </Card>
              <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
                <CardContent className="text-sm text-yellow-700 dark:text-yellow-300">
                  ⭐{" "}
                  <span className="font-medium">
                    prod PR 은 본인 외 리뷰자 및 승인 1명 이상 되어야만 Merge 가능
                  </span>
                </CardContent>
              </Card>
            </div>

            <hr className="my-6 border-border" />

            {/* 코드리뷰 및 승인 요청 */}
            <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              2️⃣ 코드리뷰 및 승인 요청
            </h3>
            <Card className="mb-4 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <CardContent className="text-sm text-blue-700 dark:text-blue-300">
                <code className="rounded bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 text-sm font-mono">
                  #50-프론트엔드-배포공유
                </code>{" "}
                방에 전체 멘션걸어 아래 형식을 기본으로 코드리뷰 요청합니다.
              </CardContent>
            </Card>

            <div className="mb-6 overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/code-review-example.png"
                alt="코드리뷰 요청 예시 — Slack 배포공유 채널"
                width={720}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <p className="font-medium mb-2">필수 포함 내용</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3">
                <span>📎</span>
                <span>
                  <span className="font-medium">Jira</span> — 링크 첨부
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3">
                <span>📝</span>
                <span>
                  <span className="font-medium">작업 내용</span> — 처음 보는 사람이 이해하기 쉽도록
                  간략 정리하여 공유
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3">
                <span>🔗</span>
                <span>
                  <span className="font-medium">PR</span> — prod PR 링크 첨부
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3">
                <span>💡</span>
                <span>
                  그 외 자유롭게 팀원이 이해하기 쉬운 내용으로 정리해서 공유 (작업 페이지 URL 등)
                </span>
              </li>
            </ul>
          </ToggleSection>

          {/* 7. 배포 진행 및 공유 */}
          <ToggleSection number={7} title="배포 진행 및 공유" emoji="🚀">
            {/* 배포 진행 */}
            <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              1️⃣ 배포 진행
            </h3>
            <Card className="mb-4 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <CardContent className="text-sm text-blue-700 dark:text-blue-300">
                PR 승인이 완료되고, 기획 / 디자인도 확인 모두 다~ 완료되었다면!!! 배포 진행
              </CardContent>
            </Card>

            <p className="font-medium mb-3">단 아래 규칙을 지켜주세요 👇</p>
            <Card className="mb-4 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
              <CardContent className="text-sm text-red-700 dark:text-red-300">
                <p className="font-medium mb-2">⛔ 배포 제한 시간</p>
                <ul className="space-y-1.5">
                  <li>
                    • <span className="font-medium">정규 배포 시간 : 10:00 - 11:00</span>
                  </li>
                  <li>
                    • <span className="font-medium">평일 오후 12시 이후 배포 금지</span>
                  </li>
                  <li>
                    • <span className="font-medium">퇴근 직전 배포 금지 (오후 4시 이후 금지)</span>
                  </li>
                  <li>
                    • <span className="font-medium">금요일 배포 금지</span>
                  </li>
                </ul>
                <p className="mt-3">
                  🚑 <span className="font-medium">예외 : Hotfix(긴급 이슈)</span>는 시간과 요일
                  관계없이 <span className="font-medium">즉시 배포 가능</span>
                </p>
              </CardContent>
            </Card>

            <hr className="my-6 border-border" />

            {/* 배포 공유 */}
            <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              2️⃣ 배포 공유
            </h3>

            <h4 className="text-sm font-semibold text-foreground mb-3">
              2-1. 프론트팀은{" "}
              <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                #99-frontend-automation
              </code>{" "}
              Vercel 배포알림으로 팀원 모두가 확인 가능합니다.
            </h4>
            <p className="text-sm text-foreground/60 mb-2">예시)</p>
            <div className="mb-6 overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/vercel-deploy-example.png"
                alt="Vercel 배포 알림 예시 — #99-frontend-automation 채널"
                width={720}
                height={200}
                className="w-full h-auto"
              />
            </div>

            <h4 className="text-sm font-semibold text-foreground mb-3">
              2-2. 기획/디자인/운영에는 별도로 공유 꼭 해주세요!
            </h4>
          </ToggleSection>

          {/* 8. 지라 정리 */}
          <ToggleSection number={8} title="지라 정리" emoji="✅">
            <div className="flex items-start gap-2 rounded-lg bg-muted/50 px-4 py-3 mb-4">
              <span>🔄</span>
              <span>
                지라 상태{" "}
                <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                  프론트 진행중
                </code>
                {" → "}
                <code className="rounded bg-background px-1.5 py-0.5 text-sm font-mono">
                  개발 완료
                </code>{" "}
                로 변경
              </span>
            </div>
            <p className="text-sm text-foreground/60">
              기획자분이 전체 확인 되시면 완료/배포 로 처리해주십니다.
            </p>
            <p className="mt-4 text-center text-lg font-medium">끝! 🥳</p>
          </ToggleSection>
        </div>
      </article>
    </main>
  );
}
