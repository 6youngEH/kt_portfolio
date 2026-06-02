import DockerTopicPage from "../DockerTopicPage";

const sections = [
  {
    title: "컨테이너 파일 시스템",
    points: [
      "컨테이너는 자체 파일 시스템을 가지고 실행됩니다.",
      "컨테이너 내부에서 만든 파일은 컨테이너 삭제 시 함께 사라질 수 있습니다.",
      "DB 데이터, 업로드 파일, 로그처럼 유지해야 하는 데이터는 볼륨에 저장합니다.",
      "애플리케이션 코드와 영구 데이터는 분리해서 생각하는 것이 좋습니다.",
    ],
  },
  {
    title: "Volume",
    points: [
      "Docker volume은 컨테이너 밖에 데이터를 보관하는 Docker 관리 저장 공간입니다.",
      "컨테이너를 삭제하고 새로 만들어도 같은 볼륨을 연결하면 데이터를 유지할 수 있습니다.",
      "PostgreSQL, MySQL, Redis 같은 상태 저장 서비스에서 자주 사용합니다.",
      "docker volume ls와 inspect로 볼륨 정보를 확인할 수 있습니다.",
    ],
  },
  {
    title: "Bind Mount",
    points: [
      "Bind mount는 호스트의 특정 디렉터리를 컨테이너 안으로 연결합니다.",
      "개발 중 소스 코드를 컨테이너에 바로 반영할 때 자주 사용합니다.",
      "호스트 경로에 의존하기 때문에 운영 배포에서는 주의가 필요합니다.",
      "권한 문제가 생기면 호스트 파일 소유자와 컨테이너 실행 사용자를 함께 확인합니다.",
    ],
  },
  {
    title: "Docker Network",
    points: [
      "Docker network는 컨테이너끼리 통신하는 가상 네트워크입니다.",
      "기본 bridge 네트워크 외에 직접 네트워크를 만들어 컨테이너들을 묶을 수 있습니다.",
      "같은 사용자 정의 네트워크 안에서는 컨테이너 이름으로 서로 접근할 수 있습니다.",
      "프론트, 백엔드, DB 컨테이너를 함께 묶을 때 중요합니다.",
    ],
  },
  {
    title: "컨테이너 간 통신",
    points: [
      "컨테이너 A에서 컨테이너 B로 접근할 때 localhost는 자기 자신을 의미합니다.",
      "다른 컨테이너로 접근하려면 같은 네트워크에 두고 컨테이너 이름 또는 서비스 이름을 사용합니다.",
      "Compose에서는 서비스 이름이 DNS 이름처럼 동작합니다.",
      "DB_HOST=postgres처럼 컨테이너 이름을 환경 변수로 넣는 패턴이 자주 쓰입니다.",
    ],
  },
  {
    title: "포트 공개와 내부 통신",
    points: [
      "컨테이너끼리 같은 Docker network 안에서 통신할 때는 호스트 포트 공개가 꼭 필요하지 않습니다.",
      "외부 사용자가 접근해야 하는 서비스만 -p로 호스트에 공개합니다.",
      "DB는 보통 외부에 직접 공개하지 않고 백엔드 컨테이너만 접근하게 둡니다.",
      "보안을 위해 공개 포트와 내부 전용 포트를 구분합니다.",
    ],
  },
];

const visual = (
  <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <div className="grid gap-3 md:grid-cols-3">
        {[
          ["frontend", "port 3000"],
          ["backend", "port 8080"],
          ["postgres", "volume 연결"],
        ].map(([title, detail]) => (
          <div key={title} className="rounded-lg bg-white p-4 text-center shadow-sm">
            <h3 className="font-semibold text-slate-950">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{detail}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 rounded bg-slate-950 p-3 font-mono text-sm text-slate-50">
        app-network 안에서는 backend {"->"} postgres 로 접근
      </p>
    </div>
    <div className="rounded-lg bg-teal-50 p-4">
      <h3 className="font-semibold text-slate-950">핵심</h3>
      <p className="mt-3 leading-7 text-slate-700">
        볼륨은 데이터를 유지하고, 네트워크는 컨테이너끼리 서로 찾고 통신하게
        만드는 역할입니다.
      </p>
    </div>
  </div>
);

const examples = [
  {
    title: "볼륨 사용",
    code: `docker volume create postgres-data
docker run -d \\
  --name postgres \\
  -v postgres-data:/var/lib/postgresql/data \\
  postgres:16`,
    description: "postgres-data 볼륨을 PostgreSQL 데이터 디렉터리에 연결해 데이터를 유지합니다.",
  },
  {
    title: "네트워크 생성과 연결",
    code: `docker network create app-network
docker run -d --name backend --network app-network backend:dev
docker run -d --name postgres --network app-network postgres:16`,
    description: "같은 Docker network에 있는 컨테이너는 컨테이너 이름으로 서로 접근할 수 있습니다.",
  },
];

export default function VolumeNetworkPage() {
  return (
    <DockerTopicPage
      step="05"
      title="Volume / Network"
      description="컨테이너는 삭제될 수 있는 실행 단위입니다. 데이터는 볼륨으로 유지하고, 컨테이너 간 통신은 Docker network로 묶어서 관리합니다."
      summary={[
        "볼륨은 컨테이너 삭제와 별개로 데이터를 유지합니다.",
        "Bind mount는 호스트 디렉터리를 컨테이너에 연결합니다.",
        "Docker network 안에서는 컨테이너 이름으로 통신할 수 있습니다.",
      ]}
      visual={visual}
      sections={sections}
      examples={examples}
      previousHref="/labs/docker/run-port-env"
      previousLabel="Run / Port / Env"
      nextHref="/labs/docker/compose"
      nextLabel="Docker Compose"
    />
  );
}
