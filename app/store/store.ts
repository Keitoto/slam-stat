import { PlayerFullData } from '@/components/types';
import { create } from 'zustand';
import PlayerData from '@/data/data22to23.json';
import { getPlayerById } from '@/helper/getPlayerById';

// Default constants
export const MIN_MINUTE = 10;
export const MIN_GAMES = 30;
export const NUMBER_OF_LIFE = 7;

interface GameState {
  targetPlayer: PlayerFullData | undefined;
  remainingLife: number;
  resultArray: PlayerFullData[];
  isResultOpen: boolean;
  filteredPlayers: PlayerFullData[];
  setting: {
    min_games: number;
    min_minutes: number;
  };
}

interface GameAction {
  startGame: () => void;
  resetGame: () => void;
  checkAnswer: (id: number) => void;
  closeResult: () => void;
  giveUp: () => void;
  updateSetting: (min: number, games: number) => void;
}

const InitialState = {
  // targetId: undefined,
  targetPlayer: undefined,
  remainingLife: NUMBER_OF_LIFE,
  resultArray: [],
  filteredPlayers: (PlayerData as PlayerFullData[]).filter(
    (player) => player.games > MIN_GAMES && player.stats.MIN > MIN_MINUTE,
  ),
  setting: {
    min_games: MIN_GAMES,
    min_minutes: MIN_MINUTE,
  },
  isResultOpen: false,
};

export const useGameStore = create<GameState & GameAction>()((set, get) => ({
  ...InitialState,
  startGame: () => {
    const { filteredPlayers } = useGameStore.getState();
    const targetPlayer =
      filteredPlayers[Math.floor(Math.random() * filteredPlayers.length) - 1];
    set(() => ({
      targetPlayer,
    }));
  },
  resetGame: () =>
    set(() => ({
      targetPlayer: undefined,
      remainingLife: NUMBER_OF_LIFE,
      resultArray: [],
      isResultOpen: false,
    })),
  checkAnswer: (id: number) => {
    const target = get().targetPlayer;

    if (!target) throw new Error();

    if (id === target.id) {
      // CORRECT
      set((state) => ({ isResultOpen: true }));
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
  closeResult: () => set((state) => ({ isResultOpen: false })),
  updateSetting: (min, games) => {
    const filteredPlayers = (PlayerData as PlayerFullData[]).filter(
      (player) => player.games > games && player.stats.MIN > min,
    );
    set(() => ({
      setting: { min_games: games, min_minutes: min },
      filteredPlayers,
    }));
  },
  giveUp: () => set((state) => ({ isResultOpen: true })),
}));
