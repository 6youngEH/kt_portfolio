import JavaTopicPage from "../JavaTopicPage";

export default function JavaExceptionsPage() {
  return (
    <JavaTopicPage
      step="04"
      title="Java 예외 처리"
      description="API 서버는 잘못된 요청, 없는 데이터, DB 오류처럼 실패 상황을 반드시 다룹니다. Java 예외 처리는 Spring Boot 에러 응답 설계의 기본입니다."
      summary={[
        "exception은 프로그램 실행 중 발생한 문제를 표현합니다.",
        "try/catch는 실패 가능성이 있는 코드를 감싸서 처리합니다.",
        "Spring Boot에서는 예외를 HTTP 에러 응답으로 바꾸는 흐름이 중요합니다.",
      ]}
      sections={[
        {
          title: "try/catch",
          points: [
            "try에는 실패할 수 있는 코드를 넣습니다.",
            "catch에는 예외가 발생했을 때 처리할 코드를 넣습니다.",
            "예외를 잡으면 프로그램이 바로 종료되지 않습니다.",
            "무조건 잡기보다 어떤 실패를 처리할지 명확히 해야 합니다.",
          ],
        },
        {
          title: "checked exception",
          points: [
            "checked exception은 컴파일러가 처리를 요구하는 예외입니다.",
            "파일 입출력 같은 코드에서 자주 만납니다.",
            "try/catch로 잡거나 throws로 호출한 쪽에 넘깁니다.",
            "API 서버에서는 외부 자원 접근 실패를 다룰 때 중요합니다.",
          ],
        },
        {
          title: "runtime exception",
          points: [
            "runtime exception은 실행 중 발생하는 예외입니다.",
            "없는 값을 읽거나 잘못된 인자를 넘길 때 자주 발생합니다.",
            "Spring에서는 비즈니스 규칙 위반을 runtime exception으로 표현하는 경우가 많습니다.",
            "예외 메시지는 문제 원인을 추적할 수 있게 구체적으로 작성합니다.",
          ],
        },
        {
          title: "API 에러 응답",
          points: [
            "없는 게시글 조회는 404 응답으로 바꾸는 것이 자연스럽습니다.",
            "잘못된 요청 값은 400 응답으로 처리합니다.",
            "서버 내부 문제는 500 응답으로 처리합니다.",
            "Spring Boot에서는 @ExceptionHandler나 @ControllerAdvice로 공통 처리할 수 있습니다.",
          ],
        },
      ]}
      codeBlocks={[
        {
          title: "try/catch 기본",
          code: `try {
    int number = Integer.parseInt("abc");
    System.out.println(number);
} catch (NumberFormatException error) {
    System.out.println("invalid number");
}`,
          description: "문자열을 숫자로 바꾸다 실패하는 상황을 예외로 처리합니다.",
        },
        {
          title: "직접 예외 던지기",
          code: `public Post findPost(Long id) {
    if (id <= 0) {
        throw new IllegalArgumentException("id must be positive");
    }
    return new Post(id, "Spring Boot");
}`,
          description: "잘못된 입력을 받았을 때 예외를 던져 호출한 쪽에 문제를 알립니다.",
        },
        {
          title: "Spring 에러 처리 감각",
          code: `@ExceptionHandler(IllegalArgumentException.class)
public ResponseEntity<String> handleBadRequest(IllegalArgumentException error) {
    return ResponseEntity.badRequest().body(error.getMessage());
}`,
          description: "Spring Boot에서는 Java 예외를 HTTP 응답으로 변환할 수 있습니다.",
        },
      ]}
      practice={[
        {
          title: "숫자 변환 처리",
          tasks: [
            "문자열 값을 int로 변환합니다.",
            "잘못된 문자열이 들어오면 invalid input을 출력합니다.",
            "정상 숫자면 숫자에 10을 더해 출력합니다.",
          ],
        },
        {
          title: "없는 데이터 예외",
          tasks: [
            "findUser(Long id) 메서드를 만듭니다.",
            "id가 1이 아니면 IllegalArgumentException을 던집니다.",
            "catch에서 user not found 메시지를 출력합니다.",
          ],
        },
      ]}
      previousHref="/labs/java/collections"
      previousLabel="컬렉션"
      nextHref="/labs/java/spring-ready"
      nextLabel="Spring 준비"
    />
  );
}
