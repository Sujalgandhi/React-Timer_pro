import { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  let saveTime;

  useEffect(() => {
    let oldTime = JSON.parse(localStorage.getItem('timer')) || 0;
    setTime(oldTime)

  }, []);

  const increaseTime = () => {
    saveTime = time + 1;
    setTime(saveTime);
    localStorage.setItem('timer', JSON.stringify(saveTime));
  };

  const decreaseTime = () => {
    saveTime = time - 1;
    setTime(saveTime);
    localStorage.setItem('timer', JSON.stringify(saveTime));
  };


  return (
    <div style={{ textAlign: 'center', color: 'blue' , marginTop: '50px' }}>
      <h1>Timer: {time} </h1>
      <button onClick={increaseTime} style={{ marginRight: '10px' }}>Increase Time</button>
      <button onClick={decreaseTime} style={{ marginRight: '10px' }}>Decrease Time</button>
    </div>
  );
};

export default Timer;

