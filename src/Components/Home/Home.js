import React from 'react'
import DailyForecast from '../DailyForecast/DailyForecast'
import './Home.css'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import { Card, Stack } from 'react-bootstrap'

const Home = ({ dailyForecast }) => {
  console.log(dailyForecast)
  return (
    <>
      {
        dailyForecast.length > 0 &&
        <Card style={{ width: '67.5%', margin: '50px auto', padding: '1em' }}>
          <CurrentWeather today={dailyForecast[0]} buttonTxt='Hourly forecast' redirectLocation={dailyForecast[0].dayOfWeek} />
        </Card>
      }
      <Stack direction='horizontal' gap='5' className='justify-content-md-center'>
        {
          dailyForecast.map(forecast => {
            if (dailyForecast[0].dayOfWeek !== forecast.dayOfWeek) {
              return (
                <DailyForecast key={forecast.dayOfWeek} forecastData={forecast} />
              )
            }
          })
        }
      </Stack>
    </>
  )
}

export default Home