import { reducerWithInitialState } from "typescript-fsa-reducers";
import { userActions } from "./user_actions";

export interface UserState {
  roomKey: string;
  name: string;
}

const initialState: UserState = {
  roomKey: "",
  name: "",
};

export const userReducer = reducerWithInitialState(initialState)
  .case(userActions.setRoomKey, (state, roomKey) => ({ ...state, roomKey }))
  .case(userActions.setName, (state, name) => ({ ...state, name }));
