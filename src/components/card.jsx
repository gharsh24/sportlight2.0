import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const MotionButton = motion(Button);
const MotionCard = motion(Card);
function CardL({ head, desc, src, from }) {
  return (
    <MotionCard
      whileHover={{
        scale: 1.13,
        color: "black",

        border: "2px solid rgb(47, 127, 198)",
        backgroundColor: "#0000",
        transition: { duration: 0.5 },
        y: 10,
      }}
      className="mt-3 mx-3 pb-2"
      style={{ border: "1px solid black", borderRadius: "30px" }}
    >
      <Card.Img variant="top" src={src} style={{ borderRadius: "29px" }} />
      <Card.Header>{from}</Card.Header>
      <Card.Body style={{ borderRadius: "30px" }} className="p-3">
        <Card.Title>{head}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <MotionButton
          whileTap={{ scale: 0.8, backgroundColor: "darkgray" }}
          variant="secondary"
        >
          Read More
        </MotionButton>
      </Card.Body>
      <Card.Footer>
        <small className="text-mute"></small>
      </Card.Footer>
    </MotionCard>
  );
}
CardL.propTypes = {
  head: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
};

export default CardL;
