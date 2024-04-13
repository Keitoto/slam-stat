import { PlayerFullData } from 'types';
import { create } from 'zustand';
import PlayerData from '@/data/data22to23.json';

const MIN_MINUTE = 10;
const MIN_GAMES = 30;
const NUMBER_OF_LIFE = 7;

const numberOfPlayer = PlayerData.filter(
  (player) => player.games > MIN_GAMES && player.stats.MIN > MIN_MINUTE,
).length;

interface GameState {
  targetId: number | undefined;
  remainingLife: number;
  resultArray: PlayerFullData[];
  // increase: (by: number) => void;
  initializeGame: () => void;
}

const InitialState = {
  targetId: Math.floor(Math.random() * numberOfPlayer),
  remainingLife: NUMBER_OF_LIFE,
  resultArray: [],
};

export const useGameStore = create<GameState>()((set) => ({
  ...InitialState,
  targetId: undefined,
  initializeGame: () =>
    set(() => ({
      targetId: Math.floor(Math.random() * numberOfPlayer),
      remainingLife: NUMBER_OF_LIFE,
      resultArray: [],
    })),
}));
