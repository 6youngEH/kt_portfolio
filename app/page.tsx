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
    title: "Python",
    description: "기본문법, 자료구조, 파일 처리, API 점검 자동화를 익힙니다.",
    href: "/labs/python",
  },
  {
    step: "04",
    title: "Network",
    description: "HTTP, 포트, DNS, 방화벽, 서버 접근을 실습합니다.",
    href: "/labs/network",
  },
  {
    step: "05",
    title: "Docker",
    description: "이미지, 컨테이너, 포트 매핑, 로그 확인을 실습합니다.",
    href: "/labs/docker",
  },
  {
    step: "06",
    title: "Java",
    description: "Spring Boot에 필요한 문법, 객체지향, 컬렉션, 예외를 익힙니다.",
    href: "/labs/java",
  },
  {
    step: "07",
    title: "Spring Boot API",
    description: "REST API, JSON, CORS, 프론트 연동을 실습합니다.",
    href: "/labs/spring-boot",
  },
  {
    step: "08",
    title: "CI/CD",
    description: "GitHub Actions로 빌드, 테스트, 배포 자동화를 연습합니다.",
    href: "/labs/ci-cd",
  },
  {
    step: "09",
    title: "Cloud / IaC",
    description: "AWS와 Terraform으로 서버와 인프라를 코드로 관리합니다.",
    href: "/labs/cloud",
  },
  {
    step: "10",
    title: "Monitoring",
    description: "로그, 메트릭, 알림으로 서비스 상태를 관찰합니다.",
    href: "/labs/monitoring",
  },
];

const buildFlow = [
  {
    title: "Frontend",
    detail: "Next.js 화면과 fetch 흐름을 만든다.",
  },
  {
    title: "Backend",
    detail: "Java와 Spring Boot로 REST API를 만든다.",
  },
  {
    title: "Runtime",
    detail: "Docker로 실행 환경을 고정하고 배포한다.",
  },
  {
    title: "Operation",
    detail: "CI/CD, Cloud, Monitoring으로 운영 흐름을 만든다.",
  },
];

const mainCards = [
  {
    title: "Study Labs",
    eyebrow: "learning records",
    description: "Linux, Web, Python, Java, Docker, Spring Boot를 공부하며 정리한 실습 기록입니다.",
    href: "/labs",
    cta: "Open Labs",
  },
  {
    title: "Portfolio",
    eyebrow: "career profile",
    description: "프로젝트, 기술 스택, 배포 경험, 자기소개를 포트폴리오 형태로 정리합니다.",
    href: "/portfolio",
    cta: "Open Portfolio",
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

        <section className="grid gap-4 md:grid-cols-2">
          {mainCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-500 hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase text-teal-700">{card.eyebrow}</p>
              <h2 className="mt-2 text-2xl font-bold">{card.title}</h2>
              <p className="mt-3 leading-7 text-slate-700">{card.description}</p>
              <p className="mt-5 font-semibold text-teal-700">{card.cta} -&gt;</p>
            </Link>
          ))}
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">현재 빌드 흐름</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            이 사이트는 공부 기록과 포트폴리오를 분리해서 관리합니다. Labs에는
            학습 과정과 실습 흔적을 쌓고, Portfolio에는 결과물과 역량을 정리합니다.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {buildFlow.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-teal-700">LAYER {index + 1}</p>
                <h3 className="mt-1 font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Study Tracks</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            아래 항목은 포트폴리오를 뒷받침하는 학습 기록입니다.
          </p>
        </section>

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
      </section>
    </main>
  );
}
