import { CurrentTime } from './CurrentTime'

import image from '../../public/weather.png'

import '../styles/infoContent.scss'

interface Coord {
    lon: number;
    lat: number;
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

interface Rain {
    h: number;
}

interface Clouds {
    all: number;
}

interface Sys {
    country: string;
    sunrise: number;
    sunset: number;
}

export interface currentWeatherObject {
    coord: Coord;
    weather: Weather;
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    rain: Rain;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

interface infoContentProps {
    currentWeather: currentWeatherObject;
}


export function InfoContent(props: infoContentProps) {
    return (
        <div className="infoContent">
            <div className="location">
                <span className="city">
                    {props.currentWeather.name}, {
                    }
                </span>
                <span className="country">
                    {props.currentWeather.sys.country}
                </span>
            </div>

            <div className="temperature">
                {Math.floor(props.currentWeather.main.temp)}ºC
            </div>

            <div className="currentConditions">
                <img
                    src={image}
                    alt="current weather">
                </img>

                <span>{props.currentWeather.weather.description}</span>
            </div>

            <CurrentTime unixTimestamp={props.currentWeather.dt} />
        </div>
    )
}

// location, temperature, image, currentState, time