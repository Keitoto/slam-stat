import { PlayingPanel } from '@/components/PlayingPanel';
import { StartGame } from '@/components/StartGame';
import { useGameStore } from '@/store/store';

export const GamePanel = () => {
  const targetPlayer = useGameStore((state) => state.targetPlayer);

  return (
    <div className="flex justify-center flex-col max-w-[80%] m-auto p-8">
      {!targetPlayer ? <StartGame /> : <PlayingPanel />}
    </div>
  );
};
