import { PlayerFullData } from '@/components/types';
import { create } from 'zustand';
import PlayerData from '@/data/data23to24.json';
import { getPlayerById } from '@/helper/getPlayerById';
import { getConferenceByTeam } from '@/helper/getConferenceByTeam';
import { scrollToElementWithSelector } from '@/helper/scrollToElementWithSelector';
import { createJSONStorage, persist } from 'zustand/middleware';

// Default constants
export const MIN_MINUTE = 10;
export const MIN_GAMES = 30;
export const NUMBER_OF_LIFE = 7;

interface GameState {
  targetPlayer: PlayerFullData | undefined;
  remainingLife: number;
  resultArray: PlayerFullData[];
  filteredPlayers: PlayerFullData[];
  isPlaying: boolean;
  isSuccess: boolean;
  setting: {
    min_games: number;
    min_minutes: number;
  };
  isConfRevealed: boolean;
  isTeamRevealed: boolean;
}

interface GameAction {
  startGame: () => void;
  resetGame: () => void;
  checkAnswer: (id: number) => void;
  giveUp: () => void;
  updateSetting: (min: number, games: number) => void;
  revealHint: () => void;
}

const InitialState = {
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
  isPlaying: false,
  isSuccess: false,
  isConfRevealed: false,
  isTeamRevealed: false,
};

export const useGameStore = create<GameState & GameAction>()(
  persist(
    (set, get) => ({
      ...InitialState,
      startGame: () => {
        const { filteredPlayers } = get();
        const randomIndex =
          Math.floor(Math.random() * filteredPlayers.length) - 1;
        const targetPlayerId = filteredPlayers[randomIndex].id;
        const targetPlayer = getPlayerById(targetPlayerId);
        set(() => ({
          targetPlayer,
          isPlaying: true,
        }));
      },
      resetGame: () =>
        set(() => ({
          targetPlayer: undefined,
          remainingLife: NUMBER_OF_LIFE,
          resultArray: [],
          isPlaying: false,
          isSuccess: false,
          isConfRevealed: false,
          isTeamRevealed: false,
        })),
      checkAnswer: (id: number) => {
        const { targetPlayer, isConfRevealed, isTeamRevealed } = get();
        const submittedPlayer = getPlayerById(id);

        if (!targetPlayer || !submittedPlayer) throw new Error();

        if (id === targetPlayer.id) {
          // CORRECT
          set((state) => ({
            isPlaying: false,
            isSuccess: true,
            remainingLife: state.remainingLife - 1,
            isConfRevealed: true,
            isTeamRevealed: true,
          }));
          scrollToElementWithSelector('html', { block: 'start' });
        } else {
          // WRONG
          const remainingLife = get().remainingLife;

          // Game Over
          if (remainingLife === 1) {
            set((state) => ({
              remainingLife: state.remainingLife - 1,
              resultArray: [...state.resultArray, submittedPlayer],
              isPlaying: false,
            }));

            scrollToElementWithSelector('html', { block: 'start' });

            // Continue
          } else {
            const teamRevealed =
              isTeamRevealed || targetPlayer.team === submittedPlayer.team;

            const confRevealed =
              isConfRevealed ||
              targetPlayer.conf === getConferenceByTeam(submittedPlayer.team);

            set((state) => ({
              remainingLife: state.remainingLife - 1,
              resultArray: [...state.resultArray, submittedPlayer],
              isTeamRevealed: teamRevealed,
              isConfRevealed: confRevealed,
            }));

            scrollToElementWithSelector('#answers', { block: 'end' });
          }
        }
      },
      updateSetting: (min, games) => {
        const filteredPlayers = (PlayerData as PlayerFullData[]).filter(
          (player) => player.games > games && player.stats.MIN > min,
        );
        set(() => ({
          setting: { min_games: games, min_minutes: min },
          filteredPlayers,
        }));
      },
      giveUp: () =>
        set(() => ({
          isPlaying: false,
          isConfRevealed: true,
          isTeamRevealed: true,
        })),
      revealHint: () => {
        set(() => ({
          isConfRevealed: true,
          isTeamRevealed: true,
        }));
      },
    }),
    {
      name: 'game-setting', // name of the item in the storage (must be unique)
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      partialize: (state) => ({ setting: state.setting }),
    },
  ),
);
