import actionCreatorFactory from "typescript-fsa";
const actionCreator = actionCreatorFactory();

interface fetchUserListResponse {
  _id: string;
  roomKey: string;
  name: string;
}

export const userListActions = {
  fetchUserListSuccess: actionCreator<fetchUserListResponse[]>(
    "ACTIONS_FETCH_USER_LIST_SUCCESS"
  ),
};
