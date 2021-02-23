// import React, { Component } from "react";

// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// import axios from "axios";

// // import logo from "./logo.svg";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import "./Calendar.css";

// moment.locale("en-GB");
// const localizer = momentLocalizer(moment);

// class MyCalendar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       cal_events: [
//         //State is updated via componentDidMount
//       ],
//     };
//   }

//   convertDate = (date) => {
//     return moment.utc(date).toDate();
//   };

//   componentDidMount() {
//     axios
//       .get("http://localhost:3000/events")
//       .then((response) => {
//         console.log(response.data);
//         let appointments = response.data;

//         for (let i = 0; i < appointments.length; i++) {
//           appointments[i].start = this.convertDate(appointments[i].start);
//           appointments[i].end = this.convertDate(appointments[i].end);
//         }

//         this.setState({
//           cal_events: appointments,
//         });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   render() {
//     const { cal_events } = this.state;

//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <h1 className="App-title">Book Appointment</h1>
//         </header>
//         <div style={{ height: 500 }}>
//           <Calendar
//             className="calendar-style"
//             localizer={localizer}
//             events={cal_events}
//             step={30}
//             defaultView="week"
//             views={["month", "week", "day"]}
//             defaultDate={new Date()}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default MyCalendar;

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
