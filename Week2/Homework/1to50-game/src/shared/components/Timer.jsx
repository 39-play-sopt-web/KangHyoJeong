import { useEffect, useState } from 'react';
import { formatTime } from '@/shared/utils/formatTime';

export function Timer({ startTime, endTime }) {
  const [now, setNow] = useState(() => Date.now());
  const isRunning = startTime !== null && endTime === null;

  useEffect(() => {
    if (!isRunning) return;

    const timerId = setInterval(() => setNow(Date.now()), 30);
    return () => clearInterval(timerId);
  }, [isRunning]);

  const elapsed = startTime === null ? 0 : Math.max(0, (endTime ?? now) - startTime);

  return (
    <span className="w-20 text-right text-subtitle font-semibold tabular-nums">
      {formatTime(elapsed)}
    </span>
  );
}
