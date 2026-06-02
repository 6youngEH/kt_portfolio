import Link from "next/link";

const flowCards = [
  ["Browser", "화면에서 버튼 클릭"],
  ["Next.js", "fetch로 API 호출"],
  ["Spring Boot", "요청 처리"],
  ["Database", "데이터 저장/조회"],
  ["JSON", "응답으로 화면 갱신"],
];

const sections = [
  {
    title: "Spring Boot API 의미",
    points: [
      "Spring Boot API는 프론트엔드나 다른 서버가 HTTP로 호출하는 백엔드 기능입니다.",
      "웹서버 연동이라고 말해도 되지만, 더 정확히는 웹 화면과 백엔드 데이터를 연결하는 REST API입니다.",
      "브라우저는 HTML을 직접 받는 대신 JSON 데이터를 받고, 화면은 Next.js 같은 프론트엔드가 그립니다.",
    ],
  },
  {
    title: "기본 엔드포인트",
    points: [
      "GET /api/health는 서버가 살아 있는지 확인하는 가장 작은 API입니다.",
      "GET /api/posts는 게시글 목록처럼 화면에 보여줄 데이터를 조회합니다.",
      "POST /api/contact는 문의 폼처럼 사용자가 입력한 데이터를 서버로 보냅니다.",
    ],
  },
  {
    title: "프론트 연동",
    points: [
      "Next.js에서는 fetch로 Spring Boot 주소를 호출합니다.",
      "개발 중에는 Next.js가 3000번, Spring Boot가 8080번 포트에서 따로 실행될 수 있습니다.",
      "포트나 도메인이 다르면 Spring Boot 쪽 CORS 설정이 필요할 수 있습니다.",
    ],
  },
  {
    title: "Docker 이후 흐름",
    points: [
      "Dockerfile로 Spring Boot API 이미지를 만들고 컨테이너로 실행합니다.",
      "docker compose로 프론트, API, DB를 같은 네트워크에 올립니다.",
      "운영에서는 Nginx나 프록시가 /api 요청을 Spring Boot로 넘기는 구성이 자주 쓰입니다.",
    ],
  },
];

const apiExamples = [
  {
    method: "GET",
    path: "/api/health",
    purpose: "서버 상태 확인",
    response: '{ "status": "ok" }',
  },
  {
    method: "GET",
    path: "/api/posts",
    purpose: "게시글 목록 조회",
    response: '[{ "id": 1, "title": "Spring Boot API" }]',
  },
  {
    method: "POST",
    path: "/api/contact",
    purpose: "문의 내용 저장",
    response: '{ "message": "received" }',
  },
];

const codeBlocks = [
  {
    title: "Spring Boot Controller 예시",
    code: `@RestController
@RequestMapping("/api")
public class HealthController {
    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "ok");
    }
}`,
    description: "@RestController는 반환값을 JSON 응답으로 바꿔주는 API 컨트롤러입니다.",
  },
  {
    title: "Next.js에서 호출",
    code: `const response = await fetch("http://localhost:8080/api/health");
const data = await response.json();`,
    description: "프론트는 Spring Boot API 주소를 호출하고 JSON을 받아 화면 상태에 반영합니다.",
  },
  {
    title: "Docker 실행 예시",
    code: `docker build -t spring-api .
docker run -p 8080:8080 spring-api`,
    description: "컨테이너 내부 8080 포트를 호스트 8080 포트로 연결하면 브라우저나 프론트에서 호출할 수 있습니다.",
  },
];

export default function SpringBootLabPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <article className="mx-auto max-w-5xl">
        <Link href="/labs" className="text-sm font-medium text-teal-700">
          go to Labs
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Spring Boot API Lab</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          Spring Boot API는 웹 화면이 호출할 백엔드 서버입니다. Java 기본기를
          익힌 뒤 API 서버를 만들고, 프론트에서 HTTP 요청으로 데이터를 주고받는
          흐름을 연결합니다.
        </p>

        <section className="mt-8 grid gap-3 md:grid-cols-3">
          {[
            "API는 웹서버 연동 중 데이터 요청/응답을 담당합니다.",
            "Spring Boot는 REST Controller로 JSON 응답을 만듭니다.",
            "Docker Compose로 프론트, API, DB를 함께 실행할 수 있습니다.",
          ].map((item, index) => (
            <div key={item} className="rounded-lg border border-teal-100 bg-white p-4">
              <p className="text-sm font-semibold text-teal-700">POINT {index + 1}</p>
              <p className="mt-2 leading-7 text-slate-800">{item}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">한눈에 보기</h2>
          <div className="mt-4 overflow-x-auto rounded-lg bg-slate-50 p-4">
            <div className="grid min-w-[920px] grid-cols-[1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr] items-center text-center">
              {flowCards.map(([title, detail], index) => (
                <div key={title} className="contents">
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <h3 className="font-semibold text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{detail}</p>
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
          <h2 className="text-xl font-semibold">개념 정리</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {sections.map((section, index) => (
              <section
                key={section.title}
                className="rounded-lg border border-slate-200 bg-slate-50/50 p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="rounded bg-slate-950 px-2 py-1 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-slate-950">{section.title}</h3>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">API 설계 예시</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm text-slate-600">
                  <th className="py-3 pr-4 font-semibold">Method</th>
                  <th className="py-3 pr-4 font-semibold">Path</th>
                  <th className="py-3 pr-4 font-semibold">Purpose</th>
                  <th className="py-3 font-semibold">Response</th>
                </tr>
              </thead>
              <tbody>
                {apiExamples.map((api) => (
                  <tr key={api.path} className="border-b border-slate-100">
                    <td className="py-3 pr-4">
                      <span className="rounded bg-teal-50 px-2 py-1 text-sm font-semibold text-teal-700">
                        {api.method}
                      </span>
                    </td>
                    <td className="py-3 pr-4 font-mono text-sm">{api.path}</td>
                    <td className="py-3 pr-4 text-slate-700">{api.purpose}</td>
                    <td className="py-3 font-mono text-sm text-slate-700">{api.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">코드 / 명령어 예시</h2>
          <div className="mt-4 grid gap-4">
            {codeBlocks.map((block) => (
              <section key={block.title} className="rounded-lg bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-950">{block.title}</h3>
                <pre className="mt-3 overflow-x-auto rounded bg-slate-950 p-4 text-sm text-slate-50">
                  <code>{block.code}</code>
                </pre>
                <p className="mt-3 leading-7 text-slate-700">{block.description}</p>
              </section>
            ))}
          </div>
        </section>

        <nav className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link
            href="/labs/java"
            className="rounded-lg border border-slate-200 bg-white p-4 font-semibold shadow-sm hover:border-teal-500"
          >
            <span className="block text-sm text-slate-500">Previous</span>
            Java
          </Link>
          <Link
            href="/labs/ci-cd"
            className="rounded-lg border border-slate-200 bg-white p-4 font-semibold shadow-sm hover:border-teal-500 sm:text-right"
          >
            <span className="block text-sm text-teal-700">Next</span>
            CI/CD
          </Link>
        </nav>
      </article>
    </main>
  );
}
