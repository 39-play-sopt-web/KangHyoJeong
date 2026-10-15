import { useState } from 'react';
import { LEVELS } from '../../../shared/constants/levels';
import { saveRecord } from '../../../shared/utils/rankingStorage';

const getSize = (level) => LEVELS.find((item) => item.value === level).size;

// 배열 섞기 (Fisher-Yates)
const shuffle = (array) => {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

// board: 처음 보이는 앞 절반 숫자, reserve: 칸을 누를 때마다 열릴 뒤 절반 숫자
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
  const [result, setResult] = useState(null);

  const reset = (targetLevel = level) => {
    setNumbers(createGameNumbers(getSize(targetLevel)));
    setNextNumber(1);
    setStartTime(null);
    setEndTime(null);
    setResult(null);
  };

  // 게임 중이어도 레벨을 바꾸면 새 판으로 초기화
  const changeLevel = (nextLevel) => {
    setLevel(nextLevel);
    reset(nextLevel);
  };

  const finish = () => {
    const end = Date.now();
    const playTime = end - startTime;

    setEndTime(end);
    saveRecord({ playedAt: new Date().toISOString(), level, playTime });
    setResult({ level, playTime });
  };

  const clickCell = (index) => {
    const value = numbers.board[index];
    if (value !== nextNumber) return;

    // 1 누르는 순간부터 시간 재기
    if (value === 1) setStartTime(Date.now());

    // 누른 칸엔 다음 숫자 넣고, 남은 숫자 없으면 빈 칸으로
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
