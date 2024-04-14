export interface PlayerFullData {
  id: number;
  name: string;
  games: number;
  team: Teams;
  conf: 'WEST' | 'EAST';
  stats: PlayerStats;
}

export type PlayerStoredData = Omit<PlayerFullData, 'conf'>
export type PlayerSearchData = Pick<PlayerFullData, 'name' | 'id'>;
export type PlayerDisplayData = Omit<PlayerFullData, 'games'>

export interface PlayerStats {
  MIN: number;
  PTS: number;
  REB: number;
  AST: number;
  STL: number;
  BLK: number;
  FGP: number;
  TPP: number;
  FTP: number;
  TOV: number;
}

// export interface PlayerStatsResponse {
//   id: number;
//   PLAYER: string;
//   TEAM: string;
//   GP: number;
//   MIN: number;
//   PTS: number;
//   FGP: number;
//   TPP: number;
//   FTP: number;
//   REB: number;
//   AST: number;
//   TOV: number;
//   STL: number;
//   BLK: number;
// }

// export interface GameData {
//   targetPlayer: PlayerData;
//   answers: PlayerData[];
//   score: number;
//   isPlaying: boolean;
// }

export type WEST =
  | 'DAL'
  | 'DEN'
  | 'GSW'
  | 'HOU'
  | 'LAC'
  | 'LAL'
  | 'MEM'
  | 'MIN'
  | 'NOP'
  | 'OKC'
  | 'PHX'
  | 'POR'
  | 'SAC'
  | 'SAS'
  | 'UTA';
export type EAST =
  | 'ATL'
  | 'BOS'
  | 'BKN'
  | 'CHA'
  | 'CHI'
  | 'CLE'
  | 'DET'
  | 'IND'
  | 'MIA'
  | 'MIL'
  | 'NYK'
  | 'ORL'
  | 'PHI'
  | 'TOR'
  | 'WAS';

export type Teams = WEST | EAST;
