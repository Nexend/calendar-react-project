import React, { useState } from "react";
import PropTypes from "prop-types";

import "./event.scss";

const Event = ({ height, marginTop, title, time, id, deleteEvent }) => {
  const [deleteBtn, setDeleteBtn] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  const showDeleteBtn = () => {
    setDeleteBtn(!deleteBtn);
  };

  const handleDelete = () => {
    deleteEvent(id);
  };

  return (
    <>
      <div style={eventStyle} className="event" onClick={showDeleteBtn}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
      {deleteBtn ? (
        <button className="button delete-event-btn" onClick={handleDelete}>
          Удалить
        </button>
      ) : null}
    </>
  );
};

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default Event;
