import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

export const NavbarComponent = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> SIMPLE APPS </Navbar.Brand>{" "}
        {/* <Nav className="mr-auto">
          <Nav.Link href="#home"> Home </Nav.Link>{" "}
          <Nav.Link href="#features"> Features </Nav.Link>{" "}
          <Nav.Link href="#pricing"> Pricing </Nav.Link>{" "}
        </Nav>{" "} */}
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light"> Search </Button>{" "}
        </Form>{" "} */}
      </Container>{" "}
    </Navbar>
  );
};
