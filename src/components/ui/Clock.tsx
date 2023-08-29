import React, { useState, useEffect } from 'react';

const CountdownClock: React.FC = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(54);

  // Update the countdown every second
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      // Decrement seconds
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        // When seconds reach 0, reset to 59 and decrement minutes
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          // When minutes reach 0, reset to 59 and decrement hours
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
          } else {
            // When hours reach 0, reset to 23 and decrement days
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            } else {
              // Countdown has ended, clear the interval
              clearInterval(countdownInterval);
            }
          }
        }
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, [days, hours, minutes, seconds]);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-[#9B9B9B] rounded-box text-[#000000]  ">
        <span className="countdown font-mono text-2xl sm:text-5xl">
          <span style={{ '--value': days } as React.CSSProperties}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-[#9B9B9B] rounded-box text-[#000000] ">
        <span className="countdown font-mono text-2xl sm:text-5xl">
          <span style={{ '--value': hours } as React.CSSProperties}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-[#9B9B9B] rounded-box text-[#000000] ">
        <span className="countdown font-mono text-2xl sm:text-5xl">
          <span style={{ '--value': minutes } as React.CSSProperties}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-[#9B9B9B] rounded-box text-[#000000] ">
        <span className="countdown font-mono text-2xl sm:text-5xl">
          <span style={{ '--value': seconds } as React.CSSProperties}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default CountdownClock;
