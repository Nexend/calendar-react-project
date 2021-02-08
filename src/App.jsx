import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isOpen, setState] = useState(false);
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const togglePopup = () => {
    setState(!isOpen);
  };

  const nextWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() + 7))
    );
  };

  const prevWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))
    );
  };

  return (
    <>
      <Header
        monday={getWeekStartDate(weekStartDate)}
        nextWeek={nextWeek}
        prevWeek={prevWeek}
        currentWeek={() => setWeekStartDate(new Date())}
        togglePopup={togglePopup}
      />
      <Calendar
        weekDates={weekDates}
        togglePopup={togglePopup}
        isOpen={isOpen}
      />
    </>
  );
};

export default App;
