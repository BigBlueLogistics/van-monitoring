import { useState, useRef, useEffect } from 'react';

function useCountdown(intervalMs: number = 1000, startCount: number = 1) {
  const [count, setCount] = useState(startCount);
  const intervalRef = useRef<any>();

  const resetCount = () => {
    setCount(1);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((x) => x + 1);
    }, intervalMs);

    return () => clearInterval(intervalRef.current);
  }, [intervalMs]);

  return { count, resetCount };
}

export default useCountdown;
