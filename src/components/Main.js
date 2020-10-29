import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardsContainer from "./CardsContainer";

const Main = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <CardsContainer />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
