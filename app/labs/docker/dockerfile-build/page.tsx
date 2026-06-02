import DockerTopicPage from "../DockerTopicPage";

const sections = [
  {
    title: "Dockerfile",
    points: [
      "Dockerfile은 이미지를 만들기 위한 설계도입니다.",
      "베이스 이미지, 작업 디렉터리, 파일 복사, 의존성 설치, 실행 명령을 순서대로 적습니다.",
      "Dockerfile을 잘 작성하면 같은 방식으로 반복 가능한 빌드를 만들 수 있습니다.",
      "빌드 결과는 이미지가 되고, 이미지를 실행하면 컨테이너가 됩니다.",
    ],
  },
  {
    title: "FROM",
    points: [
      "FROM은 베이스 이미지를 지정합니다.",
      "Node 앱은 node 이미지, 정적 웹은 nginx 이미지처럼 목적에 맞는 베이스 이미지를 사용합니다.",
      "운영에서는 latest보다 명확한 버전 태그를 쓰는 편이 안전합니다.",
      "베이스 이미지가 바뀌면 빌드 결과도 크게 달라질 수 있습니다.",
    ],
  },
  {
    title: "WORKDIR / COPY",
    points: [
      "WORKDIR은 컨테이너 내부 작업 디렉터리를 지정합니다.",
      "COPY는 호스트의 파일을 이미지 안으로 복사합니다.",
      "package.json을 먼저 복사하고 npm install을 실행하면 의존성 캐시를 활용하기 좋습니다.",
      "소스 전체는 의존성 설치 이후에 복사하는 패턴이 자주 쓰입니다.",
    ],
  },
  {
    title: "RUN / CMD",
    points: [
      "RUN은 이미지 빌드 중 실행되는 명령입니다.",
      "CMD는 컨테이너가 시작될 때 기본으로 실행되는 명령입니다.",
      "npm install은 RUN, npm start는 CMD에 들어가는 경우가 많습니다.",
      "컨테이너의 주 프로세스가 종료되면 컨테이너도 종료됩니다.",
    ],
  },
  {
    title: "Build Context",
    points: [
      "docker build 명령의 마지막 경로는 build context입니다.",
      "Dockerfile에서 COPY할 수 있는 파일은 build context 안에 있어야 합니다.",
      ".dockerignore로 node_modules, .next, 로그 파일 등을 빌드 context에서 제외할 수 있습니다.",
      "불필요한 파일이 context에 들어가면 빌드가 느려지고 이미지 관리가 어려워집니다.",
    ],
  },
  {
    title: "Layer Cache",
    points: [
      "Docker는 빌드 단계별 layer를 캐시합니다.",
      "앞 단계가 바뀌면 뒤 단계 캐시도 무효화될 수 있습니다.",
      "자주 바뀌지 않는 의존성 설치를 앞쪽에 두면 빌드가 빨라집니다.",
      "빌드가 이상하면 --no-cache 옵션으로 캐시 없이 다시 빌드해 볼 수 있습니다.",
    ],
  },
];

const visual = (
  <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4">
    <div className="grid min-w-[760px] grid-cols-[1fr_36px_1fr_36px_1fr_36px_1fr] items-center text-center">
      {[
        ["Dockerfile", "명령 순서"],
        ["docker build", "layer 생성"],
        ["Image", "태그 지정"],
        ["docker run", "컨테이너 실행"],
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
    title: "Next.js용 기본 Dockerfile 예시",
    code: `FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]`,
    description: "실제 운영용으로는 standalone 설정 등을 더 다듬을 수 있지만, 빌드 흐름을 이해하기 좋은 기본 구조입니다.",
  },
  {
    title: "이미지 빌드",
    code: `docker build -t kt-portfolio:dev .
docker images
docker run -p 3000:3000 kt-portfolio:dev`,
    description: "현재 디렉터리를 build context로 사용해 kt-portfolio:dev 이미지를 만듭니다.",
  },
];

export default function DockerfileBuildPage() {
  return (
    <DockerTopicPage
      step="03"
      title="Dockerfile / Build"
      description="Dockerfile은 이미지를 만드는 설계도입니다. 빌드 단계, 캐시, 파일 복사 순서를 이해하면 이미지 빌드 문제를 훨씬 쉽게 해결할 수 있습니다."
      summary={[
        "Dockerfile은 이미지를 만드는 명령 목록입니다.",
        "RUN은 빌드 중 실행되고, CMD는 컨테이너 시작 시 실행됩니다.",
        "빌드 캐시를 고려해 자주 바뀌는 파일은 뒤쪽에 배치합니다.",
      ]}
      visual={visual}
      sections={sections}
      examples={examples}
      previousHref="/labs/docker/basic-commands"
      previousLabel="기본 명령어"
      nextHref="/labs/docker/run-port-env"
      nextLabel="Run / Port / Env"
    />
  );
}
