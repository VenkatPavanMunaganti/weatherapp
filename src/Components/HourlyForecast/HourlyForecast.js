import React from 'react'
import { Accordion, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureLow, faWind, faDroplet } from '@fortawesome/free-solid-svg-icons'
import './HourlyForecast.css'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import { Card } from 'react-bootstrap'


const HourlyForecast = ({ forecast, day, today: dailyForecast}) => {
    let i = 0;
    return (
        <>
            {
                dailyForecast.map(today => {
                    if(today.dayOfWeek == day){
                        return (
                            <Card key={day} style={{width: '60%', margin: '50px auto', padding: '1em'}}><CurrentWeather today={today} buttonTxt='Back' redirectLocation={""}/></Card>    
                        )
                    }
                })
            }
            <Accordion defaultActiveKey="0">
                {forecast.map(f => {
                    if (day == f.dayOfWeek) {
                        return (
                            <Accordion.Item key={f.dt} className='mx-auto' eventKey={i++} style={{ width: '60%' }}>
                                <Accordion.Header>
                                    <Stack direction='horizontal' gap={5} className='accHeader justify-content-around' style={{ width: '100%' }}>
                                        <Stack direction='horizontal' gap={1} >
                                            <p>{f.dt_txt}</p>
                                        </Stack>
                                        <Stack className='justify-content-around' direction='horizontal' gap={1} style={{ width: '3em' }}>
                                            <p><b>{f.main.temp}</b></p>
                                            <p><b>&#8457;</b></p>
                                        </Stack>
                                        <Stack direction='horizontal' gap={1}>
                                            <img src={f.weatherImage} />
                                            <p>{f.weather[0].description}</p>
                                        </Stack>
                                    </Stack>
                                </Accordion.Header>
                                <Accordion.Body className="dropdown bg-light border m-4" >
                                    <div >
                                        <Stack direction='horizontal' className="row1 justify-content-around " >
                                            <Stack direction='horizontal' id="feelslike" gap={3}>
                                                <FontAwesomeIcon className='text-primary' icon={faTemperatureLow} />
                                                <p><b>Feels Like</b> <br /><span>{f.main.feels_like} &#8457;</span></p>
                                            </Stack>
                                            <Stack direction='horizontal' id="windspeed" gap={3}>
                                                <FontAwesomeIcon className='text-primary' icon={faWind} />
                                                <p><b>Wind speed</b> <br /><span>{f.wind.speed} mpH</span></p>
                                            </Stack>
                                            <Stack direction='horizontal' id="humidity" gap={3}>
                                                <FontAwesomeIcon className='text-primary' icon={faDroplet} />
                                                <p><b>Humidity</b> <br /><span>{f.main.humidity} %</span></p>
                                            </Stack>
                                        </Stack>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    }
                })}
            </Accordion>
        </>
    )
}

export default HourlyForecast