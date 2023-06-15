import Navbar from "./Navbar";
import Highlight from "./Highlight";
import Description from "./Description";
import Latest from "./latest";
import CardPicker from "./CardPicker";
import Footer from "./footer";
import { motion, useScroll } from "framer-motion";
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DataFromApi from "./data";
import Upcoming from "./upcoming";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <DataFromApi />
      <Navbar />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Description />
      {/* <Highlight
        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/UFC_290_poster.jpg/220px-UFC_290_poster.jpg"
        heading="Upcoming Event UFC 290"
        news="The quick brown fox jumps over the lazy dog and finds a hidden treasure beneath the ancient oak tree near the sparkling river."
      /> 
      hello 
      */}

      <Latest />
      <br />
      <Upcoming />
      <CardPicker />
      <Footer />
    </div>
  );
}

export default App;
