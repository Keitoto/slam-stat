import { Footer } from '@/components/Footer';
import { GamePanel } from '@/components/GamePanel';
import { Header } from '@/components/Header';
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
  return (
    <>
      <Header />
      <main className="pt-16 py-8">
        <GamePanel />
      </main>
      <Footer />
    </>
  );
}
