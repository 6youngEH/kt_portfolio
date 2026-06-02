import Link from "next/link";

const linuxTopics = [
  {
    title: "파일 시스템과 경로",
    points: [
      "리눅스는 모든 것을 / 루트 디렉터리 아래에 배치합니다.",
      "/home은 사용자 작업 공간, /etc는 설정 파일, /var/log는 로그 파일, /usr는 프로그램과 라이브러리가 주로 위치합니다.",
      "절대 경로는 /etc/nginx/nginx.conf처럼 /부터 시작하고, 상대 경로는 현재 디렉터리를 기준으로 이동합니다.",
      ".은 현재 디렉터리, ..은 상위 디렉터리입니다.",
    ],
  },
  {
    title: "파일 권한",
    points: [
      "권한은 읽기 r, 쓰기 w, 실행 x로 나뉩니다.",
      "ls -l 결과의 rwxr-xr-x는 소유자, 그룹, 기타 사용자 순서로 권한을 보여줍니다.",
      "755는 소유자 rwx, 그룹 r-x, 기타 사용자 r-x입니다. 실행 파일과 디렉터리에 자주 사용합니다.",
      "644는 소유자 rw-, 그룹 r--, 기타 사용자 r--입니다. 일반 설정 파일에 자주 사용합니다.",
      "Permission denied가 나오면 파일 권한, 소유자, 실행 사용자, sudo 필요 여부를 확인합니다.",
    ],
  },
  {
    title: "프로세스와 리소스",
    points: [
      "프로세스는 현재 실행 중인 프로그램입니다.",
      "PID는 프로세스 번호이고, kill 명령어는 PID를 기준으로 프로세스에 종료 신호를 보냅니다.",
      "CPU나 메모리를 많이 쓰는 프로세스는 top, htop, ps aux로 확인합니다.",
      "웹 앱이 안 뜰 때는 프로세스가 살아 있는지 먼저 확인한 뒤 포트와 로그를 봅니다.",
    ],
  },
  {
    title: "로그와 장애 확인",
    points: [
      "로그는 장애 원인을 찾는 가장 중요한 단서입니다.",
      "systemd 서비스는 journalctl로 로그를 확인하고, 파일 로그는 tail과 grep으로 확인합니다.",
      "최근 로그를 먼저 보고, error, failed, denied, timeout 같은 키워드로 범위를 줄입니다.",
      "로그 시간과 실제 장애 발생 시간을 맞춰 보면 원인을 더 빨리 찾을 수 있습니다.",
    ],
  },
  {
    title: "systemd 서비스",
    points: [
      "systemd는 서버에서 프로그램을 서비스 단위로 관리하는 기본 시스템입니다.",
      "서비스 파일은 보통 /etc/systemd/system 또는 /lib/systemd/system 아래에 있습니다.",
      "restart는 서비스를 다시 시작하고, enable은 서버 부팅 시 자동 시작되도록 등록합니다.",
      "서비스 수정 후에는 systemctl daemon-reload로 systemd 설정을 다시 읽게 해야 합니다.",
    ],
  },
];

const commands = [
  {
    group: "기본 탐색",
    items: [
      ["pwd", "현재 디렉터리의 전체 경로를 확인합니다."],
      ["ls -al", "숨김 파일, 권한, 소유자, 크기, 수정 시간을 확인합니다."],
      ["cd /var/log", "로그 디렉터리로 이동합니다."],
      ["cat /etc/os-release", "서버의 리눅스 배포판 정보를 확인합니다."],
    ],
  },
  {
    group: "파일과 로그",
    items: [
      ["cat file.txt", "짧은 파일 내용을 한 번에 출력합니다."],
      ["less file.txt", "긴 파일을 페이지 단위로 읽습니다."],
      ["tail -n 100 app.log", "로그 파일의 마지막 100줄을 확인합니다."],
      ["tail -f app.log", "새로 쌓이는 로그를 실시간으로 따라갑니다."],
      ["grep -i error app.log", "대소문자를 무시하고 error가 포함된 줄을 찾습니다."],
    ],
  },
  {
    group: "권한",
    items: [
      ["ls -l", "파일 권한과 소유자를 확인합니다."],
      ["chmod 755 script.sh", "소유자는 실행 가능, 나머지는 읽기/실행 가능하게 변경합니다."],
      ["chmod 644 config.yml", "설정 파일을 일반적인 읽기 권한으로 변경합니다."],
      ["chown deploy:deploy app.log", "파일 소유자와 그룹을 deploy로 변경합니다."],
      ["sudo -l", "현재 사용자가 실행할 수 있는 sudo 권한을 확인합니다."],
    ],
  },
  {
    group: "프로세스와 포트",
    items: [
      ["ps aux", "실행 중인 전체 프로세스를 확인합니다."],
      ["top", "CPU와 메모리 사용량을 실시간으로 확인합니다."],
      ["ss -tulpen", "열려 있는 TCP/UDP 포트와 프로세스를 확인합니다."],
      ["lsof -i :3000", "3000번 포트를 사용하는 프로세스를 찾습니다."],
      ["kill <pid>", "지정한 PID의 프로세스에 종료 신호를 보냅니다."],
    ],
  },
  {
    group: "서비스 관리",
    items: [
      ["systemctl status nginx", "nginx 서비스 상태와 최근 로그를 확인합니다."],
      ["sudo systemctl restart nginx", "nginx 서비스를 재시작합니다."],
      ["sudo systemctl enable nginx", "서버 부팅 시 nginx가 자동 실행되도록 등록합니다."],
      ["sudo systemctl daemon-reload", "서비스 파일 변경 내용을 systemd에 다시 로드합니다."],
      ["journalctl -u nginx -n 100", "nginx 서비스의 최근 로그 100줄을 봅니다."],
    ],
  },
];

const troubleshootingFlow = [
  {
    title: "접속이 안 될 때",
    checks: [
      "서비스 프로세스가 실행 중인지 확인합니다.",
      "서비스가 기대한 포트를 열고 있는지 확인합니다.",
      "방화벽, 보안 그룹, Docker 포트 매핑이 맞는지 확인합니다.",
      "서비스 로그에서 bind, permission, timeout, connection refused를 찾습니다.",
    ],
  },
  {
    title: "권한 에러가 날 때",
    checks: [
      "명령어를 실행한 사용자가 누구인지 확인합니다.",
      "대상 파일의 소유자와 권한을 확인합니다.",
      "디렉터리 권한 때문에 파일 접근이 막힌 것은 아닌지 확인합니다.",
      "sudo가 필요한 작업인지 확인합니다.",
    ],
  },
  {
    title: "디스크 문제가 의심될 때",
    checks: [
      "df -h로 파일 시스템 사용량을 확인합니다.",
      "du -sh *로 현재 디렉터리에서 큰 파일이나 폴더를 찾습니다.",
      "/var/log 아래에 비정상적으로 큰 로그가 있는지 확인합니다.",
      "로그 로테이션 설정이 필요한지 확인합니다.",
    ],
  },
];

export default function LinuxLabPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <article className="mx-auto max-w-5xl">
        <Link href="/labs" className="text-sm font-medium text-teal-700">
          go to Labs
        </Link>
        <h1 className="mt-6 text-4xl font-bold">Linux / Server Lab</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          서버 운영에서 리눅스는 파일, 권한, 프로세스, 포트, 로그를 확인하는
          도구입니다. 명령어 자체보다 어떤 순서로 확인해서 문제 범위를 줄이는지가
          중요합니다.
        </p>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">핵심 개념</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {linuxTopics.map((topic) => (
              <section key={topic.title} className="rounded-lg border border-slate-200 p-4">
                <h3 className="font-semibold text-slate-950">{topic.title}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                  {topic.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">명령어 정리</h2>
          <div className="mt-4 space-y-5">
            {commands.map((commandGroup) => (
              <section key={commandGroup.group}>
                <h3 className="font-semibold text-slate-950">{commandGroup.group}</h3>
                <div className="mt-3 grid gap-3">
                  {commandGroup.items.map(([command, description]) => (
                    <div
                      key={command}
                      className="grid gap-2 rounded-lg bg-slate-50 p-3 sm:grid-cols-[220px_1fr]"
                    >
                      <code className="rounded bg-slate-950 px-3 py-2 font-mono text-sm text-slate-50">
                        {command}
                      </code>
                      <p className="leading-7 text-slate-700">{description}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">장애 확인 흐름</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {troubleshootingFlow.map((flow) => (
              <section key={flow.title} className="rounded-lg bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-950">{flow.title}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                  {flow.checks.map((check) => (
                    <li key={check}>{check}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
