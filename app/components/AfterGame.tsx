import { Button } from '@/components/ui/button';
import { NUMBER_OF_LIFE, useGameStore } from '@/store/store';

export const AfterGame = () => {
  const { isSuccess, targetPlayer, resetGame, remainingLife } = useGameStore(
    (state) => state,
  );

  const message = isSuccess
    ? `You guessed ${targetPlayer?.name} with ${NUMBER_OF_LIFE - remainingLife} tries!!`
    : `It was ${targetPlayer?.name}. You'll get it next time:)`;

  return (
    <div className="flex flex-col px-4 py-8 rounded-md items-center justify-center gap-y-8 border-4 border-primary">
      <p>{message}</p>
      <Button onClick={resetGame}>New Game</Button>
    </div>
  );
};
