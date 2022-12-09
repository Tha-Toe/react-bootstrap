import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import "./dashboard.css";
import Header from "../header/Header";
import CardContainer from "../card/card_container/CardContainer";
export default function Dashboard() {
  return (
    <Container className="bg-white d-flex flex-column p-0 rounded-3 mt-3 mb-5">
      <Header />
      <CardContainer />
    </Container>
  );
}
