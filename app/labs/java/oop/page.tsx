import JavaTopicPage from "../JavaTopicPage";

export default function JavaOopPage() {
  return (
    <JavaTopicPage
      step="02"
      title="Java 객체지향"
      description="Spring Boot는 Controller, Service, Repository, DTO 같은 객체를 조합해서 API 서버를 만듭니다. class와 object 감각이 있어야 구조를 이해할 수 있습니다."
      summary={[
        "class는 객체를 만들기 위한 설계도입니다.",
        "field는 객체가 가진 데이터, method는 객체가 수행하는 동작입니다.",
        "constructor는 객체를 만들 때 필요한 값을 초기화합니다.",
      ]}
      sections={[
        {
          title: "class와 object",
          points: [
            "class는 어떤 데이터와 동작을 가질지 정의합니다.",
            "object는 class를 바탕으로 실제로 만들어진 값입니다.",
            "Spring에서는 UserService, PostController 같은 class를 많이 만듭니다.",
            "객체를 사용하면 관련 데이터와 동작을 한 곳에 묶을 수 있습니다.",
          ],
        },
        {
          title: "field",
          points: [
            "field는 객체가 가진 상태입니다.",
            "Post 객체라면 id, title, content 같은 field를 가질 수 있습니다.",
            "field는 private으로 숨기고 method로 접근하는 방식이 흔합니다.",
            "DTO와 Entity는 field를 중심으로 데이터를 표현합니다.",
          ],
        },
        {
          title: "constructor",
          points: [
            "constructor는 객체를 만들 때 실행되는 특별한 메서드입니다.",
            "필수 값을 constructor에서 받으면 불완전한 객체 생성을 줄일 수 있습니다.",
            "Spring에서는 생성자 주입 방식으로 의존성을 받는 코드가 많습니다.",
            "constructor 이름은 class 이름과 같습니다.",
          ],
        },
        {
          title: "encapsulation",
          points: [
            "캡슐화는 객체 내부 상태를 함부로 바꾸지 못하게 보호하는 방식입니다.",
            "private field와 public method 조합을 자주 사용합니다.",
            "객체가 스스로 유효한 상태를 유지하도록 만드는 것이 목표입니다.",
            "API 서버에서는 요청 값 검증과 도메인 규칙을 안전하게 다루는 데 도움이 됩니다.",
          ],
        },
      ]}
      codeBlocks={[
        {
          title: "Post 클래스",
          code: `public class Post {
    private Long id;
    private String title;

    public Post(Long id, String title) {
        this.id = id;
        this.title = title;
    }

    public String getTitle() {
        return title;
    }
}`,
          description: "게시글 데이터를 class로 표현하면 Spring API 응답 객체로 확장하기 쉽습니다.",
        },
        {
          title: "객체 생성",
          code: `Post post = new Post(1L, "Spring Boot API");
System.out.println(post.getTitle());`,
          description: "new로 객체를 만들고 method를 호출해 값을 사용합니다.",
        },
        {
          title: "Service 클래스 감각",
          code: `public class PostService {
    public Post findPost(Long id) {
        return new Post(id, "Java and Spring");
    }
}`,
          description: "Service는 API 처리에 필요한 비즈니스 로직을 담는 class로 볼 수 있습니다.",
        },
      ]}
      practice={[
        {
          title: "User 클래스 만들기",
          tasks: [
            "id, name field를 가진 User class를 만듭니다.",
            "constructor로 id와 name을 받습니다.",
            "getName method로 이름을 반환합니다.",
          ],
        },
        {
          title: "Service 흉내내기",
          tasks: [
            "UserService class를 만듭니다.",
            "findUser method에서 User 객체를 반환합니다.",
            "main에서 UserService를 만들고 이름을 출력합니다.",
          ],
        },
      ]}
      previousHref="/labs/java/syntax"
      previousLabel="기본문법"
      nextHref="/labs/java/collections"
      nextLabel="컬렉션"
    />
  );
}
