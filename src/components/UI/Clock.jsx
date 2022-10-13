import React, { useState, useEffect } from 'react';
import '../../styles/clock.css';
const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    let interval;

    const countDown = () => {
      // tinh den ngay hen han uu dai sales
      const destination = new Date('Dec 08 ,2022').getTime();

      interval = setInterval(() => {
        //ngay hien tai
        const now = new Date().getTime();

        const different = destination - now;

        //tinh bang milliseconds
        const days = Math.floor(different / (1000 * 60 * 60 * 24));
        const hours = Math.floor((different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((different % (1000 * 60)) / 1000);

        if (destination < 0) {
          clearInterval(interval);
        } else {
          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
        }
      });
    };
    countDown();
  }, []);

  return (
    <div className="clock__wrapper d-flex align-items-center gap-3">
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{days ? days : '0'}</h1>
          <h5 className="text-white fs-6">Days</h5>
        </div>
        <span className="text-white fs-3 ">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{hours ? hours : '0'}</h1>
          <h5 className="text-white fs-6">Hours</h5>
        </div>
        <span className="text-white fs-3 ">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{minutes ? minutes : '0'}</h1>
          <h5 className="text-white fs-6">Minutes</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{seconds ? seconds : '0'}</h1>
          <h5 className="text-white fs-6">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
