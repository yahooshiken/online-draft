import { reducerWithInitialState } from "typescript-fsa-reducers";
import { gameActions } from "./game_actions";
import { GameMode } from "./types";

export interface GameState {
  gameMode: GameMode;
  turn: number;
  hasConflict: boolean;
}

const initialState: GameState = {
  gameMode: "before_start",
  turn: 1,
  hasConflict: false,
};

export const gameReducer = reducerWithInitialState(
  initialState
).case(gameActions.transitionGameModeSuccess, (state, { gameMode }) => ({
  ...state,
  gameMode,
}));
