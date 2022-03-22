import { useEffect, useState } from 'react'

import { SearchContent } from './SearchContent'
import { InfoContent } from './InfoContent'
import { key } from './api_key'

import '../styles/weatherContent.scss'

import { currentWeatherObject } from './InfoContent'

const emptyWeather = (): currentWeatherObject => ({
    coord: {
        lon: 0,
        lat: 0,
    },

    weather: {
        id: 0,
        main: '',
        description: '',
        icon: ''
    },

    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,

    },
    wind: {
        speed: 0,
        deg: 0,
        gust: 0,
    },

    rain: {
        h: 0
    },

    clouds: {
        all: 0
    },

    sys: {
        country: '',
        sunrise: 0,
        sunset: 0
    },
    base: '',
    visibility: 0,
    dt: 0,
    timezone: 0,
    id: 0,
    name: '',
    cod: 0
})

const api = {
    key: key,
    base: 'https://api.openweathermap.org/data/2.5/',
    city: 'boston'
}

export function WeatherContent() {
    const [currentWeather, setCurrentWeather] = useState<currentWeatherObject>(emptyWeather)

    const url = `${api.base}weather?q=${api.city}&units=metric&appid=${api.key}`

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCurrentWeather(data))
    }, [])

    return (
        <section className="weatherContent">
            <SearchContent />
            <InfoContent currentWeather={currentWeather} />
        </section>
    )
}