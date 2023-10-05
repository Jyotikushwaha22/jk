import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const CusNavbar = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <>
      <Navbar bg="white" variant="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="your-logo.png" // Replace with the path to your company logo
            width="30"
            height="30"
            className="d-inline-block align-top mr-5" // Add margin-right to create space
            alt="Company Logo"
          />
          Your Company Name
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#">Gallery</Nav.Link>
            <Nav.Link href="#">Facilities</Nav.Link>
            <Nav.Link href="#">Events</Nav.Link>
            <Nav.Link href="#">Testimonials</Nav.Link>
            <Nav.Link href="#">Map</Nav.Link>
            <Nav.Link href="#">FAQ</Nav.Link>
            <Nav.Link href="#">Brochure</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CusNavbar;
