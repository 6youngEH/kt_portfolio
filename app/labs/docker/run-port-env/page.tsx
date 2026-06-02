import DockerTopicPage from "../DockerTopicPage";

const sections = [
  {
    title: "docker run",
    points: [
      "docker run은 이미지로 새 컨테이너를 만들고 실행합니다.",
      "-d는 백그라운드 실행, --name은 컨테이너 이름 지정입니다.",
      "이미지가 로컬에 없으면 registry에서 내려받은 뒤 실행할 수 있습니다.",
      "run 옵션이 많아지면 Compose로 옮기는 편이 관리하기 쉽습니다.",
    ],
  },
  {
    title: "포트 매핑",
    points: [
      "-p 3001:3000은 호스트 3001번 포트를 컨테이너 내부 3000번 포트로 연결합니다.",
      "왼쪽은 외부에서 접속하는 호스트 포트, 오른쪽은 컨테이너 안의 앱 포트입니다.",
      "앱이 컨테이너 내부에서 3000번을 열고 있어도 -p가 없으면 외부에서 바로 접속하기 어렵습니다.",
      "0.0.0.0:3001->3000/tcp는 서버 모든 IP의 3001번 요청을 컨테이너 3000번으로 전달한다는 뜻입니다.",
    ],
  },
  {
    title: "바인딩 주소",
    points: [
      "컨테이너 내부 앱이 127.0.0.1에만 바인딩되면 컨테이너 밖에서 접근이 막힐 수 있습니다.",
      "외부 접속이 필요한 앱은 보통 0.0.0.0으로 listen해야 합니다.",
      "Next.js 개발 서버도 외부 접근이 필요하면 -H 0.0.0.0 옵션을 사용합니다.",
      "접속 문제는 앱 바인딩, Docker 포트 매핑, 서버 방화벽을 함께 확인합니다.",
    ],
  },
  {
    title: "환경 변수",
    points: [
      "환경 변수는 컨테이너 실행 시 설정값을 전달하는 방법입니다.",
      "DB 주소, 포트, API URL, 실행 모드 같은 값을 코드 밖에서 주입할 수 있습니다.",
      "-e KEY=value 형태로 전달하거나 --env-file을 사용할 수 있습니다.",
      "비밀 값은 이미지에 넣지 말고 실행 환경에서 주입하는 것이 기본입니다.",
    ],
  },
  {
    title: "컨테이너 이름",
    points: [
      "--name으로 이름을 정하면 logs, exec, stop 명령에서 컨테이너 ID 대신 이름을 쓸 수 있습니다.",
      "같은 이름의 컨테이너는 동시에 만들 수 없습니다.",
      "이미 존재하는 이름 때문에 run이 실패하면 기존 컨테이너를 rm하거나 다른 이름을 사용합니다.",
      "운영에서는 이름 규칙을 정해두면 관리가 쉬워집니다.",
    ],
  },
  {
    title: "재시작 정책",
    points: [
      "--restart unless-stopped를 사용하면 서버 재부팅이나 컨테이너 실패 후 자동 재시작할 수 있습니다.",
      "개발 실습에서는 없어도 되지만 운영에서는 재시작 정책을 검토합니다.",
      "앱 자체가 즉시 죽는 문제는 restart 정책이 있어도 계속 재시작 루프가 생길 수 있습니다.",
      "재시작이 반복되면 docker logs로 원인을 먼저 확인합니다.",
    ],
  },
];

const visual = (
  <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4">
    <div className="grid min-w-[760px] grid-cols-[1fr_40px_1fr_40px_1fr] items-center text-center">
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <h3 className="font-semibold text-slate-950">Browser</h3>
        <p className="mt-2 text-sm text-slate-600">http://server:3001</p>
      </div>
      <div className="font-mono text-xl text-teal-700">-&gt;</div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <h3 className="font-semibold text-slate-950">Host Port</h3>
        <p className="mt-2 text-sm text-slate-600">3001</p>
      </div>
      <div className="font-mono text-xl text-teal-700">-&gt;</div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <h3 className="font-semibold text-slate-950">Container Port</h3>
        <p className="mt-2 text-sm text-slate-600">3000</p>
      </div>
    </div>
  </div>
);

const examples = [
  {
    title: "포트와 환경 변수로 실행",
    code: `docker run -d \\
  --name kt-portfolio \\
  -p 3001:3000 \\
  -e NODE_ENV=production \\
  kt-portfolio:dev`,
    description: "호스트 3001번 포트를 컨테이너 내부 3000번 포트로 연결하고 환경 변수를 전달합니다.",
  },
  {
    title: "실행 확인",
    code: `docker ps
docker port kt-portfolio
docker logs kt-portfolio
curl -I http://localhost:3001`,
    description: "컨테이너 실행 여부, 포트 매핑, 로그, HTTP 응답을 순서대로 확인합니다.",
  },
];

export default function RunPortEnvPage() {
  return (
    <DockerTopicPage
      step="04"
      title="Run / Port / Env"
      description="컨테이너를 외부에서 접근 가능하게 만들려면 포트 매핑과 앱 바인딩을 함께 이해해야 합니다. 환경 변수는 실행 환경별 설정을 컨테이너에 전달하는 기본 방식입니다."
      summary={[
        "docker run은 이미지를 컨테이너로 실행합니다.",
        "-p는 호스트 포트와 컨테이너 포트를 연결합니다.",
        "-e와 --env-file로 실행 설정을 주입합니다.",
      ]}
      visual={visual}
      sections={sections}
      examples={examples}
      previousHref="/labs/docker/dockerfile-build"
      previousLabel="Dockerfile / Build"
      nextHref="/labs/docker/volume-network"
      nextLabel="Volume / Network"
    />
  );
}
