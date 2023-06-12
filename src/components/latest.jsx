import CardGroup from "react-bootstrap/CardGroup";
import CardL from "./card";

function Latest() {
  return (
    <div>
      <h3 style={{ marginTop: "4%", marginLeft: "3%", fontWeight: "bold" }}>
        Latest News
      </h3>

      <CardGroup>
        <CardL
          src="https://cdn.pixabay.com/photo/2017/08/04/01/52/karate-2578819_1280.jpg
        "
          from="Boxing 3hrs ago"
          head="Hello World"
          desc="The quick brown fox jumps over the lazy dog and finds a hidden treasure beneath the ancient oak tree near the sparkling river"
        />
        <CardL
          src="https://cdn.pixabay.com/photo/2017/08/04/01/52/karate-2578819_1280.jpg"
          head="Hello World"
          from="Boxing 3hrs ago"
          desc="The quick brown fox jumps over the lazy dog and finds a hidden treasure beneath the ancient oak tree near the sparkling river"
        />{" "}
        <CardL
          src="https://cdn.pixabay.com/photo/2017/08/04/01/52/karate-2578819_1280.jpg

      "
          from="Boxing 3hrs ago"
          head="Hello World"
          desc="The quick brown fox jumps over the lazy dog and finds a hidden treasure beneath the ancient oak tree near the sparkling river"
        />{" "}
        <CardL
          src="https://cdn.pixabay.com/photo/2017/08/04/01/52/karate-2578819_1280.jpg
    "
          head="Hello World"
          from="Boxing 3hrs ago"
          desc="The quick brown fox jumps over the lazy dog and finds a hidden treasure beneath the ancient oak tree near the sparkling river"
        />
      </CardGroup>
    </div>
  );
}

export default Latest;
