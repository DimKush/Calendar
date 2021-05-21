import React from 'react'
import moment from 'moment'
import {Header} from '../Header'
import {Controls} from '../Controls'
import {CalendarGrid} from '../Grid'

let getLocationPromise = new Promise((resolve, reject) => {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        resolve({latitude: lat, longitude: long});
    });
  } else {
        reject("your browser doesn't support geolocation API");
  }
});


function App() {
  //TODO : in future from golang server getLocation and install weekends. Right now for the russian
  
  var latitude;
  var longitude;

  getLocationPromise.then((location) => {
    latitude = location.latitude;
    longitude = location.longitude;
  }).catch((err) =>{
    console.log(err);
  });

  moment.updateLocale('en',{week:{dow:'1'}});
  var dateBegin = moment().startOf('month').startOf('week');
  //console.log('eee', latitude, longitude);
  
  return (
    <div>
    <Header />
    <Controls />
    <CalendarGrid dateBegin={dateBegin}/>
    </div>
  );
}

export default App;
