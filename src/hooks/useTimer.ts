import { useState, useRef } from "react";

export const useTimer = (maxTime: number) => {
  const [time, setTime] = useState(maxTime);
  let interval = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    setTime(maxTime);
    if (interval.current) clearInterval(interval.current);
    interval.current = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);
  };

  const clearTimer = () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  return { time, startTimer, clearTimer };
};
