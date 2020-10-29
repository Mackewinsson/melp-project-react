import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const CardElement = ({
  name,
  street,
  city,
  state,
  site,
  email,
  phone,
  rating,
}) => {
  return (
    <Col className="mb-4">
      <Card border="success" style={{ width: "18rem" }}>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <small>{`${street}, ${city}, ${state}`}</small>
          </Card.Subtitle>
          <Card.Text>
            {`
            Email: ${email}
            Phone: ${phone}
            `}
            <br />
            <strong>{`Rating: ${rating}`}</strong>
          </Card.Text>
          <Card.Link href="#">{site}</Card.Link> <br />
          <Button className="mt-auto cardbutton" href="#">
            Comparte en facebook
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

// {
//     name,
//     website,
//     email,
//     phone,
//     city,
//     state,
//     location,
//     rating,
//   }

export default CardElement;
