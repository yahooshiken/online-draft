import { reducerWithInitialState } from "typescript-fsa-reducers";
import { userListActions } from "./user_list_actions";
import { userActions } from "../user/user_actions";

export type UserStatus = "selecting" | "selected" | "picked";

export interface UserModel {
  _id: string;
  roomKey: string;
  name: string;
  status: UserStatus;
  selectedPlayerId?: string;
}

export interface UserListState {
  userList: Array<UserModel>;
}

const initialState: UserListState = {
  userList: [],
};

export const userListReducer = reducerWithInitialState(initialState)
  .case(userListActions.fetchUserListSuccess, (state, userList) => ({
    ...state,
    userList,
  }))
  .case(userActions.changeStatusSuccess, (state, user) => ({
    ...state,
    userList: state.userList.map((u) => (u._id === user._id ? user : u)),
  }))
  .case(userActions.selectPlayerSuccess, (state, user) => ({
    ...state,
    userList: state.userList.map((u) => (u._id === user._id ? user : u)),
  }));
