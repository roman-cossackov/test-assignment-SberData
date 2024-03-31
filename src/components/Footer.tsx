import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-auto py-3 bg-light" style={{ display: 'block', width: '100%' }}>
      <Container>
        <Row>
          <Col>
            <p className="text-center">&copy; 2024 My Website</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
