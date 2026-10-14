import { LEVELS } from '../constants/levels';
import { Button } from './Button';
import { Select } from './Select';
import { formatTime } from '../utils/formatTime';

const TABS = [
  { key: 'game', label: '게임' },
  { key: 'ranking', label: '랭킹' },
];

export function Header({ tab, onTabChange, level, onLevelChange, time }) {
  return (
    <header className="sticky top-0 z-10 h-14 bg-surface shadow-header">
      <div className="grid h-full grid-cols-3 items-center px-4">
        <h1 className="text-subtitle font-semibold">숫자 클릭 게임</h1>

        <nav role="tablist" className="flex justify-center gap-2">
          {TABS.map(({ key, label }) => (
            <Button
              key={key}
              role="tab"
              aria-selected={tab === key}
              variant={tab === key ? 'primary' : 'default'}
              onClick={() => onTabChange(key)}
            >
              {label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          {tab === 'game' && (
            <>
              <Select
                aria-label="난이도"
                options={LEVELS}
                value={level}
                onChange={(value) => onLevelChange(Number(value))}
              />
              <span className="w-20 text-right text-subtitle font-semibold tabular-nums">
                {formatTime(time)}
              </span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
