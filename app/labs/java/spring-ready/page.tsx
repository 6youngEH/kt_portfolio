import JavaTopicPage from "../JavaTopicPage";

export default function JavaSpringReadyPage() {
  return (
    <JavaTopicPage
      step="05"
      title="Java Spring 준비"
      description="Spring Boot 코드를 읽으려면 Java 문법만으로는 부족합니다. 어노테이션, interface, DTO, 의존성 주입이 어떻게 API 서버 구조로 이어지는지 알아야 합니다."
      summary={[
        "annotation은 Spring에게 class와 method의 역할을 알려주는 표시입니다.",
        "DTO는 API 요청과 응답 데이터를 담는 Java 객체입니다.",
        "dependency injection은 필요한 객체를 Spring이 연결해 주는 방식입니다.",
      ]}
      sections={[
        {
          title: "annotation",
          points: [
            "annotation은 @로 시작하는 메타데이터입니다.",
            "@RestController는 이 class가 API Controller임을 Spring에 알려줍니다.",
            "@GetMapping은 특정 URL의 GET 요청을 method에 연결합니다.",
            "Spring Boot에서는 annotation을 읽고 객체 생성과 요청 연결을 자동으로 처리합니다.",
          ],
        },
        {
          title: "interface",
          points: [
            "interface는 어떤 method가 있어야 하는지 약속하는 타입입니다.",
            "구현 class는 interface가 정한 method를 실제로 작성합니다.",
            "Spring에서는 Service나 Repository를 interface로 분리하는 구조를 자주 봅니다.",
            "구현을 바꿔도 사용하는 쪽 코드를 크게 바꾸지 않게 도와줍니다.",
          ],
        },
        {
          title: "DTO",
          points: [
            "DTO는 Data Transfer Object의 줄임말입니다.",
            "API 요청 본문이나 응답 본문에 필요한 데이터만 담습니다.",
            "Entity를 그대로 외부에 노출하지 않고 DTO로 변환하는 것이 일반적입니다.",
            "PostResponse, CreatePostRequest 같은 이름을 자주 씁니다.",
          ],
        },
        {
          title: "dependency injection",
          points: [
            "의존성 주입은 필요한 객체를 직접 new 하지 않고 외부에서 받는 방식입니다.",
            "Spring이 Controller에 Service 객체를 넣어 줄 수 있습니다.",
            "생성자 주입은 테스트하기 쉽고 의존성이 명확해서 많이 사용됩니다.",
            "final field와 constructor 조합을 자주 보게 됩니다.",
          ],
        },
      ]}
      codeBlocks={[
        {
          title: "Controller annotation",
          code: `@RestController
@RequestMapping("/api/posts")
public class PostController {
    @GetMapping
    public List<String> findPosts() {
        return List.of("Java", "Spring Boot");
    }
}`,
          description: "annotation으로 class와 method를 HTTP API에 연결합니다.",
        },
        {
          title: "DTO",
          code: `public class PostResponse {
    private Long id;
    private String title;

    public PostResponse(Long id, String title) {
        this.id = id;
        this.title = title;
    }
}`,
          description: "API 응답에 필요한 데이터만 담는 객체를 DTO로 만듭니다.",
        },
        {
          title: "생성자 주입",
          code: `public class PostController {
    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }
}`,
          description: "Controller가 필요한 Service를 생성자로 받아 사용하는 패턴입니다.",
        },
      ]}
      practice={[
        {
          title: "DTO 설계",
          tasks: [
            "UserResponse class를 만듭니다.",
            "id, name, email field를 추가합니다.",
            "API 응답에 비밀번호 같은 민감한 값은 넣지 않는 이유를 정리합니다.",
          ],
        },
        {
          title: "Controller 읽기",
          tasks: [
            "@RestController, @RequestMapping, @GetMapping의 의미를 한 줄씩 적습니다.",
            "method 반환 타입이 JSON 응답으로 어떻게 바뀌는지 설명합니다.",
            "Service를 생성자로 받는 이유를 정리합니다.",
          ],
        },
      ]}
      previousHref="/labs/java/exceptions"
      previousLabel="예외 처리"
      nextHref="/labs/spring-boot"
      nextLabel="Spring Boot API"
    />
  );
}
