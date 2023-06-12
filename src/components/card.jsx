import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import PropTypes from "prop-types";

function CardL({ head, desc, src, from }) {
  return (
    <Card
      className="mt-3 mx-3 pb-0"
      style={{ border: "1px solid black", borderRadius: "30px" }}
    >
      <Card.Img variant="top" src={src} style={{ borderRadius: "29px" }} />
      <Card.Header>{from}</Card.Header>
      <Card.Body style={{ borderRadius: "30px" }} className="p-3">
        <Card.Title>{head}</Card.Title>
        <Card.Text>{desc}</Card.Text>

        <Button variant="secondary">Read More</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
  );
}
CardL.propTypes = {
  head: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
};

export default CardL;
