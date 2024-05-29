import { LifeBar } from '@/components/LifeBar';
import { QuizGrid } from '@/components/QuizGrid';
import { ResultTable } from '@/components/ResultTable';
import { SearchBar } from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { useGameStore } from '@/store/store';

export const PlayingPanel = () => {
  const { targetPlayer, giveUp, remainingLife } = useGameStore(
    (state) => state,
  );

  if (!targetPlayer) return;

  return (
    <>
      <div className="flex justify-between items-center gap-8 mb-4">
        <LifeBar remainingLife={remainingLife} />
        <Button type="button" onClick={giveUp}>
          Show Answer
        </Button>
      </div>
      <div className="mb-8">
        <QuizGrid data={targetPlayer} />
      </div>
      <div className="mb-16">
        <SearchBar />
      </div>
      <p className="text-center mb-2">Your Answers</p>
      <ResultTable />
    </>
  );
};
