import Logo from '@/assets/logo.png';
import { useGameStore } from '@/store/store';

export const Header = () => {
  const { resetGame } = useGameStore((state) => state);
  
  return (
    <header className="fixed h-16 border border-b w-full flex justify-between items-center px-4 py-2 bg-white z-50">
      <h1 className="text-xl w-[120px] cursor-pointer" onClick={resetGame}>
        <img src={Logo} alt="Slam-Stat" className="w-full" />
      </h1>
    </header>
  );
};
