import { combineReducers } from "redux";

import { AppState } from "./store";
import { gameModeReducer } from "../../domains/game_mode/game_mode_reducer";
import { userReducer } from "../../domains/user/user_reducers";

export const rootReducer = combineReducers<AppState>({
  gameMode: gameModeReducer,
  user: userReducer,
});