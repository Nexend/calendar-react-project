import React from "react";
import PropTypes from "prop-types";

import { months } from "../../utils/dateUtils.js";

import "./header.scss";

const Header = ({ monday, nextWeek, prevWeek, currentWeek, togglePopup }) => {
  const currentMonth = months[monday.getMonth()];

  const nextMonth =
    months[new Date(monday.setDate(monday.getDate() + 6)).getMonth()];

  const showMonth = `${currentMonth} ${
    currentMonth !== nextMonth ? `- ${nextMonth}` : ""
  }`;

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={togglePopup}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={currentWeek}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={prevWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={nextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{showMonth}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  monday: PropTypes.object.isRequired,
  nextWeek: PropTypes.func.isRequired,
  prevWeek: PropTypes.func.isRequired,
  currentWeek: PropTypes.func.isRequired,
  togglePopup: PropTypes.func.isRequired,
};

export default Header;
