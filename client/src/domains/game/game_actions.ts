import actionCreatorFactory from "typescript-fsa";
import { GameMode } from "./types";
const actionCreator = actionCreatorFactory();

export const gameActions = {
  transitionGameModeSuccess: actionCreator<{ gameMode: GameMode }>(
    "ACTIONS_TRANSITION_GAME_MODE_SUCCESS"
  ),
};
