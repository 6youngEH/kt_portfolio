import PythonTopicPage from "../PythonTopicPage";

const visual = (
  <div className="grid gap-4 md:grid-cols-4">
    {[
      ["Input", "값을 준비"],
      ["Condition", "if로 분기"],
      ["Loop", "for로 반복"],
      ["Output", "print로 확인"],
    ].map(([title, detail]) => (
      <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h3 className="font-semibold text-slate-950">{title}</h3>
        <p className="mt-2 font-mono text-sm text-slate-600">{detail}</p>
      </div>
    ))}
  </div>
);

export default function PythonSyntaxPage() {
  return (
    <PythonTopicPage
      step="01"
      title="Python 기본문법"
      description="기본문법은 Python 코드를 읽고 직접 고칠 수 있게 만드는 첫 단계입니다. 변수, 타입, 조건문, 반복문, 문자열 포맷을 작은 코드로 반복해서 익히면 됩니다."
      summary={[
        "변수는 값을 이름으로 저장해서 다시 쓰는 방법입니다.",
        "if와 for를 알면 대부분의 간단한 스크립트를 읽을 수 있습니다.",
        "print와 type으로 실행 결과와 값의 종류를 바로 확인합니다.",
      ]}
      visual={visual}
      sections={[
        {
          title: "변수와 타입",
          points: [
            "변수는 name = value 형태로 만듭니다.",
            "문자열은 str, 정수는 int, 소수는 float, 참/거짓은 bool입니다.",
            "Python은 타입을 자동으로 추론하지만, 값의 타입을 착각하면 조건문이나 계산에서 문제가 납니다.",
            "type(value)를 출력하면 현재 값의 타입을 확인할 수 있습니다.",
          ],
        },
        {
          title: "조건문",
          points: [
            "if는 조건이 참일 때만 코드를 실행합니다.",
            "elif는 다른 조건을 이어서 검사하고, else는 모든 조건이 거짓일 때 실행합니다.",
            "비교는 ==, !=, >, >=, <, <= 연산자를 사용합니다.",
            "and, or, not으로 여러 조건을 조합합니다.",
          ],
        },
        {
          title: "반복문",
          points: [
            "for는 list나 range처럼 반복 가능한 값을 하나씩 꺼냅니다.",
            "while은 조건이 참인 동안 계속 반복합니다.",
            "break는 반복을 중단하고, continue는 이번 반복만 건너뜁니다.",
            "서버 로그 처리나 파일 목록 처리에서 반복문을 자주 사용합니다.",
          ],
        },
        {
          title: "문자열 출력",
          points: [
            "f-string은 변수 값을 문자열 안에 넣는 가장 읽기 쉬운 방식입니다.",
            "strip은 앞뒤 공백과 줄바꿈을 제거합니다.",
            "split은 문자열을 기준 문자로 나눠 list로 만듭니다.",
            "lower와 upper는 대소문자를 맞춰 비교할 때 유용합니다.",
          ],
        },
      ]}
      codeBlocks={[
        {
          title: "변수와 타입 확인",
          code: `name = "api-server"
port = 8080
enabled = True

print(name)
print(type(port))
print(f"{name} runs on {port}")`,
          description: "값을 변수에 담고, type과 f-string으로 현재 상태를 확인합니다.",
        },
        {
          title: "조건문으로 상태 판단",
          code: `status_code = 503

if status_code == 200:
    print("healthy")
elif status_code >= 500:
    print("server error")
else:
    print("check request")`,
          description: "API 응답 코드를 기준으로 정상, 서버 오류, 요청 확인 상태를 나눕니다.",
        },
        {
          title: "반복문으로 목록 처리",
          code: `services = ["nginx", "spring-api", "postgres"]

for service in services:
    print(f"checking {service}")`,
          description: "목록의 값을 하나씩 꺼내 같은 작업을 반복합니다.",
        },
      ]}
      practice={[
        {
          title: "상태 코드 분류기",
          tasks: [
            "status_code 변수에 200, 404, 500을 번갈아 넣어 봅니다.",
            "2xx면 success, 4xx면 client error, 5xx면 server error를 출력합니다.",
            "실행 결과가 예상과 맞는지 print로 확인합니다.",
          ],
        },
        {
          title: "서비스 목록 출력",
          tasks: [
            "services list에 nginx, api, database를 넣습니다.",
            "for문으로 service: nginx 형태의 문장을 출력합니다.",
            "서비스 이름이 api일 때만 backend found를 추가로 출력합니다.",
          ],
        },
      ]}
      nextHref="/labs/python/data-structures"
      nextLabel="자료구조"
    />
  );
}
