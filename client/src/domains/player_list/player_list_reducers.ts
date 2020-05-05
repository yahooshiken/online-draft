import { reducerWithInitialState } from "typescript-fsa-reducers";
import { playerListActions } from "./player_list_actions";
import { PlayerModel } from "./player_list_models";

export interface PlayerListState {
  playerList: Array<PlayerModel>;
}

const initialState: PlayerListState = {
  playerList: [],
};

export const playerListReducer = reducerWithInitialState(initialState).case(
  playerListActions.fetchPlayerListSuccess,
  (state, playerList) => {
    return {
      ...state,
      playerList,
    };
  }
);
