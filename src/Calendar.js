// src/Calendar.js
import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [inputDate, setInputDate] = useState('');

  const goToPrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateInput = (e) => {
    setInputDate(e.target.value);
  };

  const jumpToDate = () => {
    const date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
      setCurrentDate(date);
      setInputDate('');
    } else {
      alert('Please enter a valid date (YYYY-MM-DD)');
    }
  };

  const renderDays = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div className="day empty" key={`empty-${i}`}></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div className="day" key={day}>
          {day}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={goToPrevMonth}>Previous</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
        <button onClick={goToNextMonth}>Next</button>
      </div>
      <div className="jump-to-date">
        <input
          type="date"
          value={inputDate}
          onChange={handleDateInput}
        />
        <button onClick={jumpToDate}>Jump</button>
      </div>
      <div className="days-of-week">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="days">
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
