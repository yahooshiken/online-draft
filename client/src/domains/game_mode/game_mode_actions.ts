import actionCreatorFactory from "typescript-fsa";
const actionCreator = actionCreatorFactory();

export const gameModeActions = {
  startGameSuccess: actionCreator<void>("ACTIONS_START_GAME_SUCCESS"),
};
