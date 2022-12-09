import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavContainer from "./components/nav/NavContainer";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Container>
      <NavContainer />
      <Dashboard />
    </Container>
  );
}

export default App;
