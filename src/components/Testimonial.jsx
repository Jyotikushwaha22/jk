import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "../components/CarouselImage";

import React from "react";
import image1 from "../assets/images/pexels-jeremy-bishop-6212576.jpg";
import image2 from "../assets/images/pexels-jeremy-bishop-2397414.jpg";
import image3 from "../assets/images/pexels-jeremy-bishop-6212576.jpg";
import TestimonialImage from "./TestimonialImage";

const Testimonial = ({ silderDoc }) => {
  return (
    <div
      style={{
        height: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // backgroundColor: "grey",
        paddingTop: "7%",
      }}
    >
      <h1 style={{ color: "#333" }}>Testimonials</h1>

      <Carousel
        fade
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "0px",
        }}
      >
        {silderDoc.map((item) => (
          <Carousel.Item key={item.id} style={{ paddingTop: "0px" }}>
            <TestimonialImage
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "0px",
              }}
              imagePath={item.imagePath}
              avatarImage={item.avatarImage}
              text={item.text}
              desc={item.desc}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
