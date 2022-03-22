import { useState, useEffect } from 'react'

interface currentTimeProps {
    timeNow: number
    timeZone: number
}

export function CurrentTime(props: currentTimeProps) {
    const [timeNow, setTimeNow] = useState(new Date(props.timeNow + props.timeZone));

    useEffect(() => {
        const d = new Date()
        const localTime = d.getTime()
        const localOffset = d.getTimezoneOffset() * 60000
        const utc = localTime + localOffset

        setTimeNow(new Date(utc + props.timeZone))
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