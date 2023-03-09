const Timer = ({ time }) => {
  const formatTime = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    milliseconds = String(milliseconds % 1000).padStart(3, '0');
    seconds = String(seconds % 60).padStart(2, '0');
    minutes = String(minutes % 60).padStart(2, '0');
    hours = String(hours % 24).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return <div>{formatTime(time)}</div>;
};

export default Timer;
