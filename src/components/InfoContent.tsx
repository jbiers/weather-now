import { CurrentTime } from './CurrentTime'

import image from '../../public/weather.png'

import '../styles/infoContent.scss'

interface infoContentProps {
    currentWeather: object
}

export function InfoContent(props: infoContentProps) {
    return (
        <div className="infoContent">
            <div className="location">
                <span className="city">
                    {props.currentWeather.name},
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