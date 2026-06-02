import Link from "next/link";

const chapters = [
  {
    step: "01",
    title: "OSI 7계층",
    href: "/labs/network/osi",
    description: "네트워크 문제를 계층별로 나눠서 보는 기준을 잡습니다.",
    tags: ["Layer", "Encapsulation", "Troubleshooting"],
  },
  {
    step: "02",
    title: "Ethernet / MAC / ARP / VLAN",
    href: "/labs/network/ethernet-arp",
    description: "같은 네트워크 안에서 장비가 서로를 찾고 프레임을 전달하는 방식을 봅니다.",
    tags: ["MAC", "ARP", "VLAN"],
  },
  {
    step: "03",
    title: "IP 주소와 서브넷",
    href: "/labs/network/ip-subnet",
    description: "IPv4 주소, CIDR, 서브넷 마스크, 게이트웨이를 정리합니다.",
    tags: ["IPv4", "CIDR", "Gateway"],
  },
  {
    step: "04",
    title: "Routing / Gateway / NAT",
    href: "/labs/network/routing-nat",
    description: "다른 네트워크로 나가는 경로와 사설 IP가 인터넷으로 나가는 구조를 정리합니다.",
    tags: ["Route", "Gateway", "NAT"],
  },
  {
    step: "05",
    title: "TCP / UDP / Port",
    href: "/labs/network/tcp-udp",
    description: "연결형 통신, 비연결형 통신, 포트 번호의 의미를 익힙니다.",
    tags: ["TCP", "UDP", "Port"],
  },
  {
    step: "06",
    title: "DNS",
    href: "/labs/network/dns",
    description: "도메인 이름이 실제 서버 IP로 바뀌는 과정을 따로 정리합니다.",
    tags: ["A Record", "CNAME", "TTL"],
  },
  {
    step: "07",
    title: "HTTP / HTTPS / TLS",
    href: "/labs/network/dns-http",
    description: "웹 요청, 상태 코드, HTTPS 인증서 검증 흐름을 정리합니다.",
    tags: ["HTTP", "HTTPS", "TLS"],
  },
  {
    step: "08",
    title: "Firewall / Proxy",
    href: "/labs/network/firewall-proxy",
    description: "방화벽, 보안 그룹, 리버스 프록시, 로드밸런서를 정리합니다.",
    tags: ["Firewall", "Nginx", "Load Balancer"],
  },
];

const flow = [
  "계층을 먼저 이해해서 문제가 어느 구간인지 나눕니다.",
  "MAC, ARP, VLAN으로 같은 네트워크 안에서 통신되는 방식을 봅니다.",
  "IP와 서브넷으로 같은 네트워크인지 판단합니다.",
  "라우팅과 NAT로 다른 네트워크나 인터넷으로 나가는 구조를 이해합니다.",
  "TCP/UDP와 포트로 실제 서비스가 어디에서 요청을 받는지 확인합니다.",
  "DNS로 도메인이 어떤 IP를 가리키는지 확인합니다.",
  "HTTP/HTTPS로 웹 요청과 인증서 흐름을 봅니다.",
  "방화벽과 프록시로 운영 환경에서 막히는 지점을 점검합니다.",
];

const flowCards = [
  "OSI",
  "MAC/ARP",
  "IP/Subnet",
  "Routing/NAT",
  "TCP/UDP",
  "DNS",
  "HTTP/TLS",
  "Firewall/Proxy",
];

export default function NetworkLabPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <article className="mx-auto max-w-5xl">
        <Link href="/labs" className="text-sm font-medium text-teal-700">
          go to Labs
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Network Lab</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          네트워크는 한 페이지에 전부 넣기보다 기초 순서대로 나눠서 보는 편이
          좋습니다. 아래 순서대로 보면 사용자의 요청이 서버까지 가는 흐름을
          단계별로 연결할 수 있습니다.
        </p>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">전체 그림</h2>
          <div className="mt-4 overflow-x-auto rounded-lg bg-slate-50 p-4">
            <div className="grid min-w-[1180px] grid-cols-[1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr] items-center text-center">
              {flowCards.map((card, index) => (
                <div key={card} className="contents">
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-teal-700">STEP {index + 1}</p>
                    <p className="mt-1 font-semibold text-slate-950">{card}</p>
                  </div>
                  {index < flowCards.length - 1 ? (
                    <div className="font-mono text-xl text-teal-700">-&gt;</div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">공부 순서</h2>
          <ol className="mt-4 grid gap-4">
            {chapters.map((chapter) => (
              <li key={chapter.href}>
                <Link
                  href={chapter.href}
                  className="block rounded-lg border border-slate-200 p-4 shadow-sm transition hover:border-teal-500 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded bg-teal-50 px-2.5 py-1 text-sm font-semibold text-teal-700">
                      STEP {chapter.step}
                    </span>
                    <h3 className="text-lg font-semibold">{chapter.title}</h3>
                  </div>
                  <p className="mt-3 leading-7 text-slate-700">{chapter.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {chapter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-slate-200 px-2 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">전체 흐름</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 leading-8 text-slate-700">
            {flow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>
      </article>
    </main>
  );
}
