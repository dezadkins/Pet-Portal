import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Line } from "react-chartjs-2";
import { MDBContainer, MDBRow, MDBTypography, MDBBox } from "mdbreact";
import moment from "moment";
import axios from "axios";

const WeightChart = () => {
  const [lineChart, setLineChart] = useState({});
  const [weight, setWeight] = useState([]);

  const sessionUser = useSelector((state) => state.session.user);

  //   useEffect(() => {
  //     axios
  //       .get("/:petId/graph")
  //       .then((response) => {
  //         response.data.forEach((graph) => {
  //           graph.weight;
  //         });
  //         setWeight();
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }, []);

  useEffect(() => {
    setLineChart({
      labels: weight,
      datasets: [
        {
          data: [
            "January",
            "Febuary",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
      ],
      title: {
        display: true,
        text: "Progress Chart",
      },
    });
  }, [weight]);
  return (
    <MDBContainer
      className="d-flex justify-content-center black-text align-items-center
      "
      style={{ marginTop: "20%" }}
    >
      <MDBRow>
        <MDBTypography>
          <MDBRow>
            <MDBBox></MDBBox>
            <Line
              data={lineChart}
              width={200}
              height={100}
              options={{ maintainAspectRatio: true }}
              style={{ border: "1px solid black" }}
            />
          </MDBRow>
        </MDBTypography>
      </MDBRow>
    </MDBContainer>
  );
};

export default WeightChart;
