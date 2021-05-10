import { combineReducers } from "redux";

import { AppState } from "./store";
import { gameReducer } from "../../domains/game/game_reducer";
import { userReducer } from "../../domains/user/user_reducers";
import { userListReducer } from "../../domains/user_list/user_list_reducers";
import { playerListReducer } from "../../domains/player_list/player_list_reducers";

export const rootReducer = combineReducers<AppState>({
  game: gameReducer,
  user: userReducer,
  userList: userListReducer,
  playerList: playerListReducer,
});
