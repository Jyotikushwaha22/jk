import React from "react";
const TestimonialImage = (props) => {
  console.log(props.imagePath);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <img className="d-block w-100" src={props.imagePath} alt={props.text} />
      <div
        style={{
          position: "absolute",
          // top: "50%",
          alignItems: "center",
          justifyContent: "center",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",

          // backgroundColor: "darkgrey",
        }}
      >
        <h2>{props.text}</h2>
        <p>{props.desc}</p>
        {/* Avatar */}
        <img
          src={props.avatarImage}
          alt="Avatar"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            marginBottom: "10px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default TestimonialImage;
