import Logo from '@/assets/logo.png';
import LogoIcon from '@/assets/logo_icon.svg';
import { InstructionPopover } from '@/components/InstructionPopover';
import { useGameStore } from '@/store/store';

export const Header = () => {
  const { resetGame } = useGameStore((state) => state);

  return (
    <header className="fixed h-16 border border-b w-full flex justify-between items-center px-8 py-3 bg-white z-50">
      <h1
        className="text-xl w-[120px] cursor-pointer flex items-center"
        onClick={resetGame}
      >
        <img src={LogoIcon} alt="Slam-Stat" className="size-6" />
        <img src={Logo} alt="Slam-Stat" className="w-full" />
      </h1>
      <InstructionPopover />
    </header>
  );
};
