import Link from "next/link";

export default function NetworkLabPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <div className="mx-auto max-w-4xl">
        <Link href="/labs" className="text-sm font-medium text-teal-700">
          go to Labs
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Network Lab</h1>
        <p className="mt-4 leading-8 text-slate-700">
          포트, IP, HTTP 요청, 방화벽, 서버 로그를 실제 서비스와 연결해서
          확인합니다.
        </p>
      </div>
    </main>
  );
}
