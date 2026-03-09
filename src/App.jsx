import { useState } from 'react';
import { getStoredXP, setStoredXP } from './utils/helpers';
import StartScreen from './components/StartScreen';
import LessonScreen from './components/LessonScreen';
import LevelSelectScreen from './components/LevelSelectScreen';
import GameScreen from './components/GameScreen';
import WinScreen from './components/WinScreen';
import ResourcesScreen from './components/ResourcesScreen';

export default function App() {
  const [screen, setScreen] = useState('start');
  const [winData, setWinData] = useState(null);
  const [xp, setXP] = useState(getStoredXP());

  const handleXPChange = (delta) => {
    setXP(prev => {
      const next = Math.max(0, prev + delta);
      setStoredXP(next);
      return next;
    });
  };

  const handleStart = () => setScreen('lessons');
  const handleLessonsFinish = () => setScreen('levelSelect');
  const handleSelectLevel = () => setScreen('game');
  const handleGoToLessons = () => setScreen('lessons');
  const handleGoToResources = () => setScreen('resources');
  const handleWin = (stats, encounteredCards) => {
    setWinData({ stats, encounteredCards });
    setScreen('win');
  };
  const handleGoHome = () => {
    setWinData(null);
    setScreen('start');
  };

  switch (screen) {
    case 'start':
      return <StartScreen onStart={handleStart} xp={xp} />;
    case 'lessons':
      return <LessonScreen onFinish={handleLessonsFinish} onGoHome={handleGoHome} />;
    case 'levelSelect':
      return <LevelSelectScreen onSelectLevel={handleSelectLevel} onGoHome={handleGoHome} xp={xp} onGoToResources={handleGoToResources} />;
    case 'game':
      return <GameScreen onWin={handleWin} onGoHome={handleGoHome} xp={xp} onXPChange={handleXPChange} onGoToLessons={handleGoToLessons} />;
    case 'win':
      return <WinScreen stats={winData.stats} encounteredCards={winData.encounteredCards} onRestart={handleGoHome} xp={xp} onGoHome={handleGoHome} />;
    case 'resources':
      return <ResourcesScreen onGoHome={handleGoHome} />;
    default:
      return null;
  }
}
