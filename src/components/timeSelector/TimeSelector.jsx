/* eslint-disable react/prop-types */
import { useState } from "react";

const TimeSelector = ({ setTimeRange }) => {
  const [selectedTime, setSelectedTime] = useState("1 day");

  const handleChange = (event) => {
    const newTimeRange = event.target.value;
    setSelectedTime(newTimeRange);
    setTimeRange(newTimeRange);
  };

  return (
    <div className="bg-gray-200 dark:bg-[#313844] p-4 shadow-md transition-colors duration-200">
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="text-xl text-gray-900 dark:text-white font-semibold">Filter by Time:</h3>
        <select
          value={selectedTime}
          onChange={handleChange}
          className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded"
        >
          <option value="1 day">1 Day</option>
          <option value="1 week">1 Week</option>
          <option value="1 month">1 Month</option>
          <option value="3 months">3 Months</option>
          <option value="6 months">6 Months</option>
          <option value="1 year">1 Year</option>
        </select>
      </div>
    </div>
  );
};

export default TimeSelector;