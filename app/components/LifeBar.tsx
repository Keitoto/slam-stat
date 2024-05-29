import {
  IconBasketballColored,
  IconBasketballSkelton,
} from '@/assets/icons/IconBasketball';
import { NUMBER_OF_LIFE } from '@/store/store';
import { FC } from 'react';

export const LifeBar: FC<{ remainingLife: number }> = ({ remainingLife }) => {
  const bar = [];
  for (let i = 0; i < NUMBER_OF_LIFE; i++) {
    i < remainingLife
      ? bar.push(
          <span className="block size-4" key={i}>
            <IconBasketballColored />
          </span>,
        )
      : bar.push(
          <span className="block size-4 border rounded-full border-[#38454F]" key={i}>
            <IconBasketballSkelton />
          </span>,
        );
  }
  return <div className="flex gap-1">{bar}</div>;
};
