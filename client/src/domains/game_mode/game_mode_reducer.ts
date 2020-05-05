import { reducerWithInitialState } from "typescript-fsa-reducers";
import { gameModeActions } from "./game_mode_actions";
import { GameMode } from "./types";

export interface GameModeState {
  gameMode: GameMode;
}

const initialState: GameModeState = {
  gameMode: "before_start",
};

export const gameModeReducer = reducerWithInitialState(initialState)
  .case(gameModeActions.startGameSuccess, (state) => ({
    ...state,
    gameMode: "picking",
  }))
  .case(gameModeActions.transitionPickedSuccess, (state) => ({
    ...state,
    gameMode: "picked",
  }))
  .case(gameModeActions.transitionAnnouncingSuccess, (state) => ({
    ...state,
    gameMode: "announcing",
  }))
  .case(gameModeActions.transitionAnnouncedSuccess, (state) => ({
    ...state,
    gameMode: "announced",
  }));
