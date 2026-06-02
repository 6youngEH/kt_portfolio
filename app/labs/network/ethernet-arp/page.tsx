import NetworkTopicPage from "../NetworkTopicPage";

const sections = [
  {
    title: "Ethernet",
    points: [
      "Ethernet은 같은 네트워크 안에서 데이터를 프레임 단위로 전달하는 대표적인 2계층 기술입니다.",
      "IP 패킷은 실제 전송될 때 이더넷 프레임 안에 담겨서 이동합니다.",
      "스위치는 MAC 주소 테이블을 보고 어느 포트로 프레임을 보낼지 결정합니다.",
      "같은 사무실, 같은 VLAN, 같은 서브넷 안의 통신을 이해할 때 중요합니다.",
    ],
  },
  {
    title: "MAC 주소",
    points: [
      "MAC 주소는 네트워크 카드에 붙은 하드웨어 주소입니다.",
      "IP 주소는 바뀔 수 있지만 MAC 주소는 장비의 인터페이스를 식별하는 데 사용됩니다.",
      "같은 네트워크 안에서는 최종적으로 목적지 MAC 주소를 알아야 프레임을 보낼 수 있습니다.",
      "ip link 명령어에서 link/ether 값으로 MAC 주소를 확인할 수 있습니다.",
    ],
  },
  {
    title: "ARP",
    points: [
      "ARP는 IP 주소에 해당하는 MAC 주소를 찾는 프로토콜입니다.",
      "예를 들어 192.168.10.20으로 보내려면 먼저 그 IP의 MAC 주소를 알아야 합니다.",
      "ARP 요청은 같은 네트워크 안에 브로드캐스트로 뿌려지고, 해당 IP를 가진 장비가 응답합니다.",
      "IP 충돌이나 ARP 캐시 문제는 같은 대역 통신 장애를 만들 수 있습니다.",
    ],
  },
  {
    title: "VLAN",
    points: [
      "VLAN은 하나의 물리 스위치를 여러 논리 네트워크처럼 나누는 기술입니다.",
      "같은 스위치에 꽂혀 있어도 VLAN이 다르면 기본적으로 서로 직접 통신하지 못합니다.",
      "VLAN 간 통신은 라우터나 L3 스위치가 필요합니다.",
      "회사망에서 부서망, 서버망, 관리망을 분리할 때 자주 사용합니다.",
    ],
  },
  {
    title: "같은 대역인데 통신이 안 될 때",
    points: [
      "IP와 서브넷 마스크가 같은 네트워크로 계산되는지 확인합니다.",
      "ARP 테이블에 대상 IP의 MAC 주소가 잡히는지 확인합니다.",
      "스위치 포트가 올바른 VLAN에 속해 있는지 확인합니다.",
      "중복 IP가 있는지, 방화벽이 내부 통신을 막는지 확인합니다.",
    ],
  },
  {
    title: "2계층과 3계층 구분",
    points: [
      "2계층은 MAC 주소 기반으로 같은 네트워크 안에서 전달합니다.",
      "3계층은 IP 주소 기반으로 다른 네트워크까지 라우팅합니다.",
      "같은 서브넷이면 ARP로 MAC을 찾아 직접 보내고, 다른 서브넷이면 게이트웨이 MAC을 찾아 보냅니다.",
      "이 구분을 알면 ARP 문제인지 라우팅 문제인지 나누기 쉽습니다.",
    ],
  },
];

const commandGroups: { title: string; items: [string, string][] }[] = [
  {
    title: "2계층 확인",
    items: [
      ["ip link", "네트워크 인터페이스 상태와 MAC 주소를 확인합니다."],
      ["ip neigh", "ARP 이웃 테이블을 확인합니다."],
      ["arp -n", "ARP 캐시를 숫자 주소 기준으로 확인합니다."],
      ["ping 192.168.10.20", "같은 대역 장비와 통신되는지 확인합니다."],
      ["tcpdump -n arp", "ARP 요청과 응답 패킷을 캡처합니다."],
    ],
  },
];

const visual = (
  <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <div className="grid gap-3 md:grid-cols-3">
        {[
          ["Server A", "IP 192.168.10.10", "MAC aa:aa"],
          ["Switch", "MAC table", "포트별 장비 기억"],
          ["Server B", "IP 192.168.10.20", "MAC bb:bb"],
        ].map(([title, line1, line2]) => (
          <div key={title} className="rounded bg-white p-4 text-center shadow-sm">
            <h3 className="font-semibold text-slate-950">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{line1}</p>
            <p className="text-sm text-slate-600">{line2}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded bg-slate-950 p-4 font-mono text-sm text-slate-50">
        ARP: 192.168.10.20 누구야? {"->"} bb:bb가 응답
      </div>
    </div>
    <div className="rounded-lg bg-teal-50 p-4">
      <h3 className="font-semibold text-slate-950">핵심</h3>
      <p className="mt-3 leading-7 text-slate-700">
        같은 네트워크 안에서는 IP만으로 바로 보내지 않고, ARP로 MAC 주소를 찾은
        뒤 이더넷 프레임을 보냅니다.
      </p>
    </div>
  </div>
);

export default function EthernetArpPage() {
  return (
    <NetworkTopicPage
      step="02"
      title="Ethernet / MAC / ARP / VLAN"
      description="2계층은 같은 네트워크 안에서 장비들이 서로를 찾고 프레임을 전달하는 영역입니다. IP를 배우기 전에 MAC, ARP, VLAN을 알면 같은 대역 통신 문제를 더 잘 구분할 수 있습니다."
      summary={[
        "같은 네트워크 안에서는 MAC 주소를 기준으로 프레임이 전달됩니다.",
        "ARP는 IP 주소를 MAC 주소로 바꿔 주는 과정입니다.",
        "VLAN은 물리 장비를 논리적으로 분리해 네트워크 경계를 만듭니다.",
      ]}
      visual={visual}
      sections={sections}
      commandGroups={commandGroups}
      previousHref="/labs/network/osi"
      previousLabel="OSI 7계층"
      nextHref="/labs/network/ip-subnet"
      nextLabel="IP 주소와 서브넷"
    />
  );
}
