import './App.css';
import {dailyForecast, hourlyForecast} from './Services/Service'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { days } from './Services/Service';
import HourlyForecast from './Components/HourlyForecast/HourlyForecast';



const App = ()=> {
  const [dailyWeatherForecast, setdailyWeatherForecast] = useState([])
  const [hourlyWeatherForeCast, setHourlyWeatherForecast] = useState([])
  

  const loadForecastData = async ()=>{
      const dailyData = await dailyForecast()
      // console.log(dailyData)
      setdailyWeatherForecast(dailyData)

      const hourlyData= await hourlyForecast()
      console.log(hourlyData)
      setHourlyWeatherForecast(hourlyData)

  }

  useEffect(()=>{
    loadForecastData()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home dailyForecast={dailyWeatherForecast}/> }/>
        {days.map(day => <Route key={day} path={'/'+day} element={ <HourlyForecast forecast={hourlyWeatherForeCast} day={day} today={dailyWeatherForecast} />} />)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
