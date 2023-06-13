import Highlight from "./Highlight";
import Description from "./Description";
import Latest from "./latest";
import { motion, useScroll, useSpring } from "framer-motion";
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div style={{ margin: "0 10%" }}>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Description />
      <Highlight
        src="https://cdn.pixabay.com/photo/2020/03/10/16/47/moon-4919501_640.jpg"
        heading="Hello World"
        news="The quick brown fox jumps over the lazy dog and finds a hidden treasure beneath the ancient oak tree near the sparkling river."
      />
      <Latest />
      <Latest />
      <Latest />
    </div>
  );
}

export default App;
