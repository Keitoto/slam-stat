import { Teams } from '@/components/types';
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

export const getConferenceByTeam = (team: Teams) => {
  const conference = WEST_TEAMS.includes(team)
    ? 'WEST'
    : EAST_TEAMS.includes(team)
      ? 'EAST'
      : undefined;

  if (!conference) throw new Error();

  return conference;
};
