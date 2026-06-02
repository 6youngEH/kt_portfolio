import DockerTopicPage from "../DockerTopicPage";

const sections = [
  {
    title: "Docker Compose",
    points: [
      "Docker Compose는 여러 컨테이너 실행 설정을 하나의 YAML 파일로 관리하는 도구입니다.",
      "프론트엔드, 백엔드, DB처럼 여러 서비스가 함께 필요한 개발 환경에 유용합니다.",
      "docker run 옵션이 길어질수록 compose 파일로 옮기면 읽기 쉬워집니다.",
      "서비스, 포트, 환경 변수, 볼륨, 네트워크를 한 곳에서 정의할 수 있습니다.",
    ],
  },
  {
    title: "services",
    points: [
      "services 아래에 실행할 컨테이너들을 정의합니다.",
      "각 서비스는 image를 사용하거나 build로 직접 이미지를 만들 수 있습니다.",
      "Compose에서는 서비스 이름이 네트워크 안에서 DNS 이름처럼 사용됩니다.",
      "예를 들어 backend 서비스는 postgres라는 이름으로 DB에 접근할 수 있습니다.",
    ],
  },
  {
    title: "ports",
    points: [
      "ports는 호스트 포트와 컨테이너 포트를 연결합니다.",
      "\"3001:3000\"은 호스트 3001번을 컨테이너 3000번으로 연결합니다.",
      "외부에서 접근해야 하는 서비스만 ports를 공개합니다.",
      "컨테이너끼리 내부 통신만 필요하면 expose 또는 내부 포트만으로 충분할 수 있습니다.",
    ],
  },
  {
    title: "environment",
    points: [
      "environment는 컨테이너에 환경 변수를 전달합니다.",
      "DB 주소, 계정, 실행 모드, API URL 같은 값을 넣습니다.",
      ".env 파일과 함께 쓰면 환경별 설정을 관리하기 쉽습니다.",
      "민감한 비밀 값은 저장소에 올리지 않도록 주의합니다.",
    ],
  },
  {
    title: "volumes",
    points: [
      "volumes는 컨테이너 데이터 유지나 호스트 디렉터리 연결에 사용합니다.",
      "DB 데이터 디렉터리는 named volume으로 관리하는 경우가 많습니다.",
      "개발 중에는 소스 디렉터리를 bind mount해서 변경 사항을 바로 반영할 수 있습니다.",
      "운영과 개발의 volume 전략은 다를 수 있습니다.",
    ],
  },
  {
    title: "depends_on",
    points: [
      "depends_on은 서비스 시작 순서를 지정합니다.",
      "DB 컨테이너가 먼저 생성되도록 할 수 있지만, 앱이 DB 준비 완료까지 자동으로 기다리는 것은 아닙니다.",
      "실제 준비 상태는 healthcheck나 재시도 로직으로 다루는 것이 좋습니다.",
      "컨테이너 생성 순서와 서비스 사용 가능 상태는 다릅니다.",
    ],
  },
];

const visual = (
  <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4">
    <div className="grid min-w-[760px] grid-cols-[1fr_36px_1fr_36px_1fr] items-center text-center">
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <h3 className="font-semibold text-slate-950">compose.yml</h3>
        <p className="mt-2 text-sm text-slate-600">서비스 정의</p>
      </div>
      <div className="font-mono text-xl text-teal-700">-&gt;</div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <h3 className="font-semibold text-slate-950">docker compose up</h3>
        <p className="mt-2 text-sm text-slate-600">전체 실행</p>
      </div>
      <div className="font-mono text-xl text-teal-700">-&gt;</div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <h3 className="font-semibold text-slate-950">services</h3>
        <p className="mt-2 text-sm text-slate-600">web / api / db</p>
      </div>
    </div>
  </div>
);

const examples = [
  {
    title: "compose.yml 예시",
    code: `services:
  web:
    build: .
    ports:
      - "3001:3000"
    environment:
      NODE_ENV: production

  postgres:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: example
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:`,
    description: "웹 앱과 PostgreSQL을 함께 실행하는 기본 Compose 구조입니다.",
  },
  {
    title: "Compose 명령어",
    code: `docker compose up -d
docker compose ps
docker compose logs -f web
docker compose down`,
    description: "Compose는 프로젝트 단위로 여러 서비스를 실행하고 로그를 확인하고 종료할 수 있습니다.",
  },
];

export default function ComposePage() {
  return (
    <DockerTopicPage
      step="06"
      title="Docker Compose"
      description="Docker Compose는 여러 컨테이너를 하나의 파일로 정의하고 함께 실행하는 방식입니다. 개발 환경과 작은 서비스 묶음을 관리할 때 특히 유용합니다."
      summary={[
        "Compose는 여러 docker run 설정을 YAML 파일로 정리합니다.",
        "서비스 이름은 같은 네트워크에서 주소처럼 사용할 수 있습니다.",
        "up, ps, logs, down 흐름으로 전체 서비스를 관리합니다.",
      ]}
      visual={visual}
      sections={sections}
      examples={examples}
      previousHref="/labs/docker/volume-network"
      previousLabel="Volume / Network"
      nextHref="/labs/docker/logs-troubleshooting"
      nextLabel="Logs / Troubleshooting"
    />
  );
}
