import { IconLightBulb } from '@/assets/icons/IconLightBulb';
import { Button } from '@/components/ui/button';
import { useGameStore } from '@/store/store';

export const ShowHintButton = () => {
  const { revealHint } = useGameStore.getState();
  return (
    <Button
      className="flex items-center bg-yellow-400 text-black hover:bg-yellow-300"
      onClick={revealHint}
    >
      {<IconLightBulb className="size-4 mr-1" />}Give me some hint
    </Button>
  );
};
