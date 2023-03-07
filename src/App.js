import Button from './components/Button/Button';
import Timer from './components/Timer/Timer';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    setTimer(
      setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1)
    );
  };

  const stop = () => {
    setTimer(setInterval(() => clearInterval(timer)));
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
      <Button onClick={() => setTime(0)}>reset</Button>
    </div>
  );
};

export default App;
