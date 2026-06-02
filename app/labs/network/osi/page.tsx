import NetworkTopicPage from "../NetworkTopicPage";

const sections = [
  {
    title: "왜 계층으로 나누는가",
    points: [
      "네트워크 문제는 한 번에 전체를 보면 복잡하기 때문에 역할별로 계층을 나눠 봅니다.",
      "계층을 알면 장애가 케이블, IP, 포트, DNS, 애플리케이션 중 어디에 가까운지 빠르게 좁힐 수 있습니다.",
      "실무에서는 OSI 7계층을 외우기보다 계층별로 어떤 장비와 로그를 봐야 하는지 연결하는 것이 중요합니다.",
    ],
  },
  {
    title: "1계층 Physical",
    points: [
      "케이블, 랜카드, 전기 신호, 광 신호처럼 실제 물리 연결을 담당합니다.",
      "랜선 불량, 포트 불량, 링크 다운 같은 문제는 이 계층에 가깝습니다.",
      "서버에서는 ip link, ethtool, 스위치 포트 상태로 확인합니다.",
    ],
  },
  {
    title: "2계층 Data Link",
    points: [
      "같은 네트워크 안에서 MAC 주소를 기준으로 프레임을 전달합니다.",
      "스위치, VLAN, ARP가 이 계층과 관련됩니다.",
      "같은 대역인데 통신이 안 되면 ARP, VLAN, 스위치 포트 설정을 의심합니다.",
    ],
  },
  {
    title: "3계층 Network",
    points: [
      "IP 주소를 기준으로 다른 네트워크까지 패킷을 전달합니다.",
      "라우터, 게이트웨이, 라우팅 테이블이 핵심입니다.",
      "다른 대역으로 통신이 안 되면 IP, 서브넷, 게이트웨이, 라우팅을 확인합니다.",
    ],
  },
  {
    title: "4계층 Transport",
    points: [
      "TCP와 UDP로 프로세스 간 통신을 담당합니다.",
      "포트 번호는 서버 안에서 어떤 서비스로 보낼지 구분합니다.",
      "Connection refused, timeout, handshake 문제는 4계층 확인이 필요합니다.",
    ],
  },
  {
    title: "5~7계층 Session / Presentation / Application",
    points: [
      "실무에서는 세 계층을 묶어서 애플리케이션 계층으로 보는 경우가 많습니다.",
      "TLS, HTTP, DNS, API, 인증, JSON 응답 같은 내용이 여기에 가깝습니다.",
      "상태 코드 404, 500, 인증 실패, CORS 문제는 애플리케이션 계층에서 확인합니다.",
    ],
  },
  {
    title: "캡슐화",
    points: [
      "애플리케이션 데이터는 내려가면서 TCP 헤더, IP 헤더, 이더넷 헤더가 붙습니다.",
      "받는 쪽에서는 반대로 헤더를 벗기며 원래 데이터를 애플리케이션까지 전달합니다.",
      "패킷 캡처를 볼 때 Ethernet, IP, TCP, HTTP 순서로 보이는 이유가 이 구조 때문입니다.",
    ],
  },
  {
    title: "장애를 계층별로 보는 순서",
    points: [
      "물리 연결이 살아 있는지 확인합니다.",
      "IP 주소와 게이트웨이가 맞는지 확인합니다.",
      "대상 포트가 열려 있고 방화벽에서 허용되는지 확인합니다.",
      "DNS가 올바른 IP를 반환하는지 확인합니다.",
      "HTTP 상태 코드와 애플리케이션 로그를 확인합니다.",
    ],
  },
];

const commandGroups: { title: string; items: [string, string][] }[] = [
  {
    title: "계층별 기본 확인",
    items: [
      ["ip link", "네트워크 인터페이스가 UP 상태인지 확인합니다."],
      ["ip addr", "서버에 설정된 IP 주소를 확인합니다."],
      ["ip route", "기본 게이트웨이와 라우팅 경로를 확인합니다."],
      ["ss -tulpen", "열려 있는 포트와 연결된 프로세스를 확인합니다."],
      ["curl -I http://example.com", "HTTP 상태 코드와 응답 헤더를 확인합니다."],
    ],
  },
];

const layers = [
  ["7", "Application", "HTTP, DNS, API"],
  ["6", "Presentation", "TLS, Encoding"],
  ["5", "Session", "연결 세션 관리"],
  ["4", "Transport", "TCP, UDP, Port"],
  ["3", "Network", "IP, Router"],
  ["2", "Data Link", "MAC, Switch, VLAN"],
  ["1", "Physical", "Cable, NIC, Signal"],
];

const visual = (
  <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
    <div className="space-y-2">
      {layers.map(([number, name, detail]) => (
        <div
          key={number}
          className="grid grid-cols-[44px_1fr] overflow-hidden rounded-lg border border-slate-200 bg-slate-50"
        >
          <div className="flex items-center justify-center bg-slate-950 font-semibold text-white">
            L{number}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
            <p className="font-semibold text-slate-950">{name}</p>
            <p className="text-sm text-slate-600">{detail}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="rounded-lg bg-teal-50 p-4">
      <h3 className="font-semibold text-slate-950">읽는 법</h3>
      <p className="mt-3 leading-7 text-slate-700">
        장애를 볼 때는 아래 계층부터 확인합니다. 물리 연결, IP, 포트가 정상인데도
        안 되면 DNS, HTTP, 애플리케이션 로그로 올라갑니다.
      </p>
    </div>
  </div>
);

export default function OsiPage() {
  return (
    <NetworkTopicPage
      step="01"
      title="OSI 7계층"
      description="OSI 7계층은 네트워크 통신을 역할별로 나눠 보는 기준입니다. 장애를 볼 때 어느 계층에서 막히는지 구분하면 확인할 명령어와 로그가 명확해집니다."
      summary={[
        "네트워크 문제를 물리, IP, 포트, 애플리케이션 문제로 나눠서 봅니다.",
        "실무에서는 1~4계층과 7계층을 특히 자주 확인합니다.",
        "아래 계층이 막히면 위 계층은 정상 동작할 수 없습니다.",
      ]}
      visual={visual}
      sections={sections}
      commandGroups={commandGroups}
      nextHref="/labs/network/ethernet-arp"
      nextLabel="Ethernet / MAC / ARP / VLAN"
    />
  );
}
