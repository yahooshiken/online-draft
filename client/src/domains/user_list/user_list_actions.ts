import actionCreatorFactory from "typescript-fsa";
import { UserStatus } from "./user_list_reducers";
const actionCreator = actionCreatorFactory();

interface fetchUserListResponse {
  _id: string;
  roomKey: string;
  name: string;
  status: UserStatus;
}

export const userListActions = {
  fetchUserListSuccess: actionCreator<fetchUserListResponse[]>(
    "ACTIONS_FETCH_USER_LIST_SUCCESS"
  ),
};
