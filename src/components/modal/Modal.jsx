import React, { useState } from "react";
import PropTypes from "prop-types";

import "./modal.scss";
import { getDateTime } from "../../utils/dateUtils.js";

const Modal = ({ togglePopup, addEvent }) => {
  const [stateInput, setStateInput] = useState({
    title: "",
    date: "",
    dateFrom: "",
    dateTo: "",
    description: "",
  });

  const { title, date, dateFrom, dateTo, description } = stateInput;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStateInput({
      ...stateInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedEvent = {
      title,
      description,
      dateFrom: getDateTime(date, dateFrom),
      dateTo: getDateTime(date, dateTo),
    };

    addEvent(updatedEvent);

    togglePopup();
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={togglePopup}>
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="dateFrom"
                className="event-form__field"
                value={dateFrom}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="dateTo"
                className="event-form__field"
                value={dateTo}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={description}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  togglePopup: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired,
};

export default Modal;
