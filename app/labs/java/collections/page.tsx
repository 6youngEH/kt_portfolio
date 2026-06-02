import JavaTopicPage from "../JavaTopicPage";

export default function JavaCollectionsPage() {
  return (
    <JavaTopicPage
      step="03"
      title="Java 컬렉션"
      description="API 서버는 여러 데이터를 다룹니다. 게시글 목록은 List, 설정 값이나 JSON 형태 데이터는 Map, 중복 제거는 Set으로 생각하면 됩니다."
      summary={[
        "List는 순서가 있는 여러 값을 담습니다.",
        "Map은 key/value 구조로 값을 찾습니다.",
        "Set은 중복 없는 값 묶음입니다.",
      ]}
      sections={[
        {
          title: "List",
          points: [
            "List는 여러 값을 순서대로 저장합니다.",
            "ArrayList는 가장 자주 쓰는 List 구현체입니다.",
            "Controller에서 게시글 목록을 반환할 때 List<Post> 형태를 볼 수 있습니다.",
            "for문이나 stream으로 List 값을 처리합니다.",
          ],
        },
        {
          title: "Map",
          points: [
            "Map은 key로 value를 찾는 구조입니다.",
            "HashMap은 가장 흔한 Map 구현체입니다.",
            "간단한 JSON 응답을 Map.of로 만들 수 있습니다.",
            "설정 값이나 이름표가 있는 데이터를 다룰 때 유용합니다.",
          ],
        },
        {
          title: "Set",
          points: [
            "Set은 중복 값을 허용하지 않습니다.",
            "HashSet은 중복 제거에 자주 사용합니다.",
            "권한 목록, 태그 목록, 중복 IP 제거 같은 상황에 씁니다.",
            "순서가 필요하면 List, 중복 제거가 필요하면 Set을 우선 생각합니다.",
          ],
        },
        {
          title: "generic",
          points: [
            "List<String>은 문자열만 담는 List라는 뜻입니다.",
            "Map<String, Integer>는 문자열 key와 숫자 value를 가진 Map입니다.",
            "generic은 잘못된 타입을 넣는 실수를 컴파일 단계에서 막아줍니다.",
            "Spring API 코드에서 List<PostResponse> 같은 타입을 자주 보게 됩니다.",
          ],
        },
      ]}
      codeBlocks={[
        {
          title: "List 사용",
          code: `List<String> services = new ArrayList<>();
services.add("web");
services.add("api");
services.add("database");

for (String service : services) {
    System.out.println(service);
}`,
          description: "서비스 이름 목록을 List에 담고 하나씩 출력합니다.",
        },
        {
          title: "Map 응답",
          code: `Map<String, String> response = Map.of(
    "status", "ok",
    "service", "spring-api"
);

System.out.println(response.get("status"));`,
          description: "Spring Controller에서 간단한 JSON 응답을 만들 때 Map을 사용할 수 있습니다.",
        },
        {
          title: "중복 제거",
          code: `Set<Integer> ports = new HashSet<>();
ports.add(8080);
ports.add(8080);
ports.add(3000);

System.out.println(ports);`,
          description: "Set은 같은 값을 여러 번 넣어도 하나만 유지합니다.",
        },
      ]}
      practice={[
        {
          title: "게시글 목록",
          tasks: [
            "List<String> posts를 만듭니다.",
            "제목 3개를 add로 추가합니다.",
            "for문으로 모든 제목을 출력합니다.",
          ],
        },
        {
          title: "Health 응답 Map",
          tasks: [
            "Map.of로 status, service, profile 값을 만듭니다.",
            "status 값만 꺼내 출력합니다.",
            "Spring Boot에서 JSON 응답으로 어떻게 보일지 생각해 봅니다.",
          ],
        },
      ]}
      previousHref="/labs/java/oop"
      previousLabel="객체지향"
      nextHref="/labs/java/exceptions"
      nextLabel="예외 처리"
    />
  );
}
