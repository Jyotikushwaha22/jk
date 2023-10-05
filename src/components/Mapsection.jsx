import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import image1 from "../assets/images/pexels-jeremy-bishop-6212576.jpg";

const Mapsection = () => {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

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
      <LoadScript googleMapsApiKey="AIzaSyBdQf6uqsOHcBoiVLxDagwauhpi2QAxEyI">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
        >
          {/* Add a Marker for the location */}
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Mapsection;
