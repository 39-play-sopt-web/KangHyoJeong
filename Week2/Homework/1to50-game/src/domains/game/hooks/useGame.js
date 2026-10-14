import { useEffect, useRef, useState } from 'react';
import { LEVELS } from '../../../shared/constants/levels';
import { formatTime } from '../../../shared/utils/formatTime';
import { saveRecord } from '../../ranking/utils/rankingStorage';

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
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const startTimeRef = useRef(0);

  // 1 누르면 타이머 시작, 끝날 때까지 계속 갱신
  useEffect(() => {
    if (!isPlaying) return;

    const timerId = setInterval(() => {
      setTime(Date.now() - startTimeRef.current);
    }, 10);

    return () => clearInterval(timerId);
  }, [isPlaying]);

  const reset = (targetLevel = level) => {
    setNumbers(createGameNumbers(getSize(targetLevel)));
    setNextNumber(1);
    setTime(0);
    setIsPlaying(false);
  };

  // 게임 중이어도 레벨을 바꾸면 새 판으로 초기화
  const changeLevel = (nextLevel) => {
    setLevel(nextLevel);
    reset(nextLevel);
  };

  const finish = () => {
    const playTime = Date.now() - startTimeRef.current;

    setIsPlaying(false);
    setTime(playTime);
    saveRecord({ playedAt: new Date().toISOString(), level, playTime });

    // 바로 alert 띄우면 마지막 칸이 안 지워진 채로 떠서 살짝 늦춤
    setTimeout(() => {
      alert(`게임 종료! 걸린 시간: ${formatTime(playTime)}초`);
      reset();
    }, 50);
  };

  const clickCell = (index) => {
    const value = numbers.board[index];
    if (value !== nextNumber) return;

    if (value === 1) {
      startTimeRef.current = Date.now();
      setIsPlaying(true);
    }

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
    time,
    changeLevel,
    clickCell,
  };
}
