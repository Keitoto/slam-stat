import { Modal } from '@/components/Modal';
import { PlayingPanel } from '@/components/PlayingPanel';
import { StartGame } from '@/components/StartGame';
import { NUMBER_OF_LIFE, useGameStore } from '@/store/store';

export const GamePanel = () => {
  const targetPlayer = useGameStore((state) => state.targetPlayer);
  const isResultOpen = useGameStore((state) => state.isResultOpen);
  const closeResult = useGameStore((state) => state.closeResult);
  const remainingLife = useGameStore((state) => state.remainingLife);

  return (
    <div className="flex justify-center flex-col max-w-[80%] m-auto p-8">
      {!targetPlayer ? (
        <StartGame />
      ) : (
        <>
          <PlayingPanel />
          <Modal
            isOpen={isResultOpen}
            closeModal={closeResult}
            numberOfTries={NUMBER_OF_LIFE - remainingLife}
            playerData={targetPlayer}
            isSuccess={false}
          />
        </>
      )}
    </div>
  );
};
