import PythonTopicPage from "../PythonTopicPage";

export default function PythonFilesErrorsPage() {
  return (
    <PythonTopicPage
      step="04"
      title="Python 파일과 예외"
      description="실제 자동화 스크립트는 파일을 읽고 쓰다가 실패할 수 있습니다. 파일 처리와 예외 처리를 함께 익혀야 안정적인 스크립트를 만들 수 있습니다."
      summary={[
        "with open은 파일을 안전하게 열고 닫는 기본 패턴입니다.",
        "try/except는 실패 상황을 잡아서 프로그램이 바로 죽지 않게 합니다.",
        "로그, 설정 파일, 결과 저장은 파일 처리 연습에 좋습니다.",
      ]}
      sections={[
        {
          title: "파일 읽기",
          points: [
            "open(path, 'r')은 파일을 읽기 모드로 엽니다.",
            "encoding='utf-8'을 명시하면 한글이 들어간 파일을 더 안전하게 읽습니다.",
            "for line in file은 파일을 한 줄씩 읽기 때문에 큰 로그에도 사용할 수 있습니다.",
            "strip으로 줄 끝의 줄바꿈을 제거할 수 있습니다.",
          ],
        },
        {
          title: "파일 쓰기",
          points: [
            "open(path, 'w')는 파일을 새로 쓰고 기존 내용을 덮어씁니다.",
            "open(path, 'a')는 기존 파일 끝에 내용을 추가합니다.",
            "write는 문자열을 저장하므로 줄바꿈이 필요하면 직접 \\n을 넣습니다.",
            "결과 리포트나 점검 로그를 남길 때 파일 쓰기를 사용합니다.",
          ],
        },
        {
          title: "예외 처리",
          points: [
            "try 블록에는 실패할 수 있는 코드를 넣습니다.",
            "except 블록에는 실패했을 때 처리할 코드를 넣습니다.",
            "FileNotFoundError처럼 구체적인 예외를 잡으면 원인별 처리가 쉬워집니다.",
            "무조건 except만 쓰면 실제 버그가 숨을 수 있으니 필요한 범위만 잡습니다.",
          ],
        },
        {
          title: "JSON 파일",
          points: [
            "json 모듈로 dict/list를 파일에 저장하거나 다시 읽을 수 있습니다.",
            "설정 파일이나 API 응답 저장에 자주 사용합니다.",
            "json.dump는 Python 값을 JSON 파일로 쓰고, json.load는 JSON 파일을 Python 값으로 읽습니다.",
            "indent=2를 주면 사람이 읽기 좋은 JSON으로 저장됩니다.",
          ],
        },
      ]}
      codeBlocks={[
        {
          title: "로그 파일 읽기",
          code: `with open("app.log", "r", encoding="utf-8") as file:
    for line in file:
        if "ERROR" in line:
            print(line.strip())`,
          description: "로그 파일을 한 줄씩 읽으며 ERROR가 있는 줄만 출력합니다.",
        },
        {
          title: "예외 처리",
          code: `try:
    with open("missing.log", "r", encoding="utf-8") as file:
        print(file.read())
except FileNotFoundError:
    print("file not found")`,
          description: "파일이 없을 때 프로그램이 바로 종료되지 않도록 처리합니다.",
        },
        {
          title: "JSON 저장",
          code: `import json

result = {"service": "api", "status": "ok"}

with open("health.json", "w", encoding="utf-8") as file:
    json.dump(result, file, indent=2)`,
          description: "점검 결과를 JSON 파일로 저장하면 나중에 다른 도구에서 읽기 쉽습니다.",
        },
      ]}
      practice={[
        {
          title: "에러 로그 추출",
          tasks: [
            "app.log 파일을 만들고 정상 로그와 ERROR 로그를 섞어 씁니다.",
            "ERROR가 포함된 줄만 errors.log 파일에 저장합니다.",
            "파일이 없을 때 FileNotFoundError 메시지를 출력합니다.",
          ],
        },
        {
          title: "점검 결과 저장",
          tasks: [
            "service, status, checked_at 값을 가진 dict를 만듭니다.",
            "json.dump로 result.json에 저장합니다.",
            "다시 json.load로 읽고 service 값을 출력합니다.",
          ],
        },
      ]}
      previousHref="/labs/python/functions-modules"
      previousLabel="함수와 모듈"
      nextHref="/labs/python/http-requests"
      nextLabel="HTTP 요청"
    />
  );
}
