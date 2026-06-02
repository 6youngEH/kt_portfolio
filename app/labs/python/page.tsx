import Link from "next/link";

const flowCards = ["Syntax", "Data", "Function", "File", "HTTP", "Automation"];

const chapters = [
  {
    step: "01",
    title: "기본문법",
    href: "/labs/python/syntax",
    description: "변수, 조건문, 반복문, 문자열 출력처럼 Python 코드를 읽고 실행하는 기본기를 봅니다.",
    tags: ["variable", "if", "for"],
  },
  {
    step: "02",
    title: "자료구조",
    href: "/labs/python/data-structures",
    description: "list, dict, tuple, set으로 여러 값을 저장하고 꺼내는 방식을 익힙니다.",
    tags: ["list", "dict", "set"],
  },
  {
    step: "03",
    title: "함수와 모듈",
    href: "/labs/python/functions-modules",
    description: "반복되는 코드를 함수로 나누고 import로 표준 라이브러리와 외부 패키지를 사용합니다.",
    tags: ["def", "import", "module"],
  },
  {
    step: "04",
    title: "파일과 예외",
    href: "/labs/python/files-errors",
    description: "파일을 읽고 쓰며 try/except로 실패 상황을 처리하는 흐름을 정리합니다.",
    tags: ["file", "try", "except"],
  },
  {
    step: "05",
    title: "HTTP 요청",
    href: "/labs/python/http-requests",
    description: "requests나 httpx로 API를 호출하고 JSON 응답을 다루는 연습을 합니다.",
    tags: ["API", "JSON", "requests"],
  },
  {
    step: "06",
    title: "자동화 스크립트",
    href: "/labs/python/automation",
    description: "로그 확인, 파일 정리, API 상태 체크처럼 서버 작업에 바로 쓸 수 있는 스크립트를 만듭니다.",
    tags: ["script", "log", "health"],
  },
];

const concepts = [
  {
    title: "Python을 배우는 이유",
    points: [
      "문법이 비교적 읽기 쉬워 처음 프로그래밍을 공부하기 좋습니다.",
      "서버 운영에서는 로그 분석, 파일 정리, API 점검 같은 자동화에 자주 씁니다.",
      "백엔드, 데이터 처리, 테스트 코드, DevOps 스크립트까지 활용 범위가 넓습니다.",
    ],
  },
  {
    title: "실행 방식",
    points: [
      "python 파일명.py 형태로 파일을 실행합니다.",
      "짧은 코드는 Python REPL에서 바로 실험할 수 있습니다.",
      "프로젝트별 패키지는 venv 가상환경을 만들어 분리해서 관리합니다.",
    ],
  },
  {
    title: "공부 순서",
    points: [
      "문법을 오래 외우기보다 작은 스크립트를 직접 실행하며 익히는 편이 좋습니다.",
      "자료구조와 함수까지 익히면 대부분의 자동화 스크립트를 시작할 수 있습니다.",
      "그 다음 파일 처리, HTTP 요청, 에러 처리를 붙이면 실제 서버 작업과 연결됩니다.",
    ],
  },
  {
    title: "DevOps 연결",
    points: [
      "서버 로그에서 특정 에러를 찾고 집계할 수 있습니다.",
      "배포 전 API health check를 자동으로 호출할 수 있습니다.",
      "CI/CD에서 테스트나 검증 스크립트로 사용할 수 있습니다.",
    ],
  },
];

const examples = [
  {
    title: "기본 실행",
    code: `python --version
python app.py`,
    description: "Python 버전을 확인하고 app.py 파일을 실행합니다.",
  },
  {
    title: "가상환경",
    code: `python -m venv .venv
source .venv/bin/activate
pip install requests`,
    description: "프로젝트별 패키지를 분리하기 위해 가상환경을 만들고 활성화합니다.",
  },
  {
    title: "API 상태 체크",
    code: `import requests

response = requests.get("http://localhost:8080/api/health", timeout=3)
print(response.status_code)
print(response.json())`,
    description: "Spring Boot API 같은 백엔드 서버가 응답하는지 Python으로 확인할 수 있습니다.",
  },
  {
    title: "로그에서 에러 찾기",
    code: `with open("app.log", "r", encoding="utf-8") as file:
    for line in file:
        if "ERROR" in line:
            print(line.strip())`,
    description: "파일을 한 줄씩 읽으면서 필요한 로그만 골라 출력합니다.",
  },
];

export default function PythonLabPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <article className="mx-auto max-w-5xl">
        <Link href="/labs" className="text-sm font-medium text-teal-700">
          go to Labs
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Python Lab</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          Python은 프로그래밍 기본기를 익히기 좋고, 서버 운영에서는 자동화와
          API 점검에 바로 사용할 수 있습니다. 문법, 자료구조, 함수, 파일 처리,
          HTTP 요청 순서로 공부하면 DevOps 흐름과 자연스럽게 연결됩니다.
        </p>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">전체 그림</h2>
          <div className="mt-4 overflow-x-auto rounded-lg bg-slate-50 p-4">
            <div className="grid min-w-[840px] grid-cols-[1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr] items-center text-center">
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
              <li key={chapter.title}>
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
          <h2 className="text-xl font-semibold">개념 정리</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {concepts.map((concept, index) => (
              <section
                key={concept.title}
                className="rounded-lg border border-slate-200 bg-slate-50/50 p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="rounded bg-slate-950 px-2 py-1 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-slate-950">{concept.title}</h3>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                  {concept.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">코드 / 명령어 예시</h2>
          <div className="mt-4 grid gap-4">
            {examples.map((example) => (
              <section key={example.title} className="rounded-lg bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-950">{example.title}</h3>
                <pre className="mt-3 overflow-x-auto rounded bg-slate-950 p-4 text-sm text-slate-50">
                  <code>{example.code}</code>
                </pre>
                <p className="mt-3 leading-7 text-slate-700">{example.description}</p>
              </section>
            ))}
          </div>
        </section>

        <nav className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link
            href="/labs/web"
            className="rounded-lg border border-slate-200 bg-white p-4 font-semibold shadow-sm hover:border-teal-500"
          >
            <span className="block text-sm text-slate-500">Previous</span>
            Web
          </Link>
          <Link
            href="/labs/network"
            className="rounded-lg border border-slate-200 bg-white p-4 font-semibold shadow-sm hover:border-teal-500 sm:text-right"
          >
            <span className="block text-sm text-teal-700">Next</span>
            Network
          </Link>
        </nav>
      </article>
    </main>
  );
}
