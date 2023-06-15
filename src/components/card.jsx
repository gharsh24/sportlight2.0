import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const MotionButton = motion(Button);
const MotionCard = motion(Card);
function CardL({ head, desc, src, from, URL }) {
  return (
    <MotionCard
      whileHover={{
        scale: 1.01,
        color: "black", // Change the text color to red on hover
        border: "2px solid black", // Apply a green border with 2px width on hover
        backgroundColor: "lightgray", // Change the background color to light blue on hover
        transition: { duration: 0.3 },
        y: 15,
      }}
      className="mt-3 mx-3 pb-0 "
      style={{
        border: "1px solid black",
        borderRadius: "30px",
        maxHeight: "66vh",
      }}
    >
      <Card.Img
        variant="top"
        src={src}
        style={{
          borderRadius: "29px",
          maxWidth: "none",
          height: "38%",
          width: "auto",
        }}
      />
      <Card.Header style={{ marginBottom: "-2%" }}>{from}</Card.Header>
      <Card.Body
        style={{ borderRadius: "25px", fontFamily: "'Tinos',serif" }}
        className="p-3"
      >
        <Card.Title
          style={{
            fontWeight: "700",
            fontSize: "1.16rem",
            height: "19%",
            marginBottom: "8%",
          }}
        >
          {head}
        </Card.Title>

        <Card.Text
          style={{
            height: "45%",
            fontSize: "0.84rem",
            marginTop: "4%",
            marginBottom: "5%",
          }}
        >
          {desc}
        </Card.Text>
        <a href={URL} target="_blank">
          <MotionButton
            whileTap={{ scale: 0.8 }}
            variant="secondary"
            style={{ position: "absolute", bottom: "4px" }}
          >
            Read More
          </MotionButton>
        </a>
      </Card.Body>
    </MotionCard>
  );
}
CardL.propTypes = {
  head: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
};

export default CardL;
