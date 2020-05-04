import { AppState } from "../../foundation/flux/store";

export const userListSelectors = {
  getUserList: (state: AppState) => state.userList.userList,
};
