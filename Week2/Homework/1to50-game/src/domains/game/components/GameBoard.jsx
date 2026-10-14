import { NumberCell } from './NumberCell';

const CELL_TEXT = {
  3: 'text-title-lg',
  4: 'text-title',
  5: 'text-subtitle',
};

export function GameBoard({ size, board, onCellClick }) {
  return (
    <div
      className="grid w-full max-w-120.5 gap-4"
      style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
    >
      {board.map((value, index) => (
        <NumberCell
          key={index}
          value={value}
          textClassName={CELL_TEXT[size]}
          onClick={() => onCellClick?.(index)}
        />
      ))}
    </div>
  );
}
