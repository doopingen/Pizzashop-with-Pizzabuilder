import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';
import { logout } from "../utils/auth";

export default (props) => (
  <Navbar className="bg-deepred" expand="lg">
    <Navbar.Brand className="text-white text-brand" href="#home">well stacked pizza co.</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link className="nav-link-gatsby text-nav" to="/account">Home</Link>{" "}
        <Nav.Link className="text-nav" href="#logout" onClick={e => { logout(); e.preventDefault() }} >Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)