import actionCreatorFactory from "typescript-fsa";
const actionCreator = actionCreatorFactory();

export const gameModeActions = {
  startGameSuccess: actionCreator<void>("ACTIONS_START_GAME_SUCCESS"),
  transitionPickedSuccess: actionCreator<void>(
    "ACTIONS_TRANSITION_PICKED_SUCCESS"
  ),
  transitionAnnouncingSuccess: actionCreator<void>(
    "ACTIONS_TRANSITION_ANNOUNCING_SUCCESS"
  ),
};
