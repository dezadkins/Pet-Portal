import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import moment from "moment";

const LengthChart = () => {
  const [lineChart, setLineChart] = useState({});
  const [length, setLength] = useState([]);
  const [date, setDate] = useState(false);
  const { petId } = useParams();

  useEffect(() => {
    fetchLength();
  }, [petId]);

  const fetchLength = async () => {
    const data = await fetch(`/api/pets/${petId}/graph`);
    const pet = await data.json();
    //Filter weight when new data is added
    let lengthArray = [];
    let dateArray = [];
    for (let i = 0; i < pet.length; i++) {
      lengthArray.push(pet[i].weight);
      dateArray.push(moment(pet[i].datestamp).format("MM Do YY"));
    }
    setLength(lengthArray);
    setDate(dateArray);
  };

  useEffect(() => {
    setLineChart({
      labels: date,
      datasets: [
        {
          label: "Length Chart",

          data: length,
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
      title: {
        display: true,
        text: "Length Chart",
      },
    });
  }, [length, date]);

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
