import { useState } from 'react';
import { Header } from './shared/components/Header';
import { GamePage } from './domains/game/GamePage';
import { RankingPage } from './domains/ranking/RankingPage';
import { useGame } from './domains/game/hooks/useGame';

export default function App() {
  const [tab, setTab] = useState('game');
  const game = useGame();

  return (
    <>
      <Header
        tab={tab}
        onTabChange={setTab}
        level={game.level}
        onLevelChange={game.changeLevel}
        time={game.time}
      />
      {tab === 'game' ? (
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
