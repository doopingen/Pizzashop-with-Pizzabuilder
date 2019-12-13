import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';
import { logout } from "../utils/auth";

export default (props) => (
  <Navbar bg="dark" expand="lg">
    <Navbar.Brand className="text-white" href="#home">Pizza!!!</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link className="nav-link-gatsby text-white" to="/account">Home</Link>{" "}
        <Link className="nav-link-gatsby text-white" to="/account/settings">Settings</Link>{" "}
        <Link className="nav-link-gatsby text-white" to="/account/billing">Billing</Link>{" "}
        <Link className="nav-link-gatsby text-white" to="/pizzabuilder">Order</Link>{" "}
        <Link className="nav-link-gatsby text-white" to="/checkout">Checkout</Link>{" "}
        <Nav.Link className="text-white" href="#logout" onClick={e => { logout(); e.preventDefault() }} >Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)