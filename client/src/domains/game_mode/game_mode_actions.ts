import actionCreatorFactory from "typescript-fsa";
import { GameMode } from "./types";
const actionCreator = actionCreatorFactory();

export const gameModeActions = {
  transitionGameModeSuccess: actionCreator<{ gameMode: GameMode }>(
    "ACTIONS_TRANSITION_GAME_MODE_SUCCESS"
  ),
};
