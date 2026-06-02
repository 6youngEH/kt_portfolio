import PythonTopicPage from "../PythonTopicPage";

export default function PythonFunctionsModulesPage() {
  return (
    <PythonTopicPage
      step="03"
      title="Python 함수와 모듈"
      description="함수는 반복되는 코드를 이름 붙여 재사용하는 단위입니다. 모듈은 관련 코드를 파일이나 라이브러리로 나눠 가져오는 방법입니다."
      summary={[
        "함수는 입력을 받아 결과를 반환하는 작은 작업 단위입니다.",
        "return이 있어야 함수 바깥에서 결과를 사용할 수 있습니다.",
        "import로 표준 라이브러리와 외부 패키지를 가져옵니다.",
      ]}
      sections={[
        {
          title: "함수 기본",
          points: [
            "def 함수명(): 형태로 함수를 만듭니다.",
            "괄호 안에 매개변수를 넣으면 함수에 값을 전달할 수 있습니다.",
            "return은 계산 결과를 함수 밖으로 돌려줍니다.",
            "함수 이름은 check_health처럼 동작이 드러나게 짓습니다.",
          ],
        },
        {
          title: "매개변수와 기본값",
          points: [
            "매개변수는 함수가 실행될 때 필요한 입력입니다.",
            "timeout=3처럼 기본값을 두면 호출할 때 생략할 수 있습니다.",
            "기본값은 설정 값이나 옵션을 다룰 때 유용합니다.",
            "너무 많은 매개변수는 dict나 설정 객체로 묶는 편이 읽기 쉽습니다.",
          ],
        },
        {
          title: "모듈",
          points: [
            "모듈은 Python 파일 하나 또는 라이브러리 하나를 뜻합니다.",
            "import os처럼 가져오면 os.getcwd() 같은 함수를 쓸 수 있습니다.",
            "from pathlib import Path처럼 특정 기능만 가져올 수도 있습니다.",
            "표준 라이브러리만으로도 파일, 날짜, JSON, 경로 처리를 할 수 있습니다.",
          ],
        },
        {
          title: "코드 분리",
          points: [
            "스크립트가 길어지면 함수로 나누어 읽기 쉽게 만듭니다.",
            "입력, 처리, 출력 흐름을 함수로 분리하면 테스트하기 쉬워집니다.",
            "반복되는 API 호출이나 로그 파싱은 함수로 빼두면 재사용할 수 있습니다.",
            "함수 하나는 한 가지 일을 하도록 작게 유지하는 것이 좋습니다.",
          ],
        },
      ]}
      codeBlocks={[
        {
          title: "상태 코드 판별 함수",
          code: `def classify_status(status_code):
    if status_code == 200:
        return "healthy"
    if status_code >= 500:
        return "server error"
    return "check request"

print(classify_status(503))`,
          description: "조건문을 함수로 감싸면 여러 곳에서 같은 판단 로직을 다시 쓸 수 있습니다.",
        },
        {
          title: "기본값이 있는 함수",
          code: `def make_url(host, port=8080):
    return f"http://{host}:{port}/api/health"

print(make_url("localhost"))
print(make_url("localhost", 3000))`,
          description: "자주 쓰는 값은 기본값으로 두고 필요할 때만 바꿉니다.",
        },
        {
          title: "표준 라이브러리 import",
          code: `from pathlib import Path

log_path = Path("app.log")
print(log_path.exists())`,
          description: "pathlib은 파일 경로를 다룰 때 문자열보다 안전하고 읽기 쉽습니다.",
        },
      ]}
      practice={[
        {
          title: "서비스 URL 함수",
          tasks: [
            "service_url(name, port) 함수를 만듭니다.",
            "http://localhost:{port}/{name} 형태의 문자열을 반환합니다.",
            "api, admin, metrics 세 주소를 출력합니다.",
          ],
        },
        {
          title: "코드 분리 연습",
          tasks: [
            "status_code를 받아 True/False를 반환하는 is_success 함수를 만듭니다.",
            "여러 상태 코드 list를 반복하며 성공 여부를 출력합니다.",
            "print 로직과 판단 로직을 별도 함수로 나눕니다.",
          ],
        },
      ]}
      previousHref="/labs/python/data-structures"
      previousLabel="자료구조"
      nextHref="/labs/python/files-errors"
      nextLabel="파일과 예외"
    />
  );
}
