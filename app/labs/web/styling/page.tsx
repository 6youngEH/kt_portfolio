import WebTopicPage from "../WebTopicPage";

const sections = [
  {
    title: "Tailwind CSS",
    points: [
      "Tailwind는 className에 유틸리티 클래스를 조합해서 스타일을 적용합니다.",
      "bg-white, text-slate-700, p-4, rounded-lg 같은 클래스가 각각 하나의 CSS 역할을 합니다.",
      "CSS 파일을 계속 늘리지 않고 JSX 안에서 스타일 의도를 바로 볼 수 있습니다.",
      "반복되는 스타일은 컴포넌트로 분리해서 관리합니다.",
    ],
  },
  {
    title: "레이아웃",
    points: [
      "flex는 한 방향 정렬에 강하고, grid는 행과 열을 가진 배치에 강합니다.",
      "gap은 요소 사이 간격을 안정적으로 만들 때 사용합니다.",
      "max-w와 mx-auto는 콘텐츠 폭을 제한하고 가운데 정렬할 때 자주 사용합니다.",
      "min-h-screen은 화면 높이만큼 페이지 영역을 확보합니다.",
    ],
  },
  {
    title: "간격",
    points: [
      "p는 padding, m은 margin입니다.",
      "mt-6은 위쪽 바깥 간격, px-6은 좌우 안쪽 간격입니다.",
      "space-y는 자식 요소 사이의 세로 간격을 만들 때 유용합니다.",
      "간격 규칙을 일정하게 유지하면 화면이 정돈돼 보입니다.",
    ],
  },
  {
    title: "색상과 강조",
    points: [
      "본문은 text-slate-700처럼 낮은 대비를 쓰고, 제목은 text-slate-950처럼 강하게 둡니다.",
      "강조 색상은 링크, step, hover 상태처럼 의미 있는 곳에 제한적으로 사용합니다.",
      "너무 많은 색을 쓰면 정보 구조가 흐려집니다.",
      "배경, 테두리, 텍스트 색의 역할을 구분하면 읽기 쉬운 화면이 됩니다.",
    ],
  },
  {
    title: "반응형",
    points: [
      "sm:, md:, lg: 같은 prefix를 사용해 화면 크기별 스타일을 적용합니다.",
      "모바일에서는 1열, 데스크톱에서는 2~3열로 바꾸는 패턴이 자주 쓰입니다.",
      "긴 코드는 overflow-x-auto를 사용해 모바일에서 레이아웃이 깨지지 않게 합니다.",
      "텍스트가 카드 밖으로 넘치지 않는지 항상 확인합니다.",
    ],
  },
  {
    title: "UI 점검 기준",
    points: [
      "제목, 설명, 액션의 우선순위가 눈에 보여야 합니다.",
      "같은 역할의 요소는 같은 스타일을 사용합니다.",
      "hover 상태는 클릭 가능한 요소에만 명확히 줍니다.",
      "모바일과 데스크톱에서 모두 읽기 쉬운지 확인합니다.",
    ],
  },
];

const visual = (
  <div className="grid gap-4 md:grid-cols-3">
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm font-semibold text-teal-700">Card</p>
      <h3 className="mt-2 font-semibold text-slate-950">제목</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">간격, 색상, 테두리로 정보 구조를 만듭니다.</p>
    </div>
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <p className="font-mono text-sm text-slate-700">grid gap-4</p>
      <p className="mt-2 font-mono text-sm text-slate-700">md:grid-cols-3</p>
      <p className="mt-2 font-mono text-sm text-slate-700">rounded-lg border</p>
    </div>
    <div className="rounded-lg bg-teal-50 p-4">
      <h3 className="font-semibold text-slate-950">핵심</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">스타일은 예쁘게 꾸미는 것보다 정보를 읽기 쉽게 만드는 작업입니다.</p>
    </div>
  </div>
);

const codeBlocks = [
  {
    title: "반응형 카드 그리드",
    code: `<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {items.map((item) => (
    <section key={item.title} className="rounded-lg border p-4">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </section>
  ))}
</div>`,
    description: "모바일에서는 1열, 중간 화면에서는 2열, 큰 화면에서는 3열로 바뀌는 기본 패턴입니다.",
  },
];

export default function StylingPage() {
  return (
    <WebTopicPage
      step="05"
      title="Styling / Responsive UI"
      description="스타일링은 화면을 꾸미는 작업이 아니라 정보를 읽기 쉬운 구조로 만드는 작업입니다. Tailwind CSS를 사용하면 레이아웃, 간격, 색상, 반응형 처리를 빠르게 조합할 수 있습니다."
      summary={[
        "Tailwind는 className으로 작은 CSS 규칙을 조합합니다.",
        "flex, grid, gap, max-w는 레이아웃의 기본 도구입니다.",
        "반응형 UI는 모바일에서 먼저 읽히고, 큰 화면에서 확장되게 만듭니다.",
      ]}
      visual={visual}
      sections={sections}
      codeBlocks={codeBlocks}
      previousHref="/labs/web/components"
      previousLabel="Component / Props"
      nextHref="/labs/web/forms-state"
      nextLabel="Form / State"
    />
  );
}
