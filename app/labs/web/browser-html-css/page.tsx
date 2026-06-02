import WebTopicPage from "../WebTopicPage";

const sections = [
  {
    title: "브라우저가 하는 일",
    points: [
      "브라우저는 서버에서 HTML, CSS, JavaScript 파일을 받아 화면으로 렌더링합니다.",
      "HTML을 읽어 DOM 트리를 만들고, CSS를 읽어 스타일 규칙을 계산합니다.",
      "JavaScript는 DOM을 변경하거나 사용자 이벤트에 반응하는 동작을 만듭니다.",
      "웹 페이지가 느리거나 깨질 때는 HTML 구조, CSS 로딩, JavaScript 에러를 나눠서 봅니다.",
    ],
  },
  {
    title: "HTML",
    points: [
      "HTML은 화면의 구조와 의미를 담당합니다.",
      "h1, p, section, nav, main 같은 태그는 문서의 의미를 명확히 합니다.",
      "button, input, form 같은 태그는 사용자 입력과 상호작용을 만듭니다.",
      "좋은 HTML은 CSS가 없어도 문서 구조를 이해할 수 있어야 합니다.",
    ],
  },
  {
    title: "CSS",
    points: [
      "CSS는 색상, 간격, 폰트, 레이아웃 같은 시각 표현을 담당합니다.",
      "display, flex, grid는 화면 배치를 만들 때 핵심입니다.",
      "margin은 바깥 간격, padding은 안쪽 간격입니다.",
      "반응형 UI는 화면 크기에 따라 레이아웃과 간격을 조정합니다.",
    ],
  },
  {
    title: "DOM",
    points: [
      "DOM은 브라우저가 HTML을 객체 구조로 바꾼 결과입니다.",
      "JavaScript는 DOM을 통해 화면 요소를 읽거나 변경할 수 있습니다.",
      "React와 Next.js도 결국 브라우저 DOM 위에 UI를 렌더링합니다.",
      "화면에 보이는 요소를 이해하려면 HTML 태그와 DOM 구조를 함께 봐야 합니다.",
    ],
  },
  {
    title: "개발자 도구",
    points: [
      "Elements 탭에서 HTML 구조와 적용된 CSS를 확인합니다.",
      "Console 탭에서 JavaScript 에러와 로그를 확인합니다.",
      "Network 탭에서 파일 요청, API 요청, 응답 상태 코드를 확인합니다.",
      "웹 문제를 볼 때 개발자 도구는 가장 먼저 열어야 하는 도구입니다.",
    ],
  },
  {
    title: "기본 확인 순서",
    points: [
      "HTML 구조가 의도한 대로 생성됐는지 확인합니다.",
      "CSS 클래스가 제대로 적용됐는지 확인합니다.",
      "브라우저 콘솔에 JavaScript 에러가 있는지 확인합니다.",
      "Network 탭에서 필요한 파일이나 API 요청이 실패하지 않았는지 확인합니다.",
    ],
  },
];

const visual = (
  <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
    <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4">
      <div className="grid min-w-[680px] grid-cols-[1fr_36px_1fr_36px_1fr_36px_1fr] items-center text-center">
        {[
          ["Server", "HTML/CSS/JS 전달"],
          ["Browser", "파일 해석"],
          ["DOM + CSSOM", "화면 구조 계산"],
          ["Screen", "사용자에게 표시"],
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
    <div className="rounded-lg bg-teal-50 p-4">
      <h3 className="font-semibold text-slate-950">핵심</h3>
      <p className="mt-3 leading-7 text-slate-700">
        HTML은 구조, CSS는 모양, JavaScript는 동작입니다. 이 세 가지를 나눠 보면
        화면 문제를 훨씬 쉽게 찾을 수 있습니다.
      </p>
    </div>
  </div>
);

const codeBlocks = [
  {
    title: "기본 HTML 구조",
    code: `<main>
  <h1>Web Lab</h1>
  <p>HTML은 화면의 구조를 만듭니다.</p>
  <button>확인</button>
</main>`,
    description: "의미 있는 태그를 쓰면 문서 구조가 명확해지고, 스타일과 동작을 붙이기도 쉬워집니다.",
  },
];

export default function BrowserHtmlCssPage() {
  return (
    <WebTopicPage
      step="01"
      title="Browser / HTML / CSS"
      description="웹의 시작은 브라우저가 서버에서 파일을 받아 화면으로 만드는 과정입니다. HTML, CSS, JavaScript의 역할을 먼저 나눠서 이해해야 Next.js도 자연스럽게 이어집니다."
      summary={[
        "브라우저는 HTML, CSS, JavaScript를 해석해서 화면을 만듭니다.",
        "HTML은 구조, CSS는 스타일, JavaScript는 동작을 담당합니다.",
        "개발자 도구로 구조, 스타일, 네트워크 요청, 콘솔 에러를 확인합니다.",
      ]}
      visual={visual}
      sections={sections}
      codeBlocks={codeBlocks}
      nextHref="/labs/web/javascript"
      nextLabel="JavaScript 기초"
    />
  );
}
