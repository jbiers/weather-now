import { FaSearch } from 'react-icons/fa'

import '../styles/searchContent.scss'

export function SearchContent() {
    return (
        <div className="searchContent">
            <input
                className="searchCity"
                type="text"
                placeholder="Search city">
            </input>
            <button className="btn">
                <FaSearch />
            </button>
        </div>
    )
}

/** magnifying glass instead of search */