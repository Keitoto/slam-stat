import { AfterGame } from '@/components/AfterGame';
import { LifeBar } from '@/components/LifeBar';
import { QuizGrid } from '@/components/QuizGrid';
import { ResultTable } from '@/components/ResultTable';
import { SearchBar } from '@/components/SearchBar';
import { ShowHintButton } from '@/components/ShowHintButton';
import { Button } from '@/components/ui/button';
import { useGameStore } from '@/store/store';

export const PlayingPanel = () => {
  const {
    targetPlayer,
    giveUp,
    remainingLife,
    isPlaying,
    isConfRevealed,
    isTeamRevealed,
  } = useGameStore((state) => state);

  if (!targetPlayer) return;

  return (
    <>
      <div className="flex justify-between items-center gap-8 mb-4">
        <LifeBar remainingLife={remainingLife} />
        {isPlaying && (
          <Button type="button" onClick={giveUp}>
            Show Answer
          </Button>
        )}
      </div>

      {!isPlaying && (
        <div className="mb-4">
          <AfterGame />
        </div>
      )}

      <div className="mb-8">
        <QuizGrid data={targetPlayer} isPlaying={isPlaying} />
      </div>

      {/* Show hint when life is less than 4 and team and/or conf is hidden  */}
      {isPlaying &&
        remainingLife < 4 &&
        (!isConfRevealed || !isTeamRevealed) && (
          <div className="mb-8 flex justify-center">
            <ShowHintButton />
          </div>
        )}

      {isPlaying && (
        <div className="mb-16">
          <SearchBar />
        </div>
      )}

      <div>
        <p className="text-center mb-2">Your Answers</p>
        <ResultTable />
      </div>
    </>
  );
};
