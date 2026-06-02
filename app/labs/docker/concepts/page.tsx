import DockerTopicPage from "../DockerTopicPage";

const sections = [
  {
    title: "Docker가 해결하는 문제",
    points: [
      "개발 환경과 운영 환경이 달라서 생기는 실행 문제를 줄입니다.",
      "애플리케이션과 필요한 실행 환경을 이미지로 함께 포장합니다.",
      "서버에 같은 이미지를 실행하면 비슷한 환경에서 동작하게 만들 수 있습니다.",
      "배포, 테스트, 로컬 개발 환경을 더 일관되게 관리할 수 있습니다.",
    ],
  },
  {
    title: "Image",
    points: [
      "이미지는 애플리케이션 실행 환경을 포장한 읽기 전용 템플릿입니다.",
      "Node.js 버전, OS 패키지, 소스 코드, 실행 명령이 이미지 안에 포함될 수 있습니다.",
      "이미지는 Dockerfile로 만들거나 Docker Hub 같은 registry에서 받을 수 있습니다.",
      "같은 이미지로 여러 컨테이너를 실행할 수 있습니다.",
    ],
  },
  {
    title: "Container",
    points: [
      "컨테이너는 이미지를 실제로 실행한 프로세스입니다.",
      "컨테이너는 독립된 파일 시스템, 프로세스 공간, 네트워크 설정을 가집니다.",
      "컨테이너를 삭제해도 이미지는 남아 있을 수 있습니다.",
      "컨테이너 내부 변경은 기본적으로 컨테이너 수명에 묶이므로 중요한 데이터는 볼륨에 둡니다.",
    ],
  },
  {
    title: "Registry",
    points: [
      "Registry는 Docker 이미지를 저장하고 내려받는 저장소입니다.",
      "Docker Hub, GitHub Container Registry, AWS ECR 같은 서비스가 있습니다.",
      "docker pull은 registry에서 이미지를 내려받습니다.",
      "docker push는 내가 만든 이미지를 registry에 업로드합니다.",
    ],
  },
  {
    title: "Layer",
    points: [
      "이미지는 여러 layer가 쌓여 만들어집니다.",
      "Dockerfile의 각 명령은 새로운 layer를 만들 수 있습니다.",
      "변경되지 않은 layer는 캐시되어 빌드 속도를 높입니다.",
      "자주 바뀌는 파일은 Dockerfile 뒤쪽에 배치하는 것이 빌드 캐시에 유리합니다.",
    ],
  },
  {
    title: "VM과 차이",
    points: [
      "VM은 가상 하드웨어 위에 게스트 OS를 올리는 방식입니다.",
      "컨테이너는 호스트 OS 커널을 공유하면서 프로세스를 격리합니다.",
      "컨테이너는 VM보다 가볍고 시작이 빠른 편입니다.",
      "보안과 격리 수준은 VM과 컨테이너의 차이를 이해하고 선택해야 합니다.",
    ],
  },
];

const visual = (
  <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4">
    <div className="grid min-w-[720px] grid-cols-[1fr_36px_1fr_36px_1fr_36px_1fr] items-center text-center">
      {[
        ["Dockerfile", "설계도"],
        ["Image", "실행 환경 패키지"],
        ["Container", "실행 중인 프로세스"],
        ["Service", "사용자가 접속"],
      ].map(([title, detail], index) => (
        <div key={title} className="contents">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-slate-950">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{detail}</p>
          </div>
          {index < 3 ? <div className="font-mono text-xl text-teal-700">-&gt;</div> : null}
        </div>
      ))}
    </div>
  </div>
);

const examples = [
  {
    title: "이미지와 컨테이너 확인",
    code: `docker images
docker ps
docker ps -a`,
    description: "images는 저장된 이미지, ps는 실행 중인 컨테이너, ps -a는 종료된 컨테이너까지 보여줍니다.",
  },
];

export default function DockerConceptsPage() {
  return (
    <DockerTopicPage
      step="01"
      title="Image / Container 개념"
      description="Docker를 이해할 때 가장 먼저 이미지와 컨테이너를 구분해야 합니다. 이미지는 실행 환경의 패키지이고, 컨테이너는 그 이미지를 실제로 실행한 상태입니다."
      summary={[
        "이미지는 실행 환경을 포장한 템플릿입니다.",
        "컨테이너는 이미지를 실행한 프로세스입니다.",
        "Registry는 이미지를 저장하고 내려받는 저장소입니다.",
      ]}
      visual={visual}
      sections={sections}
      examples={examples}
      nextHref="/labs/docker/basic-commands"
      nextLabel="기본 명령어"
    />
  );
}
