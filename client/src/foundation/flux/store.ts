import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import { socketIoMiddleware } from "./middlewares";

import { GameModeState } from "../../domains/game_mode/game_mode_reducer";
import { UserState } from "../../domains/user/user_reducers";

export type AppState = {
  gameMode: GameModeState;
  user: UserState;
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