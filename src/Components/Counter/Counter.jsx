//import styles
import "./Counter.css";

//import from react
import { useState, useEffect } from "react";

const MinuteCountdown = ({ minutes = 5 }) => {
  const [remainingTime, setRemainingTime] = useState(minutes * 60 * 1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(prevTime - 1000, 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (timeInMilliseconds) => {
    const minutes = Math.floor(timeInMilliseconds / (1000 * 60));
    const seconds = Math.floor((timeInMilliseconds % (1000 * 60)) / 1000);
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      {remainingTime > 0 ? (
        <span className="timer">{formatTime(remainingTime)}</span>
      ) : (
        <span className="timer">00:00</span>
      )}
    </div>
  );
};

export default MinuteCountdown;
