import Link from "next/link";

const chapters = [
  {
    step: "01",
    title: "Image / Container 개념",
    href: "/labs/docker/concepts",
    description: "Docker가 프로그램 실행 환경을 이미지와 컨테이너로 나누는 방식을 이해합니다.",
    tags: ["Image", "Container", "Registry"],
  },
  {
    step: "02",
    title: "기본 명령어",
    href: "/labs/docker/basic-commands",
    description: "ps, images, pull, run, stop, rm 같은 기본 명령어를 정리합니다.",
    tags: ["ps", "run", "rm"],
  },
  {
    step: "03",
    title: "Dockerfile / Build",
    href: "/labs/docker/dockerfile-build",
    description: "Dockerfile로 애플리케이션 이미지를 만드는 과정을 봅니다.",
    tags: ["Dockerfile", "build", "layer"],
  },
  {
    step: "04",
    title: "Run / Port / Env",
    href: "/labs/docker/run-port-env",
    description: "컨테이너 실행, 포트 매핑, 환경 변수 전달 방식을 익힙니다.",
    tags: ["run", "port", "env"],
  },
  {
    step: "05",
    title: "Volume / Network",
    href: "/labs/docker/volume-network",
    description: "데이터 유지와 컨테이너 간 통신 구조를 정리합니다.",
    tags: ["volume", "network", "bridge"],
  },
  {
    step: "06",
    title: "Docker Compose",
    href: "/labs/docker/compose",
    description: "여러 컨테이너를 하나의 compose 파일로 함께 실행합니다.",
    tags: ["compose", "service", "yaml"],
  },
  {
    step: "07",
    title: "Logs / Troubleshooting",
    href: "/labs/docker/logs-troubleshooting",
    description: "컨테이너가 안 뜨거나 접속이 안 될 때 확인 순서를 잡습니다.",
    tags: ["logs", "exec", "debug"],
  },
];

const flowCards = ["Dockerfile", "Image", "Container", "Port/Env", "Volume/Network", "Compose", "Logs"];

const flow = [
  "Dockerfile은 이미지를 만드는 설계도입니다.",
  "이미지는 실행 환경을 포장한 결과물이고, 컨테이너는 이미지를 실제로 실행한 프로세스입니다.",
  "컨테이너 외부에서 접속하려면 포트 매핑이 필요합니다.",
  "환경 변수로 실행 환경별 설정을 전달합니다.",
  "볼륨은 컨테이너가 삭제되어도 데이터를 유지하는 방법입니다.",
  "Compose는 여러 컨테이너를 한 번에 정의하고 실행합니다.",
  "문제가 생기면 ps, logs, exec, inspect 순서로 확인합니다.",
];

export default function DockerLabPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <article className="mx-auto max-w-5xl">
        <Link href="/labs" className="text-sm font-medium text-teal-700">
          go to Labs
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Docker Lab</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          Docker는 애플리케이션과 실행 환경을 이미지로 포장하고, 컨테이너로
          실행하는 도구입니다. 개념, 명령어, Dockerfile, 포트, 볼륨, Compose,
          디버깅 순서로 보면 운영 흐름까지 연결됩니다.
        </p>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">전체 그림</h2>
          <div className="mt-4 overflow-x-auto rounded-lg bg-slate-50 p-4">
            <div className="grid min-w-[1020px] grid-cols-[1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr] items-center text-center">
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
