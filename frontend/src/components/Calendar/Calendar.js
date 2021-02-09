import React, { useState, useEffect } from "react";
import FullCalendar, { applyStyle } from "@fullcalendar/react";
import dayGrid from "@fullcalendar/daygrid";
import timeGrid from "@fullcalendar/timegrid";
import interaction from "@fullcalendar/interaction";
import axios from "axios";

const Calendar = () => {
  const [sessionArray, setSessionArray] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [appts, setAppts] = useState([]);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    axios
      .get("/api/pets/:petId/appts")
      .then((res) => {
        setAppts(res.data);
      })
      .catch((error) => console.log(error.toString()));
  }, [isLoaded]);

  useEffect(() => {
    const initArray = [];
    appts.forEach((appt) => {
      let date = Date.parse(appt.dueDate);
      let datePlus1 = date + 172800000;
      let formattedDate = new Date(datePlus1).toISOString();
      initArray.push({
        title: `DUE: ${appt.name}`,
        id: appt._id,
        start: formattedDate,
        allDay: true,
        color: "purple",
      });
    });
    sessions.forEach((session) => {
      if (session.sessionType === "planned") {
        initArray.push({
          title: `Planned:${session.description}-${session.apptName}`,
          id: session._id,
          start: session.start[0],
          end: session.end[0],
          allDay: session.allDay,
          color: "orange",
        });
      } else {
        initArray.push({
          title: `${session.description}-${session.apptName}`,
          id: session._id,
          start: session.start[0],
          end: session.end[0],
          allDay: session.allDay,
          color: "blue",
        });
      }
    });
    setSessionArray(initArray);
  }, [sessions, appts]);

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
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={sessionArray}
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
