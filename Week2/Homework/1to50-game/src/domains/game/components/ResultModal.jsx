import { createPortal } from 'react-dom';
import { Button } from '../../../shared/components/Button';
import { formatTime } from '../../../shared/utils/formatTime';

export function ResultModal({ level, playTime, onClose }) {
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="flex w-full max-w-xs flex-col items-center gap-4 rounded-2xl bg-surface p-6 shadow-card"
      >
        <h2 className="text-subtitle font-medium">🎉 Level {level} 클리어!</h2>
        <p className="text-title-lg font-bold tabular-nums">{formatTime(playTime)}초</p>
        <Button variant="primary" fullWidth onClick={onClose}>
          확인
        </Button>
      </div>
    </div>,
    document.body,
  );
}
