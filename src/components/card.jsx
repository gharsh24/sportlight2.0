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
        scale: 1.2,
        color: "black", // Change the text color to red on hover
        border: "2px solid black", // Apply a green border with 2px width on hover
        backgroundColor: "#0000", // Change the background color to light blue on hover
        transition: { duration: 0.3 },
      }}
      className="mt-3 mx-3 p-2 pb-0 "
      style={{ border: "1px solid black", borderRadius: "30px" }}
    >
      <Card.Img variant="top" src={src} style={{ borderRadius: "29px" }} />
      <Card.Header>{from}</Card.Header>
      <Card.Body style={{ borderRadius: "30px" , fontFamily:"'Tinos','sans-serif'"}} className="p-3">
        <Card.Title style={{fontWeight:"700",fontSize:"1.5rem"}}>{head}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <MotionButton variant="secondary">Read More</MotionButton>
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
