import NetworkTopicPage from "../NetworkTopicPage";

const sections = [
  {
    title: "DNS",
    points: [
      "DNS는 도메인 이름을 IP 주소로 바꿔 주는 시스템입니다.",
      "브라우저는 example.com 같은 이름을 바로 서버로 보내지 못하고, 먼저 IP 주소를 알아냅니다.",
      "DNS가 잘못되면 서버가 정상이어도 사용자는 엉뚱한 서버로 접속하거나 접속에 실패합니다.",
      "운영에서는 도메인, DNS 레코드, 실제 서버 IP를 함께 확인합니다.",
    ],
  },
  {
    title: "조회 흐름",
    points: [
      "브라우저와 OS 캐시를 먼저 확인합니다.",
      "캐시에 없으면 설정된 DNS 서버에 질의합니다.",
      "DNS 서버는 루트, TLD, 권한 있는 네임서버를 따라가며 결과를 찾습니다.",
      "찾은 결과는 TTL 동안 캐시에 저장됩니다.",
    ],
  },
  {
    title: "A / AAAA",
    points: [
      "A 레코드는 도메인을 IPv4 주소로 연결합니다.",
      "AAAA 레코드는 도메인을 IPv6 주소로 연결합니다.",
      "웹 서버 공인 IP를 도메인에 연결할 때 가장 기본적으로 확인합니다.",
      "A 레코드가 예전 서버 IP를 가리키면 배포 후에도 옛 서버로 접속될 수 있습니다.",
    ],
  },
  {
    title: "CNAME",
    points: [
      "CNAME은 한 도메인을 다른 도메인의 별칭으로 연결합니다.",
      "www.example.com을 example.com이나 클라우드 로드밸런서 도메인으로 연결할 때 자주 사용합니다.",
      "CNAME의 최종 결과는 다시 A 또는 AAAA 레코드로 IP를 얻어야 합니다.",
      "루트 도메인에는 DNS 제공자 정책에 따라 CNAME을 직접 쓰기 어려운 경우가 있습니다.",
    ],
  },
  {
    title: "TTL과 캐시",
    points: [
      "TTL은 DNS 결과를 얼마나 오래 캐시에 저장할지 정합니다.",
      "TTL이 길면 DNS 변경 후에도 이전 값이 계속 사용될 수 있습니다.",
      "서비스 이전 전에는 TTL을 낮춰 두면 전환 시간을 줄일 수 있습니다.",
      "DNS 결과는 내 PC, 회사 DNS, 통신사 DNS, 퍼블릭 DNS마다 다르게 보일 수 있습니다.",
    ],
  },
  {
    title: "DNS 장애 확인",
    points: [
      "도메인이 올바른 IP를 반환하는지 확인합니다.",
      "www가 붙은 도메인과 루트 도메인의 레코드를 각각 확인합니다.",
      "내 PC에서만 안 되는지, 외부 DNS에서도 안 되는지 비교합니다.",
      "도메인 만료, 네임서버 변경, 레코드 오타, TTL 캐시를 확인합니다.",
    ],
  },
];

const commandGroups: { title: string; items: [string, string][] }[] = [
  {
    title: "DNS 확인",
    items: [
      ["dig example.com A", "도메인의 IPv4 주소 레코드를 확인합니다."],
      ["dig www.example.com CNAME", "www 도메인이 별칭으로 연결되는지 확인합니다."],
      ["dig example.com NS", "도메인의 네임서버를 확인합니다."],
      ["nslookup example.com 8.8.8.8", "구글 DNS 기준으로 조회 결과를 확인합니다."],
      ["resolvectl status", "리눅스 서버가 사용하는 DNS 설정을 확인합니다."],
    ],
  },
];

const visual = (
  <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4">
    <div className="grid min-w-[820px] grid-cols-[1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr] items-center text-center">
      {[
        ["Browser", "캐시 확인"],
        ["DNS Resolver", "질의 시작"],
        ["Root/TLD", "위임 정보"],
        ["Name Server", "권한 응답"],
        ["IP Address", "203.0.113.10"],
      ].map(([title, detail], index) => (
        <div key={title} className="contents">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-slate-950">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{detail}</p>
          </div>
          {index < 4 ? <div className="font-mono text-xl text-teal-700">-&gt;</div> : null}
        </div>
      ))}
    </div>
  </div>
);

export default function DnsPage() {
  return (
    <NetworkTopicPage
      step="06"
      title="DNS"
      description="DNS는 도메인을 실제 접속 가능한 IP 주소로 바꾸는 단계입니다. 웹 서버가 정상이어도 DNS가 틀리면 사용자는 올바른 서버까지 도달하지 못합니다."
      summary={[
        "DNS는 도메인을 IP 주소로 변환합니다.",
        "A, CNAME, NS, TTL을 구분하면 도메인 장애를 좁히기 쉽습니다.",
        "DNS 변경은 캐시 때문에 즉시 반영되지 않을 수 있습니다.",
      ]}
      visual={visual}
      sections={sections}
      commandGroups={commandGroups}
      previousHref="/labs/network/tcp-udp"
      previousLabel="TCP / UDP / Port"
      nextHref="/labs/network/dns-http"
      nextLabel="HTTP / HTTPS / TLS"
    />
  );
}
