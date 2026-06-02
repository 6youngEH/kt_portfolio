import Link from "next/link";

const skills = [
  {
    group: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Java", "Spring Boot", "REST API", "JSON"],
  },
  {
    group: "Infra",
    items: ["Linux", "Docker", "Network", "Nginx"],
  },
  {
    group: "Operation",
    items: ["GitHub Actions", "CI/CD", "Monitoring", "Troubleshooting"],
  },
];

const projects = [
  {
    title: "DevOps Roadmap Lab",
    status: "In Progress",
    description: "Linux, Web, Python, Java, Docker, Spring Boot 학습 내용을 직접 웹 페이지로 정리한 개인 실습 사이트입니다.",
    points: ["Next.js App Router 기반 페이지 구성", "학습 항목별 상세 페이지", "빌드와 정적 라우트 검증"],
  },
  {
    title: "Spring Boot API",
    status: "Planned",
    description: "프론트에서 호출할 REST API 서버를 만들고 JSON 응답, CORS, Docker 실행까지 연결할 예정입니다.",
    points: ["Health check API", "게시글 API", "Contact API"],
  },
  {
    title: "Docker Deployment",
    status: "Planned",
    description: "프론트와 API 서버를 컨테이너로 실행하고 네트워크, 포트, 로그 확인 흐름을 정리할 예정입니다.",
    points: ["Dockerfile", "Compose", "Logs troubleshooting"],
  },
];

const profileItems = [
  ["목표", "시스템 운영 경험을 바탕으로 DevOps 엔지니어 역량을 쌓는 중입니다."],
  ["방향", "공부한 내용을 문서로만 남기지 않고 웹 페이지, API, 컨테이너 실행 결과로 연결합니다."],
  ["강점", "서버 접근, 로그 확인, 장애 원인 추적처럼 운영 흐름을 기준으로 학습합니다."],
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <article className="mx-auto max-w-6xl">
        <div className="flex flex-wrap gap-3 text-sm font-medium">
          <Link href="/" className="text-teal-700">
            go to Home
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/labs" className="text-teal-700">
            go to Labs
          </Link>
        </div>

        <section className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
            Portfolio
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">
            DevOps Engineer Portfolio
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            웹서버, API, Docker, CI/CD, 운영 관찰 흐름을 직접 구축하며 정리하는
            포트폴리오입니다. Labs는 학습 기록이고, 이 페이지는 결과물과 역량을
            한눈에 보여주는 공간입니다.
          </p>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          {profileItems.map(([title, detail]) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-slate-950">{title}</h2>
              <p className="mt-3 leading-7 text-slate-700">{detail}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <section key={skill.group} className="rounded-lg bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-950">{skill.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-slate-200 bg-white px-2 py-1 text-sm text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="mt-4 grid gap-4">
            {projects.map((project) => (
              <section key={project.title} className="rounded-lg border border-slate-200 bg-slate-50/60 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-slate-950">{project.title}</h3>
                  <span className="rounded bg-teal-50 px-2.5 py-1 text-sm font-semibold text-teal-700">
                    {project.status}
                  </span>
                </div>
                <p className="mt-3 leading-7 text-slate-700">{project.description}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">Evidence</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            포트폴리오에 적은 기술은 Labs에서 학습 기록과 코드 예시로 이어집니다.
            프로젝트가 완성될수록 이 페이지에는 결과물, 배포 주소, 트러블슈팅
            기록을 추가합니다.
          </p>
          <Link
            href="/labs"
            className="mt-5 inline-block rounded-lg border border-slate-200 bg-slate-950 px-4 py-2 font-semibold text-white hover:bg-teal-700"
          >
            View Study Labs
          </Link>
        </section>
      </article>
    </main>
  );
}
