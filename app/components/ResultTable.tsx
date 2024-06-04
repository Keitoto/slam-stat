import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '@/components/ui/table';
import { useGameStore } from '@/store/store';

const HeadArray = [
  '',
  'Name',
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

export const ResultTable = () => {
  const answers = useGameStore((state) => state.resultArray);

  return (
    <Table id="answers">
      <TableHeader>
        <TableRow>
          {HeadArray.map((col) => (
            <TableHead className="w-[100px]" key={col}>
              {col}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {answers.length > 0 &&
          answers.map((player, i) => (
            <TableRow key={player.id}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell className="font-medium">{player.name}</TableCell>
              <TableCell className="font-medium">{player.conf}</TableCell>
              <TableCell className="font-medium">{player.team}</TableCell>
              <TableCell className="font-medium">{player.stats.MIN}</TableCell>
              <TableCell className="font-medium">{player.stats.PTS}</TableCell>
              <TableCell className="font-medium">{player.stats.REB}</TableCell>
              <TableCell className="font-medium">{player.stats.AST}</TableCell>
              <TableCell className="font-medium">{player.stats.FGP}</TableCell>
              <TableCell className="font-medium">{player.stats.TPP}</TableCell>
              <TableCell className="font-medium">{player.stats.FTP}</TableCell>
              <TableCell className="font-medium">{player.stats.STL}</TableCell>
              <TableCell className="font-medium">{player.stats.BLK}</TableCell>
              <TableCell className="font-medium">{player.stats.TOV}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
