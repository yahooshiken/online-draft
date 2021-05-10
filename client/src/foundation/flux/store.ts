import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import { socketIoMiddleware } from "./middlewares";

import { GameState } from "../../domains/game/game_reducer";
import { UserState } from "../../domains/user/user_reducers";
import { UserListState } from "../../domains/user_list/user_list_reducers";
import { PlayerListState } from "../../domains/player_list/player_list_reducers";

export type AppState = {
  game: GameState;
  user: UserState;
  userList: UserListState;
  playerList: PlayerListState;
};

const enhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    enhancers(applyMiddleware(socketIoMiddleware))
  );
  return store;
};
