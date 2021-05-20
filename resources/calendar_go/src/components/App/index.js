import React from 'react'
import moment from 'moment'
import {Header} from '../Header'
import {Controls} from '../Controls'
import {CalendarGrid} from '../Grid'


function App() {
  //TODO : in future from golang server getLocation and install weekends. Right now for the russian
  moment.updateLocale('en',{week:{dow:'1'}});
  var dateBegin = moment().startOf('month').startOf('week');

  return (
    <div>
    <Header />
    <Controls />
    <CalendarGrid dateBegin={dateBegin}/>
    </div>
  );
}

export default App;
