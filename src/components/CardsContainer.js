import React from "react";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";
import CardElement from "./CardElement";

const CardsContainer = () => {
  // UseState to put the data into
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios("http://localhost:3000/api");
      const parsedData = response.data;
      setData(parsedData);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(data);
  // Use effect to bring the data
  useEffect(() => {
    fetchData();
  }, []);

  // map over the data and return the cards
  const cards = data.map((el) => {
    return (
      <CardElement
        name={el.name}
        street={el.address.street}
        city={el.address.city}
        state={el.address.state}
        site={el.contact.site}
        email={el.contact.email}
        phone={el.contact.phone}
        key={el.id}
        rating={el.rating}
      />
    );
  });
  return (
    <Row className="row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
      {cards}
    </Row>
  );
};

export default CardsContainer;
