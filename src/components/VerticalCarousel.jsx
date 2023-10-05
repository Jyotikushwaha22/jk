import React from "react";
import {
  FullPageSections,
  Fullpage,
  FullpageSection,
} from "@ap.cx/react-fullpage";

import "./verticalcarousel.css";
import image1 from "../assets/images/home.jpg";
import image2 from "../assets/images/slide2.jpg";
import image3 from "../assets/images/greenhome.png";
import image4 from "../assets/images/car_1.jpg";
import image5 from "../assets/images/car_2.jpg";
import image6 from "../assets/images/car_1.jpg";
import image7 from "../assets/images/bg.jpg";
import CusNavbar from "../layouts/navbar/CusNavbar";

import CusCarousel from "./CusCarousel";
import Testimonial from "./Testimonial";
import ContactForm from "./ContactForm";
import Mapsection from "./Mapsection";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Event from "./Event";

const SectionStyle = {
  height: "100vh",
  width: "100%",
  flexWrap: "wrap",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  position: "relative",
  Color: "white",
  overflow: "hidden",
};
const ImageBackground = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
  backgroundSize: "cover",
};

const NavbarStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1,
  backgroundColor: "white",
};

const SectionStyle_left = {
  height: "100vh",
  width: "100%",
  flexWrap: "wrap",
  display: "flex",
  flexBasis: "auto",
  alignItems: "end",
  alignContent: "end",
  position: "relative",
  color: "white",
  fontWeight: "900",
  fontSize: 5,
  lineHeight: 1,
  gap: 0.5,
  margin: 0.8,
  paddingLeft: 40,
  paddingBottom: 90,
  //zIndex: 10,
};
const SectionStyle_right = {
  height: "100vh",
  width: "100%",
  flexWrap: "wrap",
  display: "flex",
  flexDirection: "rowreverse",
  textAlign: "right",
  flexBasis: "auto",
  justifyContent: "end",
  alignItems: "end",
  alignContent: "end",
  position: "relative",
  color: "white",
  //fontWeight: "900",
  fontSize: 5,
  lineHeight: 1,
  gap: 0.5,
  margin: 0.8,
  paddingRight: 40,
  paddingBottom: 90,
  //zIndex: 10,
};

const silderDoc1 = [
  {
    id: 1,
    text: (
      <div>
        <h1>
          <div>EXPLORE LIFE</div>
          <div>AT SWAJAN</div>
        </h1>
        <h6>
          <div>
            Swajan Senior Living offers an array of exceptional amenities ,
          </div>
          <div>
            including recreational spaces, fitness rooms, and premium dining
          </div>
          <div>
            experiences that allow our seniors to live life to the fullest.
          </div>
        </h6>
      </div>
    ),
    // text: "silder 1",
    // desc: "hello",
    imagePath: image4,
    avatarImage: image2,
  },
  {
    id: 2,
    text: (
      <div>
        <h1>
          <div>HAPPINES IN EVERY</div>
          <div>MOMENT</div>
        </h1>
        <h6>
          <div>
            Swajan Senior Living offers an array of exceptional amenities ,
          </div>
          <div>
            including recreational spaces, fitness rooms, and premium dining
          </div>
          <div>
            experiences that allow our seniors to live life to the fullest.
          </div>
        </h6>
      </div>
    ),
    // text: "silder 2",
    // desc: "hello2",
    imagePath: image5,
    avatarImage: image3,
  },
  {
    id: 3,
    text: (
      <div>
        <h1>
          <div>AGE LIKE A </div>
          <div>FINE ART</div>
        </h1>
        <h6>
          <div>
            Swajan Senior Living offers an array of exceptional amenities ,
          </div>
          <div>
            including recreational spaces, fitness rooms, and premium dining
          </div>
          <div>
            experiences that allow our seniors to live life to the fullest.
          </div>
        </h6>
      </div>
    ),
    // text: "silder 3",
    // desc: "hello3",
    imagePath: image6,
    avatarImage: image1,
  },
];

const sliderDoc2 = [
  {
    id: 3,
    text: (
      <h4 style={{ paddingTop: "0px" }}>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            paddingTop: "0px",
          }}
        >
          “Swajan has redefined senior living for me. The serene ambiance,
          thoughtfully designed spaces, and array of tailored amenities have
          enriched my golden years. I cherish the comfort, security, and vibrant
          community, making every day truly exceptional. It's more than a home;
          it's a fulfilling lifestyle.”
        </div>
      </h4>
    ),
    imagePath: image7,
    avatarImage: image1,
  },
];
const EventStyle = {
  height: "100vh",
  width: "100%",
  flexWrap: "wrap",
  display: "flex",
  // flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  position: "relative",
  Color: "white",
};
const VerticalCarousel = () => {
  return (
    <Fullpage>
      <div style={NavbarStyle}>
        <CusNavbar />
      </div>
      <FullPageSections>
        <FullpageSection style={SectionStyle_left}>
          <div
            style={{ ...ImageBackground, backgroundImage: `url(${image1})` }}
          ></div>
          <div>
            <h1>
              <div>DISCOVER</div>
              <div>EXCEPTIONAL</div>
              <div>SENIOR LIVING .</div>
            </h1>
          </div>
        </FullpageSection>
        <FullpageSection style={SectionStyle_right}>
          <div
            style={{ ...ImageBackground, backgroundImage: `url(${image2})` }}
          ></div>
          <div>
            <h1>
              <div>BEAUTIFULLY</div>
              <div>DESIGNED</div>
              <div>HOMES</div>
            </h1>
            <h6>
              <div>Our homes are designed to provide the utmost comfort </div>
              <div>and convenience to our senior residents </div>
              <div>
                with exquisite attention in detail and we take pride in offering
                the best .
              </div>
            </h6>
          </div>
        </FullpageSection>
        <FullpageSection style={SectionStyle_left}>
          <div
            style={{ ...ImageBackground, backgroundImage: `url(${image3})` }}
          ></div>
          <div>
            <h1>
              <div>GREEN</div>
              <div>PROJECT</div>
            </h1>
            <h6>
              <div>
                A harmonious blend of sustainable design and eco-friendly
                materials,
              </div>
              <div>
                crafting an oasis of energy efficient homes Embrace rainwater
                harvesting,
              </div>
              <div>
                solar power, EV amenities, and more for a vibrant,
                eco-conscious, and joyful future..
              </div>
            </h6>
          </div>
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <CusCarousel silderDoc={silderDoc1} />
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <CusCarousel silderDoc={silderDoc1} />
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <Event style={{ backgroundImage: `url(${image7})` }} />
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <Testimonial silderDoc={sliderDoc2} />
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <ContactForm />
        </FullpageSection>

        {/* <FullpageSection style={SectionStyle}>
          <Mapsection />
        </FullpageSection> */}

        <FullpageSection style={SectionStyle}>
          <FAQ />
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <Footer />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default VerticalCarousel;
