import { useState } from 'react';
import { LEVELS } from '@/shared/constants/levels';
import { saveRecord } from '@/shared/utils/rankingStorage';

const getSize = (level) => LEVELS.find((item) => item.value === level).size;

const shuffle = (array) => {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

const createGameNumbers = (size) => {
  const cellCount = size * size;

  const front = Array.from({ length: cellCount }, (_, i) => i + 1);
  const back = Array.from({ length: cellCount }, (_, i) => cellCount + i + 1);

  return {
    board: shuffle(front),
    reserve: shuffle(back),
  };
};

export function useGame() {
  const [level, setLevel] = useState(1);
  const size = getSize(level);
  const total = size * size * 2;

  const [numbers, setNumbers] = useState(() => createGameNumbers(size));
  const [nextNumber, setNextNumber] = useState(1);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const result = endTime === null ? null : { level, playTime: endTime - startTime };

  const reset = (targetLevel = level) => {
    setNumbers(createGameNumbers(getSize(targetLevel)));
    setNextNumber(1);
    setStartTime(null);
    setEndTime(null);
  };

  const changeLevel = (nextLevel) => {
    setLevel(nextLevel);
    reset(nextLevel);
  };

  const finish = () => {
    const end = Date.now();

    setEndTime(end);
    saveRecord({ playedAt: new Date().toISOString(), level, playTime: end - startTime });
  };

  const clickCell = (index) => {
    const value = numbers.board[index];
    if (value !== nextNumber) return;

    if (value === 1) setStartTime(Date.now());

    const [opened = null, ...rest] = numbers.reserve;
    setNumbers({
      board: numbers.board.map((cell, i) => (i === index ? opened : cell)),
      reserve: rest,
    });

    if (value === total) {
      finish();
    } else {
      setNextNumber(value + 1);
    }
  };

  return {
    level,
    size,
    total,
    board: numbers.board,
    nextNumber,
    startTime,
    endTime,
    result,
    changeLevel,
    clickCell,
    closeResult: () => reset(),
  };
}
