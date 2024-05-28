import { Input } from '@/components/ui/input';
import { ChangeEvent, useState, MouseEvent } from 'react';
import searchData from '../data/searchData22to23.json';
import { useGameStore } from '@/store/store';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const submitAnswer = useGameStore((state) => state.checkAnswer);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSelectPlayer = (e: MouseEvent<HTMLUListElement>) => {
    if (!(e.target instanceof HTMLLIElement)) return;
    if (!e.target.dataset.id) return;
    submitAnswer(+e.target.dataset.id);
    setSearchTerm('');
  };

  const filteredData = searchData.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="flex-1">
      <Input
        placeholder="Guess a Player"
        value={searchTerm}
        onChange={onChange}
        // className={searchTerm ? 'rounded-none rounded-t-md' : ''}
        className="mb-2"
      />
      {searchTerm && filteredData.length > 0 && (
        <ul
          onClick={onSelectPlayer}
          className="border-2 border-slate-200 p-2 rounded-md max-h-[200px] overflow-y-auto"
        >
          {filteredData.map((data) => (
            <li
              data-id={data.id}
              key={data.id}
              className="cursor-pointer p-2 leading-none rounded-sm hover:bg-slate-100"
            >
              {data.name}
            </li>
          ))}
        </ul>
      )}
      {searchTerm && filteredData.length === 0 && (
        <div className="border-2 border-slate-200 p-4 rounded-md leading-none">
          No Result
        </div>
      )}
    </div>
  );
};
