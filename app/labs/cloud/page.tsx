import Link from "next/link";

export default function CloudLabPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <div className="mx-auto max-w-4xl">
        <Link href="/labs" className="text-sm font-medium text-teal-700">
          go to Labs
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Cloud / IaC Lab</h1>
        <p className="mt-4 leading-8 text-slate-700">
          AWS, 서버, 네트워크, Terraform을 이용해 인프라를 코드로 관리하는
          흐름을 실습합니다.
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
                aws --version
              </code>
            </div>
            <div>
              <h3 className="font-semibold text-slate-950">에러 기록</h3>
              <p>아직 없음.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-950">다음에 확인할 것</h3>
              <p>EC2, IAM, VPC가 각각 어떤 역할인지 정리한다.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
