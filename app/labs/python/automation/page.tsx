import PythonTopicPage from "../PythonTopicPage";

export default function PythonAutomationPage() {
  return (
    <PythonTopicPage
      step="06"
      title="Python 자동화 스크립트"
      description="자동화는 반복되는 서버 작업을 코드로 바꾸는 것입니다. 작은 점검 스크립트부터 만들면 Linux, Docker, API 학습과 바로 연결됩니다."
      summary={[
        "자동화 스크립트는 입력, 처리, 출력 흐름으로 나누면 설계하기 쉽습니다.",
        "로그 분석, 파일 정리, API 점검은 Python 연습에 좋은 주제입니다.",
        "실패했을 때 메시지와 결과 파일을 남기는 습관이 중요합니다.",
      ]}
      sections={[
        {
          title: "자동화 설계",
          points: [
            "먼저 사람이 수동으로 하는 확인 순서를 적습니다.",
            "입력 값이 파일인지 URL인지 명령어 결과인지 구분합니다.",
            "반복되는 작업을 함수로 나눕니다.",
            "최종 결과는 화면 출력, 파일 저장, 알림 중 하나로 남깁니다.",
          ],
        },
        {
          title: "로그 분석",
          points: [
            "로그 파일에서 ERROR, failed, timeout 같은 키워드를 찾습니다.",
            "에러 개수를 세면 장애 규모를 빠르게 볼 수 있습니다.",
            "날짜나 서비스 이름으로 필터링하면 원인 범위를 줄일 수 있습니다.",
            "결과를 파일로 남기면 다음 점검과 비교할 수 있습니다.",
          ],
        },
        {
          title: "파일 정리",
          points: [
            "pathlib으로 파일 경로와 확장자를 다룹니다.",
            "오래된 로그나 임시 파일을 찾아 목록으로 출력할 수 있습니다.",
            "삭제 작업은 먼저 dry-run으로 대상만 출력하는 방식이 안전합니다.",
            "자동 삭제보다 확인 가능한 리포트 생성부터 연습하는 것이 좋습니다.",
          ],
        },
        {
          title: "API 점검",
          points: [
            "배포 후 /api/health 같은 엔드포인트를 호출합니다.",
            "상태 코드와 JSON 응답 값을 함께 확인합니다.",
            "여러 서비스를 list로 두고 반복 점검할 수 있습니다.",
            "실패 결과를 JSON이나 텍스트 파일로 저장하면 CI/CD에서도 활용할 수 있습니다.",
          ],
        },
      ]}
      codeBlocks={[
        {
          title: "로그 에러 카운터",
          code: `error_count = 0

with open("app.log", "r", encoding="utf-8") as file:
    for line in file:
        if "ERROR" in line:
            error_count += 1

print(f"error count: {error_count}")`,
          description: "로그 전체에서 ERROR가 몇 번 나왔는지 집계합니다.",
        },
        {
          title: "여러 API 상태 점검",
          code: `import requests

services = [
    {"name": "api", "url": "http://localhost:8080/api/health"},
    {"name": "web", "url": "http://localhost:3000"},
]

for service in services:
    try:
        response = requests.get(service["url"], timeout=3)
        print(service["name"], response.status_code)
    except requests.exceptions.RequestException:
        print(service["name"], "failed")`,
          description: "서비스 목록을 반복하며 각 URL의 응답 상태를 확인합니다.",
        },
        {
          title: "점검 결과 파일 저장",
          code: `from pathlib import Path

result_path = Path("check-result.txt")
result_path.write_text("api: ok\\nweb: ok\\n", encoding="utf-8")

print(result_path.read_text(encoding="utf-8"))`,
          description: "점검 결과를 파일로 남기면 배포 기록이나 CI 로그와 연결하기 쉽습니다.",
        },
      ]}
      practice={[
        {
          title: "배포 후 점검 스크립트",
          tasks: [
            "점검할 URL 3개를 list에 넣습니다.",
            "각 URL의 상태 코드를 출력합니다.",
            "실패한 URL만 failed.txt에 저장합니다.",
          ],
        },
        {
          title: "로그 리포트 만들기",
          tasks: [
            "app.log에서 ERROR, WARN 개수를 각각 셉니다.",
            "결과를 report.txt에 저장합니다.",
            "에러가 1개 이상이면 needs check 메시지를 출력합니다.",
          ],
        },
      ]}
      previousHref="/labs/python/http-requests"
      previousLabel="HTTP 요청"
      nextHref="/labs/network"
      nextLabel="Network"
    />
  );
}
