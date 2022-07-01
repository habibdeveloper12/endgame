import React from 'react';
import Complete from '../Complete/Complete';
import Todo from '../Todo/Todo';
import Calendar from '../Calendar/Calendar'
const Home = () => {
  return (
    <div>
      <Todo></Todo>
      <Complete></Complete>
      <Calendar></Calendar>
    </div>
  );
};

export default Home;