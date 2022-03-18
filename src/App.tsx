import { Header } from './components/Header'
import { WeatherContent } from './components/WeatherContent'
import './styles/global.scss';

export function App() {
    return (
        <>
            <Header />
            <WeatherContent />
        </>
    );
}