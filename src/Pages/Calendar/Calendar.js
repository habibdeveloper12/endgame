import React, { useState } from 'react';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';

const Calendar = () => {
  const [date, setDate] = useState(new Date())
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img className='w-3/6' src={Chair} /> */}
          <div>
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
            ></DayPicker>
          </div>
        </div>
      </div>
      <p>You picked {format(date, 'PP')}.</p>
    </div>
  );
};

export default Calendar;