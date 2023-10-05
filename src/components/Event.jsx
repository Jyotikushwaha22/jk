import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import image1 from "../assets/images/home.jpg";
import image7 from "../assets/images/bg.jpg";
// const eve = {
//   backgroundImage: `url(${image1})`,
//   backgroundColor: "red",
// };

function Event() {
  const containerStyle = {
    backgroundImage: `url(${image7})`, // Set image7 as the background image
    backgroundSize: "cover", // Optional: Adjust background size as needed
    backgroundRepeat: "no-repeat", // Optional: Adjust background repeat as needed
    backgroundPosition: "center", // Optional: Adjust background position as needed
    minHeight: "100vh", // Optional: Set a minimum height for the container
    display: "flex", // Use flexbox
    justifyContent: "center", // Center horizontally
    alignItems: "center",
  };
  return (
    <Container fluid style={containerStyle}>
      <div>
        <Row>
          <Col md={5}>
            {/* Content for the left column */}
            <div>
              <img src={image1} alt="Your Image" style={{ width: "100%" }} />
            </div>
          </Col>
          <Col md={7}>
            {/* Content for the right column */}
            <div>
              <h1>WEEKEND PARTY</h1>
              <div>
                Join us for a delightful weekend soirée tailored exclusively for
                our cherished senior community. Enjoy heartwarming
                conversations, soothing music, and delectable treats in a cozy,
                relaxed atmosphere. Let's create unforgettable memories together
                as we celebrate life's golden moments.
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Event;
