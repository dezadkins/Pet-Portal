export const SliderData = [
  {
    image:
      "https://i.pinimg.com/736x/f9/d3/2c/f9d32ceadaf567b6e732867063c7ff02.jpg",
    caption: "First Pic Ever!!!",
  },
  {
    image:
      "https://www.pets4homes.co.uk/images/classifieds/2020/01/30/2584798/large/female-shih-tzu-puppy-for-sale-5e4a4cd0a59ad.jpg",
    caption: "Hey there!",
  },
  {
    image:
      "https://nebula.wsimg.com/8cf88f7339fafaa62acf210751c4920d?AccessKeyId=96C8B0CF55A5FE06885E&disposition=0&alloworigin=1",
    caption: "Two Months with Buddy!",
  },
  {
    image:
      "https://i.pinimg.com/originals/12/4f/a3/124fa3859fc9f700db87c660cde1c895.jpg",
    caption: "Happy Puppy",
  },
  {
    image:
      "https://puppiesclub.com/wp-content/uploads/2016/03/Shih-Tzu-Dog-Breed-brown.jpg",
    caption: "Learning to Stay",
  },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1585166915828-db195f24e2ba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fHBldHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  // },
];

//if there's no event posts "<h2>You have no current events!"
//if have events, first fetch events, caption and maybe pets then map through
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// export const SliderData = () => {
//   const [milestones, setMilestones] = useState([]);
//   const { eventId, petId } = useParams();
//   const [pet, setPet] = useState([]);

//   useEffect(() => {
//     fetchPets();
//   }, [petId]);

//   const fetchPets = async () => {
//     const data = await fetch(`/api/pets/${petId}`);
//     const pets = await data.json();
//     setPet(pets);
//   };

//   useEffect(() => {
//     fetchMilstones();
//   }, [eventId]);

//   const fetchMilstones = async () => {
//     const data = await fetch(`/api/pets/${petId}/events`);
//     const milestones = await data.json();
//     setMilestones(milestones[0]);
//   };

//   const newPetEvents = () => {
//     if (!milestones) {
//       return <h1>Currenly No Events</h1>;
//     } else {
//       return (
//         <>
//           {milestones.map((miles, i) => (
//             <div key={miles.pic}>
//               {`${miles.picURL} given on ${miles.caption}`}{" "}
//             </div>
//           ))}
//         </>
//       );
//     }
//   };
//   return <>{newPetEvents()}</>;
// };
