import { IconLightBulb } from '@/assets/icons/IconLightBulb';
import { Button } from '@/components/ui/button';
import { useGameStore } from '@/store/store';

export const ShowHintButton = () => {
  const { revealHint } = useGameStore.getState();
  return (
    <Button
      className="flex items-center bg-highlight text-black hover:bg-highlight-hover"
      onClick={revealHint}
    >
      {<IconLightBulb className="size-4 mr-1" />}Show Team and Conference
    </Button>
  );
};
