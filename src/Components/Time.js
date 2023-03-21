import React, { useState, useEffect } from "react";
import styles from "./time.module.css"

function Time() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval( intervalId);
    }, []);

    return <div>{currentTime.toLocaleTimeString()}</div>;
}
export default Time;