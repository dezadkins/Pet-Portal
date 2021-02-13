import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import axios from "axios";

const LengthChart = () => {
  const [lineChart, setLineChart] = useState({});
  const [length, setLength] = useState();
  const { petId } = useParams();

  useEffect(() => {
    axios
      .get(`/api/${petId}/graph`)
      .then((res) => {
        const data = res.data.length;
        setLength(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [petId]);

  useEffect(() => {
    setLineChart({
      labels: length,
      datasets: [
        {
          data: [
            "January",
            "February",
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
          backgroundColor: [
            "#FF5400",
            "#228CDB",
            "#5BC0EB",
            "#FFC914",
            "#FF4A1C",
            "#0A1045",
            "#390099",
            "#00916E",
          ],
        },
      ],
      title: {
        display: true,
        text: "Length Chart",
      },
    });
  }, [length]);

  return (
    <>
      <Line
        data={lineChart}
        width={200}
        height={100}
        options={{ maintainAspectRatio: true }}
        style={{ border: "1px solid black" }}
      />
    </>
  );
};

export default LengthChart;
