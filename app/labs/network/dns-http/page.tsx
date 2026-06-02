import NetworkTopicPage from "../NetworkTopicPage";

const sections = [
  {
    title: "웹 요청의 시작",
    points: [
      "DNS로 IP를 찾은 뒤 브라우저는 대상 IP와 포트로 TCP 연결을 만듭니다.",
      "HTTP는 보통 80번 포트, HTTPS는 보통 443번 포트를 사용합니다.",
      "HTTPS라면 HTTP 요청 전에 TLS handshake와 인증서 검증이 먼저 일어납니다.",
      "이후 브라우저가 HTTP 요청을 보내고 서버가 상태 코드, 헤더, 본문을 응답합니다.",
    ],
  },
  {
    title: "HTTP 메서드",
    points: [
      "GET은 데이터를 조회할 때 주로 사용합니다.",
      "POST는 새 데이터를 만들거나 서버에 처리를 요청할 때 사용합니다.",
      "PUT과 PATCH는 데이터를 수정할 때 사용하고, DELETE는 삭제할 때 사용합니다.",
      "API 장애를 볼 때는 URL뿐 아니라 메서드가 맞는지도 확인해야 합니다.",
    ],
  },
  {
    title: "헤더와 본문",
    points: [
      "HTTP 헤더는 요청이나 응답의 부가 정보를 담습니다.",
      "Host, Authorization, Content-Type, Cookie 같은 헤더는 서버 처리에 직접 영향을 줍니다.",
      "본문은 JSON, HTML, 파일처럼 실제 데이터가 담기는 영역입니다.",
      "POST 요청이 실패하면 Content-Type과 요청 본문 형식을 같이 확인합니다.",
    ],
  },
  {
    title: "HTTP 요청 구조",
    points: [
      "HTTP 요청은 메서드, 경로, 헤더, 본문으로 구성됩니다.",
      "GET은 조회, POST는 생성, PUT/PATCH는 수정, DELETE는 삭제에 자주 사용합니다.",
      "Host, User-Agent, Authorization, Content-Type 같은 헤더가 요청 처리에 영향을 줍니다.",
      "API 문제를 볼 때는 URL, 메서드, 헤더, 본문이 모두 맞는지 확인합니다.",
    ],
  },
  {
    title: "HTTP 상태 코드",
    points: [
      "2xx는 성공, 3xx는 리다이렉트, 4xx는 클라이언트 요청 문제, 5xx는 서버 처리 문제입니다.",
      "404는 경로 없음, 401은 인증 필요, 403은 권한 없음, 500은 서버 내부 오류입니다.",
      "502는 프록시가 뒤쪽 서버에서 정상 응답을 못 받았을 때 자주 보입니다.",
      "504는 프록시나 게이트웨이가 뒤쪽 서버 응답을 기다리다 timeout이 난 경우입니다.",
    ],
  },
  {
    title: "HTTPS와 TLS",
    points: [
      "HTTPS는 HTTP 위에 TLS 암호화를 적용한 방식입니다.",
      "TLS는 서버 인증서로 도메인 소유와 암호화 연결을 확인합니다.",
      "인증서 도메인 불일치, 만료, 체인 오류가 있으면 브라우저에서 보안 경고가 발생합니다.",
      "운영에서는 80번 HTTP를 443번 HTTPS로 리다이렉트하는 구성이 흔합니다.",
    ],
  },
  {
    title: "브라우저 요청 흐름",
    points: [
      "도메인 입력 후 DNS 조회로 IP를 얻습니다.",
      "대상 IP와 포트로 TCP 연결을 맺습니다.",
      "HTTPS라면 TLS handshake와 인증서 검증을 수행합니다.",
      "HTTP 요청을 보내고 상태 코드, 헤더, 본문을 응답받습니다.",
    ],
  },
  {
    title: "웹 장애 확인 포인트",
    points: [
      "도메인이 맞는 IP를 가리키는지 확인합니다.",
      "80 또는 443 포트가 열려 있고 방화벽에서 허용되는지 확인합니다.",
      "인증서가 유효한 도메인과 날짜를 가지고 있는지 확인합니다.",
      "HTTP 상태 코드와 서버 애플리케이션 로그를 함께 확인합니다.",
    ],
  },
];

const commandGroups: { title: string; items: [string, string][] }[] = [
  {
    title: "HTTP와 TLS 확인",
    items: [
      ["curl -I https://example.com", "상태 코드와 응답 헤더를 확인합니다."],
      ["curl -v https://example.com", "DNS, TCP, TLS, HTTP 연결 과정을 자세히 봅니다."],
      ["curl -X POST https://example.com/api", "POST 메서드로 API 요청을 보냅니다."],
      ["openssl s_client -connect example.com:443 -servername example.com", "TLS 인증서와 연결 정보를 확인합니다."],
      ["openssl x509 -in cert.pem -noout -dates", "인증서 시작일과 만료일을 확인합니다."],
    ],
  },
];

const requestSteps = [
  ["1", "DNS", "도메인을 IP로 변환"],
  ["2", "TCP", "IP와 포트로 연결"],
  ["3", "TLS", "HTTPS 인증서 확인"],
  ["4", "HTTP", "요청과 응답 처리"],
];

const visual = (
  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
    <div className="grid gap-3 md:grid-cols-4">
      {requestSteps.map(([number, title, detail]) => (
        <div key={number} className="rounded-lg bg-white p-4">
          <p className="text-sm font-semibold text-teal-700">STEP {number}</p>
          <h3 className="mt-1 font-semibold text-slate-950">{title}</h3>
          <p className="mt-2 leading-7 text-slate-700">{detail}</p>
        </div>
      ))}
    </div>
    <div className="mt-4 rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-50">
      browser {"->"} DNS {"->"} 203.0.113.10:443 {"->"} TLS {"->"} HTTP response
    </div>
  </div>
);

export default function DnsHttpPage() {
  return (
    <NetworkTopicPage
      step="07"
      title="HTTP / HTTPS / TLS"
      description="DNS로 IP를 찾은 뒤에는 TCP 연결, TLS 인증서 검증, HTTP 요청과 응답이 이어집니다. 웹 접속 장애는 이 흐름을 단계별로 나누면 원인을 더 빨리 찾을 수 있습니다."
      summary={[
        "DNS는 도메인을 IP 주소로 바꾸는 첫 단계입니다.",
        "HTTPS는 TCP 연결 뒤 TLS 인증서 검증을 거칩니다.",
        "상태 코드는 문제가 클라이언트 쪽인지 서버 쪽인지 알려 줍니다.",
      ]}
      visual={visual}
      sections={sections}
      commandGroups={commandGroups}
      previousHref="/labs/network/dns"
      previousLabel="DNS"
      nextHref="/labs/network/firewall-proxy"
      nextLabel="Firewall / Proxy"
    />
  );
}
