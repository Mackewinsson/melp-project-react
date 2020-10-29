import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "lightgray" }}>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Mackewinsson P.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
