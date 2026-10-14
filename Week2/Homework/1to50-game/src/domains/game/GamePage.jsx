import { GameBoard } from './components/GameBoard';

export function GamePage({ size, total, board, nextNumber, onCellClick }) {
  return (
    <main className="flex flex-col items-center gap-8 px-4 py-10">
      <p className="flex items-baseline gap-3">
        <span className="text-subtitle text-foreground-muted">다음 숫자</span>
        <span className="text-display font-bold tabular-nums">{nextNumber}</span>
        <span className="text-subtitle text-foreground-muted tabular-nums">
          ({nextNumber}/{total})
        </span>
      </p>

      <GameBoard size={size} board={board} onCellClick={onCellClick} />
    </main>
  );
}
