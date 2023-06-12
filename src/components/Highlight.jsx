
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Highlight(props) {
  return (
    <Container>
      <Row >
        <Col  className='d-flex justify-content-start'>
        <div >
        <img src={props.src} className="img-fluid" style={{ borderRadius: "20px", maxWidth: '400px', height: 'auto' }}/></div>
        </Col>
        <Col className="d-flex align-items-center " >
            <div >
            <h1 className="text-left mx-auto">{props.heading}</h1>
            <p className="text-left mx-auto">{props.news}</p> 
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Highlight;
