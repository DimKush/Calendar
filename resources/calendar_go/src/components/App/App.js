import moment from 'moment'

function prepareCalendarData(){
  var dateBegin = moment().startOf('month').startOf('week');
  var dateEnd = moment().endOf('month').endOf('week');

  var calendarDays = [];
  while(!dateBegin.isAfter(dateEnd)){
    calendarDays.push(dateBegin.clone());
    dateBegin.add(1,'day');
  }

  var calendarWeeks = [];
  // split on weeks
  for(var i = 0 ; i < calendarDays.length; i+=7){
    if(i > calendarDays.length){
      i = calendarDays.length
    }
    calendarWeeks.push(calendarDays.slice(i, i + 7));
  }

  return calendarWeeks;
}

function App() {
  var calendarVals = prepareCalendarData();
  console.log(calendarVals);

  return (
    <div className="App">
    </div>
  );
}

export default App;
