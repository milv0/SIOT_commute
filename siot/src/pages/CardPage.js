import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../css/main.css";

const CardPage = () => {
  const cardData = [
    {
      title: "Light",
      subtitle: "Card Subtitle 1",
      text: "Some quick example text for the first card.",
    },
    {
      title: "Light",
      subtitle: "Card Subtitle 2",
      text: "Some quick example text for the second card.",
    },
    {
      title: "Light",
      subtitle: "Card Subtitle 2",
      text: "Some quick example text for the second card.",
    },
    {
      title: "Secondary",
      subtitle: "Card Subtitle 2",
      text: "Some quick example text for the second card.",
    },
    {
      title: "Secondary",
      subtitle: "Card Subtitle 2",
      text: "Some quick example text for the second card.",
    },
    {
      title: "Secondary",
      subtitle: "Card Subtitle 2",
      text: "Some quick example text for the second card.",
    },
    {
      title: "Dark",
      subtitle: "Card Subtitle 2",
      text: "Some quick example text for the second card.",
    },
    {
      title: "Dark",
      subtitle: "Card Subtitle 2",
      text: "Some quick example text for the second card.",
    },
    {
      title: "Dark",
      subtitle: "Card Subtitle 2",
      text: "Some quick example text for the second card.",
    },
    // Add more objects for additional cards
  ];

  return (
    <div>
      <Row xs={1} md={3} className="g-4 justify-content-center text-center">
        {cardData.map((card, index) => (
          <Col key={index}>
            <Card
              bg={card.title.toLowerCase()}
              text={card.title.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem", margin: "50px auto" }}
              className="mb-2"
            >
              <Card.Header>{card.title} Card</Card.Header>
              <Card.Body>
                <Card.Title>{card.subtitle}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardPage;
