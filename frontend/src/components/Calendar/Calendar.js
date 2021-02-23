import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useParams } from "react-router-dom";
import axios from "axios";

const Calendar = () => {
  const [place, setPlace] = useState([]);
  const [placeArray, setPlaceArray] = useState([]);
  const { petId } = useParams();

  useEffect(() => {
    axios
      .get(`/api/pets/${petId}/appts`)
      .then((response) => {
        console.log(response);
        setPlace(response.data);
      })

      .catch((error) => console.log(error.toString()));
  }, [petId]);

  useEffect(() => {
    const initArray = [];
    place.forEach((index) => {
      let date = Date.parse(index.datetime);
      let datePlus1 = date + 172800000;
      let formattedDate = new Date(datePlus1).toISOString();
      initArray.push({
        title: index.place,
        id: index.petId,
        start: formattedDate,
        allDay: true,
        color: "purple",
      });
    });
    setPlaceArray(initArray);
  }, [place]);

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={placeArray}
        // onClick={}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
      />
    </>
  );
};

export default Calendar;
