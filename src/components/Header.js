import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Image,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import sgimage from "./img/undraw.svg";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/">MELP</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/login">link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row className="align-items-center">
        <Col>
          <h1>MELP</h1>
          <p>Tu guia de restaurantes favorita</p>
          <Button className="mt-3 mb-5">Consigue el mejor</Button>
        </Col>
        <Col>
          <Image
            src={sgimage}
            fluid
            style={{ width: "500px", marginTop: "50px", marginBottom: "100px" }}
          />
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col></Col>
      </Row>
    </>
  );
};

export default Header;
