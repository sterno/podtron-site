import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => (
  <footer>
    <Container className="footerContainer">
      <Row className="mt-3">
        <Col className="text-center">
          <p>© 2023 Steve Stearns</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;