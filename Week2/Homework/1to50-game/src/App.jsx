import { useState } from 'react';
import { Header } from './shared/components/Header';
import { GamePage } from './domains/game/GamePage';
import { RankingPage } from './domains/ranking/RankingPage';
import { useGame } from './domains/game/hooks/useGame';
import { TAB } from './shared/constants/tabs';

export default function App() {
  const [tab, setTab] = useState(TAB.GAME);
  const game = useGame();

  return (
    <>
      <Header
        tab={tab}
        onTabChange={setTab}
        level={game.level}
        onLevelChange={game.changeLevel}
        startTime={game.startTime}
        endTime={game.endTime}
      />
      {tab === TAB.GAME ? (
        <GamePage
          size={game.size}
          total={game.total}
          board={game.board}
          nextNumber={game.nextNumber}
          result={game.result}
          onCellClick={game.clickCell}
          onCloseResult={game.closeResult}
        />
      ) : (
        <RankingPage />
      )}
    </>
  );
}
