import React from "react";
import Day from "../day/Day";
import PropTypes from "prop-types";
import moment from "moment";

import "./week.scss";

const Week = ({ weekDates, events, deleteEvent }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        //getting all events from the day we will render
        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );

        const isCurrentDay =
          moment(dayStart).format("MMMM DD YYYY") ===
          moment(new Date()).format("MMMM DD YYYY");

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            deleteEvent={deleteEvent}
            isCurrentDay={isCurrentDay}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default Week;
