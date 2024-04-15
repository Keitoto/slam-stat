import { PlayerFullData } from '@/components/types';
import { create } from 'zustand';
import PlayerData from '@/data/data22to23.json';
import { getPlayerById } from '@/helper/getPlayerById';

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
  startGame: () => void;
  resetGame: () => void;
  checkAnswer: (id: number) => void;
}

const InitialState = {
  targetId: Math.floor(Math.random() * numberOfPlayer),
  remainingLife: NUMBER_OF_LIFE,
  resultArray: [],
};

export const useGameStore = create<GameState>()((set, get) => ({
  ...InitialState,
  targetId: undefined,
  startGame: () =>
    set(() => ({
      targetId: Math.floor(Math.random() * numberOfPlayer),
    })),
  resetGame: () =>
    set(() => ({
      targetId: undefined,
      remainingLife: NUMBER_OF_LIFE,
      resultArray: [],
    })),
  checkAnswer: (id: number) => {
    if (id === get().targetId) {
      // CORRECT
      console.log('correct');
      // TODO show WIN modal
    } else {
      // WRONG
      const submittedPlayer = getPlayerById(id);
      set((state) => ({
        remainingLife: state.remainingLife - 1,
        resultArray: [...state.resultArray, submittedPlayer],
      }));
    }
  },
}));
