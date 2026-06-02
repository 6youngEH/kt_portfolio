import PythonTopicPage from "../PythonTopicPage";

export default function PythonDataStructuresPage() {
  return (
    <PythonTopicPage
      step="02"
      title="Python 자료구조"
      description="자료구조는 여러 값을 담고 찾고 바꾸는 방법입니다. API 응답, 서버 목록, 설정 값은 대부분 list와 dict 조합으로 다룹니다."
      summary={[
        "list는 순서가 있는 여러 값을 저장합니다.",
        "dict는 이름이 있는 값 묶음이라 JSON과 형태가 비슷합니다.",
        "set은 중복 제거, tuple은 바뀌지 않는 값 묶음에 씁니다.",
      ]}
      sections={[
        {
          title: "list",
          points: [
            "list는 대괄호로 만들고 순서를 유지합니다.",
            "append로 값을 추가하고, for문으로 하나씩 꺼냅니다.",
            "index는 0부터 시작하므로 첫 번째 값은 items[0]입니다.",
            "서버 이름 목록, 로그 라인 목록, API 결과 목록에 자주 사용합니다.",
          ],
        },
        {
          title: "dict",
          points: [
            "dict는 key와 value를 묶어서 저장합니다.",
            "server['host']처럼 key로 값을 꺼냅니다.",
            "없는 key를 읽을 수 있으니 get을 쓰면 기본값을 줄 수 있습니다.",
            "JSON 응답은 Python에서 dict와 list 조합으로 다루는 경우가 많습니다.",
          ],
        },
        {
          title: "set",
          points: [
            "set은 중복을 허용하지 않는 값 모음입니다.",
            "중복된 IP, 에러 코드, 사용자 ID를 제거할 때 유용합니다.",
            "순서가 중요하면 list를 쓰고, 중복 여부가 중요하면 set을 씁니다.",
            "in 연산자로 어떤 값이 포함되어 있는지 빠르게 확인합니다.",
          ],
        },
        {
          title: "tuple",
          points: [
            "tuple은 소괄호로 만들고 한 번 만든 뒤 값을 바꾸지 않습니다.",
            "좌표, 포트 범위, 함수 반환값처럼 고정된 묶음에 씁니다.",
            "list와 비슷하게 꺼낼 수 있지만 append 같은 변경 작업은 할 수 없습니다.",
            "값이 바뀌면 안 된다는 의도를 코드에 드러낼 수 있습니다.",
          ],
        },
      ]}
      codeBlocks={[
        {
          title: "list로 서버 목록 처리",
          code: `servers = ["web-01", "api-01", "db-01"]
servers.append("worker-01")

for server in servers:
    print(server)`,
          description: "순서가 있는 서버 목록을 만들고 새 서버를 추가한 뒤 반복합니다.",
        },
        {
          title: "dict로 서비스 정보 표현",
          code: `service = {
    "name": "spring-api",
    "port": 8080,
    "healthy": True,
}

print(service["name"])
print(service.get("env", "local"))`,
          description: "서비스 하나의 속성을 key/value로 묶으면 API 응답과 비슷한 형태가 됩니다.",
        },
        {
          title: "중복 에러 코드 제거",
          code: `error_codes = [500, 500, 502, 404, 502]
unique_codes = set(error_codes)

print(unique_codes)`,
          description: "set을 사용하면 반복해서 나온 에러 코드를 한 번씩만 볼 수 있습니다.",
        },
      ]}
      practice={[
        {
          title: "API 응답 흉내내기",
          tasks: [
            "services list 안에 dict 3개를 넣습니다.",
            "각 dict에는 name, port, healthy 값을 넣습니다.",
            "healthy가 True인 서비스 이름만 출력합니다.",
          ],
        },
        {
          title: "중복 IP 찾기",
          tasks: [
            "ip 목록에 같은 IP를 여러 번 넣습니다.",
            "set으로 중복을 제거한 결과를 출력합니다.",
            "원래 개수와 중복 제거 후 개수를 비교합니다.",
          ],
        },
      ]}
      previousHref="/labs/python/syntax"
      previousLabel="기본문법"
      nextHref="/labs/python/functions-modules"
      nextLabel="함수와 모듈"
    />
  );
}
