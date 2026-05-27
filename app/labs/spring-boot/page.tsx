import Link from "next/link";

export default function SpringBootLabPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <div className="mx-auto max-w-4xl">
        <Link href="/labs" className="text-sm font-medium text-teal-700">
          go to Labs
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Spring Boot API Lab</h1>
        <p className="mt-4 leading-8 text-slate-700">
          여기서는 health check API, 게시글 API, contact API를 하나씩 만들며
          프론트와 백엔드를 연결합니다.
        </p>
      </div>
    </main>
  );
}
