import NetworkTopicPage from "../NetworkTopicPage";

const sections = [
  {
    title: "포트의 의미",
    points: [
      "IP 주소가 서버를 찾는 값이라면, 포트는 서버 안의 어떤 프로그램으로 보낼지 정하는 값입니다.",
      "한 서버에서 Nginx는 80/443, Next.js는 3000, Spring Boot는 8080처럼 여러 서비스가 다른 포트를 사용할 수 있습니다.",
      "서버 프로세스가 포트를 LISTEN 상태로 열고 있어야 외부 요청을 받을 수 있습니다.",
      "포트가 닫혀 있으면 connection refused가 발생할 수 있습니다.",
    ],
  },
  {
    title: "TCP",
    points: [
      "TCP는 연결을 맺고 데이터를 주고받는 방식입니다.",
      "데이터 순서 보장, 재전송, 흐름 제어를 제공해서 신뢰성이 높습니다.",
      "HTTP, HTTPS, SSH, MySQL, PostgreSQL은 대부분 TCP를 사용합니다.",
      "TCP 연결은 SYN, SYN-ACK, ACK 3-way handshake로 시작합니다.",
    ],
  },
  {
    title: "UDP",
    points: [
      "UDP는 연결을 맺지 않고 데이터를 보내는 방식입니다.",
      "TCP보다 단순하고 빠르지만 전송 보장이나 순서 보장이 없습니다.",
      "DNS, DHCP, 일부 스트리밍, 게임 트래픽에서 자주 사용합니다.",
      "UDP는 응답이 없으면 방화벽 문제인지 서비스 문제인지 구분이 TCP보다 어려울 수 있습니다.",
    ],
  },
  {
    title: "Well-known Port",
    points: [
      "22는 SSH, 53은 DNS, 80은 HTTP, 443은 HTTPS입니다.",
      "3306은 MySQL, 5432는 PostgreSQL, 6379는 Redis에서 자주 사용합니다.",
      "포트 번호만 보고도 어떤 서비스일 가능성이 높은지 추정할 수 있습니다.",
      "운영에서는 불필요한 포트를 열어 두지 않는 것이 기본입니다.",
    ],
  },
  {
    title: "LISTEN과 ESTABLISHED",
    points: [
      "LISTEN은 서버가 해당 포트에서 요청을 받을 준비가 된 상태입니다.",
      "ESTABLISHED는 클라이언트와 서버 사이 연결이 이미 맺어진 상태입니다.",
      "웹 앱 장애를 볼 때는 먼저 LISTEN 상태인지 보고, 요청이 들어오면 ESTABLISHED가 생기는지 확인합니다.",
      "프로세스가 살아 있어도 기대한 IP에 바인딩되어 있지 않으면 외부 접속이 안 될 수 있습니다.",
    ],
  },
  {
    title: "0.0.0.0과 127.0.0.1",
    points: [
      "127.0.0.1에만 바인딩된 서비스는 같은 서버 내부에서만 접속됩니다.",
      "0.0.0.0에 바인딩된 서비스는 서버의 모든 네트워크 인터페이스에서 요청을 받을 수 있습니다.",
      "개발 서버가 localhost에만 떠 있으면 외부 브라우저에서 접속되지 않을 수 있습니다.",
      "외부 공개가 필요하면 앱 바인딩 주소와 방화벽을 같이 확인합니다.",
    ],
  },
  {
    title: "Connection refused와 Timeout",
    points: [
      "Connection refused는 대상까지 갔지만 해당 포트에서 받는 서비스가 없을 때 자주 발생합니다.",
      "Timeout은 중간 네트워크나 방화벽에서 막혀 응답 자체가 오지 않을 때 자주 발생합니다.",
      "refused는 서버 프로세스와 포트를 먼저 보고, timeout은 방화벽과 라우팅을 먼저 봅니다.",
      "같은 증상처럼 보여도 확인 순서가 달라집니다.",
    ],
  },
  {
    title: "NAT와 포트 매핑",
    points: [
      "NAT는 내부 사설 IP와 외부 공인 IP 사이 주소 변환을 수행합니다.",
      "Docker의 -p 3001:3000은 외부 3001번 요청을 컨테이너 내부 3000번 포트로 전달한다는 뜻입니다.",
      "클라우드 로드밸런서도 외부 443 요청을 내부 앱 포트로 넘길 수 있습니다.",
      "외부 포트와 내부 앱 포트가 다를 수 있다는 점을 항상 구분해야 합니다.",
    ],
  },
];

const commandGroups: { title: string; items: [string, string][] }[] = [
  {
    title: "포트 확인",
    items: [
      ["ss -tulpen", "TCP/UDP LISTEN 포트와 프로세스를 확인합니다."],
      ["ss -tan", "TCP 연결 상태를 숫자 주소 기준으로 확인합니다."],
      ["lsof -i :3000", "3000번 포트를 사용하는 프로세스를 찾습니다."],
      ["nc -vz 127.0.0.1 3000", "특정 TCP 포트 접속 가능 여부를 확인합니다."],
      ["curl -I http://localhost:3000", "HTTP 서비스가 정상 응답하는지 확인합니다."],
    ],
  },
];

const visual = (
  <div className="grid gap-4 lg:grid-cols-2">
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <h3 className="font-semibold text-slate-950">TCP 연결</h3>
      <div className="mt-4 grid gap-3 text-sm">
        {["Client -> SYN -> Server", "Client <- SYN/ACK <- Server", "Client -> ACK -> Server", "데이터 전송"].map(
          (step) => (
            <div key={step} className="rounded bg-white px-3 py-2 font-mono text-slate-700">
              {step}
            </div>
          ),
        )}
      </div>
      <p className="mt-4 leading-7 text-slate-700">
        TCP는 연결을 먼저 만든 뒤 데이터를 주고받습니다. 웹, SSH, DB 접속처럼
        정확성이 중요한 통신에 많이 사용합니다.
      </p>
    </div>
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <h3 className="font-semibold text-slate-950">UDP 전송</h3>
      <div className="mt-4 grid gap-3 text-sm">
        {["Client -> Datagram -> Server", "Client -> Datagram -> Server", "응답 보장 없음"].map(
          (step) => (
            <div key={step} className="rounded bg-white px-3 py-2 font-mono text-slate-700">
              {step}
            </div>
          ),
        )}
      </div>
      <p className="mt-4 leading-7 text-slate-700">
        UDP는 연결 과정이 단순합니다. 빠르지만 순서와 재전송을 보장하지 않아서
        DNS나 실시간 트래픽에 자주 쓰입니다.
      </p>
    </div>
  </div>
);

export default function TcpUdpPage() {
  return (
    <NetworkTopicPage
      step="05"
      title="TCP / UDP / Port"
      description="TCP, UDP, 포트는 실제 서비스 연결을 이해하는 핵심입니다. 서버에서 앱이 떠 있어도 포트와 바인딩, 방화벽이 맞지 않으면 외부 요청은 도착하지 않습니다."
      summary={[
        "IP가 서버 주소라면 포트는 서버 안의 서비스 번호입니다.",
        "TCP는 연결과 신뢰성을 중시하고, UDP는 단순함과 속도를 중시합니다.",
        "접속 장애는 refused와 timeout을 구분하면 확인 순서가 빨라집니다.",
      ]}
      visual={visual}
      sections={sections}
      commandGroups={commandGroups}
      previousHref="/labs/network/routing-nat"
      previousLabel="Routing / Gateway / NAT"
      nextHref="/labs/network/dns"
      nextLabel="DNS"
    />
  );
}
