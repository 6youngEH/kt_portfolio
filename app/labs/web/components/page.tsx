import WebTopicPage from "../WebTopicPage";

const sections = [
  {
    title: "컴포넌트",
    points: [
      "컴포넌트는 UI를 작게 나눈 재사용 단위입니다.",
      "버튼, 카드, 목록, 페이지 섹션처럼 반복되거나 의미가 있는 UI를 컴포넌트로 분리합니다.",
      "컴포넌트를 잘 나누면 같은 스타일과 구조를 여러 곳에서 재사용할 수 있습니다.",
      "너무 작게 쪼개면 오히려 읽기 어려우므로 반복과 의미가 있을 때 분리합니다.",
    ],
  },
  {
    title: "Props",
    points: [
      "props는 부모 컴포넌트가 자식 컴포넌트에 전달하는 데이터입니다.",
      "카드 제목, 설명, 링크처럼 바뀌는 값을 props로 받으면 같은 컴포넌트를 여러 데이터에 사용할 수 있습니다.",
      "TypeScript에서는 props 타입을 정의해 어떤 값이 필요한지 명확히 합니다.",
      "props는 자식에서 직접 수정하지 않고 전달받아 표시하는 값으로 생각합니다.",
    ],
  },
  {
    title: "목록 렌더링",
    points: [
      "배열 데이터를 map으로 돌려 여러 컴포넌트를 렌더링합니다.",
      "목록에는 key가 필요하고, 가능하면 변하지 않는 고유 값을 사용합니다.",
      "현재 labs 목차도 배열 데이터를 map으로 렌더링하는 구조입니다.",
      "데이터와 UI 구조를 분리하면 항목을 추가하기 쉬워집니다.",
    ],
  },
  {
    title: "Server Component",
    points: [
      "Next.js App Router에서는 기본적으로 서버 컴포넌트입니다.",
      "서버 컴포넌트는 브라우저 이벤트 핸들러나 useState를 직접 사용할 수 없습니다.",
      "정적인 문서, 데이터 조회, 페이지 구성에는 서버 컴포넌트가 잘 맞습니다.",
      "클라이언트 상호작용이 필요한 부분만 Client Component로 분리하는 것이 좋습니다.",
    ],
  },
  {
    title: "Client Component",
    points: [
      "useState, useEffect, onClick 같은 브라우저 상호작용이 필요하면 파일 상단에 use client를 사용합니다.",
      "폼 입력, 모달, 탭, 토글처럼 사용자 조작이 필요한 UI에 사용합니다.",
      "모든 파일을 Client Component로 만들 필요는 없습니다.",
      "클라이언트 컴포넌트는 브라우저로 전달되는 JavaScript가 늘어날 수 있습니다.",
    ],
  },
  {
    title: "분리 기준",
    points: [
      "반복되는 UI는 컴포넌트로 분리합니다.",
      "한 화면 안에서 의미가 명확한 영역은 섹션 컴포넌트로 분리할 수 있습니다.",
      "여러 페이지에서 공유되는 UI는 공통 컴포넌트로 분리합니다.",
      "한 번만 쓰이고 짧은 UI는 굳이 분리하지 않아도 됩니다.",
    ],
  },
];

const visual = (
  <div className="grid gap-4 md:grid-cols-3">
    {[
      ["Page", "전체 화면"],
      ["Section", "의미 있는 영역"],
      ["Card", "반복 가능한 UI"],
    ].map(([title, detail]) => (
      <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
        <h3 className="font-semibold text-slate-950">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{detail}</p>
      </div>
    ))}
  </div>
);

const codeBlocks = [
  {
    title: "Props를 받는 카드 컴포넌트",
    code: `type LabCardProps = {
  title: string;
  description: string;
};

function LabCard({ title, description }: LabCardProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}`,
    description: "바뀌는 값만 props로 받으면 같은 UI 구조를 여러 데이터에 재사용할 수 있습니다.",
  },
  {
    title: "배열 렌더링",
    code: `{labs.map((lab) => (
  <LabCard
    key={lab.title}
    title={lab.title}
    description={lab.description}
  />
))}`,
    description: "map을 사용하면 데이터 배열을 반복 UI로 자연스럽게 바꿀 수 있습니다.",
  },
];

export default function ComponentsPage() {
  return (
    <WebTopicPage
      step="04"
      title="Component / Props"
      description="React UI는 컴포넌트 단위로 구성합니다. 컴포넌트와 props를 이해하면 페이지를 복사해서 늘리는 대신 데이터와 구조를 분리할 수 있습니다."
      summary={[
        "컴포넌트는 UI를 나누는 재사용 단위입니다.",
        "props는 부모가 자식에게 전달하는 데이터입니다.",
        "반복되는 UI는 배열과 map으로 렌더링합니다.",
      ]}
      visual={visual}
      sections={sections}
      codeBlocks={codeBlocks}
      previousHref="/labs/web/next-routing"
      previousLabel="Next.js Routing"
      nextHref="/labs/web/styling"
      nextLabel="Styling / Responsive UI"
    />
  );
}
