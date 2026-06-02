import Link from "next/link";

const chapters = [
  {
    step: "01",
    title: "Browser / HTML / CSS",
    href: "/labs/web/browser-html-css",
    description: "브라우저가 HTML, CSS, JavaScript를 받아 화면을 만드는 기본 흐름을 봅니다.",
    tags: ["Browser", "HTML", "CSS"],
  },
  {
    step: "02",
    title: "JavaScript 기초",
    href: "/labs/web/javascript",
    description: "값, 함수, 배열, 객체, 이벤트, 비동기 처리를 정리합니다.",
    tags: ["JS", "Event", "Async"],
  },
  {
    step: "03",
    title: "Next.js Routing",
    href: "/labs/web/next-routing",
    description: "app 디렉터리, page.tsx, layout.tsx, Link 이동 방식을 익힙니다.",
    tags: ["Next.js", "App Router", "Link"],
  },
  {
    step: "04",
    title: "Component / Props",
    href: "/labs/web/components",
    description: "UI를 작은 컴포넌트로 나누고 props로 데이터를 전달하는 방식을 봅니다.",
    tags: ["React", "Component", "Props"],
  },
  {
    step: "05",
    title: "Styling / Responsive UI",
    href: "/labs/web/styling",
    description: "Tailwind CSS로 레이아웃, 간격, 색상, 반응형 UI를 구성합니다.",
    tags: ["Tailwind", "Layout", "Responsive"],
  },
  {
    step: "06",
    title: "Form / State",
    href: "/labs/web/forms-state",
    description: "사용자 입력을 상태로 관리하고 제출 흐름을 이해합니다.",
    tags: ["Form", "State", "Validation"],
  },
  {
    step: "07",
    title: "API / Fetch",
    href: "/labs/web/api-fetch",
    description: "프론트엔드가 API를 호출하고 로딩, 성공, 실패 상태를 다루는 법을 봅니다.",
    tags: ["API", "fetch", "Error"],
  },
];

const flowCards = ["Browser", "HTML/CSS", "JavaScript", "Next.js", "Component", "State", "API"];

const flow = [
  "브라우저가 서버에서 HTML, CSS, JavaScript를 받아 화면을 만듭니다.",
  "HTML은 구조, CSS는 스타일, JavaScript는 동작을 담당합니다.",
  "Next.js에서는 app 디렉터리 구조가 URL 라우팅이 됩니다.",
  "React 컴포넌트로 UI를 작게 나누고 props로 데이터를 전달합니다.",
  "폼과 상태로 사용자 입력을 관리합니다.",
  "fetch로 백엔드 API와 통신하고 로딩, 성공, 실패를 화면에 표현합니다.",
];

export default function WebLabPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <article className="mx-auto max-w-5xl">
        <Link href="/labs" className="text-sm font-medium text-teal-700">
          go to Labs
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Web Lab</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          웹 개발은 브라우저가 화면을 만드는 원리부터 Next.js 라우팅, 컴포넌트,
          상태 관리, API 연동까지 순서대로 연결해서 보는 것이 좋습니다.
        </p>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">전체 그림</h2>
          <div className="mt-4 overflow-x-auto rounded-lg bg-slate-50 p-4">
            <div className="grid min-w-[980px] grid-cols-[1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr] items-center text-center">
              {flowCards.map((card, index) => (
                <div key={card} className="contents">
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-teal-700">STEP {index + 1}</p>
                    <p className="mt-1 font-semibold text-slate-950">{card}</p>
                  </div>
                  {index < flowCards.length - 1 ? (
                    <div className="font-mono text-xl text-teal-700">-&gt;</div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">공부 순서</h2>
          <ol className="mt-4 grid gap-4">
            {chapters.map((chapter) => (
              <li key={chapter.href}>
                <Link
                  href={chapter.href}
                  className="block rounded-lg border border-slate-200 p-4 shadow-sm transition hover:border-teal-500 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded bg-teal-50 px-2.5 py-1 text-sm font-semibold text-teal-700">
                      STEP {chapter.step}
                    </span>
                    <h3 className="text-lg font-semibold">{chapter.title}</h3>
                  </div>
                  <p className="mt-3 leading-7 text-slate-700">{chapter.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {chapter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-slate-200 px-2 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">전체 흐름</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 leading-8 text-slate-700">
            {flow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>
      </article>
    </main>
  );
}
