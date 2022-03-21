import { Header } from './components/Header'
import { WeatherContent } from './components/WeatherContent'
import './styles/global.scss';

const api = {
    key: '3572f70919842b0933f0c7b1037ac03d',
    base: 'https://api.openweathermap.org/data/2.5/'
}

export function App() {
    return (
        <>
            <Header />
            <WeatherContent />
        </>
    );
}