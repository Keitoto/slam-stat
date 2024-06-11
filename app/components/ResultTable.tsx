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

function isWithinTenPercentRange(value1: number, value2: number): boolean {
  const lowerBound = value1 * 0.9;
  const upperBound = value1 * 1.1;
  return value2 >= lowerBound && value2 <= upperBound;
}

export const ResultTable = () => {
  const { resultArray, targetPlayer } = useGameStore((state) => state);

  if (!targetPlayer) return;

  const highlightCellClass = (callValue: number, targetValue: number) => {
    // Correct value
    if (callValue === targetValue) {
      return 'green-cell';
      // Close (10%)
    } else if (isWithinTenPercentRange(callValue, targetValue)) {
      return 'yellow-cell';
    }
  };

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
        {resultArray.length > 0 &&
          resultArray.map((player, i) => (
            <TableRow key={player.id}>
              <TableCell className={`font-medium`}>{i + 1}</TableCell>
              <TableCell className={`font-medium`}>{player.name}</TableCell>
              <TableCell
                className={`font-medium ${player.conf === targetPlayer.conf && 'green-cell'}`}
              >
                {player.conf}
              </TableCell>
              <TableCell
                className={`font-medium ${player.team === targetPlayer.team && 'green-cell'}`}
              >
                {player.team}
              </TableCell>
              <TableCell
                className={`font-medium ${highlightCellClass(player.stats.MIN, targetPlayer.stats.MIN)}`}
              >
                {player.stats.MIN}
              </TableCell>
              <TableCell
                className={`font-medium ${highlightCellClass(player.stats.PTS, targetPlayer.stats.PTS)}`}
              >
                {player.stats.PTS}
              </TableCell>
              <TableCell
                className={`font-medium ${highlightCellClass(player.stats.REB, targetPlayer.stats.REB)}`}
              >
                {player.stats.REB}
              </TableCell>
              <TableCell
                className={`font-medium ${highlightCellClass(player.stats.AST, targetPlayer.stats.AST)}`}
              >
                {player.stats.AST}
              </TableCell>
              <TableCell
                className={`font-medium ${highlightCellClass(player.stats.FGP, targetPlayer.stats.FGP)}`}
              >
                {player.stats.FGP}
              </TableCell>
              <TableCell
                className={`font-medium ${highlightCellClass(player.stats.TPP, targetPlayer.stats.TPP)}`}
              >
                {player.stats.TPP}
              </TableCell>
              <TableCell
                className={`font-medium ${highlightCellClass(player.stats.FTP, targetPlayer.stats.FTP)}`}
              >
                {player.stats.FTP}
              </TableCell>
              <TableCell
                className={`font-medium ${highlightCellClass(player.stats.STL, targetPlayer.stats.STL)}`}
              >
                {player.stats.STL}
              </TableCell>
              <TableCell
                className={`font-medium ${highlightCellClass(player.stats.BLK, targetPlayer.stats.BLK)}`}
              >
                {player.stats.BLK}
              </TableCell>
              <TableCell
                className={`font-medium ${highlightCellClass(player.stats.TOV, targetPlayer.stats.TOV)}`}
              >
                {player.stats.TOV}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
