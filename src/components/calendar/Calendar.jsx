import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import Modal from "../modal/Modal";

import {
  fetchEventsList,
  createEvent,
  deleteEvent,
} from "../../gateway/gateway";

import "./calendar.scss";

const Calendar = ({ weekDates, togglePopup, isOpen }) => {
  const [events, setEvents] = useState([]);
  console.log(events);

  const fetchData = () => {
    fetchEventsList().then((eventsList) => {
      setEvents(eventsList);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddEvent = (newEvent) => {
    createEvent(newEvent).then(() => fetchData());
  };

  const handleDeleteEvent = (id) => {
    deleteEvent(id).then(() => fetchData());
  };

  return (
    <>
      {isOpen ? (
        <Modal togglePopup={togglePopup} addEvent={handleAddEvent} />
      ) : null}

      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week
              weekDates={weekDates}
              events={events}
              deleteEvent={handleDeleteEvent}
            />
          </div>
        </div>
      </section>
    </>
  );
};

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  togglePopup: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Calendar;
