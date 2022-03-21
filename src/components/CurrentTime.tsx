import { useState, useEffect } from 'react'

interface currentTimeProps {
    timeNow: number
}

export function CurrentTime(props: currentTimeProps) {
    const [timeNow, setTimeNow] = useState(new Date(props.timeNow));

    useEffect(() => {
        setTimeNow(new Date(props.timeNow))
    }, [props.timeNow])

    return (
        <div>
            {timeNow.getDate() < 10 ? 0 : ''}{timeNow.getDate()}/
            {(timeNow.getMonth() + 1) < 10 ? 0 : ''}{(timeNow.getMonth() + 1)}/
            {timeNow.getFullYear()}
        </div>
    )
}


// TAKE TIMEZONE INTO CONSIDERATION