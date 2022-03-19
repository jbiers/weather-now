import { useEffect, useState } from 'react'

import { SearchContent } from './SearchContent'
import { InfoContent } from './InfoContent'

import '../styles/weatherContent.scss'
/*
interface weatherContentProps {
    city: string
}*/

export function WeatherContent() {
    const [currentWeather, setCurrentWeather] = useState({})

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=ariquemes&units=metric&appid=3572f70919842b0933f0c7b1037ac03d`)
            .then(response => response.json())
            .then(data => { setCurrentWeather(data); console.log(data.weather.dt) })
    }, [])

    return (
        <section className="weatherContent">
            <SearchContent />
            <InfoContent currentWeather={currentWeather} />
        </section>
    )
}