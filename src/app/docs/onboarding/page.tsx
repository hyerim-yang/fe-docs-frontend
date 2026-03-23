import Link from "next/link";

export default function OnboardingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 pt-16 pb-20">
      <article className="w-full max-w-[720px]">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8"
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

        <h1 className="text-3xl font-semibold text-gray-900 mb-3">신규입사자 온보딩 가이드</h1>
        <p className="text-sm text-gray-400 mb-4">작성자 : 양혜림</p>

        <div className="rounded-xl bg-blue-50 px-5 py-4 mb-12 text-sm text-blue-700">
          👻 아래 있는 내용 외에 궁금한 점이 생기면 언제든 질문해주세요~!
        </div>

        <div className="space-y-14 text-[15px] leading-relaxed text-gray-700">
          {/* 인사팀 확인 요청 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              👇 인사팀 확인 요청
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 rounded-lg bg-gray-50 px-4 py-3">
                <span>🖐️</span>
                <span>출입 지문 등록하기</span>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-gray-50 px-4 py-3">
                <span>🎁</span>
                <span>
                  웰컴 키트 받기 <span className="text-gray-400">(사내 커피 쿠폰 3만 포인트)</span>
                </span>
              </li>
            </ul>
          </section>

          {/* 회사 생활 안내 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              👇 회사 생활 안내
            </h2>
            <div className="space-y-2">
              <div className="rounded-lg bg-gray-50 px-4 py-3">
                <p className="font-medium mb-2">🏢 아이피아 건물 안내</p>
                <ul className="ml-6 space-y-1 text-sm text-gray-500">
                  <li>📍 화장실 위치 — 여자: 2층 / 남자: 4층</li>
                  <li>📍 B2 회의실 / 4F 회의실</li>
                  <li>📍 B1 사내 카페</li>
                </ul>
              </div>
              <div className="flex items-start gap-2 rounded-lg bg-gray-50 px-4 py-3">
                <span>👋</span>
                <span>다른 팀원분들과 인사 나누기</span>
              </div>
              <div className="flex items-start gap-2 rounded-lg bg-gray-50 px-4 py-3">
                <span>💺</span>
                <span>고정 자리 안내</span>
              </div>
              <div className="flex items-start gap-2 rounded-lg bg-gray-50 px-4 py-3">
                <span>🗑️</span>
                <span>회사 쓰레기통 위치 안내</span>
              </div>
              <div className="flex items-start gap-2 rounded-lg bg-gray-50 px-4 py-3">
                <span>💻</span>
                <span>노트북 지급 (+ 멀티 허브)</span>
              </div>
            </div>
          </section>

          {/* 유연근무제 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              ⏰ 유연근무제
            </h2>
            <p className="text-sm text-gray-500 mb-3">
              결정 후, 팀원분들과 경영지원본부 채용 담당자님께 공유드리면 됩니다.
            </p>
            <table className="w-full text-sm rounded-lg overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-gray-50 text-gray-500">
                  <th className="px-4 py-2.5 text-left font-medium">출근</th>
                  <th className="px-4 py-2.5 text-left font-medium">퇴근</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5">8:30</td>
                  <td className="px-4 py-2.5">17:30</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5">9:30</td>
                  <td className="px-4 py-2.5">18:30</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5">10:00</td>
                  <td className="px-4 py-2.5">19:00</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-3">
              🍽️ 점심시간은 <span className="font-medium text-gray-700">12:30 - 13:30</span> 입니다.
            </p>
          </section>

          {/* Wifi & IP */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              🌐 네트워크 설정
            </h2>
            <div className="space-y-2">
              <div className="rounded-lg bg-gray-50 px-4 py-3">
                <p className="font-medium mb-1">📶 층별 Wifi 암호 안내</p>
                <p className="text-sm text-gray-500">입사 시 별도 안내 예정</p>
              </div>
              <div className="rounded-lg bg-gray-50 px-4 py-3">
                <p className="font-medium mb-1">🖥️ IP 셋팅</p>
                <ul className="ml-4 text-sm text-gray-500 space-y-1 mt-1">
                  <li>
                    신규 고정 IP 필요 시 →{" "}
                    <span className="text-gray-700 font-medium">서현석 과장님</span> 문의
                  </li>
                  <li>
                    그 외 네트워크 관련 →{" "}
                    <span className="text-gray-700 font-medium">이민구 과장님</span> 문의
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 층별 복합기 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              🖨️ 층별 복합기 정보
            </h2>
            <table className="w-full text-sm rounded-lg overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-gray-50 text-gray-500">
                  <th className="px-4 py-2.5 text-left font-medium">층</th>
                  <th className="px-4 py-2.5 text-left font-medium">모델명</th>
                  <th className="px-4 py-2.5 text-left font-medium">IP</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5">B2F</td>
                  <td className="px-4 py-2.5">Kyocera Taskalfa 3212i</td>
                  <td className="px-4 py-2.5 font-mono text-xs">192.168.1.210</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5">1F</td>
                  <td className="px-4 py-2.5">Kyocera Taskalfa VFM251ci</td>
                  <td className="px-4 py-2.5 font-mono text-xs">-</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 사용 툴 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              🛠️ 사용 툴 안내
            </h2>
            <table className="w-full text-sm rounded-lg overflow-hidden border border-gray-100">
              <thead>
                <tr className="bg-gray-50 text-gray-500">
                  <th className="px-4 py-2.5 text-left font-medium">툴</th>
                  <th className="px-4 py-2.5 text-left font-medium">용도</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5 font-medium">Teams</td>
                  <td className="px-4 py-2.5 text-gray-500">
                    회사 내 모든 공식 행정 업무 처리 기본 시스템
                  </td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5 font-medium">Slack</td>
                  <td className="px-4 py-2.5 text-gray-500">아이피아 개발팀 전용 메신저</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5 font-medium">Outlook</td>
                  <td className="px-4 py-2.5 text-gray-500">사내 공식 이메일 시스템</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5 font-medium">Vercel</td>
                  <td className="px-4 py-2.5 text-gray-500">
                    프론트엔드 배포 플랫폼 (자동 배포, Preview URL, GitHub 연동)
                  </td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5 font-medium">GitHub</td>
                  <td className="px-4 py-2.5 text-gray-500">코드 버전 관리 및 협업 (aipia-team)</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5 font-medium">Jira</td>
                  <td className="px-4 py-2.5 text-gray-500">프로젝트 및 이슈(업무) 관리</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5 font-medium">Loop</td>
                  <td className="px-4 py-2.5 text-gray-500">아이피아 전체 협업 문서</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 커피콘 앱 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              ☕ 커피콘 앱 (사내 카페)
            </h2>
            <ol className="list-decimal ml-5 space-y-1.5">
              <li>커피콘 앱 설치</li>
              <li>회원가입 + 로그인</li>
              <li>
                매장 코드 입력 →{" "}
                <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono">000081</code>
              </li>
              <li>사원번호 입력 후, 스마트오더 주문 시 할인 적용</li>
            </ol>
          </section>

          {/* 팝테일 테스트 앱 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              📱 팝테일 테스트 앱 설치
            </h2>
            <p>
              앱 개발자 <span className="font-medium text-gray-900">상현님</span>께 요청 드리기{" "}
              <span className="text-gray-400 text-sm">(dev, stg, prod)</span>
            </p>
          </section>

          {/* 주간회의 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              📅 주간회의
            </h2>
            <div className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-700 mb-4">
              👉 상황에 따라 시간 및 날짜 변동 가능성 있습니다.
              <br />
              👉 매주 목요일에 주간보고서를 작성합니다.
            </div>
            <div className="rounded-lg bg-gray-50 px-4 py-3">
              <p className="font-medium">
                🗓️ 매주 금요일 개발자 주간회의{" "}
                <span className="text-gray-400 font-normal">(11:00)</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">각 개발 파트별 작업 및 이슈 내용 공유</p>
            </div>
          </section>

          {/* 휴가 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              🏖️ 휴가 신청 방법
            </h2>
            <table className="w-full text-sm rounded-lg overflow-hidden border border-gray-100 mb-4">
              <tbody className="text-gray-700">
                <tr className="bg-gray-50">
                  <td className="px-4 py-2.5 font-medium text-gray-500 w-24">제목</td>
                  <td className="px-4 py-2.5">휴가 신청 합니다.</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5 font-medium text-gray-500">내용</td>
                  <td className="px-4 py-2.5">개인 사유 or 휴가 사유 설명</td>
                </tr>
              </tbody>
            </table>
            <div className="space-y-2">
              <div className="rounded-lg bg-gray-50 px-4 py-3">
                <p className="font-medium mb-2">날짜 유형</p>
                <ul className="text-sm text-gray-500 space-y-1.5">
                  <li>
                    <span className="inline-block w-16 font-medium text-gray-700">연차</span> 종일
                  </li>
                  <li>
                    <span className="inline-block w-16 font-medium text-gray-700">반차</span>{" "}
                    오전반차 / 오후반차
                  </li>
                  <li className="ml-16 text-xs text-gray-400">
                    예) 9:30 출근 + 오전반차 → 13:30 출근
                  </li>
                  <li className="ml-16 text-xs text-gray-400">
                    예) 8:30 출근 + 오후반차 → 12:30 퇴근
                  </li>
                  <li>
                    <span className="inline-block w-16 font-medium text-gray-700">반반차</span>{" "}
                    2시간 반차
                  </li>
                  <li className="ml-16 text-xs text-gray-400">
                    예) 8:30 출근 + 오전반반차 → 10:30 출근
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 패밀리데이 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              👨‍👩‍👧‍👦 패밀리데이
            </h2>
            <div className="rounded-lg bg-gray-50 px-4 py-3">
              <p>매월 마지막 주 금요일 조기 퇴근</p>
              <p className="text-sm text-gray-500 mt-1">
                시간 고정: <span className="font-medium text-gray-700">9:30 출근 → 15:00 퇴근</span>
              </p>
            </div>
          </section>

          {/* 급여 & 연봉 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              💰 급여 및 연봉
            </h2>
            <table className="w-full text-sm rounded-lg overflow-hidden border border-gray-100">
              <tbody className="text-gray-700">
                <tr className="bg-gray-50">
                  <td className="px-4 py-2.5 font-medium text-gray-500 w-28">급여일</td>
                  <td className="px-4 py-2.5">매월 10일</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-2.5 font-medium text-gray-500">연봉 협상</td>
                  <td className="px-4 py-2.5">6개월 이상 근무자 대상 · 매년 4월 진행</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mt-2">
              😅 연봉 협상 관련 내용은 100% 확실하진 않으며, 알게 되는 대로 업데이트 예정입니다.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
