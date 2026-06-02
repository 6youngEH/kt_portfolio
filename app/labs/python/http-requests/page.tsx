import PythonTopicPage from "../PythonTopicPage";

export default function PythonHttpRequestsPage() {
  return (
    <PythonTopicPage
      step="05"
      title="Python HTTP 요청"
      description="Python으로 HTTP 요청을 보내면 API 상태 점검, 배포 후 확인, 간단한 데이터 수집을 자동화할 수 있습니다."
      summary={[
        "GET은 조회, POST는 데이터 제출에 주로 사용합니다.",
        "응답은 상태 코드, 헤더, 본문으로 나눠 확인합니다.",
        "timeout과 예외 처리를 넣어야 자동화 스크립트가 멈추지 않습니다.",
      ]}
      sections={[
        {
          title: "requests 설치",
          points: [
            "requests는 Python에서 HTTP 요청을 쉽게 보내는 외부 패키지입니다.",
            "pip install requests로 설치합니다.",
            "프로젝트에서는 venv를 켠 뒤 설치하는 것이 좋습니다.",
            "표준 라이브러리 urllib도 있지만 처음에는 requests가 읽기 쉽습니다.",
          ],
        },
        {
          title: "GET 요청",
          points: [
            "requests.get(url)은 URL로 GET 요청을 보냅니다.",
            "status_code로 HTTP 상태 코드를 확인합니다.",
            "응답 본문이 JSON이면 response.json()으로 dict/list로 바꿉니다.",
            "response.ok는 2xx 성공 여부를 빠르게 확인할 때 쓸 수 있습니다.",
          ],
        },
        {
          title: "POST 요청",
          points: [
            "requests.post(url, json=data)는 JSON 본문을 보냅니다.",
            "json 옵션을 쓰면 Content-Type도 자동으로 맞춰집니다.",
            "폼 제출, 알림 전송, 테스트 데이터 생성에 사용할 수 있습니다.",
            "서버가 기대하는 필드 이름과 타입을 맞춰야 합니다.",
          ],
        },
        {
          title: "timeout과 예외",
          points: [
            "timeout을 주지 않으면 응답이 없을 때 오래 멈출 수 있습니다.",
            "requests.exceptions.RequestException으로 요청 실패를 잡을 수 있습니다.",
            "자동화에서는 실패를 출력하거나 파일에 남기고 다음 작업으로 넘어가야 합니다.",
            "상태 코드 실패와 네트워크 실패를 구분해서 봅니다.",
          ],
        },
      ]}
      codeBlocks={[
        {
          title: "Health Check",
          code: `import requests

response = requests.get("http://localhost:8080/api/health", timeout=3)

print(response.status_code)
print(response.json())`,
          description: "Spring Boot API가 살아 있는지 Python에서 직접 확인합니다.",
        },
        {
          title: "POST 요청",
          code: `import requests

payload = {"name": "kt", "message": "hello"}
response = requests.post("http://localhost:8080/api/contact", json=payload, timeout=3)

print(response.status_code)`,
          description: "문의 폼처럼 JSON 데이터를 백엔드 API로 보냅니다.",
        },
        {
          title: "실패 처리",
          code: `import requests

try:
    response = requests.get("http://localhost:8080/api/health", timeout=3)
    response.raise_for_status()
    print("ok")
except requests.exceptions.RequestException as error:
    print(f"request failed: {error}")`,
          description: "네트워크 실패와 4xx/5xx 응답을 잡아서 메시지로 남깁니다.",
        },
      ]}
      practice={[
        {
          title: "여러 URL 점검",
          tasks: [
            "URL list를 만듭니다.",
            "for문으로 각 URL에 GET 요청을 보냅니다.",
            "상태 코드가 200이 아니면 failed 메시지를 출력합니다.",
          ],
        },
        {
          title: "API 결과 저장",
          tasks: [
            "GET 요청 결과를 response.json()으로 읽습니다.",
            "json.dump로 api-result.json 파일에 저장합니다.",
            "요청 실패 시 failed-result.txt에 실패 메시지를 저장합니다.",
          ],
        },
      ]}
      previousHref="/labs/python/files-errors"
      previousLabel="파일과 예외"
      nextHref="/labs/python/automation"
      nextLabel="자동화 스크립트"
    />
  );
}
