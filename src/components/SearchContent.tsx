import '../styles/searchContent.scss'

export function SearchContent() {
    return (
        <div className="searchContent">
            <input
                className="searchCity"
                type="text"
                placeholder="Search city">
            </input>
            <button className="btn"></button>
        </div>
    )
}

/** magnifying glass instead of search */