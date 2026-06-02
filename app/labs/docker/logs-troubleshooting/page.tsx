import DockerTopicPage from "../DockerTopicPage";

const sections = [
  {
    title: "컨테이너가 안 보일 때",
    points: [
      "docker ps는 실행 중인 컨테이너만 보여줍니다.",
      "컨테이너가 바로 종료됐을 수 있으므로 docker ps -a를 확인합니다.",
      "STATUS가 Exited라면 docker logs로 종료 원인을 확인합니다.",
      "이미지 이름이나 태그를 잘못 지정했는지도 확인합니다.",
    ],
  },
  {
    title: "컨테이너가 바로 종료될 때",
    points: [
      "컨테이너의 주 프로세스가 종료되면 컨테이너도 종료됩니다.",
      "CMD나 ENTRYPOINT 명령이 올바른지 확인합니다.",
      "필요한 환경 변수가 빠져 앱이 시작 실패했을 수 있습니다.",
      "의존성 설치, 빌드 파일, 실행 경로 문제도 logs에서 확인합니다.",
    ],
  },
  {
    title: "접속이 안 될 때",
    points: [
      "컨테이너가 실행 중인지 docker ps로 확인합니다.",
      "docker port로 포트 매핑이 맞는지 확인합니다.",
      "컨테이너 내부 앱이 어떤 포트에서 listen하는지 확인합니다.",
      "서버 방화벽이나 클라우드 보안 그룹에서 호스트 포트가 열려 있는지 확인합니다.",
    ],
  },
  {
    title: "로그 확인",
    points: [
      "docker logs <name>으로 컨테이너 표준 출력 로그를 봅니다.",
      "docker logs -f는 새 로그를 실시간으로 따라갑니다.",
      "docker logs --tail 100은 최근 100줄만 확인합니다.",
      "Compose 환경에서는 docker compose logs -f <service>를 사용합니다.",
    ],
  },
  {
    title: "컨테이너 내부 확인",
    points: [
      "docker exec으로 실행 중인 컨테이너 안에서 명령어를 실행합니다.",
      "sh 또는 bash로 들어가 파일, 환경 변수, 네트워크 상태를 확인할 수 있습니다.",
      "alpine 기반 이미지는 bash가 없고 sh만 있는 경우가 많습니다.",
      "컨테이너 내부에서 localhost는 컨테이너 자기 자신입니다.",
    ],
  },
  {
    title: "리소스와 정리",
    points: [
      "docker stats로 CPU와 메모리 사용량을 확인합니다.",
      "디스크가 부족하면 사용하지 않는 이미지, 컨테이너, 볼륨이 쌓였는지 확인합니다.",
      "docker system df로 Docker가 사용하는 디스크 공간을 봅니다.",
      "prune 명령은 삭제 범위가 넓으므로 무엇이 지워지는지 확인하고 사용합니다.",
    ],
  },
];

const visual = (
  <div className="grid gap-4 md:grid-cols-4">
    {[
      ["1", "ps -a", "상태 확인"],
      ["2", "logs", "에러 확인"],
      ["3", "port / inspect", "설정 확인"],
      ["4", "exec", "내부 확인"],
    ].map(([step, title, detail]) => (
      <div key={step} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm font-semibold text-teal-700">STEP {step}</p>
        <h3 className="mt-1 font-semibold text-slate-950">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{detail}</p>
      </div>
    ))}
  </div>
);

const examples = [
  {
    title: "기본 장애 확인 순서",
    code: `docker ps -a
docker logs <container-name>
docker port <container-name>
docker inspect <container-name>
docker exec -it <container-name> sh`,
    description: "상태, 로그, 포트, 상세 설정, 컨테이너 내부 순서로 보면 원인을 좁히기 쉽습니다.",
  },
  {
    title: "디스크 사용량 확인",
    code: `docker system df
docker images
docker volume ls
docker container prune`,
    description: "Docker 리소스가 쌓이면 디스크를 많이 사용할 수 있습니다. prune은 삭제 명령이므로 대상 확인 후 사용합니다.",
  },
];

export default function LogsTroubleshootingPage() {
  return (
    <DockerTopicPage
      step="07"
      title="Logs / Troubleshooting"
      description="Docker 문제는 컨테이너 상태, 로그, 포트 매핑, 환경 변수, 내부 네트워크를 순서대로 보면 빠르게 좁힐 수 있습니다."
      summary={[
        "컨테이너가 안 보이면 ps -a로 종료된 컨테이너까지 확인합니다.",
        "Exited 상태라면 logs에서 종료 원인을 먼저 봅니다.",
        "접속 문제는 앱 포트, Docker 포트 매핑, 방화벽을 함께 확인합니다.",
      ]}
      visual={visual}
      sections={sections}
      examples={examples}
      previousHref="/labs/docker/compose"
      previousLabel="Docker Compose"
    />
  );
}
