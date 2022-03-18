import { SearchContent } from './SearchContent'
import { InfoContent } from './InfoContent'

import '../styles/weatherContent.scss'

export function WeatherContent() {
    return (
        <section className="weatherContent">
            <SearchContent />
            <InfoContent />
        </section>
    )
}