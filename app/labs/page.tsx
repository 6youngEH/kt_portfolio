import Link from "next/link";

const labs = [
  ["01", "Linux / Server", "/labs/linux"],
  ["02", "Web", "/labs/web"],
  ["03", "Python", "/labs/python"],
  ["04", "Network", "/labs/network"],
  ["05", "Docker", "/labs/docker"],
  ["06", "Java", "/labs/java"],
  ["07", "Spring Boot API", "/labs/spring-boot"],
  ["08", "CI/CD", "/labs/ci-cd"],
  ["09", "Cloud / IaC", "/labs/cloud"],
  ["10", "Monitoring", "/labs/monitoring"],
];

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-medium text-teal-700">
          go to home
        </Link>
        <h1 className="mt-6 text-4xl font-bold">DevOps Labs</h1>
        <p className="mt-4 leading-8 text-slate-700">
          로드맵 순서대로 공부하고, 각 페이지에 명령어와 결과, 에러 기록,
          다음 할 일을 남깁니다.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {labs.map(([step, label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg border border-slate-200 bg-white p-4 font-semibold shadow-sm hover:border-teal-500"
            >
              <span className="mr-2 text-sm text-teal-700">STEP {step}</span>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
