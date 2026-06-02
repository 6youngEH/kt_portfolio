import NetworkTopicPage from "../NetworkTopicPage";

const sections = [
  {
    title: "라우팅",
    points: [
      "라우팅은 목적지 IP로 가기 위해 어느 다음 장비로 보낼지 결정하는 과정입니다.",
      "같은 네트워크가 아니면 패킷은 기본 게이트웨이로 전달됩니다.",
      "라우터는 라우팅 테이블을 보고 다음 경로를 결정합니다.",
      "리눅스 서버도 ip route에 따라 패킷을 어느 인터페이스로 보낼지 결정합니다.",
    ],
  },
  {
    title: "기본 게이트웨이",
    points: [
      "기본 게이트웨이는 목적지 경로를 모를 때 보내는 기본 출구입니다.",
      "ip route에서 default via로 표시됩니다.",
      "게이트웨이가 없거나 틀리면 같은 대역은 통신되지만 외부 인터넷은 안 될 수 있습니다.",
      "서버의 IP, 서브넷, 게이트웨이는 항상 한 세트로 봐야 합니다.",
    ],
  },
  {
    title: "라우팅 테이블",
    points: [
      "라우팅 테이블은 목적지 네트워크와 다음 홉, 인터페이스 정보를 담습니다.",
      "더 구체적인 경로가 기본 경로보다 우선합니다.",
      "VPN, 사설망, 클라우드 VPC에서는 라우팅 테이블 설정이 접속 가능 여부를 좌우합니다.",
      "traceroute로 실제 패킷이 어느 경로를 지나는지 추정할 수 있습니다.",
    ],
  },
  {
    title: "NAT",
    points: [
      "NAT는 IP 주소를 변환하는 기술입니다.",
      "사설 IP 서버가 인터넷으로 나갈 때 공인 IP로 변환되어 나갑니다.",
      "공유기, 클라우드 NAT Gateway, Docker 포트 매핑에서 NAT 개념이 사용됩니다.",
      "외부에서 내부 서버로 들어오려면 포트 포워딩이나 로드밸런서 같은 진입점이 필요합니다.",
    ],
  },
  {
    title: "SNAT와 DNAT",
    points: [
      "SNAT는 출발지 주소를 바꾸는 방식입니다. 내부 서버가 인터넷으로 나갈 때 많이 사용됩니다.",
      "DNAT는 목적지 주소를 바꾸는 방식입니다. 외부 요청을 내부 서버로 전달할 때 사용됩니다.",
      "Docker의 -p 8080:80은 호스트 8080으로 온 요청을 컨테이너 80으로 전달합니다.",
      "로드밸런서도 외부 포트와 내부 포트를 다르게 연결할 수 있습니다.",
    ],
  },
  {
    title: "라우팅 문제 확인",
    points: [
      "같은 대역 통신이 되는지 먼저 확인합니다.",
      "기본 게이트웨이까지 ping이 되는지 확인합니다.",
      "ip route로 목적지 경로가 있는지 확인합니다.",
      "클라우드라면 서브넷 라우팅 테이블, NAT Gateway, Internet Gateway까지 확인합니다.",
    ],
  },
];

const commandGroups: { title: string; items: [string, string][] }[] = [
  {
    title: "라우팅과 NAT 확인",
    items: [
      ["ip route", "라우팅 테이블과 기본 게이트웨이를 확인합니다."],
      ["ping 192.168.10.1", "기본 게이트웨이까지 통신되는지 확인합니다."],
      ["traceroute 8.8.8.8", "목적지까지 지나는 네트워크 경로를 확인합니다."],
      ["curl ifconfig.me", "외부에서 보이는 공인 IP를 확인합니다."],
      ["sudo iptables -t nat -L -n", "iptables NAT 테이블 규칙을 확인합니다."],
    ],
  },
];

const visual = (
  <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4">
    <div className="grid min-w-[760px] grid-cols-[1fr_40px_1fr_40px_1fr_40px_1fr] items-center gap-2 text-center">
      {[
        ["Private Server", "10.0.1.20"],
        ["Gateway", "10.0.1.1"],
        ["NAT", "공인 IP로 변환"],
        ["Internet", "8.8.8.8"],
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

export default function RoutingNatPage() {
  return (
    <NetworkTopicPage
      step="04"
      title="Routing / Gateway / NAT"
      description="라우팅은 다른 네트워크로 가는 길을 정하고, NAT는 사설 IP와 공인 IP 사이 주소 변환을 담당합니다. 외부 접속 문제를 볼 때 반드시 확인해야 하는 구간입니다."
      summary={[
        "다른 네트워크로 가는 패킷은 게이트웨이를 거칩니다.",
        "라우팅 테이블은 목적지별 다음 경로를 정합니다.",
        "NAT는 사설 IP 서버가 인터넷과 통신할 수 있게 주소를 변환합니다.",
      ]}
      visual={visual}
      sections={sections}
      commandGroups={commandGroups}
      previousHref="/labs/network/ip-subnet"
      previousLabel="IP 주소와 서브넷"
      nextHref="/labs/network/tcp-udp"
      nextLabel="TCP / UDP / Port"
    />
  );
}
