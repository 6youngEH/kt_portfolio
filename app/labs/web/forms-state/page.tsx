import WebTopicPage from "../WebTopicPage";

const sections = [
  {
    title: "상태",
    points: [
      "상태는 화면이 기억해야 하는 값입니다.",
      "입력값, 선택된 탭, 모달 열림 여부, 로딩 여부 같은 값이 상태가 됩니다.",
      "React에서는 useState로 상태를 만들고 상태가 바뀌면 화면이 다시 렌더링됩니다.",
      "상태가 많아질수록 어떤 값이 화면을 결정하는지 명확히 정리해야 합니다.",
    ],
  },
  {
    title: "폼",
    points: [
      "폼은 사용자의 입력을 받아 서버에 보내거나 화면 상태를 바꾸는 UI입니다.",
      "input, textarea, select, checkbox, button이 자주 사용됩니다.",
      "React에서는 입력값을 상태로 관리하는 controlled input 패턴을 많이 사용합니다.",
      "폼 제출 시 새로고침을 막고 직접 처리하려면 event.preventDefault를 사용합니다.",
    ],
  },
  {
    title: "검증",
    points: [
      "검증은 사용자가 입력한 값이 처리 가능한 값인지 확인하는 과정입니다.",
      "필수 입력, 이메일 형식, 글자 수, 숫자 범위 같은 규칙을 확인합니다.",
      "프론트 검증은 사용자 경험을 좋게 만들지만, 서버 검증도 반드시 필요합니다.",
      "에러 메시지는 어떤 값을 어떻게 고쳐야 하는지 구체적으로 보여주는 것이 좋습니다.",
    ],
  },
  {
    title: "로딩 상태",
    points: [
      "폼 제출이나 API 호출 중에는 버튼을 비활성화하거나 로딩 문구를 보여줍니다.",
      "사용자가 같은 요청을 여러 번 보내지 않도록 처리합니다.",
      "로딩 상태가 없으면 클릭이 먹히지 않는 것처럼 보일 수 있습니다.",
      "성공과 실패 후 로딩 상태를 반드시 다시 false로 바꿔야 합니다.",
    ],
  },
  {
    title: "성공과 실패",
    points: [
      "성공하면 입력값을 초기화하거나 다음 화면으로 이동할 수 있습니다.",
      "실패하면 에러 메시지를 보여주고 사용자가 다시 시도할 수 있게 합니다.",
      "서버 에러, 네트워크 에러, 검증 에러는 메시지를 다르게 다루는 것이 좋습니다.",
      "폼 처리는 입력, 검증, 제출, 로딩, 성공, 실패 흐름으로 생각합니다.",
    ],
  },
  {
    title: "Client Component",
    points: [
      "useState와 이벤트 핸들러를 쓰려면 파일 상단에 use client가 필요합니다.",
      "폼 컴포넌트만 Client Component로 만들고 나머지 페이지는 서버 컴포넌트로 둘 수 있습니다.",
      "클라이언트 컴포넌트는 브라우저에서 동작하는 JavaScript가 필요합니다.",
      "정적인 설명 페이지에는 use client가 필요하지 않습니다.",
    ],
  },
];

const visual = (
  <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4">
    <div className="grid min-w-[760px] grid-cols-[1fr_36px_1fr_36px_1fr_36px_1fr] items-center text-center">
      {[
        ["Input", "사용자 입력"],
        ["State", "값 저장"],
        ["Validate", "규칙 확인"],
        ["Submit", "API 호출"],
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
    title: "입력 상태 관리",
    code: `"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  );
}`,
    description: "input의 value를 상태와 연결하면 화면 입력값을 React 상태로 관리할 수 있습니다.",
  },
  {
    title: "폼 제출 처리",
    code: `function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  if (!name.trim()) {
    setError("이름을 입력하세요.");
    return;
  }

  // API 호출 또는 상태 변경
}`,
    description: "폼 제출에서는 기본 새로고침을 막고, 검증 후 필요한 작업을 직접 수행합니다.",
  },
];

export default function FormsStatePage() {
  return (
    <WebTopicPage
      step="06"
      title="Form / State"
      description="사용자 입력을 다루려면 상태 관리가 필요합니다. 폼은 입력, 검증, 제출, 로딩, 성공, 실패 흐름으로 나누면 훨씬 안정적으로 만들 수 있습니다."
      summary={[
        "상태는 화면이 기억해야 하는 값입니다.",
        "폼 입력값은 상태와 연결해서 관리할 수 있습니다.",
        "제출 흐름에는 검증, 로딩, 성공, 실패 처리가 필요합니다.",
      ]}
      visual={visual}
      sections={sections}
      codeBlocks={codeBlocks}
      previousHref="/labs/web/styling"
      previousLabel="Styling / Responsive UI"
      nextHref="/labs/web/api-fetch"
      nextLabel="API / Fetch"
    />
  );
}
