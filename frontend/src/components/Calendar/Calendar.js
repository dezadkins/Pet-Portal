import React, { useState, useEffect, useDispatch } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGrid from "@fullcalendar/daygrid";
import timeGrid from "@fullcalendar/timegrid";
import interaction from "@fullcalendar/interaction";
import * as sessionActions from "../../store/session";

import axios from "axios";

const Calendar = () => {
  const [appts, setAppts] = useState([]);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    axios.get("/api/pets/:petId/appts").then((res) => {
      setAppts(res.data);
    });
    //   .catch((error) => console.log(error.toString()));
  }, [isLoaded]);

  useEffect(() => {
    const initArray = [];
    appts.forEach((appt) => {
      let date = Date.parse(appt.dueDate);
      let datePlus1 = date + 172800000;
      let formattedDate = new Date(datePlus1).toISOString();
      initArray.push({
        petId: `DUE: ${appt.name}`,
        id: appt._id,
        datetime: formattedDate,
        location: true,
        color: "purple",
      });
    });
    // Appointments.forEach((Appointment) => {
    //   if (Appointment.sessionType === "planned") {
    //     initArray.push({
    //       id: Appointment.petId,
    //       datetime: Appointment.datetime,
    //       location: Appointment.location,
    //       color: "orange",
    //     });
    //   } else {
    //     initArray.push({
    //       id: Appointment.petId,
    //       datetime: Appointment.datetime,
    //       location: Appointment.location,
    //       color: "blue",
    //     });
    //   }
    // });
    setAppts(initArray);
  }, [appts]);

  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the appointment '${clickInfo.appt.title}'`
      )
    ) {
      clickInfo.appt.remove();
      axios
        .delete(`/api/session/${clickInfo.event._def.publicId}`)
        .catch((error) => console.oog(error));
    }
  };

  return (
    <>
      <div>
        <FullCalendar
          plugins={[dayGrid, timeGrid, interaction]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={appts}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          eventClick={handleEventClick}
        />
      </div>
    </>
  );
};

export default Calendar;
