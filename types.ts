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

export interface PlayerData {
  name: string;
  id: number;
  team: Teams;
}
export interface PlayerFullData {
  id: number;
  name: string;
  games: number;
  team: Teams;
  stats: PlayerStats;
}

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

export interface PlayerStatsResponse {
  id: number;
  PLAYER: string;
  TEAM: string;
  GP: number;
  MIN: number;
  PTS: number;
  FGP: number;
  TPP: number;
  FTP: number;
  REB: number;
  AST: number;
  TOV: number;
  STL: number;
  BLK: number;
};

export interface GameData {
  targetPlayer: PlayerData;
  answers: PlayerData[];
  score: number;
  isPlaying: boolean;
}
