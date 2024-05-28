import { FC, ReactNode } from 'react';
import { PlayerFullData } from '@/components/types';
import { Card } from '@/components/ui/card';

interface Props {
  data: PlayerFullData;
}

export const QuizGrid: FC<Props> = ({ data }) => {
  return (
    <Card className="p-4 border-4">
      <h1 className="text-center mb-4 font-bold">Who is this Player?</h1>
      <div className="space-y-4">
        <div className="flex justify-around">
          <Cell label="Conf">
            <p>{data.conf}</p>
          </Cell>
          <Cell label="Team">
            <p>{data.team}</p>
          </Cell>
        </div>
        <div className="grid grid-cols-5 gap-x-4 gap-y-4">
          <Cell label="MIN">
            <p>{data.stats.MIN}</p>
          </Cell>
          <Cell label="PTS">
            <p>{data.stats.PTS}</p>
          </Cell>
          <Cell label="REB">
            <p>{data.stats.REB}</p>
          </Cell>
          <Cell label="AST">
            <p>{data.stats.AST}</p>
          </Cell>
          <Cell label="FG%">
            <p>{data.stats.FGP}</p>
          </Cell>
          <Cell label="3P%">
            <p>{data.stats.TPP}</p>
          </Cell>
          <Cell label="FT%">
            <p>{data.stats.FTP}</p>
          </Cell>
          <Cell label="STL">
            <p>{data.stats.STL}</p>
          </Cell>
          <Cell label="BLK">
            <p>{data.stats.BLK}</p>
          </Cell>
          <Cell label="TOV">
            <p>{data.stats.TOV}</p>
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
