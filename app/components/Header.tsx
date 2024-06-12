import Logo from '@/assets/logo.png';
export const Header = () => {
  return (
    <header className="fixed h-16 border border-b w-full flex justify-between items-center px-4 py-2 bg-white z-50">
      <h1 className="text-xl w-[120px]">
        <img src={Logo} alt="Slam-Stat" className="w-full" />
      </h1>
    </header>
  );
};
