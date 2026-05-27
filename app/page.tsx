import Link from "next/link";

const tracks = [
  {
    step: "01",
    title: "Linux / Server",
    description: "명령어, 권한, 프로세스, 로그, systemd를 익힙니다.",
    href: "/labs/linux",
  },
  {
    step: "02",
    title: "Web",
    description: "Next.js 페이지, 컴포넌트, CSS, fetch를 실습합니다.",
    href: "/labs/web",
  },
  {
    step: "03",
    title: "Network",
    description: "HTTP, 포트, DNS, 방화벽, 서버 접근을 실습합니다.",
    href: "/labs/network",
  },
  {
    step: "04",
    title: "Docker",
    description: "이미지, 컨테이너, 포트 매핑, 로그 확인을 실습합니다.",
    href: "/labs/docker",
  },
  {
    step: "05",
    title: "Spring Boot API",
    description: "REST API, JSON, CORS, 프론트 연동을 실습합니다.",
    href: "/labs/spring-boot",
  },
  {
    step: "06",
    title: "CI/CD",
    description: "GitHub Actions로 빌드, 테스트, 배포 자동화를 연습합니다.",
    href: "/labs/ci-cd",
  },
  {
    step: "07",
    title: "Cloud / IaC",
    description: "AWS와 Terraform으로 서버와 인프라를 코드로 관리합니다.",
    href: "/labs/cloud",
  },
  {
    step: "08",
    title: "Monitoring",
    description: "로그, 메트릭, 알림으로 서비스 상태를 관찰합니다.",
    href: "/labs/monitoring",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
            KT Portfolio
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-normal sm:text-5xl">
            DevOps Roadmap Lab
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-700">
            이 사이트는 시스템 엔지니어에서 DevOps 엔지니어로 성장하기 위한
            개인 웹서버입니다. 로드맵을 따라 직접 만들고, 실행하고, 기록합니다.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {tracks.map((track) => (
            <Link
              key={track.href}
              href={track.href}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-500 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-teal-700">
                STEP {track.step}
              </p>
              <h2 className="text-xl font-semibold">{track.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{track.description}</p>
            </Link>
          ))}
        </div>

        <section className="rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">오늘 할 일</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
            <li>Docker Lab에서 <code className="rounded bg-slate-100 px-1.5 py-0.5">docker images</code> 설명을 직접 작성하기</li>
            <li>실행한 명령어, 결과, 알게 된 점을 페이지에 기록하기</li>
            <li>다음 실습 주제를 <code className="rounded bg-slate-100 px-1.5 py-0.5">docker logs</code>로 이어가기</li>
          </ol>
        </section>
      </section>
    </main>
  );
}
