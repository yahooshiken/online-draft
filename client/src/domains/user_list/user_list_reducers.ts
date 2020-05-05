import { reducerWithInitialState } from "typescript-fsa-reducers";
import { userListActions } from "./user_list_actions";

export type UserStatus = "selecting" | "selected" | "picked";

export interface UserModel {
  _id: string;
  roomKey: string;
  name: string;
  status: UserStatus;
}

export interface UserListState {
  userList: Array<UserModel>;
}

const initialState: UserListState = {
  userList: [],
};

export const userListReducer = reducerWithInitialState(initialState).case(
  userListActions.fetchUserListSuccess,
  (state, userList) => {
    return {
      ...state,
      userList,
    };
  }
);
