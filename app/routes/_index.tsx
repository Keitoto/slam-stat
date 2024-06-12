import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PlayingPanel } from '@/components/PlayingPanel';
import { StartGame } from '@/components/StartGame';
import { useGameStore } from '@/store/store';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Slam Stat' },
    {
      name: 'description',
      content: 'Guess an NBA player from season average stats',
    },
  ];
};

export default function Index() {
  const targetPlayer = useGameStore((state) => state.targetPlayer);

  return (
    <>
      <Header />
      <main className="pt-16 px-4 pb-8 flex items-center justify-center min-h-screen font-chakra">
        {!targetPlayer ? <StartGame /> : <PlayingPanel />}
      </main>
      <Footer />
    </>
  );
}
