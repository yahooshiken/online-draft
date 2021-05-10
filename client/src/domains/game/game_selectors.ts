import { AppState } from "../../foundation/flux/store";

export const gameSelectors = {
  getGameMode: (state: AppState) => state.game.gameMode,
  getTurn: (state: AppState) => state.game.turn,
};
