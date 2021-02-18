import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import moment from "moment";

const WeightChart = () => {
  const [lineChart, setLineChart] = useState({});
  const [weight, setWeight] = useState([]);
  const [date, setDate] = useState(false);
  const { petId } = useParams();

  const fetchWeight = async () => {
    const data = await fetch(`/api/pets/${petId}/graph`);
    const pet = await data.json();
    //Filter weight when new data is added
    let weightArray = [];
    let dateArray = [];
    for (let i = 0; i < pet.length; i++) {
      weightArray.push(pet[i].weight);
      dateArray.push(moment(pet[i].datestamp).format("MM Do YY"));
    }
    console.log(weightArray);
    setWeight(weightArray);
    setDate(dateArray);
  };

  useEffect(() => {
    fetchWeight();
  }, [petId]);

  useEffect(() => {
    setLineChart({
      options: {
        title: {
          display: true,
          text: "Weight Chart",
        },
      },
      labels: date,
      datasets: [
        {
          data: weight,
          borderColor: [
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
    });
  }, [weight, date]);

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

export default WeightChart;
