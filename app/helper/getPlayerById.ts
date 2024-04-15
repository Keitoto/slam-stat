import { PlayerFullData } from '@/components/types';
import data from '@/data/data22to23.json';
const WEST_TEAMS = [
  'DAL',
  'DEN',
  'GSW',
  'HOU',
  'LAC',
  'LAL',
  'MEM',
  'MIN',
  'NOP',
  'OKC',
  'PHX',
  'POR',
  'SAC',
  'SAS',
  'UTA',
];
const EAST_TEAMS = [
  'ATL',
  'BOS',
  'BKN',
  'CHA',
  'CHI',
  'CLE',
  'DET',
  'IND',
  'MIA',
  'MIL',
  'NYK',
  'ORL',
  'PHI',
  'TOR',
  'WAS',
];

export const getPlayerById = (id: number) => {
  const player = data.find((data) => data.id === id);
  if (!player) throw new Error();

  const conference = WEST_TEAMS.includes(player.team) ? 'WEST' : 'EAST';

  return { ...player, conf: conference } as PlayerFullData;
};
