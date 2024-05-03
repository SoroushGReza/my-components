import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home">FiDEL</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Coupons</Nav.Link>
          <Nav.Link href="#pricing">Profile</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavBar;
