import Link from "next/link";

const commands = [
  "docker ps",
  "docker images",
  "docker build -t kt-portfolio .",
  "docker run -p 3000:3000 kt-portfolio",
  "docker logs <container-id>",
];

export default function DockerLabPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <article className="mx-auto max-w-4xl">
        <Link href="/labs" className="text-sm font-medium text-teal-700">
          go to Labs
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Docker Lab</h1>
        <p className="mt-4 leading-8 text-slate-700">
          첫 목표는 이 Next.js 사이트를 Docker 이미지로 만들고, <br></br>
          Docker 명령어를 직접 실행하면서 이미지와 컨테이너 개념을 익히는 공간입니다.
        </p>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">실습 명령어</h2>
          <ul className="mt-4 space-y-3">
            {commands.map((command) => (
              <li key={command}>
                <code className="block rounded bg-slate-950 px-4 py-3 font-mono text-sm text-slate-50">
                  {command}
                </code>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">내 기록</h2>
          <div className="mt-4 space-y-4 leading-8 text-slate-700">
           <div>
            <h3 className="font-semibold text-slate-950">오늘 배운 것</h3>
            <p>Docker는 프로그램을 컨테이너 안에서 실행하게 해주는 도구다. </p>
           </div> 
            
           <div>
            <h3 className="font-semibold text-slate-950">실행한 명령어</h3>
              <code className="block rounded bg-slate-100 px-3 py-2">
                docker ps
              </code>
              <p>docker ps는 현재 실행 중인 컨테이너 목록을 보여준다.</p>
              <p>support-frontend, support-backend, support-postgres 컨테이너가 실행 중이다.</p>
              <p>3001-&gt;3000은 서버의 3001번 포트로 들어온 요청이 컨테이너 내부
                3000번 포트로 전달 된다는 뜻이다.
              </p>
              <p>0.0.0.0:3001-&gt;3000/tcp 뜻은 서버의 모든 IP 주소에서 3001번 포트로 들어오는<br></br> TCP 요청을 컨테이너 내부 3000번 포트로 보낸다.</p>
              <code className="block rounded bg-slate-100 px-3 py-2">
                docker images
              </code>
              <p> docker images는 내 서버에 저장된 Docker 이미지 목록을 보여준다.</p>
              
           </div>
           <div>
            <h3 className="font-semibold text-slate-950">에러 기록</h3>
            <p>아직 없음.</p>
           </div>
           <div>
            <h3 className="font-semibold text-slate-950">다음에 확인할 것</h3>
            <p>docker ps 결과에 어떤 컬럼들이 나오는지 확인한다.</p>
            </div>
           </div>
          
        </section>
      </article>
    </main>
  );
}
