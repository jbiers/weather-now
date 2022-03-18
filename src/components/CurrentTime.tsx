interface currentTimeProps {
    unixTimestamp: number
}

export function CurrentTime(props: currentTimeProps) {
    let timeNow = new Date(props.unixTimestamp * 1000);
    return (
        <div>
            {timeNow.getHours()}:
            {timeNow.getMinutes()}:
            {timeNow.getSeconds()}
        </div>
    )
}