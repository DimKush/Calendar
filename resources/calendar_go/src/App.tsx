import React from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment'

function FillArrsOfDaysCalendar(){
  var startDate = moment().startOf('month').startOf('week');
  var endDate = moment().endOf('month').endOf('week');

  var calendarDays = [];
  var day = startDate.clone();
  var calendarDaysSplitedWeeks = [];

  while(!day.isAfter(endDate)){
    calendarDays.push(day.clone());
    day.add(1,'day');
  }

  //split on weeks
  for(var i = 0 ; i < calendarDays.length; i+=7){
    if (i > calendarDays.length)
      i = calendarDays.length;

    calendarDaysSplitedWeeks.push(calendarDays.slice(i, i+7));
  }
  
  return calendarDaysSplitedWeeks;
}


function App() {

  var calendarDays = FillArrsOfDaysCalendar();
  console.log(calendarDays);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
