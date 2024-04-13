import { useGameStore } from '@/store/store';

export const Question = () => {
  const targetId = useGameStore((state) => state.targetId);
  const initializeGame = useGameStore((state) => state.initializeGame);

  return (
    <div>
      <button onClick={initializeGame}>start</button>
      <p>Question {targetId}</p>
    </div>
  );
};
