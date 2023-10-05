import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image7 from "../assets/images/bg.jpg";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        //minHeight: "100vh",
        width: "100%",
        //marginTop: "5%", // Adjusted margin for smaller screens
        backgroundImage: `url(${image7})`,
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginTop: "2rem",
          marginBottom: "4rem",
          padding: "1rem", // Added padding for better spacing on smaller screens
        }}
      >
        <h1 style={{ paddingTop: "6%" }}>Swajan.</h1>
        <p>Live the way you love.</p>
        <p>Your dream home is waiting for you.</p>
      </div>
      <Container
        fluid
        style={{
          paddingTop: "3%", // Adjusted padding for smaller screens
          background: "darkgray",
          color: "white",
        }}
      >
        <Row>
          {/* Logo */}
          <Col xs={12} md={4}>
            <h4>Logo</h4>
            {/* Add your logo here */}
          </Col>

          {/* Contact Us */}
          <Col xs={12} md={4}>
            <h4>Contact Us</h4>
            <p>Email: example@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </Col>

          {/* Information */}
          <Col xs={12} md={4}>
            <h4>Information</h4>
            <p>About Us</p>
            <p>Privacy Policy</p>
          </Col>
        </Row>
      </Container>
      <footer
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p>&copy; 2023 Your Website Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
