import { useSpring, animated } from "react-spring";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import "./Milestones.css";
import MilestoneFormModal from "../MilestoneModal";

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
        <div className="spacer-div"></div>
        <div className="pet-image-div">
          <img className="profile-petpic" src={pet.photoURL} />
        </div>
        <div className="add-pic-div">
          <h3 className="upload-title">Upload Event</h3>
          <MilestoneFormModal />
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
                    <div className="slide-div">
                      <img
                        src={slide.image}
                        alt="travel image"
                        className="image"
                      />
                      <h3 className="image-caption">{slide.caption}</h3>
                    </div>
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

// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import { useParams } from "react-router-dom";
// import Carousel from "react-elastic-carousel";
// import * as sessionActions from "../../store/session";
// import { useDispatch, useSelector } from "react-redux";

// import Item from "./Item";
// import "./Milestones.css";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

// function Milestones({ slides }) {
//   const dispatch = useDispatch();
//   const [slides, setSlides] = useState([]);
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;
//   const [pets, setPets] = useState([]);

//   const { petId } = useParams();

//   useEffect(() => {
//     fetchPets();
//   }, []);

//   const fetchPets = async () => {
//     fetch(`/api/pets/${petId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("hit", data);
//         const { data } = data;
//         let slides = data.map((pet, img) => {
//           return (
//             <div key={pet}>
//               <img src={img} />
//             </div>
//           );
//         });
//       });
//     setSlides(slides).catch(function (res) {
//       console.error(res);
//     });

//     // const data = await fetch(`/api/pets/${petId}`);
//     // const pets = await data.json();

//     // setPets(pets);
//   };

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }
//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>Pet's Life Events</h1>
//       <div className="slider">
//         <Carousel breakPoints={breakPoints}>{pet.photoURL}</Carousel>
//       </div>
//     </>
//   );
// }

// export default Milestones;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// import { Carousel } from "react-responsive-carousel";

// class Milestones extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       pets: null,
//     };
//   }

//   componentDidMount() {
//     // #1. First of all you have to fetch the images.
//     fetch(`/api/pets/${petId}`)
//       .then((response) => response.json()) // If it's a JSON response, you have to parse it firstly
//       .then((pets) => this.setState({ pets })); // #2. After that you have to keep the images in the component's state.
//   }

//   render() {
//     const { pets } = this.state;

//     if (!pets) return <div>Images are not fetched yet!</div>;

//     // #3. Finally, render the `<Carousel />` with the state's images.
//     return (
//       <Carousel autoPlay infiniteLoop="true">
//         {pets.map((pet) => {
//           return (
//             <div>
//               <img src={this.props.match.params.id} />
//               <p className="legend">{pet.name}</p>
//             </div>
//           );
//         })}
//       </Carousel>
//     );
//   }
// }
