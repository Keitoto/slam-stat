import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';

export const InstructionPopover = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={`border-2 border-black h-10 px-2 font-chakra font-semibold cursor-pointer ${open ? 'bg-highlight' : ''}`}
      >
        {open ? 'Close' : 'How to Play?'}
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="end"
        className="max-w-[400px] w-full font-chakra"
      >
        <p className="text-center text-xl font-semibold pb-2 border-b border-black border-dashed mb-4">
          How to play
        </p>
        <ol className="pl-6 space-y-2 list-disc">
          <li>Try to guess the NBA player in 7 guesses.</li>
          <li>
            Adjust difficulty by setting minimum games played and minutes per
            game.
          </li>
          <li>Submit your answer using search bar.</li>
          <li>
            <strong className="italic font-semibold border-2 border-correct px-1">
              Green
            </strong>{' '}
            is an exact match.
          </li>
          <li>
            <strong className="italic font-semibold border-2 border-highlight px-1">
              Yellow
            </strong>{' '}
            is a close match.
          </li>
          <li>
            The conference and team will be revealed if your answer match the
            target player's conference or team.{' '}
          </li>
          <li>
            You can get a hint after 3 tries which reveals the conference and
            team.
          </li>
        </ol>
      </PopoverContent>
    </Popover>
  );
};
