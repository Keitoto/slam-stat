import { getPlayerById } from '@/helper/getPlayerById';
import { useGameStore } from '@/store/store';
import { PlayerFullData } from '@/components/types';
import { QuizTable } from '@/components/QuizTable';

export const Question = () => {
  const targetId = useGameStore((state) => state.targetId);

  if (!targetId) return;

  const targetData = getPlayerById(targetId) as PlayerFullData;

  // if (!targetData) return;

  return (
    <div>
      <p>Guess this player</p>
      <QuizTable data={[targetData]} />
    </div>
  );
};
