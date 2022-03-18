import { CurrentTime } from './CurrentTime'

import image from '../../public/weather.png'

import '../styles/infoContent.scss'

export function InfoContent() {
    return (
        <div className="infoContent">
            <div className="location">
                <span className="city">
                    Porto Velho,
                </span>
                <span className="country">
                    BR
                </span>
            </div>

            <div className="temperature">
                19ºC
            </div>

            <div className="currentConditions">
                <img
                    src={image}
                    alt="current weather">
                </img>

                <span>Thunderstorms</span>
            </div>

            <CurrentTime unixTimestamp={1647615550} />
        </div>
    )
}

// location, temperature, image, currentState, time