import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import "../css/highlight.css";
const MotionCont = motion(Container);
function Highlight(props) {
  return (
    <MotionCont>
      <Row>
        <Col className="d-flex justify-content-start">
          <div className="img-div">
            <img
              src={props.src}
              className="img-fluid"
              style={{
              borderRadius: "20px",
              maxWidth: "550px",
              height: "auto"}}  
            />
          </div>
        </Col>
        <Col className="d-flex align-items-center ">
          <div style={{ fontFamily: "'Tinos','sans-serif'" }}>
            <h1 className="text-left mx-auto" style={{ fontWeight: "600" }}>
              {props.heading}
            </h1>
            <p className="text-left mx-auto" style={{ fontSize: "1.2rem" }}>
              {props.news}
            </p>
          </div>
        </Col>
      </Row>
    </MotionCont>
  );
}

export default Highlight;
