import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import PropTypes from "prop-types";

function CardL({ head, desc, src, from }) {
  return (
    <Card className="mt-3 mx-3">
      <Card.Img variant="top" src={src} style={{ borderRadius: "20px" }} />
      <Card.Header>{from}</Card.Header>
      <Card.Body>
        <Card.Title>{head}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          <Button variant="primary">Read More</Button>
        </small>
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
