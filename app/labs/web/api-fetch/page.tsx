import WebTopicPage from "../WebTopicPage";

const sections = [
  {
    title: "API",
    points: [
      "API는 프론트엔드와 백엔드가 데이터를 주고받는 약속입니다.",
      "프론트엔드는 API에 요청을 보내고, 백엔드는 JSON 같은 응답을 돌려줍니다.",
      "URL, HTTP 메서드, 요청 헤더, 요청 본문, 응답 형식을 함께 봐야 합니다.",
      "API 연동은 화면과 서버를 연결하는 핵심 구간입니다.",
    ],
  },
  {
    title: "fetch",
    points: [
      "fetch는 브라우저에서 HTTP 요청을 보내는 기본 함수입니다.",
      "GET 요청은 데이터를 조회할 때 사용하고, POST 요청은 데이터를 생성하거나 제출할 때 사용합니다.",
      "응답 본문이 JSON이면 response.json()으로 JavaScript 객체로 바꿉니다.",
      "fetch 자체가 성공해도 HTTP 상태 코드가 500일 수 있으므로 response.ok를 확인합니다.",
    ],
  },
  {
    title: "요청 상태",
    points: [
      "API 요청은 로딩, 성공, 실패 상태로 나눠서 화면에 표현합니다.",
      "로딩 중에는 버튼 비활성화나 스켈레톤 UI를 보여줄 수 있습니다.",
      "성공하면 데이터를 화면에 표시하거나 폼을 초기화합니다.",
      "실패하면 사용자가 이해할 수 있는 에러 메시지를 보여줍니다.",
    ],
  },
  {
    title: "CORS",
    points: [
      "CORS는 브라우저가 다른 출처의 API 요청을 제한하는 보안 정책입니다.",
      "프론트와 백엔드의 도메인, 프로토콜, 포트가 다르면 다른 출처로 판단될 수 있습니다.",
      "CORS 에러는 브라우저 콘솔과 Network 탭에서 확인합니다.",
      "해결은 보통 백엔드에서 허용 origin, method, header를 설정하는 방식입니다.",
    ],
  },
  {
    title: "환경 변수",
    points: [
      "API 서버 주소는 환경마다 달라질 수 있습니다.",
      "개발, 테스트, 운영 주소를 코드에 직접 박아두면 관리가 어려워집니다.",
      "Next.js에서 브라우저에 노출할 환경 변수는 NEXT_PUBLIC_ prefix가 필요합니다.",
      "비밀 키는 절대 클라이언트 코드에 노출하면 안 됩니다.",
    ],
  },
  {
    title: "디버깅",
    points: [
      "Network 탭에서 요청 URL, 메서드, 상태 코드, 응답 본문을 확인합니다.",
      "요청 payload가 서버가 기대한 형식인지 확인합니다.",
      "401, 403은 인증과 권한을 먼저 보고, 500은 서버 로그를 봅니다.",
      "프론트 에러와 백엔드 로그의 시간을 맞춰 같은 요청을 추적합니다.",
    ],
  },
];

const visual = (
  <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4">
    <div className="grid min-w-[760px] grid-cols-[1fr_36px_1fr_36px_1fr_36px_1fr] items-center text-center">
      {[
        ["Component", "버튼 클릭"],
        ["fetch", "HTTP 요청"],
        ["API Server", "JSON 응답"],
        ["UI State", "화면 갱신"],
      ].map(([title, detail], index) => (
        <div key={title} className="contents">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-slate-950">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{detail}</p>
          </div>
          {index < 3 ? <div className="font-mono text-xl text-teal-700">-&gt;</div> : null}
        </div>
      ))}
    </div>
  </div>
);

const codeBlocks = [
  {
    title: "GET 요청",
    code: `async function getLabs() {
  const response = await fetch("/api/labs");

  if (!response.ok) {
    throw new Error("API 요청 실패");
  }

  return response.json();
}`,
    description: "response.ok를 확인하면 404나 500 같은 실패 상태를 직접 처리할 수 있습니다.",
  },
  {
    title: "POST 요청",
    code: `await fetch("/api/labs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Web Lab",
  }),
});`,
    description: "JSON을 보낼 때는 Content-Type 헤더와 JSON.stringify가 필요합니다.",
  },
];

export default function ApiFetchPage() {
  return (
    <WebTopicPage
      step="07"
      title="API / Fetch"
      description="웹 앱은 API를 통해 서버와 데이터를 주고받습니다. API 연동은 요청 형식, 응답 상태, 로딩, 에러 처리를 함께 설계해야 안정적으로 동작합니다."
      summary={[
        "API는 프론트와 백엔드가 데이터를 주고받는 약속입니다.",
        "fetch 요청은 성공, 실패, 로딩 상태를 모두 화면에 반영해야 합니다.",
        "Network 탭에서 요청과 응답을 확인하는 습관이 중요합니다.",
      ]}
      visual={visual}
      sections={sections}
      codeBlocks={codeBlocks}
      previousHref="/labs/web/forms-state"
      previousLabel="Form / State"
    />
  );
}
