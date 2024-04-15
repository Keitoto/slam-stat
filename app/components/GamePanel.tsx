import { Question } from '@/components/Question';
import { ResultTable } from '@/components/ResultTable';
import { SearchBar } from '@/components/SearchBar';
import { StartGame } from '@/components/StartGame';
import { useGameStore } from '@/store/store';

export const GamePanel = () => {
  const targetId = useGameStore((state) => state.targetId);

  return (
    <div className="flex justify-center flex-col max-w-[80%] m-auto p-8">
      {!targetId ? (
        <StartGame />
      ) : (
        <>
          <Question />
          <div className="h-8"></div>
          <SearchBar />
          <div className="h-8"></div>
          <ResultTable />
        </>
      )}
    </div>
  );
};
