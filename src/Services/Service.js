import axios from "axios"
import moment from "moment/moment"

const DAILY_FORECAST_URL = 'https://pro.openweathermap.org/data/2.5/forecast/daily'
const HOURLY_FORECASE_URL = 'https://api.openweathermap.org/data/2.5/forecast'
export const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

export const dailyForecast = async () => {
    const response = await axios({
        method: 'get',
        url: DAILY_FORECAST_URL,
        params: {
            q: 'Boston',
            cnt: '5',
            units: 'metric',
            APPID: '527fd48a522cb4c221f03c9babf8da86'
        }
    })

    if (response) {
        response.data.list.forEach(dailyWeather => {
            const dt = moment.unix(dailyWeather.dt + 18000)
            dailyWeather['date'] = dt._d
            dailyWeather['dayOfWeek'] = days[dt.day()]
            dailyWeather['weatherImage'] = `https://openweathermap.org/img/wn/${dailyWeather.weather[0].icon}@4x.png`
        })
        return response.data.list
    } else {
        console.log("failed!")
    }
}

export const hourlyForecast = async () => {
    const response = await axios({
        method: 'get',
        url: HOURLY_FORECASE_URL,
        params: {
            q: 'Boston',
            units: 'metric',
            APPID: '527fd48a522cb4c221f03c9babf8da86'
        }
    })

    if (response) {
        response.data.list.forEach(hourlyWeather => {
            const dt = moment.unix(hourlyWeather.dt + 18000)
            hourlyWeather['date'] = dt._d
            hourlyWeather['dayOfWeek'] = days[dt.day()]
            hourlyWeather['weatherImage'] = `https://openweathermap.org/img/wn/${hourlyWeather.weather[0].icon}.png`
        })
        return response.data.list
    } else {
        console.log("failed!")
    }
}

export const convertDate = (date) => {
    const dt = moment.unix(date + 18000)
    return dt._d.getHours() + ":" + dt._d.getMinutes() + ":" + dt._d.getSeconds()

}