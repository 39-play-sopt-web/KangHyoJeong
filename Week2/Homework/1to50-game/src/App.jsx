import { useState } from 'react';
import { Header } from './shared/components/Header';
import { GamePage } from './domains/game/GamePage';
import { RankingPage } from './domains/ranking/RankingPage';

export default function App() {
  const [tab, setTab] = useState('game');
  const [level, setLevel] = useState(1);

  return (
    <>
      <Header
        tab={tab}
        onTabChange={setTab}
        level={level}
        onLevelChange={setLevel}
      />
      {tab === 'game' ? <GamePage /> : <RankingPage />}
    </>
  );
}
