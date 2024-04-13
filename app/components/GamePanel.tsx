import { Question } from '@/components/Question';
import { ResultTable } from '@/components/ResultTable';
import { SearchBar } from '@/components/SearchBar';

export const GamePanel = () => {
  return (
    <div>
      <Question />
      <SearchBar />
      <ResultTable />
    </div>
  );
};
