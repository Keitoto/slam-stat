import { FC } from 'react';
import {
  Dialog,
  // DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
// import { CopyIcon } from 'lucide-react';
// import { Input } from '@/components/ui/input';
import { getPlayerById } from '@/helper/getPlayerById';
import { PlayerFullData } from '@/components/types';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  numberOfTries: number;
  playerData: PlayerFullData;
  isSuccess: boolean;
}
export const Modal: FC<Props> = ({
  isOpen,
  closeModal,
  numberOfTries,
  playerData,
  isSuccess,
}) => {
  // const player = getPlayerById(playerId);

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>You got it!!</DialogTitle>
          <DialogDescription>
            You guessed {playerData.name} with {numberOfTries} tries.
          </DialogDescription>
        </DialogHeader>
        {/* <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div> */}
        <DialogFooter className="sm:justify-start">
          {/* <DialogClose asChild> */}
          <Button type="button" variant="secondary" onClick={closeModal}>
            Show Result
          </Button>
          <Button type="button" variant="secondary" onClick={closeModal}>
            New Game
          </Button>
          {/* </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
