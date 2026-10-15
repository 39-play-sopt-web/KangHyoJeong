import { LEVELS } from '@/shared/constants/levels';
import { TAB, TABS } from '@/shared/constants/tabs';
import { Button } from './Button';
import { Select } from './Select';
import { Timer } from './Timer';

export function Header({ tab, onTabChange, level, onLevelChange, startTime, endTime }) {
  return (
    <header className="sticky top-0 z-10 h-14 bg-surface shadow-header">
      <div className="relative flex h-full items-center justify-between px-4">
        <h1 className="text-subtitle font-semibold">숫자 클릭 게임</h1>

        <nav role="tablist" className="absolute left-1/2 flex -translate-x-1/2 gap-2">
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
          {tab === TAB.GAME && (
            <>
              <Select
                aria-label="난이도"
                options={LEVELS}
                value={level}
                onChange={(value) => onLevelChange(Number(value))}
              />
              <Timer startTime={startTime} endTime={endTime} />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
