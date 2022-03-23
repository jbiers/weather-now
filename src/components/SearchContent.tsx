import { FaSearch } from 'react-icons/fa'

import '../styles/searchContent.scss'

interface searchContentProps {
    currentCity: string
    setCurrentCity: Function
}

export function SearchContent(props: searchContentProps) {
    let getInput = () => {
        const name = document.getElementsByTagName('input')[0].value
        document.getElementsByTagName('input')[0].value = ''

        if (name !== '') {
            props.setCurrentCity(name)
        }
    }


    return (
        <div className="searchContent">
            <input
                className="searchCity"
                type="text"
                placeholder="Search city">
            </input>
            <button className="btn" onClick={getInput}>
                <FaSearch />
            </button>
        </div>
    )
}