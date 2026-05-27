import Link from "next/link";

export default function MonitoringLabPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <div className="mx-auto max-w-4xl">
        <Link href="/labs" className="text-sm font-medium text-teal-700">
          go to Labs
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Monitoring Lab</h1>
        <p className="mt-4 leading-8 text-slate-700">
          로그, 메트릭, 알림을 이용해 서비스가 잘 동작하는지 관찰하는 방법을
          실습합니다.
        </p>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">내 기록</h2>
          <div className="mt-4 space-y-4 leading-8 text-slate-700">
            <div>
              <h3 className="font-semibold text-slate-950">오늘 배운 것</h3>
              <p>여기에 직접 정리한다.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-950">실행한 명령어</h3>
              <code className="block rounded bg-slate-100 px-3 py-2">
                docker logs support-frontend
              </code>
            </div>
            <div>
              <h3 className="font-semibold text-slate-950">에러 기록</h3>
              <p>아직 없음.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-950">다음에 확인할 것</h3>
              <p>로그와 메트릭의 차이를 정리한다.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
