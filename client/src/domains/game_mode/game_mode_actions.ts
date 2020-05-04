import actionCreatorFactory from "typescript-fsa";
import { GameMode } from "./types";
const actionCreator = actionCreatorFactory();

export const gameModeActions = {
  startGame: actionCreator<GameMode>("ACTIONS_START_GAME"),
};
