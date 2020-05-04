import { reducerWithInitialState } from "typescript-fsa-reducers";
import { gameModeActions } from "./game_mode_actions";
import { GameMode } from "./types";

export interface GameModeState {
  gameMode: GameMode;
}

const initialState: GameModeState = {
  gameMode: "before_start",
};

export const gameModeReducer = reducerWithInitialState(initialState).case(
  gameModeActions.startGame,
  (state) => ({
    ...state,
    gameMode: "picking",
  })
);
