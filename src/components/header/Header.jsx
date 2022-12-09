import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import "./header.css";

export default function Header() {
  return (
    <Container className="bg-white mt-3 mb-3 dashboard_text">
      <div className="text-dark fw-bold ">Dashboard</div>
      <div className="d-flex flex-row align-items-center justify-content-end">
        <div className="header-font me-2">
          Today:{" "}
          <span className="text-primary header-font fw-bold ">Dec 9</span>
        </div>
        <div className="header-font me-2">Filter |</div>
        <button className="text-white header-font create-button border-0 rounded-2 bg-primary">
          Create
        </button>
      </div>
    </Container>
  );
}
