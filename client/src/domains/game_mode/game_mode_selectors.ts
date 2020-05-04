import { AppState } from "../../foundation/flux/store";

export const gameModeSelectors = {
  getGameMode: (state: AppState) => state.gameMode.gameMode,
};
