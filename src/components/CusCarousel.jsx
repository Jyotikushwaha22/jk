import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "../components/CarouselImage";

import React from "react";
import image1 from "../assets/images/pexels-jeremy-bishop-6212576.jpg";
import image2 from "../assets/images/pexels-jeremy-bishop-2397414.jpg";
import image3 from "../assets/images/pexels-jeremy-bishop-6212576.jpg";

const CusCarousel = ({ silderDoc }) => {
  return (
    <div
      style={{
        height: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Carousel fade style={{ height: "100%" }}>
        {silderDoc.map((item) => (
          <Carousel.Item key={item.id}>
            <CarouselImage
              imagePath={item.imagePath}
              text={item.text}
              desc={item.desc}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CusCarousel;
