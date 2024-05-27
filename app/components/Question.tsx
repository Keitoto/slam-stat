import { getPlayerById } from '@/helper/getPlayerById';
import { useGameStore } from '@/store/store';
import { PlayerFullData } from '@/components/types';
import { QuizTable } from '@/components/QuizTable';
import { Button } from '@/components/ui/button';

export const Question = () => {
  const targetPlayer = useGameStore((state) => state.targetPlayer);
  const giveUp = useGameStore((state) => state.giveUp);

  if (!targetPlayer) return;

  // const targetData = getPlayerById(targetId) as PlayerFullData;

  // if (!targetData) return;

  return (
    <div>
      <p>Who is this player?</p>
      <Button type="button" onClick={giveUp}>
        Show Answer
      </Button>
      <p>{targetPlayer.name}</p>
      <QuizTable data={[targetPlayer]} />
    </div>
  );
};
