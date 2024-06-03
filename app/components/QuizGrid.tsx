import { FC, ReactNode } from 'react';
import { PlayerFullData } from '@/components/types';
import { Card } from '@/components/ui/card';
import { useGameStore } from '@/store/store';
import { HiddenStat } from '@/components/HiddenStat';

interface Props {
  data: PlayerFullData;
  isPlaying: boolean;
}

export const QuizGrid: FC<Props> = () => {
  const { targetPlayer, isPlaying, isConfRevealed, isTeamRevealed } =
    useGameStore((state) => state);

  if (!targetPlayer) return;

  return (
    <Card className="p-4 border-4">
      {isPlaying ? (
        <p className="text-center mb-4 font-bold">Who is this Player?</p>
      ) : (
        <p className="text-center mb-4 font-bold">{targetPlayer.name}</p>
      )}
      <div className="space-y-4">
        <div className="flex justify-around">
          <Cell label="Conf">
            <HiddenStat isOpen={isConfRevealed}>{targetPlayer.conf}</HiddenStat>
          </Cell>
          <Cell label="Team">
            <HiddenStat isOpen={isTeamRevealed}>{targetPlayer.team}</HiddenStat>
          </Cell>
        </div>
        <div className="grid grid-cols-5 gap-x-4 gap-y-4">
          <Cell label="MIN">
            <p>{targetPlayer.stats.MIN}</p>
          </Cell>
          <Cell label="PTS">
            <p>{targetPlayer.stats.PTS}</p>
          </Cell>
          <Cell label="REB">
            <p>{targetPlayer.stats.REB}</p>
          </Cell>
          <Cell label="AST">
            <p>{targetPlayer.stats.AST}</p>
          </Cell>
          <Cell label="FG%">
            <p>{targetPlayer.stats.FGP}</p>
          </Cell>
          <Cell label="3P%">
            <p>{targetPlayer.stats.TPP}</p>
          </Cell>
          <Cell label="FT%">
            <p>{targetPlayer.stats.FTP}</p>
          </Cell>
          <Cell label="STL">
            <p>{targetPlayer.stats.STL}</p>
          </Cell>
          <Cell label="BLK">
            <p>{targetPlayer.stats.BLK}</p>
          </Cell>
          <Cell label="TOV">
            <p>{targetPlayer.stats.TOV}</p>
          </Cell>
        </div>
      </div>
    </Card>
  );
};

interface CellProps {
  children: ReactNode;
  label: string;
}

const Cell: FC<CellProps> = ({ label, children }) => (
  <div className="flex flex-col items-center text-lg">
    <p className="font-light mb-1 text-xs">{label}</p>
    {children}
  </div>
);
