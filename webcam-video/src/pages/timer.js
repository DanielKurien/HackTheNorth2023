import React, { useState, useEffect } from 'react';

function TimerButton() {
  const [isCounting, setIsCounting] = useState(false);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    let countdownInterval;

    if (isCounting && seconds > 0) {
      countdownInterval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (seconds === 0) {
      setIsCounting(false);
      clearInterval(countdownInterval);
      alert('Time is up!');
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [isCounting, seconds]);

  const startCountdown = () => {
    setIsCounting(true);
    setSeconds(30);
  };

  return (
    <div>
      <button onClick={startCountdown} disabled={isCounting}>
        Start Countdown
      </button>
      <p>
        {isCounting ? `Time left: ${seconds} seconds` : 'Timer not running'}
      </p>
    </div>
  );
}

export default TimerButton;
