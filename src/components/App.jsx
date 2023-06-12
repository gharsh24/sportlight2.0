import Highlight from "./Highlight";
import Description from "./Description";
import Latest from "./latest";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{margin: "0 10%", fontFamily: "'Montserrat', sans-serif"}}>
      <Description/>
      <Highlight 
      src="https://cdn.pixabay.com/photo/2017/08/04/01/52/karate-2578819_1280.jpg"
      heading="Hello World"
      news="The quick brown fox jumps over the lazy dog and finds a hidden treasure beneath the ancient oak tree near the sparkling river."
      />
      <Latest />
    </div>
  );
}

export default App;
