import NetworkTopicPage from "../NetworkTopicPage";

const sections = [
  {
    title: "방화벽의 역할",
    points: [
      "방화벽은 어떤 IP와 포트의 접근을 허용하거나 차단할지 정하는 장치 또는 소프트웨어입니다.",
      "서버에서 서비스가 포트를 열고 있어도 방화벽이 막으면 외부에서는 접속할 수 없습니다.",
      "운영 서버는 필요한 포트만 열고, SSH 같은 관리 포트는 접근 IP를 제한하는 것이 기본입니다.",
      "접속이 timeout이면 방화벽이나 보안 그룹을 먼저 의심할 수 있습니다.",
    ],
  },
  {
    title: "OS 방화벽",
    points: [
      "리눅스 서버에서는 ufw, firewalld, iptables, nftables 같은 도구로 방화벽을 관리합니다.",
      "Ubuntu에서는 ufw를 많이 쓰고, CentOS/RHEL 계열에서는 firewalld를 자주 봅니다.",
      "규칙은 허용 방향, 프로토콜, 포트, 출발지 IP를 기준으로 확인합니다.",
      "방화벽 변경 전에는 현재 규칙을 먼저 확인하고 필요한 포트만 추가합니다.",
    ],
  },
  {
    title: "클라우드 보안 그룹",
    points: [
      "AWS 같은 클라우드에서는 서버 OS 방화벽 외에 보안 그룹이 별도로 존재합니다.",
      "보안 그룹은 인스턴스 앞단에서 들어오고 나가는 트래픽을 제어합니다.",
      "서버 내부 방화벽이 열려 있어도 보안 그룹이 막으면 외부 접속은 실패합니다.",
      "운영 문제를 볼 때는 OS 방화벽과 클라우드 보안 그룹을 둘 다 확인합니다.",
    ],
  },
  {
    title: "리버스 프록시",
    points: [
      "리버스 프록시는 클라이언트 요청을 먼저 받은 뒤 내부 애플리케이션 서버로 전달합니다.",
      "Nginx는 정적 파일 제공, TLS 종료, 리버스 프록시 용도로 많이 사용합니다.",
      "외부에서는 443으로 접속하지만 내부 앱은 3000이나 8080에서 실행될 수 있습니다.",
      "프록시 설정의 upstream 주소와 포트가 틀리면 502가 발생할 수 있습니다.",
    ],
  },
  {
    title: "로드밸런서",
    points: [
      "로드밸런서는 여러 서버로 트래픽을 분산합니다.",
      "서버 한 대가 장애 나도 나머지 서버로 요청을 보내 가용성을 높일 수 있습니다.",
      "헬스 체크가 실패하면 로드밸런서는 해당 서버로 트래픽을 보내지 않습니다.",
      "로드밸런서 뒤에서는 클라이언트 IP가 X-Forwarded-For 같은 헤더로 전달될 수 있습니다.",
    ],
  },
  {
    title: "NAT",
    points: [
      "NAT는 내부 사설 IP와 외부 공인 IP 사이 주소 변환을 수행합니다.",
      "사설망 서버가 인터넷으로 나갈 때 NAT 게이트웨이나 공유기를 거치는 경우가 많습니다.",
      "외부에서 내부 서버로 들어오려면 포트 포워딩이나 로드밸런서 같은 구성이 필요합니다.",
      "Docker 포트 매핑도 넓게 보면 호스트 포트와 컨테이너 포트를 연결하는 NAT 방식입니다.",
    ],
  },
  {
    title: "502와 504",
    points: [
      "502 Bad Gateway는 프록시가 뒤쪽 서버에서 정상 응답을 받지 못했다는 뜻입니다.",
      "앱 서버가 죽었거나, upstream 포트가 틀렸거나, 연결이 거부될 때 발생할 수 있습니다.",
      "504 Gateway Timeout은 프록시가 뒤쪽 서버 응답을 기다리다 시간이 초과된 경우입니다.",
      "502는 연결 자체, 504는 응답 지연 관점에서 먼저 확인합니다.",
    ],
  },
  {
    title: "운영 점검 순서",
    points: [
      "앱 프로세스가 내부 포트에서 정상 실행 중인지 확인합니다.",
      "프록시가 올바른 내부 주소와 포트로 전달하는지 확인합니다.",
      "서버 OS 방화벽과 클라우드 보안 그룹이 외부 포트를 허용하는지 확인합니다.",
      "프록시 로그와 앱 로그의 시간을 맞춰 같은 요청을 추적합니다.",
    ],
  },
];

const commandGroups: { title: string; items: [string, string][] }[] = [
  {
    title: "방화벽과 프록시 확인",
    items: [
      ["sudo ufw status", "Ubuntu UFW 방화벽 상태와 허용 포트를 확인합니다."],
      ["sudo iptables -L -n", "iptables 규칙을 숫자 IP와 포트 기준으로 확인합니다."],
      ["sudo firewall-cmd --list-all", "firewalld 사용 환경에서 열린 서비스와 포트를 확인합니다."],
      ["sudo nginx -t", "Nginx 설정 문법이 올바른지 검사합니다."],
      ["journalctl -u nginx -n 100", "Nginx 서비스 최근 로그를 확인합니다."],
      ["curl -I http://127.0.0.1:3000", "프록시 뒤쪽 앱 서버가 내부에서 응답하는지 확인합니다."],
    ],
  },
];

const visual = (
  <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4">
    <div className="grid min-w-[720px] grid-cols-[1fr_40px_1fr_40px_1fr_40px_1fr] items-center gap-2 text-center">
      {[
        ["User", "브라우저"],
        ["Security Group", "외부 포트 허용"],
        ["Nginx", "443 -> 3000 전달"],
        ["App Server", "내부 앱 응답"],
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
    <div className="mt-4 grid gap-3 md:grid-cols-3">
      <div className="rounded bg-white p-3">
        <p className="font-semibold text-slate-950">Timeout</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">방화벽, 보안 그룹, 라우팅 확인</p>
      </div>
      <div className="rounded bg-white p-3">
        <p className="font-semibold text-slate-950">502</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">프록시 뒤 앱 서버 연결 확인</p>
      </div>
      <div className="rounded bg-white p-3">
        <p className="font-semibold text-slate-950">504</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">앱 응답 지연과 타임아웃 확인</p>
      </div>
    </div>
  </div>
);

export default function FirewallProxyPage() {
  return (
    <NetworkTopicPage
      step="08"
      title="Firewall / Proxy"
      description="운영 환경에서는 앱이 실행 중이어도 방화벽, 보안 그룹, 프록시, 로드밸런서 설정 때문에 접속이 막힐 수 있습니다. 외부 포트와 내부 앱 포트를 구분해서 확인해야 합니다."
      summary={[
        "서비스가 떠 있어도 방화벽이 막으면 외부에서는 접속할 수 없습니다.",
        "리버스 프록시는 외부 요청을 내부 앱 포트로 전달합니다.",
        "502와 504는 프록시 뒤쪽 서버 상태를 확인해야 하는 신호입니다.",
      ]}
      visual={visual}
      sections={sections}
      commandGroups={commandGroups}
      previousHref="/labs/network/dns-http"
      previousLabel="HTTP / HTTPS / TLS"
    />
  );
}
