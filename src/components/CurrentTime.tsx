import { useState, useEffect } from 'react'

interface currentTimeProps {
    unixTimestamp: number
}

export function CurrentTime(props: currentTimeProps) {
    const [timeNow, setTimeNow] = useState(new Date(props.unixTimestamp * 1000));

    useEffect(() => {
        setTimeout(
            () => {
                setTimeNow(new Date(props.unixTimestamp + 1000))
            }, 1000
        )
    }, [timeNow]);

    return (
        <div>
            {timeNow.getHours() < 10 ? 0 : ''}{timeNow.getHours()}:
            {timeNow.getMinutes() < 10 ? 0 : ''}{timeNow.getMinutes()}:
            {timeNow.getSeconds() < 10 ? 0 : ''}{timeNow.getSeconds()}
        </div>
    )
}

// the changing state will be the unix time stamp
// it will probably live in the parent