import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faGift,
  faHouse,
  faTruckFast,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
export default function NavContainer() {
  return (
    <Navbar>
      <Container className="mt-3" id="responsive-navbar-nav">
        <div className="w-100 nav_container">
          <div className="text-white fw-bold name">
            <img src="/innerLogo.png" style={{ width: "50px" }} />
            Tha Toe
          </div>
          <div className="nav_button_container">
            <input
              placeholder="Search..."
              type="text"
              className="p-2 border-0 outline-0 rounded-3 input_nav me-2"
            />
            <div className="d-flex flex-row justify-content-end align-items-center">
              <FontAwesomeIcon
                icon={faHouse}
                className="p-2 icon rounded-3 text-white me-2"
              />
              <FontAwesomeIcon
                icon={faUser}
                className="p-2 icon rounded-3 text-white me-2"
              />
              <FontAwesomeIcon
                icon={faTruckFast}
                className="p-2 icon rounded-3 text-white me-2"
              />
              <FontAwesomeIcon
                icon={faCartShopping}
                className="p-2 icon rounded-3 text-white me-2"
              />
              <FontAwesomeIcon
                icon={faGift}
                className="p-2 icon rounded-3 text-white me-2"
              />
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}
