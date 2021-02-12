import { useSpring, animated } from "react-spring";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import "./Milestones.css";

const Milstones = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [pet, setPet] = useState([]);

  const { petId } = useParams();

  useEffect(() => {
    fetchPets();
  }, [petId]);

  const fetchPets = async () => {
    const data = await fetch(`/api/pets/${petId}`);
    const pets = await data.json();
    setPet(pets);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <NavBar />
      <div className="eventpage-wrapper">
        <div className="pet-image-div">
          <img className="profile-petpic" src={pet.photoURL} />
        </div>
        <h1 className="event-title">Pet Life Events</h1>
        <div className="slider-box">
          <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight
              className="right-arrow"
              onClick={nextSlide}
            />
            {SliderData.map((slide, index) => {
              return (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img
                      src={slide.image}
                      alt="travel image"
                      className="image"
                    />
                  )}
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default Milstones;

// import React from "react";
// import ReactDOM from "react-dom";
// import Carousel from "react-elastic-carousel";
// import Item from "./Item";
// import "./Milestones.css";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

// function Milestones() {
//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>Pet's Life Events</h1>
//       <div className="slider">
//         <Carousel breakPoints={breakPoints}>
//           <Item>One</Item>
//           <Item>Two</Item>
//           <Item>Three</Item>
//           <Item>Four</Item>
//           <Item>Five</Item>
//           <Item>Six</Item>
//           <Item>Seven</Item>
//           <Item>Eight</Item>
//         </Carousel>
//       </div>
//     </>
//   );
// }

// export default Milestones;
