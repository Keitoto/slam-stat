import { useGameStore } from '@/store/store';

export const StartGame = () => {
  const startGame = useGameStore((state) => state.startGame);
  return <button onClick={startGame}>start</button>;
};