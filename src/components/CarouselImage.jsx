import React from "react";
const CarouselImage = (props) => {
  console.log(props.imagePath);
  const image = "";
  return (
    <div style={{ position: "relative" }}>
      <img className="d-block w-100" src={props.imagePath} alt={image} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2 style={{ color: "#fff", textAlign: "center" }}>{props.text}</h2>
        <p style={{ color: "#fff", textAlign: "center" }}>{props.desc}</p>
      </div>
    </div>
  );
};

export default CarouselImage;
