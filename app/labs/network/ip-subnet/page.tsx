import NetworkTopicPage from "../NetworkTopicPage";

const sections = [
  {
    title: "IP 주소의 역할",
    points: [
      "IP 주소는 네트워크에서 장비를 구분하는 논리 주소입니다.",
      "IPv4는 192.168.0.10처럼 0~255 사이 숫자 4개로 표현합니다.",
      "서버에 접속한다는 것은 결국 대상 IP 주소로 패킷을 보내는 것입니다.",
      "localhost와 127.0.0.1은 자기 자신을 의미합니다.",
    ],
  },
  {
    title: "공인 IP와 사설 IP",
    points: [
      "공인 IP는 인터넷에서 직접 라우팅되는 주소입니다.",
      "사설 IP는 내부망에서만 사용하는 주소이고 인터넷에 직접 노출되지 않습니다.",
      "대표 사설 대역은 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16입니다.",
      "집 공유기, 회사 내부망, 클라우드 VPC 내부 서버는 사설 IP를 자주 사용합니다.",
    ],
  },
  {
    title: "서브넷 마스크",
    points: [
      "서브넷 마스크는 IP 주소에서 네트워크 부분과 호스트 부분을 나누는 기준입니다.",
      "192.168.10.25/24에서 /24는 앞 24비트가 네트워크 부분이라는 뜻입니다.",
      "/24는 보통 255.255.255.0으로 표현하고, 같은 192.168.10.x 대역이 같은 네트워크가 됩니다.",
      "같은 네트워크 안에서는 게이트웨이 없이 직접 통신하고, 다른 네트워크로 갈 때는 게이트웨이를 거칩니다.",
    ],
  },
  {
    title: "CIDR 읽기",
    points: [
      "CIDR은 192.168.10.0/24처럼 IP와 prefix 길이를 함께 쓰는 표기법입니다.",
      "/24는 전체 32비트 중 24비트가 네트워크이고 8비트가 호스트입니다.",
      "호스트 비트가 8개면 2의 8승인 256개 주소가 있고, 보통 네트워크 주소와 브로드캐스트 주소를 제외합니다.",
      "/24는 실사용 호스트가 보통 254개, /25는 126개, /26은 62개 정도입니다.",
    ],
  },
  {
    title: "게이트웨이",
    points: [
      "게이트웨이는 다른 네트워크로 나갈 때 거치는 출구입니다.",
      "서버가 외부 인터넷으로 나가지 못하면 기본 게이트웨이 설정을 확인해야 합니다.",
      "ip route에서 default via로 표시되는 주소가 기본 게이트웨이입니다.",
      "IP와 서브넷은 맞는데 외부 통신만 안 되면 게이트웨이, NAT, 방화벽을 봅니다.",
    ],
  },
  {
    title: "브로드캐스트와 네트워크 주소",
    points: [
      "네트워크 주소는 해당 대역 자체를 나타내는 주소입니다.",
      "브로드캐스트 주소는 같은 네트워크의 모든 호스트에게 보내는 주소입니다.",
      "192.168.10.0/24에서 네트워크 주소는 192.168.10.0, 브로드캐스트 주소는 192.168.10.255입니다.",
      "일반 서버 IP로는 보통 네트워크 주소와 브로드캐스트 주소를 사용하지 않습니다.",
    ],
  },
  {
    title: "ARP",
    points: [
      "ARP는 같은 네트워크 안에서 IP 주소에 해당하는 MAC 주소를 찾는 프로토콜입니다.",
      "IP는 알고 있지만 실제 이더넷 프레임을 보내려면 MAC 주소가 필요합니다.",
      "같은 대역인데 통신이 이상하면 ARP 테이블과 중복 IP를 확인합니다.",
      "ip neigh 명령어로 리눅스의 ARP 이웃 정보를 볼 수 있습니다.",
    ],
  },
  {
    title: "자주 나는 실수",
    points: [
      "IP 주소는 맞지만 서브넷 마스크가 달라 같은 네트워크로 판단하지 못하는 경우가 있습니다.",
      "기본 게이트웨이가 없어서 외부망으로 나가지 못하는 경우가 있습니다.",
      "서버에는 사설 IP만 있는데 외부에서 바로 접속하려고 하는 경우가 있습니다.",
      "클라우드에서는 라우팅 테이블과 보안 그룹까지 같이 확인해야 합니다.",
    ],
  },
];

const commandGroups: { title: string; items: [string, string][] }[] = [
  {
    title: "IP와 라우팅 확인",
    items: [
      ["ip addr", "인터페이스별 IP 주소와 prefix 길이를 확인합니다."],
      ["ip route", "라우팅 테이블과 기본 게이트웨이를 확인합니다."],
      ["ip neigh", "ARP 이웃 테이블을 확인합니다."],
      ["ping 192.168.10.1", "게이트웨이나 같은 대역 장비까지 통신되는지 확인합니다."],
      ["traceroute 8.8.8.8", "외부 목적지까지 거치는 라우팅 경로를 확인합니다."],
    ],
  },
];

const subnetRows = [
  ["CIDR", "마스크", "주소 수", "실사용"],
  ["/24", "255.255.255.0", "256", "254"],
  ["/25", "255.255.255.128", "128", "126"],
  ["/26", "255.255.255.192", "64", "62"],
];

const visual = (
  <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <h3 className="font-semibold text-slate-950">192.168.10.25/24 예시</h3>
      <div className="mt-4 grid gap-2 text-sm">
        <div className="rounded bg-white p-3">
          <span className="font-semibold text-teal-700">네트워크 주소</span>
          <span className="ml-3 font-mono">192.168.10.0</span>
        </div>
        <div className="rounded bg-white p-3">
          <span className="font-semibold text-teal-700">사용 가능한 IP</span>
          <span className="ml-3 font-mono">192.168.10.1 ~ 192.168.10.254</span>
        </div>
        <div className="rounded bg-white p-3">
          <span className="font-semibold text-teal-700">브로드캐스트</span>
          <span className="ml-3 font-mono">192.168.10.255</span>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
        <span className="rounded bg-slate-950 px-3 py-2 font-mono text-white">192.168.10</span>
        <span className="text-slate-500">네트워크 부분</span>
        <span className="rounded bg-teal-600 px-3 py-2 font-mono text-white">25</span>
        <span className="text-slate-500">호스트 부분</span>
      </div>
    </div>
    <div className="overflow-hidden rounded-lg border border-slate-200">
      {subnetRows.map((row, index) => (
        <div
          key={row.join("-")}
          className={`grid grid-cols-4 text-sm ${index === 0 ? "bg-slate-950 font-semibold text-white" : "bg-white text-slate-700"}`}
        >
          {row.map((cell) => (
            <div key={cell} className="border-b border-r border-slate-200 px-3 py-3">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default function IpSubnetPage() {
  return (
    <NetworkTopicPage
      step="03"
      title="IP 주소와 서브넷"
      description="IP와 서브넷은 네트워크의 주소 체계입니다. 같은 네트워크인지, 게이트웨이를 거쳐야 하는지, 외부에서 접근 가능한 주소인지 판단하는 기준입니다."
      summary={[
        "IP는 장비의 주소이고, 서브넷은 같은 네트워크 범위를 정합니다.",
        "같은 대역이면 직접 통신하고, 다른 대역이면 게이트웨이를 거칩니다.",
        "CIDR 숫자가 커질수록 네트워크는 더 작아집니다.",
      ]}
      visual={visual}
      sections={sections}
      commandGroups={commandGroups}
      previousHref="/labs/network/ethernet-arp"
      previousLabel="Ethernet / MAC / ARP / VLAN"
      nextHref="/labs/network/routing-nat"
      nextLabel="Routing / Gateway / NAT"
    />
  );
}
