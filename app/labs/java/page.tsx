import Link from "next/link";

const chapters = [
  {
    step: "01",
    title: "기본문법",
    href: "/labs/java/syntax",
    description: "변수, 타입, 조건문, 반복문, 메서드처럼 Java 코드를 읽는 기본기를 익힙니다.",
    tags: ["type", "if", "method"],
  },
  {
    step: "02",
    title: "객체지향",
    href: "/labs/java/oop",
    description: "class, field, constructor, method로 데이터를 객체로 묶는 방식을 봅니다.",
    tags: ["class", "object", "constructor"],
  },
  {
    step: "03",
    title: "컬렉션",
    href: "/labs/java/collections",
    description: "List, Map, Set으로 API 응답과 서비스 데이터를 다루는 법을 익힙니다.",
    tags: ["List", "Map", "Set"],
  },
  {
    step: "04",
    title: "예외 처리",
    href: "/labs/java/exceptions",
    description: "try/catch, checked exception, runtime exception, 에러 응답 흐름을 정리합니다.",
    tags: ["try", "catch", "error"],
  },
  {
    step: "05",
    title: "Spring 준비",
    href: "/labs/java/spring-ready",
    description: "annotation, interface, DTO, dependency injection처럼 Spring Boot에서 자주 보는 Java 개념을 연결합니다.",
    tags: ["annotation", "DTO", "DI"],
  },
];

const flowCards = ["Syntax", "Class", "Collection", "Exception", "Annotation", "Spring API"];

export default function JavaLabPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <article className="mx-auto max-w-5xl">
        <Link href="/labs" className="text-sm font-medium text-teal-700">
          go to Labs
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Java Lab</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          Spring Boot API는 Java 위에서 동작합니다. 모든 Java를 깊게 파기보다
          API 서버를 만들 때 바로 필요한 문법, 객체지향, 컬렉션, 예외 처리,
          어노테이션 흐름을 먼저 잡습니다.
        </p>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">전체 그림</h2>
          <div className="mt-4 overflow-x-auto rounded-lg bg-slate-50 p-4">
            <div className="grid min-w-[880px] grid-cols-[1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr] items-center text-center">
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
          <h2 className="text-xl font-semibold">Spring Boot와 연결</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {[
              ["class", "Controller, Service, Repository 같은 Spring 구성 요소는 Java class입니다."],
              ["method", "GET /api/posts 같은 API 하나는 보통 Controller method 하나로 연결됩니다."],
              ["List / Map", "여러 게시글, JSON 응답, 설정 값은 컬렉션으로 다룹니다."],
              ["annotation", "@RestController, @GetMapping 같은 표시로 Spring이 코드를 인식합니다."],
            ].map(([title, detail]) => (
              <section key={title} className="rounded-lg border border-slate-200 bg-slate-50/50 p-4">
                <h3 className="font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{detail}</p>
              </section>
            ))}
          </div>
        </section>

        <nav className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link
            href="/labs/docker"
            className="rounded-lg border border-slate-200 bg-white p-4 font-semibold shadow-sm hover:border-teal-500"
          >
            <span className="block text-sm text-slate-500">Previous</span>
            Docker
          </Link>
          <Link
            href="/labs/spring-boot"
            className="rounded-lg border border-slate-200 bg-white p-4 font-semibold shadow-sm hover:border-teal-500 sm:text-right"
          >
            <span className="block text-sm text-teal-700">Next</span>
            Spring Boot API
          </Link>
        </nav>
      </article>
    </main>
  );
}
