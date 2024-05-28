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
      />
      {searchTerm && (
        <ul onClick={onSelectPlayer}>
          {filteredData.map((data) => (
            <li data-id={data.id} key={data.id} className="cursor-pointer hover:underline">
              {data.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
