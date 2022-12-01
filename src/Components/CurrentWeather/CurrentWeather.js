import React from 'react'
import { Stack } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { convertDate } from '../../Services/Service';

const CurrentWeather = ({ today, buttonTxt, redirectLocation }) => {
    return (
        <Stack direction='vertial'>
            <Stack direction='horizontal'>
                <Stack direction='vertial' className='px-5'>
                    <h1 style={{ fontSize: '10em !important' }}>Boston, US</h1>
                    <p>{today.date.toDateString()}</p>
                </Stack>
                <Button className='weatherBtn' onClick={()=>{
                    window.location.href="./"+redirectLocation
                }} variant="primary" style={{ marginRight: '5em' }}>{buttonTxt}</Button>
            </Stack>
            <Stack direction='horizontal'>
                <img src={today.weatherImage} alt="weather" style={{ width: '15rem' }} />
                <Stack direction='vertical' className='justify-content-center'>
                    <h1 style={{ fontSize: '5em' }}>{today.temp.max} &#8451;</h1>
                    <p style={{ textTransform: 'capitalize' }}>{today.weather[0].description}</p>
                </Stack>
                <div style={{ borderRight: '1px solid black' }}></div>
                <Stack direction='vertical' style={{ alignSelf: 'auto' }}>
                    <Stack direction='vertical' className='p-2'>
                        <p><b>{today.temp.max} &#8451;</b></p>
                        <p>Max temperature</p>
                    </Stack>
                    <Stack direction='vertical' className='p-2'>
                        <p><b>{today.temp.min} &#8451;</b></p>
                        <p>Min temperature</p>
                    </Stack>
                </Stack>
                <Stack direction='vertical' style={{ alignSelf: 'auto' }}>
                    <Stack direction='vertical' className='p-2'>
                        <p><b>{today.speed} mpH</b></p>
                        <p>Wind speed</p>
                    </Stack>
                    <Stack direction='vertical' className='p-2'>
                        <p><b>{today.pop}</b></p>
                        <p>Probability of rain</p>
                    </Stack>
                </Stack>
                <Stack direction='vertical' style={{ alignSelf: 'auto' }}>
                    <Stack direction='vertical' className='p-2'>
                        <p><b>{convertDate(today.sunrise)}</b></p>
                        <p>Sunrise</p>
                    </Stack>
                    <Stack direction='vertical' className='p-2'>
                        <p><b>{convertDate(today.sunset)}</b></p>
                        <p>Sunset</p>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default CurrentWeather