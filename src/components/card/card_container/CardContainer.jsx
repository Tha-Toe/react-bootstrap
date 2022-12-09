import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FirstCard from "../first_card/FirstCard";
import LastCard from "../last_card/LastCard";
import MiddleCard from "../middle_card/MiddleCard";
import "./cardContainer.css";
export default function CardContainer() {
  return (
    <Container className=" card_container w-100">
      <Row>
        <Col md={4} className="mb-5">
          <FirstCard />
        </Col>
        <Col md={4} className="mb-5">
          <MiddleCard />
        </Col>
        <Col md={4} className="mb-5">
          <LastCard />
        </Col>
      </Row>
    </Container>
  );
}
