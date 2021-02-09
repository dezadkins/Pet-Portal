import React, { useState, useEffect } from "react";
// import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import moment from "moment";
import axios from "axios";

const Chart = () => {
  const [lineChart, setLineChart] = useState({});
  const [end, setEnd] = useState([]);
  const [duration, setDuration] = useState(false);

  useEffect(() => {
    let dateTempArray = [];
    let durationTempArray = [];
    axios
      .get("/api/sessions")
      .then((response) => {
        response.data.forEach((item) => {
          dateTempArray.push(moment(item.end[0]).format("MMM Do YY"));
          durationTempArray.push(item.duration);
        });
        setEnd(dateTempArray);
        setDuration(durationTempArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1> Chart</h1>
    </>
  );
};

export default Chart;
