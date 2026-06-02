import JavaTopicPage from "../JavaTopicPage";

export default function JavaSyntaxPage() {
  return (
    <JavaTopicPage
      step="01"
      title="Java 기본문법"
      description="Java 기본문법은 Spring Boot 코드를 읽는 출발점입니다. 타입, 변수, 조건문, 반복문, 메서드 선언을 먼저 익히면 Controller와 Service 코드를 따라갈 수 있습니다."
      summary={[
        "Java는 변수마다 타입을 명시하는 언어입니다.",
        "if, for, method는 API 서버 로직의 기본 흐름입니다.",
        "public static void main은 Java 프로그램의 기본 실행 시작점입니다.",
      ]}
      sections={[
        {
          title: "타입과 변수",
          points: [
            "String은 문자열, int는 정수, boolean은 참/거짓 값을 담습니다.",
            "변수 선언은 타입 이름 = 값 형태로 작성합니다.",
            "Java는 타입이 맞지 않으면 컴파일 단계에서 오류가 납니다.",
            "Spring 코드에서도 요청 값, 응답 값, 서비스 결과에 타입이 붙습니다.",
          ],
        },
        {
          title: "조건문",
          points: [
            "if는 조건이 참일 때만 코드를 실행합니다.",
            "else if와 else로 여러 상태를 나눌 수 있습니다.",
            "HTTP 상태 코드나 입력값 검증 로직에서 조건문을 자주 씁니다.",
            "조건식에는 ==, !=, >, >=, <, <= 같은 비교 연산자를 사용합니다.",
          ],
        },
        {
          title: "반복문",
          points: [
            "for문은 정해진 횟수나 목록을 반복 처리할 때 사용합니다.",
            "향상된 for문은 List 값을 하나씩 꺼낼 때 읽기 쉽습니다.",
            "while은 조건이 참인 동안 반복합니다.",
            "게시글 목록, 사용자 목록, 로그 목록을 처리할 때 반복문이 필요합니다.",
          ],
        },
        {
          title: "메서드",
          points: [
            "메서드는 클래스 안에 있는 함수입니다.",
            "반환 타입, 메서드 이름, 매개변수, 본문으로 구성됩니다.",
            "return은 메서드의 결과를 호출한 곳으로 돌려줍니다.",
            "Spring Controller의 API 처리 함수도 Java 메서드입니다.",
          ],
        },
      ]}
      codeBlocks={[
        {
          title: "변수와 출력",
          code: `public class Main {
    public static void main(String[] args) {
        String serviceName = "spring-api";
        int port = 8080;
        boolean healthy = true;

        System.out.println(serviceName + " runs on " + port);
        System.out.println(healthy);
    }
}`,
          description: "문자열, 숫자, boolean 값을 변수에 담고 콘솔에 출력합니다.",
        },
        {
          title: "상태 코드 분류",
          code: `int statusCode = 503;

if (statusCode == 200) {
    System.out.println("healthy");
} else if (statusCode >= 500) {
    System.out.println("server error");
} else {
    System.out.println("check request");
}`,
          description: "API 응답 상태를 조건문으로 분류하는 기본 패턴입니다.",
        },
        {
          title: "메서드 만들기",
          code: `public String healthMessage(int statusCode) {
    if (statusCode == 200) {
        return "healthy";
    }
    return "unhealthy";
}`,
          description: "입력값을 받아 문자열 결과를 반환하는 메서드입니다.",
        },
      ]}
      practice={[
        {
          title: "상태 코드 연습",
          tasks: [
            "statusCode 값을 200, 404, 500으로 바꿔 봅니다.",
            "2xx, 4xx, 5xx를 각각 다른 메시지로 출력합니다.",
            "분류 로직을 메서드로 분리합니다.",
          ],
        },
        {
          title: "서비스 정보 출력",
          tasks: [
            "serviceName, port, profile 변수를 선언합니다.",
            "spring-api:8080 local 형태로 출력합니다.",
            "profile이 prod일 때만 production mode를 출력합니다.",
          ],
        },
      ]}
      nextHref="/labs/java/oop"
      nextLabel="객체지향"
    />
  );
}
