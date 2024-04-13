import { Input } from '@/components/ui/input';
import { ChangeEvent, useState, MouseEvent } from 'react';
import searchData from '../data/searchData22to23.json';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSelectPlayer = (e: MouseEvent<HTMLUListElement>) => {
    if (!(e.target instanceof HTMLLIElement)) return;

    console.log(e.target.dataset.id);
  };

  const filteredData = searchData.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <Input
        placeholder="Guess a Player"
        value={searchTerm}
        onChange={onChange}
      />
      {searchTerm && (
        <ul onClick={onSelectPlayer}>
          {filteredData.map((data) => (
            <li data-id={data.id} key={data.id}>
              {data.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
