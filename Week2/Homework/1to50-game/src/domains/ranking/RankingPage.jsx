import { useState } from 'react';
import { Button } from '@/shared/components/Button';
import { formatTime } from '@/shared/utils/formatTime';
import { clearRecords, getRecords } from '@/shared/utils/rankingStorage';

export function RankingPage() {
  const [records, setRecords] = useState(() =>
    getRecords().sort((a, b) => b.level - a.level || a.playTime - b.playTime),
  );

  const handleReset = () => {
    clearRecords();
    setRecords([]);
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-title font-semibold">🏆 랭킹</h2>
        <Button variant="danger" onClick={handleReset}>
          초기화
        </Button>
      </div>

      {records.length === 0 ? (
        <p className="py-20 text-center text-body text-foreground-muted">
          아직 기록이 없어요.
        </p>
      ) : (
        <table className="w-full overflow-hidden rounded-lg bg-surface shadow-card">
          <thead className="border-b border-border bg-primary/40 text-body">
            <tr>
              <th className="px-4 py-3 text-left">순위</th>
              <th className="px-4 py-3 text-left">레벨</th>
              <th className="px-4 py-3 text-left">플레이 시간</th>
              <th className="px-4 py-3 text-left">기록 시각</th>
            </tr>
          </thead>
          <tbody className="text-body-sm">
            {records.map((record, index) => (
              <tr key={record.playedAt} className="border-b border-border last:border-b-0">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">Level {record.level}</td>
                <td className="px-4 py-3 tabular-nums">{formatTime(record.playTime)}초</td>
                <td className="px-4 py-3 text-foreground-muted">
                  {new Date(record.playedAt).toLocaleString('ko-KR')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
