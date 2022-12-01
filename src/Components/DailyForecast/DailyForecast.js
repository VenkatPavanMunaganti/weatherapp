import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import {Badge} from 'react-bootstrap';
import './DailyForecast.css';

const DailyForecast = ({ forecastData }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className='text-center'>
                    <b>{forecastData.dayOfWeek}</b><br />
                    <span style={{fontSize:'medium'}}> {forecastData.date.toDateString()}</span>
                </Card.Title>
            </Card.Body>
            <Card.Img style={{ width: '10em', margin: 'auto'}} variant="top" src={forecastData.weatherImage} />
            <ListGroup className="list-group-flush">
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Min temperature</div>
                    </div>
                    <Badge bg="primary" pill>
                        {forecastData.temp.min} &#8451;
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Max temp</div>
                    </div>
                    <Badge bg="primary" pill>
                        {forecastData.temp.max} &#8451;
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Wind speed</div>
                    </div>
                    <Badge bg="primary" pill>
                        {forecastData.speed} mpH
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body><Button className='weatherBtn' variant="primary" onClick={()=>window.location.href="./"+forecastData.dayOfWeek} >Hourly forecast</Button></Card.Body>
        </Card>
    )
}

export default DailyForecast