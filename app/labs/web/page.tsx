import Link from "next/link";

export default function WebLabPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <div className="mx-auto max-w-4xl">
        <Link href="/labs" className="text-sm font-medium text-teal-700">
          Labs로
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Web Lab</h1>
        <p className="mt-4 leading-8 text-slate-700">
          Next.js 라우팅, 컴포넌트 분리, CSS, 폼 처리, API 호출을 실습합니다.
        </p>
      </div>
    </main>
  );
}
