import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./firstCard.css";
export default function FirstCard() {
  return (
    <div className="card border-0 rounded-4 first_card_bg">
      <div className="text-white mt-4 ms-4">Sales Progress</div>
      <Row className="mt-0">
        <Col xs={2} className="column_bar_container">
          <div className="bg-white col_bar_1"></div>
        </Col>
        <Col xs={2} className="column_bar_container">
          <div className="bg-white col_bar_2"></div>
        </Col>
        <Col xs={2} className="column_bar_container">
          <div className="bg-white col_bar_3"></div>
        </Col>
        <Col xs={2} className="column_bar_container">
          <div className="bg-white col_bar_4"></div>
        </Col>
        <Col xs={2} className="column_bar_container">
          <div className="bg-white col_bar_5"></div>
        </Col>
        <Col xs={2} className="column_bar_container">
          <div className="bg-white col_bar_6"></div>
        </Col>
      </Row>
      <div className="inside_card bg-white rounded-4">
        <Row className="mt-4">
          <Col xs={6} className="d-flex flex-column align-items-center mt-2">
            <div className="average text-secondary ">Average Sale</div>
            <div className="amount text-dark fw-bold">$650</div>
          </Col>
          <Col xs={6} className="d-flex flex-column align-items-center mt-2">
            <div className="average text-secondary ">Comission</div>
            <div className="amount text-dark fw-bold">$29500</div>
          </Col>
          <Col xs={6} className="d-flex flex-column align-items-center mt-2">
            <div className="average text-secondary ">Revunue</div>
            <div className="amount text-dark fw-bold">$55000</div>
          </Col>
          <Col xs={6} className="d-flex flex-column align-items-center mt-2">
            <div className="average text-secondary ">Expenses</div>
            <div className="amount text-dark fw-bold">$1,130,600</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
