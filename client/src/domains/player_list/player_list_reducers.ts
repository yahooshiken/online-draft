import { reducerWithInitialState } from "typescript-fsa-reducers";
import { playerListActions } from "./player_list_actions";

export interface PlayerModel {
  _id: string;
  name: string;
  team: string;
  number: number;
}

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
