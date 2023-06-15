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
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.matchMedia("(max-width:1000px)").matches);
    };

    // Initial check
    checkScreenSize();

    // Event listener for screen size changes
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Router>
      <Routes>
        {" "}
        <Route
          path="/"
          element={
            <React.Fragment>
              <DataFromApi />
              <Navbar />

              <Description />
              <div id="stories">
                <Latest />
              </div>
              <br />
              {/* <div id="upcoming">
                <Upcoming />
              </div> */}
              {/* Conditionally render the Upcoming component */}
              {!isSmallScreen && (
                <div id="upcoming">
                  <Upcoming />
                </div>
              )}
              <div id="subscribe">
                <Footer />
              </div>
            </React.Fragment>
          }
        />
        {/* <Route path="/stories" element={<Latest />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/subscribe" element={<Footer />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
