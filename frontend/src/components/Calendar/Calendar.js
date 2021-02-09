import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGrid from "@fullcalendar/daygrid";
import timeGrid from "@fullcalendar/timegrid";
import interaction from "@fullcalendar/interaction";
import axios from "axios";

const Calendar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sessionArray, setSessionArray] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [appt, setAppts] = useState([]);

  return (
    <>
      <div>Hello from Calendar</div>
    </>
  );
};

export default Calendar;
