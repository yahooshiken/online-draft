import { AppState } from "../../foundation/flux/store";

export const playerListSelectors = {
  getPlayerList: (state: AppState) => state.playerList.playerList,
};
