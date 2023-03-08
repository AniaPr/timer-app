import Button from './components/Button/Button';
import Timer from './components/Timer/Timer';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    if (!timer)
      setTimer(
        setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1)
      );
  };

  const stop = () => {
    clearInterval(timer);
    setTimer(null);
  };

  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <div>
      <Timer time={time} />
      <Button onClick={start}>start</Button>
      <Button onClick={stop}>stop</Button>
      <Button onClick={reset}>reset</Button>
    </div>
  );
};

export default App;
