import WebTopicPage from "../WebTopicPage";

const sections = [
  {
    title: "App Router",
    points: [
      "Next.js App Router는 app 디렉터리 구조를 URL 경로로 사용합니다.",
      "app/page.tsx는 / 경로가 되고, app/labs/page.tsx는 /labs 경로가 됩니다.",
      "폴더를 만들고 그 안에 page.tsx를 만들면 새로운 페이지가 됩니다.",
      "현재 포트폴리오의 labs 페이지들도 이 구조로 만들어져 있습니다.",
    ],
  },
  {
    title: "page.tsx",
    points: [
      "page.tsx는 해당 URL에서 실제로 렌더링되는 페이지 컴포넌트입니다.",
      "기본 export 함수가 JSX를 반환하면 브라우저에 화면으로 표시됩니다.",
      "서버 컴포넌트가 기본이므로 클라이언트 상태나 이벤트가 필요하면 use client를 고려합니다.",
      "정적인 공부 페이지는 대부분 서버 컴포넌트로 충분합니다.",
    ],
  },
  {
    title: "layout.tsx",
    points: [
      "layout.tsx는 여러 페이지가 공유하는 공통 틀입니다.",
      "전역 폰트, 메타데이터, 공통 네비게이션을 넣을 수 있습니다.",
      "루트 layout은 전체 앱에 적용되고, 하위 폴더 layout은 해당 구간에만 적용됩니다.",
      "중복되는 페이지 구조가 많아지면 layout이나 공통 컴포넌트로 분리합니다.",
    ],
  },
  {
    title: "Link",
    points: [
      "Next.js에서는 내부 페이지 이동에 Link 컴포넌트를 사용합니다.",
      "a 태그처럼 보이지만 클라이언트 사이드 이동과 prefetch 최적화를 제공합니다.",
      "href에는 이동할 경로를 넣습니다.",
      "현재 labs 목차에서 각 세부 페이지로 이동할 때 Link를 사용합니다.",
    ],
  },
  {
    title: "동적 라우팅",
    points: [
      "[slug] 같은 폴더명을 쓰면 URL 일부를 변수처럼 받을 수 있습니다.",
      "블로그 상세 페이지나 상품 상세 페이지에서 자주 사용합니다.",
      "예를 들어 app/blog/[slug]/page.tsx는 /blog/hello 같은 경로를 처리할 수 있습니다.",
      "정해진 학습 페이지는 지금처럼 명시적인 폴더를 쓰는 편이 읽기 쉽습니다.",
    ],
  },
  {
    title: "라우팅 확인",
    points: [
      "페이지가 404라면 폴더 위치와 page.tsx 파일명을 먼저 확인합니다.",
      "Link href가 실제 경로와 일치하는지 확인합니다.",
      "개발 서버가 새 파일을 인식하지 못하면 서버 로그를 확인합니다.",
      "타입 에러나 JSX 문법 에러가 있으면 페이지가 정상 렌더링되지 않을 수 있습니다.",
    ],
  },
];

const visual = (
  <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 font-mono text-sm leading-7 text-slate-700">
      <p>app/</p>
      <p className="pl-4">page.tsx {"->"} /</p>
      <p className="pl-4">labs/</p>
      <p className="pl-8">page.tsx {"->"} /labs</p>
      <p className="pl-8">web/</p>
      <p className="pl-12">page.tsx {"->"} /labs/web</p>
      <p className="pl-12">next-routing/</p>
      <p className="pl-16">page.tsx {"->"} /labs/web/next-routing</p>
    </div>
    <div className="rounded-lg bg-teal-50 p-4">
      <h3 className="font-semibold text-slate-950">핵심</h3>
      <p className="mt-3 leading-7 text-slate-700">
        App Router에서는 폴더 구조가 URL 구조입니다. 새 페이지를 만들 때는 먼저
        어떤 URL이 될지 생각하고 폴더를 만듭니다.
      </p>
    </div>
  </div>
);

const codeBlocks = [
  {
    title: "기본 페이지",
    code: `export default function Page() {
  return <h1>Hello Next.js</h1>;
}`,
    description: "page.tsx에서 기본 export한 컴포넌트가 해당 URL의 화면이 됩니다.",
  },
  {
    title: "페이지 이동",
    code: `import Link from "next/link";

<Link href="/labs/web">Web Lab</Link>`,
    description: "내부 페이지 이동은 Link를 사용하면 Next.js 라우팅 최적화를 받을 수 있습니다.",
  },
];

export default function NextRoutingPage() {
  return (
    <WebTopicPage
      step="03"
      title="Next.js Routing"
      description="Next.js App Router는 app 폴더 구조를 기반으로 URL을 만듭니다. 이 원리를 알면 새 페이지를 만들고 연결하는 흐름이 명확해집니다."
      summary={[
        "app 폴더 안의 page.tsx가 URL 페이지가 됩니다.",
        "layout.tsx는 여러 페이지가 공유하는 공통 틀입니다.",
        "내부 이동은 Next.js Link 컴포넌트를 사용합니다.",
      ]}
      visual={visual}
      sections={sections}
      codeBlocks={codeBlocks}
      previousHref="/labs/web/javascript"
      previousLabel="JavaScript 기초"
      nextHref="/labs/web/components"
      nextLabel="Component / Props"
    />
  );
}
