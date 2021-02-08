import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./hour.scss";

import Event from "../event/Event";
import { formatMins } from "../../../src/utils/dateUtils.js";

const Hour = ({ dataHour, hourEvents, deleteEvent, isCurrentDay }) => {
  const [hour, setHour] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHour(hour + 1);
    }

    const intervalId = setInterval(() => {
      setMinutes(minutes + 1);
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {isCurrentDay && dataHour === hour ? (
        <div style={{ top: minutes }} className="red-line"></div>
      ) : null}

      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;

        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;

        return (
          <Event
            key={id}
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            id={id}
            deleteEvent={deleteEvent}
          />
        );
      })}
    </div>
  );
};

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  isCurrentDay: PropTypes.bool.isRequired,
};

export default Hour;
