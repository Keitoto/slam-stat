import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '@/components/ui/table';
import { FC } from 'react';
import { PlayerFullData } from '@/components/types';

interface Props {
  data: PlayerFullData[];
}

const HeadArray = [
  'Conf',
  'Team',
  'MIN',
  'PTS',
  'REB',
  'AST',
  'FG%',
  '3P%',
  'FT%',
  'STL',
  'BLK',
  'TOV',
];

export const QuizTable: FC<Props> = ({ data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {HeadArray.map((col) => (
            <TableHead className="w-[100px]">{col}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((player) => (
          <TableRow>
            <TableCell className="font-medium">{player.conf}</TableCell>
            <TableCell className="font-medium">{player.team}</TableCell>
            <TableCell className="font-medium">{player.stats.MIN}</TableCell>
            <TableCell className="font-medium">{player.stats.PTS}</TableCell>
            <TableCell className="font-medium">{player.stats.REB}</TableCell>
            <TableCell className="font-medium">{player.stats.AST}</TableCell>
            <TableCell className="font-medium">{`${player.stats.FGP}%`}</TableCell>
            <TableCell className="font-medium">{`${player.stats.TPP}%`}</TableCell>
            <TableCell className="font-medium">{`${player.stats.FTP}%`}</TableCell>
            <TableCell className="font-medium">{player.stats.STL}</TableCell>
            <TableCell className="font-medium">{player.stats.BLK}</TableCell>
            <TableCell className="font-medium">{player.stats.TOV}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
