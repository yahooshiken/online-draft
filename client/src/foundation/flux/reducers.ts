import { combineReducers } from "redux";

import { AppState } from "./store";
import { gameModeReducer } from "../../domains/game_mode/game_mode_reducer";
import { userReducer } from "../../domains/user/user_reducers";
import { userListReducer } from "../../domains/user_list/user_list_reducers";
import { playerListReducer } from "../../domains/player_list/player_list_reducers";

export const rootReducer = combineReducers<AppState>({
  gameMode: gameModeReducer,
  user: userReducer,
  userList: userListReducer,
  playerList: playerListReducer,
});
