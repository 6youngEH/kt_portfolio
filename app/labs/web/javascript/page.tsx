import WebTopicPage from "../WebTopicPage";

const sections = [
  {
    title: "값과 변수",
    points: [
      "JavaScript는 문자열, 숫자, boolean, 배열, 객체 같은 값을 다룹니다.",
      "const는 다시 할당하지 않는 값, let은 나중에 바뀔 수 있는 값에 사용합니다.",
      "React와 Next.js 코드에서는 데이터를 변수에 담고 JSX에서 화면에 표시하는 일이 많습니다.",
      "값의 타입을 착각하면 화면 출력이나 조건문에서 버그가 생깁니다.",
    ],
  },
  {
    title: "함수",
    points: [
      "함수는 반복되는 동작을 이름 붙여 재사용하는 단위입니다.",
      "이벤트 처리, 데이터 변환, API 호출 로직을 함수로 분리합니다.",
      "컴포넌트도 넓게 보면 JSX를 반환하는 함수입니다.",
      "함수 이름은 무엇을 하는지 드러나게 짓는 것이 좋습니다.",
    ],
  },
  {
    title: "배열과 객체",
    points: [
      "배열은 여러 데이터를 순서대로 담고, 객체는 이름이 있는 속성으로 데이터를 담습니다.",
      "map은 배열을 화면 목록으로 바꿀 때 자주 사용합니다.",
      "filter는 조건에 맞는 데이터만 남길 때 사용합니다.",
      "API 응답은 대부분 객체와 배열 조합으로 오기 때문에 익숙해져야 합니다.",
    ],
  },
  {
    title: "이벤트",
    points: [
      "이벤트는 클릭, 입력, 제출처럼 사용자의 행동을 의미합니다.",
      "버튼 클릭은 onClick, 입력 변경은 onChange, 폼 제출은 onSubmit으로 처리합니다.",
      "이벤트 핸들러에서는 상태 변경, API 호출, 페이지 이동 같은 일을 수행합니다.",
      "폼 제출은 기본 새로고침 동작을 막아야 하는 경우가 많습니다.",
    ],
  },
  {
    title: "비동기",
    points: [
      "API 호출은 시간이 걸리기 때문에 비동기로 처리합니다.",
      "async와 await를 사용하면 비동기 코드를 순서대로 읽기 쉽게 작성할 수 있습니다.",
      "비동기 작업에는 로딩, 성공, 실패 상태가 필요합니다.",
      "try/catch로 실패 상황을 처리하지 않으면 사용자에게 원인을 보여주기 어렵습니다.",
    ],
  },
  {
    title: "자주 보는 에러",
    points: [
      "Cannot read properties of undefined는 없는 값을 읽으려 할 때 자주 발생합니다.",
      "map is not a function은 배열이 아닌 값에 map을 사용했을 때 발생합니다.",
      "비동기 응답이 오기 전 화면이 먼저 렌더링될 수 있다는 점을 고려해야 합니다.",
      "콘솔 에러의 파일명과 줄 번호를 먼저 확인합니다.",
    ],
  },
];

const visual = (
  <div className="grid gap-4 md:grid-cols-3">
    {[
      ["Data", "string, number, array, object"],
      ["Logic", "function, condition, loop"],
      ["UI Action", "event, async, fetch"],
    ].map(([title, detail]) => (
      <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h3 className="font-semibold text-slate-950">{title}</h3>
        <p className="mt-2 font-mono text-sm text-slate-600">{detail}</p>
      </div>
    ))}
  </div>
);

const codeBlocks = [
  {
    title: "배열을 화면 목록으로 바꾸기",
    code: `const labs = ["Linux", "Web", "Network"];

labs.map((lab) => (
  <li key={lab}>{lab}</li>
));`,
    description: "React에서 배열 데이터를 목록 UI로 만들 때 map을 가장 자주 사용합니다.",
  },
  {
    title: "비동기 API 호출",
    code: `async function loadData() {
  try {
    const response = await fetch("/api/labs");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}`,
    description: "API 호출은 실패할 수 있으므로 try/catch와 로딩/에러 상태를 함께 생각해야 합니다.",
  },
];

export default function JavascriptPage() {
  return (
    <WebTopicPage
      step="02"
      title="JavaScript 기초"
      description="JavaScript는 웹 화면의 동작을 만드는 언어입니다. React와 Next.js를 쓰더라도 값, 함수, 배열, 객체, 이벤트, 비동기 처리가 기본입니다."
      summary={[
        "React 컴포넌트도 JavaScript 함수와 데이터 흐름 위에서 동작합니다.",
        "배열과 객체를 잘 다뤄야 API 데이터를 화면에 표시할 수 있습니다.",
        "비동기 작업은 로딩, 성공, 실패 상태를 함께 설계해야 합니다.",
      ]}
      visual={visual}
      sections={sections}
      codeBlocks={codeBlocks}
      previousHref="/labs/web/browser-html-css"
      previousLabel="Browser / HTML / CSS"
      nextHref="/labs/web/next-routing"
      nextLabel="Next.js Routing"
    />
  );
}
