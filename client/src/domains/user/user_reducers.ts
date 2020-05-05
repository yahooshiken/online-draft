import { reducerWithInitialState } from "typescript-fsa-reducers";
import { userActions } from "./user_actions";
import { UserStatus } from "../user_list/user_list_reducers";

export interface UserState {
  _id: string;
  roomKey: string;
  name: string;
  status: UserStatus;
}

const initialState: UserState = {
  _id: "",
  roomKey: "",
  name: "",
  status: "selecting",
};

export const userReducer = reducerWithInitialState(initialState)
  .case(userActions.joinRoomSuccess, (state, user) => ({ ...state, ...user }))
  .case(userActions.changeStatus, (state, status) => ({ ...state, status }));
