import DockerTopicPage from "../DockerTopicPage";

const sections = [
  {
    title: "목록 확인",
    points: [
      "docker ps는 현재 실행 중인 컨테이너를 보여줍니다.",
      "docker ps -a는 종료된 컨테이너까지 포함해서 보여줍니다.",
      "docker images는 로컬에 저장된 이미지 목록을 보여줍니다.",
      "문제가 생기면 먼저 컨테이너가 실행 중인지 확인합니다.",
    ],
  },
  {
    title: "이미지 내려받기",
    points: [
      "docker pull은 registry에서 이미지를 내려받습니다.",
      "태그를 생략하면 latest 태그를 받는 경우가 많지만 운영에서는 명시적인 버전 태그가 안전합니다.",
      "예를 들어 nginx:1.25처럼 버전을 지정할 수 있습니다.",
      "이미지는 한 번 내려받으면 로컬 캐시에 남습니다.",
    ],
  },
  {
    title: "컨테이너 실행",
    points: [
      "docker run은 이미지로 새 컨테이너를 생성하고 실행합니다.",
      "-d는 백그라운드 실행, --name은 컨테이너 이름 지정입니다.",
      "-p는 호스트 포트와 컨테이너 포트를 연결합니다.",
      "컨테이너는 기본적으로 하나의 주 프로세스가 종료되면 같이 종료됩니다.",
    ],
  },
  {
    title: "정지와 삭제",
    points: [
      "docker stop은 실행 중인 컨테이너를 정상 종료합니다.",
      "docker rm은 종료된 컨테이너를 삭제합니다.",
      "docker rmi는 이미지를 삭제합니다.",
      "실행 중인 컨테이너는 보통 먼저 stop한 뒤 rm합니다.",
    ],
  },
  {
    title: "로그와 접속",
    points: [
      "docker logs는 컨테이너 표준 출력과 표준 에러 로그를 보여줍니다.",
      "docker logs -f는 새 로그를 실시간으로 따라갑니다.",
      "docker exec은 실행 중인 컨테이너 안에서 명령어를 실행합니다.",
      "컨테이너 내부 파일이나 환경을 확인할 때 exec을 사용합니다.",
    ],
  },
  {
    title: "상태 확인",
    points: [
      "docker inspect는 컨테이너나 이미지의 상세 정보를 JSON으로 보여줍니다.",
      "docker stats는 컨테이너별 CPU와 메모리 사용량을 보여줍니다.",
      "docker port는 컨테이너 포트 매핑을 확인합니다.",
      "docker network ls와 docker volume ls로 네트워크와 볼륨 목록을 확인합니다.",
    ],
  },
];

const visual = (
  <div className="grid gap-4 md:grid-cols-3">
    {[
      ["확인", "ps, images, inspect"],
      ["실행", "pull, run, exec"],
      ["정리", "stop, rm, rmi"],
    ].map(([title, detail]) => (
      <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h3 className="font-semibold text-slate-950">{title}</h3>
        <p className="mt-2 font-mono text-sm text-slate-600">{detail}</p>
      </div>
    ))}
  </div>
);

const examples = [
  {
    title: "기본 확인 명령어",
    code: `docker ps
docker ps -a
docker images
docker logs <container-name>
docker inspect <container-name>`,
    description: "컨테이너가 안 뜨거나 접속이 안 될 때 가장 먼저 보는 명령어들입니다.",
  },
  {
    title: "nginx 컨테이너 실행",
    code: `docker pull nginx:1.25
docker run -d --name web-nginx -p 8080:80 nginx:1.25
curl -I http://localhost:8080`,
    description: "호스트의 8080번 포트로 들어온 요청을 컨테이너 내부 80번 포트로 전달합니다.",
  },
];

export default function BasicCommandsPage() {
  return (
    <DockerTopicPage
      step="02"
      title="기본 명령어"
      description="Docker 기본 명령어는 컨테이너 상태를 보고, 실행하고, 멈추고, 로그를 확인하는 흐름으로 익히면 됩니다."
      summary={[
        "ps와 images로 현재 상태를 먼저 확인합니다.",
        "run은 컨테이너를 만들고 실행하는 핵심 명령어입니다.",
        "logs와 exec은 문제를 확인할 때 가장 자주 사용합니다.",
      ]}
      visual={visual}
      sections={sections}
      examples={examples}
      previousHref="/labs/docker/concepts"
      previousLabel="Image / Container 개념"
      nextHref="/labs/docker/dockerfile-build"
      nextLabel="Dockerfile / Build"
    />
  );
}
