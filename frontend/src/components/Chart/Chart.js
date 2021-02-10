// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import { MDBContainer, MDBRow, MDBTypography, MDBBox } from "mdbreact";
// import moment from "moment";
// import axios from "axios";

// const Chart = () => {
//   const [lineChart, setLineChart] = useState({});
//   const [weight, setWeight] = useState([]);
//   const [length, setLength] = useState([]);

//   useEffect(() => {
//     let weightArray = [];
//     let lengthArray = [];
//     axios
//       .get("/:petId/graph")
//       .then((response) => {
//         response.data.forEach((item) => {
//           weightArray.push(moment(item.end[0]).format("MMM Do YY"));
//           length.push(item.length);
//         });
//         setWeight(weightArray);
//         setLength(lengthArray);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }, []);

//   useEffect(() => {
//     setLineChart({
//       labels: weight,
//       datasets: [
//         {
//           data: length,
//           backgroundColor: [
//             "#FF5400",
//             "#228CDB",
//             "#5BC0EB",
//             "#FFC914",
//             "#FF4A1C",
//             "#0A1045",
//             "#390099",
//             "#00916E",
//           ],
//         },
//       ],
//       title: {
//         display: true,
//         text: "Progress Chart",
//       },
//     });
//   }, [end, duration]);
//   return (
//     <MDBContainer
//       className="d-flex justify-content-center black-text align-items-center
//       "
//       style={{ marginTop: "20%" }}
//     >
//       <MDBRow className="justify-content-center align-items-center">
//         <MDBTypography blockquote bqColor="primary" className="text-center">
//           <MDBRow className="justify-content-center">
//             <MDBBox className="text-center bq-title " size="sm" tag="span">
//               <strong>You've been productive lately!</strong>
//               <p className="grey-text">
//                 Play around with your preferences, explore your different tasks
//                 and map your progress!
//               </p>
//             </MDBBox>
//             <Doughnut
//               data={pieChart}
//               width={200}
//               height={100}
//               options={{ maintainAspectRatio: true }}
//               style={{ border: "1px solid black" }}
//             />
//           </MDBRow>
//         </MDBTypography>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default Chart;
