import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGrid from "@fullcalendar/daygrid";
import timeGrid from "@fullcalendar/timegrid";
import interaction from "@fullcalendar/interaction";
import axios from "axios";

const Calendar = () => {
  const [sessionArray, setSessionArray] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [appt, setAppts] = useState([]);
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

  return (
    <>
      <div>Hello from Calendar</div>
    </>
  );
};

export default Calendar;
