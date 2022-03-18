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
                    Brazil
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
        </div>
    )
}

// location, temperature, image, currentState, time