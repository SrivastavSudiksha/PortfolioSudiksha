import { useState } from 'react';
import type { Phase, AudienceType } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import AudienceSelection from './components/AudienceSelection';
import Desktop from './components/Desktop';

export default function App() {
  const [phase, setPhase] = useState<Phase>('welcome');
  const [audience, setAudience] = useState<AudienceType | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  function handleEnter() {
    setTransitioning(true);
    setTimeout(() => {
      setPhase('audience');
      setTransitioning(false);
    }, 800);
  }

  function handleAudienceSelect(type: AudienceType) {
    setAudience(type);
    setTransitioning(true);
    setTimeout(() => {
      setPhase('desktop');
      setTransitioning(false);
    }, 600);
  }

  return (
    <div
      className="w-screen h-screen overflow-hidden bg-black"
      style={{ opacity: transitioning ? 0 : 1, transition: 'opacity 0.6s ease' }}
    >
      {phase === 'welcome' && <WelcomeScreen onEnter={handleEnter} />}
      {phase === 'audience' && <AudienceSelection onSelect={handleAudienceSelect} />}
      {phase === 'desktop' && <Desktop audience={audience!} />}
    </div>
  );
}
